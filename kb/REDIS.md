# Resumen
- Redis (REmote DIctionary Server) es un almacén de datos en memoria que funciona como base de datos clave-valor, caché y broker de mensajes.
- Al vivir en RAM es extremadamente rápido (latencias de microsegundos a sub-milisegundo), ideal para cachear respuestas, sesiones, rankings y colas de trabajo.
- Es single-threaded en su núcleo de comandos, lo que evita bloqueos por concurrencia: cada operación es atómica.
- Persiste opcionalmente a disco (RDB snapshots y/o AOF), así que no es "solo volátil": puede sobrevivir reinicios.
- Desde 2024 el proyecto cambió de licencia (RSALv2/SSPLv1); en 2025 nació **Valkey**, un fork open source bajo la Linux Foundation que es drop-in compatible. En 2025 Redis volvió a ofrecer también la licencia AGPLv3. Para tu día a día, ambos hablan el mismo protocolo.

# Destacado
- **Modelo clave-valor con valores tipados**: la clave siempre es un string, pero el valor puede ser una de varias estructuras de datos. Aquí está la verdadera potencia de Redis.

- **Strings (keys simples)**: el tipo más básico. Guardan texto, números o binarios (hasta 512 MB). Sirven como contador atómico:
  ```
  SET visitas 0
  INCR visitas        # 1 (atómico, sin race conditions)
  SET sesion:abc "{...json...}" EX 3600
  ```

- **Lists (listas)**: secuencias ordenadas de strings, implementadas como linked lists. Push/pop por ambos extremos, perfectas para **colas (FIFO)** y **pilas (LIFO)**:
  ```
  RPUSH cola "tarea1"     # encolar al final
  LPOP cola               # desencolar del principio
  BLPOP cola 0            # versión bloqueante: espera hasta que haya algo
  ```

- **Hashes**: mapas de campo-valor dentro de una sola clave. Ideales para representar objetos/entidades:
  ```
  HSET user:42 nombre "Josue" rol "dev" pais "VE"
  HGET user:42 rol        # "dev"
  HGETALL user:42         # todos los campos
  ```

- **Sets (conjuntos)**: colecciones no ordenadas de strings únicos. Operaciones de conjunto en el servidor (unión, intersección, diferencia). Útiles para tags, "usuarios que dieron like", deduplicación:
  ```
  SADD likes:post1 user:42
  SISMEMBER likes:post1 user:42   # 1 (true) o 0 (false)
  SINTER likes:post1 likes:post2  # quién likeó ambos
  ```

- **Sorted Sets (ZSets)**: como los sets pero cada miembro tiene un *score* numérico que mantiene el orden. La base de **leaderboards/rankings**, colas de prioridad y "top N":
  ```
  ZADD ranking 100 "josue" 250 "ana"
  ZREVRANGE ranking 0 9 WITHSCORES   # top 10 por puntaje
  ```

- **TTL / expiración**: a cualquier clave se le puede poner tiempo de vida. Cuando expira, Redis la borra solo. Es el mecanismo central para caché y sesiones:
  ```
  EXPIRE sesion:abc 3600   # vive 1 hora
  TTL sesion:abc           # segundos restantes
  SET k v PX 500           # expira en 500 ms
  ```
  Con `maxmemory` + una política de evicción (p.ej. `allkeys-lru`) Redis puede comportarse como caché auto-gestionada que descarta lo menos usado.

- **Uso como caché**: el patrón clásico es *cache-aside*: pides el dato a Redis; si no está (miss), lo lees de la DB real, lo guardas en Redis con TTL y lo devuelves. Reduce drásticamente la carga sobre Postgres/Mongo.

- **Uso como cola / pub-sub / streams**:
  - Colas simples con `LPUSH`/`BRPOP`.
  - **Pub/Sub** para mensajería fire-and-forget (`PUBLISH` / `SUBSCRIBE`).
  - **Redis Streams** (`XADD`/`XREADGROUP`): log append-only con *consumer groups*, ACKs y reintentos — para colas serias tipo Kafka-lite.

- **Atomicidad y transacciones**: `MULTI`/`EXEC` agrupan comandos; los **scripts Lua** (`EVAL`) y las **funciones** ejecutan lógica del lado servidor de forma atómica. Útil para locks distribuidos y rate limiting.

- **Escalado y alta disponibilidad**: replicación primario-réplica, **Redis Sentinel** (failover automático) y **Redis Cluster** (sharding por slots de hash) para escalar horizontalmente.

- **Módulos / capacidades extra (2026)**: búsqueda y secondary indexing, JSON nativo, series temporales, probabilísticos (HyperLogLog, Bloom filters) y **vector search** para RAG/embeddings — Redis se usa cada vez más como vector store en apps de IA.

# Mis notas
- Aprendi que usar cache con Redis es necesario si o si cuando hay un tema de negocio de por medio: los clientes van a exigir velocidad. Casi nunca lo dicen con tecnicismos, lo dicen como usuarios — "veo la plataforma lenta" o "se cuelga" — y la respuesta de fondo suele ser cachear lo que mas se consulta para que la experiencia sea rapida.
- Los hashes en Redis son como los objetos en JavaScript: pares campo-valor. `HSET user:42 nombre "Josue" rol "dev"` es basicamente `{ nombre: "Josue", rol: "dev" }` guardado bajo la clave `user:42`.
- Aplicar cache con Redis mejora mucho el rendimiento y la latencia. En una prueba sobre Azure (Azure SQL DB + Azure Cache for Redis), poniendo Redis como cache delante de la base de datos:
  - **Throughput**: paso de **1.1K** a **10.2K** transacciones/seg (~**9X mas**).
  - **Latencia (p95)**: bajo de **3,145 ms** a **271 ms** (~**11X menos**).
  - Y ademas **reduciendo** la base de datos de **8 vCores a 2 vCores**: mas rendimiento, menos latencia y encima menos coste de DB.
- Redis tambien sirve como **message broker / colas** para comunicacion entre servicios, no solo como cache. La idea clave es **desacoplar** productores y consumidores: varios servicios publican mensajes (p. ej. chats de grupo, cotizaciones, notificaciones) en Redis, y otros los consumen y los reparten a distintos clientes (navegador, movil, app de escritorio). Redis queda en el centro como un *event bus*.
  - **Colas** con listas: `LPUSH` para encolar y `BRPOP`/`BLPOP` para consumir bloqueando hasta que llegue trabajo (un worker espera sin hacer polling).
  - **Pub/Sub** (`PUBLISH`/`SUBSCRIBE`): fan-out en tiempo real (un mensaje llega a todos los suscriptores), util para chats y notificaciones push.
  - **Streams** (`XADD`/`XREADGROUP`): colas "serias" con *consumer groups*, ACKs y reintentos cuando no me puedo permitir perder mensajes.
  - Conexion con mi mundo: es justo lo que hace **n8n en queue mode**, que usa Redis como broker entre el proceso main y los workers; y para mi bot de WhatsApp encaja igual (encolar recordatorios y que un worker los procese uno a uno).
- **Cache privado vs cache compartido** (por que conviene Redis): el cache *privado* vive en memoria DENTRO de cada instancia de la app. El problema aparece con varias instancias: cada una guarda su propio snapshot en un momento distinto — la instancia A cachea en el **tiempo X** y la B en el **tiempo Y** — y si la base de datos cambia entre X e Y, cada instancia sirve datos **distintos y desactualizados** (stale). La solucion es un **cache compartido/distribuido** como Redis (Azure Cache for Redis): una unica fuente de cache para todas las instancias, asi no se desincronizan.
  - Lo veo como el mismo problema de tener estado duplicado en varias pestañas del front: si cada una guarda su copia local, se desincronizan; mejor un store central. Redis es ese "store central" para el backend con varias instancias.
- **Como cachear datos de forma efectiva** (estrategias que aprendi):
  - **On load / on demand**: precargar el cache al arrancar (lo que ya se que voy a necesitar) o cachear bajo demanda la primera vez que se pide (cache-aside).
  - **Analisis de patrones de uso**: cachear lo que mas se consulta (p. ej. usuarios/datos frecuentes), no todo. Es el 20% de los datos que se pide el 80% de las veces.
  - **Datos inmutables o poco mutables**: lo que casi no cambia es el mejor candidato a cache (catalogos, configuracion, paises); lo que cambia cada segundo, no.
  - **Actualizacion en background**: refrescar el cache por detras (un cron/worker) en vez de que el usuario pague la espera del miss.
  - **Split dataset structure**: partir el dataset y cachear por trozos/claves en lugar de un blob gigante, para leer e invalidar solo lo que toca.
  - **Cache de computo**: no solo cachear datos crudos, tambien resultados de calculos/consultas caras (agregaciones, reportes) para no recalcular cada vez.
  - **Pruebas de rendimiento y escalabilidad**: medir (hit ratio, latencia, throughput) y probar carga para confirmar que el cache de verdad ayuda y escala.

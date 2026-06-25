# Resumen
- n8n es una plataforma de **automatizacion de flujos de trabajo** (workflow automation) open-source y *fair-code*, orientada a conectar APIs, servicios y bases de datos sin escribir todo el pegamento a mano.
- Visualmente es un editor de nodos (drag & drop) sobre un lienzo: cada nodo es un paso (leer un webhook, llamar una API, transformar datos, escribir en una DB), y las conexiones definen el flujo de los datos.
- Compite con Zapier/Make, pero con dos ventajas clave: es **self-hostable** (Docker, sin coste por ejecucion) y permite **bajar a codigo JavaScript/TypeScript** cuando un nodo visual no alcanza.
- Caso de uso tipico: orquestar integraciones, bots, ETLs ligeros, scraping, notificaciones y, cada vez mas, **flujos con IA/LLM** (agents, RAG, tool calling).

# Destacado

- **Nodos (nodes):** la unidad atomica. Los hay de tres familias principales:
  - *Trigger nodes*: arrancan el workflow (Webhook, Schedule/Cron, Manual, mensajes entrantes, polling de apps). Un workflow puede tener varios triggers.
  - *Action/App nodes*: integraciones con servicios (HTTP Request, Postgres, Google Sheets, Telegram, WhatsApp/WABA, etc.).
  - *Core/logic nodes*: control de flujo y datos: **IF**, **Switch**, **Merge**, **Loop Over Items (Split in Batches)**, **Set/Edit Fields**, **Filter**, **Wait**, **Code**.

- **Modelo de datos por items:** cada nodo recibe y emite un **array de items**, donde cada item es `{ json: {...}, binary: {...} }`. Esto es clave: n8n procesa **en lote** y por defecto ejecuta los nodos siguientes una vez por cada item.
  ```js
  // En un Code node:
  return items.map(item => ({
    json: { nombre: item.json.first_name.toUpperCase() }
  }));
  ```

- **Expresiones:** sintaxis `{{ ... }}` para inyectar datos dinamicos en cualquier campo. Por dentro es JavaScript con helpers propios:
  - `{{ $json.email }}` — el JSON del item actual.
  - `{{ $node["Webhook"].json.body.phone }}` — datos de un nodo anterior por nombre.
  - `{{ $now }}`, `{{ $today }}` — fechas (basadas en Luxon DateTime).
  - `{{ $env.MI_VAR }}`, `{{ $vars.foo }}`, `{{ $secrets.foo }}` — entorno, variables y secrets.
  - Helpers de items: `$items()`, `$input.all()`, `$input.first()`, `$itemIndex`.

- **Webhooks:** el nodo *Webhook* expone una URL HTTP (con version de test y de produccion) para recibir eventos externos. Soporta metodos, autenticacion (header/basic), y un nodo *Respond to Webhook* para devolver una respuesta personalizada (util para verificaciones tipo handshake de Meta/WABA).

- **Credenciales:** se gestionan aparte de los workflows, cifradas en disco/DB con una `N8N_ENCRYPTION_KEY`. Soportan OAuth2, API keys, basic auth, etc. Un nodo solo referencia la credencial; nunca se hardcodea el secreto en el flujo. Esto permite compartir/exportar workflows sin filtrar tokens.

- **Code node:** ejecuta JS (o Python via Pyodide) cuando lo visual no basta. Dos modos: *Run Once for All Items* (ves todo el array) o *Run Once for Each Item*. Acceso a librerias externas si habilitas `NODE_FUNCTION_ALLOW_EXTERNAL`.

- **Control de flujo y errores:**
  - **Error Workflow / Error Trigger:** workflow dedicado que se dispara cuando otro falla (para alertas, logging).
  - Por nodo: *Continue On Fail*, *Retry On Fail*, ramas de error (output de error separado).
  - Ejecuciones quedan registradas (executions list) con su input/output para depurar paso a paso.

- **Sub-workflows:** el nodo *Execute Workflow* permite modularizar (un workflow llama a otro), util para reutilizar logica comun.

- **IA / Agents (muy relevante a 2026):** n8n tiene un stack de nodos LangChain integrados: *AI Agent*, *Chat Trigger*, *Chat Model* (OpenAI, Anthropic Claude, etc.), *Memory*, *Vector Store* (RAG) y *Tools*. Permite montar agentes que usan otros workflows/nodos como herramientas.

- **Self-hosting:** se despliega facil con **Docker** (`docker-compose` con Postgres + n8n). Variables clave de entorno:
  - `N8N_HOST`, `N8N_PORT`, `WEBHOOK_URL` (critico: la URL publica que se inyecta en los nodos webhook).
  - `N8N_ENCRYPTION_KEY` (cifrado de credenciales — NO perderla).
  - `DB_TYPE=postgresdb` + credenciales (en prod, no usar SQLite).
  - `N8N_BASIC_AUTH_*` / mejor aun reverse proxy (Caddy/Traefik/Nginx) con HTTPS.
  - Modos de ejecucion: `main` (todo en un proceso) o **queue mode** con Redis + workers para escalar horizontalmente.

- **Licencia:** *Sustainable Use License* (fair-code), no es OSI puro. Uso interno y self-host gratis; hay restricciones para revender n8n como servicio. Existe n8n Cloud y Enterprise (SSO, RBAC, environments, versionado Git).

# Mis notas
-
-
-

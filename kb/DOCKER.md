# Resumen

- **Docker** es una plataforma para empaquetar una aplicacion junto a TODO lo que necesita para correr (codigo, runtime, librerias del sistema, dependencias) en una unidad portable llamada **contenedor**.
- Resuelve el clasico "en mi maquina funciona": el contenedor corre igual en tu laptop, en CI y en produccion porque lleva su propio entorno aislado.
- Es mas ligero que una maquina virtual: los contenedores comparten el kernel del host y solo aislan procesos, sistema de ficheros y red. Arrancan en milisegundos y pesan MB, no GB.

# Destacado

- **Imagen vs contenedor** (la distincion clave):
  - Una **imagen** es la plantilla inmutable de solo lectura (el "molde"). Es como una clase.
  - Un **contenedor** es una instancia en ejecucion de esa imagen, con una capa de escritura encima. Es como un objeto `new` de esa clase.
  - De una imagen levantas N contenedores identicos: `docker run nginx` puede correr 10 veces y son 10 contenedores aislados de la misma imagen.

- **Dockerfile**: receta declarativa para construir una imagen. Cada instruccion produce una capa.
  ```dockerfile
  FROM node:22-alpine        # imagen base
  WORKDIR /app
  COPY package*.json ./      # primero solo los manifests (cache!)
  RUN npm ci
  COPY . .                   # luego el codigo
  EXPOSE 3000
  CMD ["node", "server.js"]  # comando por defecto del contenedor
  ```

- **Capas (layers) y cache**: cada `RUN`, `COPY`, `ADD` crea una capa cacheada. Docker reusa las capas que no cambiaron.
  - **Regla de oro**: ordena de lo que menos cambia a lo que mas cambia. Por eso se copia `package.json` y se hace `npm ci` ANTES de copiar el codigo: asi un cambio en tu codigo no invalida la capa de `node_modules`.
  - Las capas se comparten entre imagenes (deduplicacion en disco). Usa `.dockerignore` (como `.gitignore`) para no meter `node_modules`, `.git`, etc.

- **Volumenes**: el filesystem de un contenedor es efimero (al borrarlo se pierde). Los **volumenes** persisten datos fuera del ciclo de vida del contenedor.
  - **Named volumes** (`docker volume create`, gestionados por Docker): ideales para datos de DB.
  - **Bind mounts** (`-v $(pwd):/app`): montan una carpeta del host en el contenedor; perfectos en desarrollo para hot-reload.

- **Redes**: por defecto los contenedores en una misma red bridge definida por el usuario se ven entre si **por nombre de servicio** (DNS interno). No usas IPs: el contenedor `api` alcanza a la DB en `postgres:5432`.

- **Docker Compose**: define multiples servicios, redes y volumenes en un `compose.yaml` declarativo y los levanta con `docker compose up`.
  ```yaml
  services:
    web:
      build: .
      ports: ["3000:3000"]   # host:contenedor
      depends_on: [db]
    db:
      image: postgres:17
      environment:
        POSTGRES_PASSWORD: secret
      volumes:
        - dbdata:/var/lib/postgresql/data
  volumes:
    dbdata:
  ```
  - Nota 2026: ya es `docker compose` (v2, plugin integrado, sin guion) y el fichero canonico es `compose.yaml` (la clave `version:` quedo obsoleta).

- **Multi-stage builds**: usas varias etapas `FROM` en un mismo Dockerfile para que la imagen final solo lleve el artefacto compilado, no las herramientas de build.
  ```dockerfile
  # Etapa 1: build (pesada, con todo el toolchain)
  FROM node:22 AS build
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci
  COPY . .
  RUN npm run build              # genera dist/

  # Etapa 2: runtime (minima)
  FROM nginx:alpine
  COPY --from=build /app/dist /usr/share/nginx/html
  ```
  - Resultado: imagen final de pocos MB, sin `node_modules` ni codigo fuente. Clave para servir una SPA de Angular en produccion.

- **Otros que conviene tener en el radar (2026)**:
  - **BuildKit** es el backend de build por defecto: builds en paralelo, cache montada (`RUN --mount=type=cache`), secretos en build sin filtrarlos a capas.
  - **Imagenes multi-arch** (amd64 + arm64) con `docker buildx`: relevante si desarrollas en Mac con Apple Silicon y despliegas en servidores x86.
  - **Tags y registries**: una imagen se identifica como `repo/nombre:tag`. Evita depender de `:latest` en produccion; fija versiones.
  - **OCI**: Docker sigue el estandar abierto OCI, asi que las imagenes que construyes corren tambien en containerd, Podman o Kubernetes.

# Mis notas
-
-
-

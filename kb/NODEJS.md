# Resumen

- Runtime de JavaScript del lado del servidor, construido sobre el motor **V8** de Chrome (el mismo que ejecuta JS en el navegador).
- Permite usar JavaScript fuera del navegador: APIs HTTP, CLIs, herramientas de build, scripts, workers, etc.
- Modelo **asíncrono, no bloqueante y orientado a eventos**: un solo hilo principal maneja miles de conexiones concurrentes sin un thread por petición.
- Trae consigo **npm**, el ecosistema de paquetes más grande del mundo, y es la base sobre la que corren Angular CLI, Vite, n8n y prácticamente todo el tooling web moderno.

# Destacado

- **Motor V8 + libuv**: V8 compila JS a código máquina (JIT). Lo que V8 no cubre (I/O de disco, red, timers) lo aporta **libuv**, la librería C que implementa el event loop y un thread pool para operaciones bloqueantes.
- **Event loop**: es el corazón de Node. El hilo principal ejecuta tu código de forma síncrona y delega la I/O; cuando esa I/O termina, los callbacks vuelven a la cola. Fases ordenadas: `timers` → `pending callbacks` → `poll` → `check` (`setImmediate`) → `close callbacks`.
  - Entre fases (y dentro de ellas) se vacían las **microtareas**: `process.nextTick()` primero, luego la cola de Promesas. Por eso un `await` siempre se resuelve antes que un `setTimeout(fn, 0)`.
- **Async no bloqueante**: la regla de oro es no bloquear el hilo principal. Un cálculo pesado síncrono congela TODO el servidor.
  - Tres generaciones de estilo async: callbacks `(err, data) =>` → Promesas → `async/await`. Hoy se usa `async/await` y los módulos `node:fs/promises`, `node:timers/promises`, etc.
  - Para CPU intensivo existen los **Worker Threads** (`node:worker_threads`), que sí corren en hilos paralelos reales.
- **Módulo de eventos (`EventEmitter`)**: patrón pub/sub nativo (`emitter.on('event', cb)` / `emitter.emit('event')`). Es la base de Streams, servidores HTTP, sockets... casi todo lo que "emite" en Node hereda de `EventEmitter`.
- **npm y el ecosistema**:
  - `package.json` describe el proyecto; `package-lock.json` fija el árbol exacto de dependencias.
  - Alternativas modernas con el mismo registro: **pnpm** (rápido, ahorra disco con enlaces duros) y **yarn**. `npx` ejecuta binarios sin instalarlos globalmente.
  - El protocolo `node:` (p. ej. `import fs from 'node:fs'`) deja explícito que importas un built-in y no un paquete de npm.
- **ESM vs CommonJS**:
  - **CommonJS** (clásico): `require()` / `module.exports`, carga síncrona, es el legado histórico de Node.
  - **ESM** (estándar): `import` / `export`, asíncrono, es el mismo sistema de módulos del navegador y de Angular/TypeScript.
  - Activas ESM con `"type": "module"` en `package.json` o con extensión `.mjs` (`.cjs` fuerza CommonJS).
  - En 2026 ESM es el camino por defecto; además Node ya permite `require()` de módulos ESM síncronos, suavizando la migración.
- **Streams**: procesan datos por trozos (chunks) en vez de cargar todo en memoria. Cuatro tipos: `Readable`, `Writable`, `Duplex`, `Transform`.
  - Encadenas con `.pipe()` o, mejor, con `pipeline()` (maneja errores y cierre). Manejan **backpressure** automáticamente: si el destino es lento, frenan la fuente.
  - Ideal para archivos grandes, respuestas HTTP, compresión (`zlib`), etc.
- **Estado del runtime en 2026**:
  - Soporta de serie `fetch`, `WebSocket`, `AbortController` y `structuredClone` globales (web-compatibles, sin instalar nada).
  - Test runner integrado (`node:test` + `node --test`) y `--watch` para recargar en caliente, restando necesidad de jest/nodemon en casos simples.
  - `.env` nativo con `node --env-file=.env`.
  - Convive con runtimes alternativos compatibles: **Deno** y **Bun**, pero Node sigue siendo el estándar de facto y el LTS de producción.

# Mis notas
-
-
-

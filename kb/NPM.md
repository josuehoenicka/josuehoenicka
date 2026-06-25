# Resumen

- **npm** (Node Package Manager) es el gestor de paquetes por defecto de Node.js: la CLI con la que instalas, actualizas, publicas y ejecutas dependencias de JavaScript/TypeScript.
- Tiene dos caras: la **herramienta de línea de comandos** (`npm install`, `npm run`, `npx`...) y el **registry** público (registry.npmjs.org), el mayor repositorio de software del mundo con millones de paquetes.
- Todo gira en torno a dos ficheros: **`package.json`** (manifiesto que describe tu proyecto, sus scripts y sus dependencias) y **`package-lock.json`** (foto exacta y reproducible del árbol instalado).
- Es la base sobre la que corren Angular CLI, Vite, n8n y prácticamente todo el tooling web moderno; viene incluido al instalar Node.

# Destacado

- **`package.json`**: el manifiesto del proyecto. Lo central de cada campo:
  - `name` y `version` (esta última en formato **semver** `MAYOR.MENOR.PARCHE`).
  - `scripts`: atajos de comandos. `npm run build` ejecuta lo que pongas en `"build"`. Hay nombres especiales que se invocan sin `run`: `npm start`, `npm test`. Existen hooks `pre`/`post` automáticos (`prebuild` corre antes de `build`).
  - `type`: `"module"` activa ESM (`import`/`export`); sin él, CommonJS (`require`).
  - `bin`: declara binarios que el paquete expone (lo que luego ejecuta `npx`).
  - `engines`: restringe versiones de Node/npm compatibles.

- **dependencies vs devDependencies** (la distinción que más se confunde):
  - **`dependencies`**: lo que tu código necesita *en runtime/producción* (Angular, RxJS, axios...). `npm install paquete`.
  - **`devDependencies`**: solo para *desarrollar/buildear/testear* y que NO se envía a producción (TypeScript, ESLint, Karma, tipos `@types/*`...). `npm install -D paquete` o `--save-dev`.
  - `peerDependencies`: "necesito que *tú* (el proyecto que me usa) traigas esta versión de X" — típico en plugins y librerías de Angular.
  - `optionalDependencies`: si fallan al instalar, no rompen el install.

- **semver y los rangos `^` `~`** (clave para no llevarte sorpresas):
  - `^1.2.3` → permite actualizaciones que **no cambian el MAYOR**: acepta `1.x.x` hasta `<2.0.0`. Es el default de `npm install`.
  - `~1.2.3` → solo cambios de **PARCHE**: acepta `1.2.x` hasta `<1.3.0`. Más conservador.
  - `1.2.3` exacto, `*`/`latest` cualquiera, `>=`, `||` y rangos combinados también valen.
  - Regla mental: antes de `1.0.0` (`0.x`) la API se considera inestable y `^0.2.3` se comporta casi como `~`.

- **`package-lock.json`**: el héroe silencioso de la reproducibilidad.
  - Mientras `package.json` dice *rangos* (`^1.2.3`), el lockfile fija la **versión exacta** resuelta de cada dependencia y subdependencia, más su integridad (hash) y origen.
  - **`npm install`** respeta el lock pero puede modificarlo; **`npm ci`** instala *exactamente* lo del lock, borra `node_modules` y falla si no coincide con `package.json`. `npm ci` es lo que debes usar en CI/CD y Docker.
  - Se commitea siempre. No editarlo a mano.

- **`npx`**: ejecuta binarios de paquetes sin instalarlos globalmente. `npx ng new app`, `npx create-react-app`, `npx http-server`.
  - Busca el binario en `node_modules/.bin` local; si no está, lo descarga temporalmente y lo corre. Evita ensuciar el sistema con instalaciones globales.

- **El registry y el ecosistema**:
  - Por defecto apunta a `registry.npmjs.org`, pero puedes cambiarlo (registros privados, mirrors corporativos, GitHub Packages) vía `.npmrc` o `--registry`.
  - **`scopes`**: paquetes namespaced tipo `@angular/core`, `@anthropic-ai/sdk`. Útiles para organizaciones y paquetes privados.
  - Publicas con `npm publish`; versionas con `npm version patch|minor|major` (crea commit + tag git).

- **Comandos del día a día**:
  - `npm i` (instala todo lo del `package.json`), `npm i paquete`, `npm i -D paquete`, `npm i -g paquete` (global).
  - `npm update`, `npm outdated` (qué tiene versión nueva), `npm uninstall`.
  - `npm audit` / `npm audit fix`: detecta y parchea vulnerabilidades conocidas en el árbol de dependencias.
  - `npm ls` muestra el árbol; `npm run` sin args lista los scripts disponibles.
  - **workspaces**: monorepos nativos (`"workspaces": ["packages/*"]`) sin herramientas externas.

- **Seguridad y cosas a vigilar (2026)**:
  - `node_modules` puede pesar muchísimo (el chiste del "agujero negro más denso del universo"); nunca se commitea (va en `.gitignore`).
  - Riesgos reales: typosquatting, paquetes maliciosos y ataques a la cadena de suministro. `npm audit`, lockfile commiteado y `npm ci` reproducible son tu defensa básica.
  - Soporta **provenance** (atestación de origen del build) para verificar que un paquete publicado viene de donde dice.

- **Alternativas (mismo registry, distinta CLI)**:
  - **pnpm**: usa un *store* global con enlaces duros, así que no duplica paquetes en disco entre proyectos. Rápido y estricto con dependencias fantasma. Muy popular en monorepos.
  - **yarn**: pionero del lockfile y de los workspaces; sus versiones modernas (Berry/PnP) prescinden incluso de `node_modules`.
  - **Bun** trae su propio gestor (`bun install`) ultrarrápido.
  - Todas leen el mismo `package.json` y bajan del mismo registry; cambia el lockfile (`pnpm-lock.yaml`, `yarn.lock`) y la velocidad.

# Mis notas
-
-
-

# Resumen

- **VS Code** (Visual Studio Code) es el editor de codigo gratuito y open source de Microsoft: ligero como un editor pero con musculo de IDE (debugging, refactors, Git, terminal) gracias a su sistema de **extensiones**.
- Esta construido sobre **Electron** (Chromium + Node.js), asi que por dentro es una app web: la UI es HTML/CSS/TS y las extensiones se escriben en JavaScript/TypeScript. Por eso "se siente" tan natural si vienes del mundo web.
- Es el editor estandar de facto en 2026 y la **base de casi todo el tooling de IA** (Cursor, Windsurf y el propio GitHub Copilot/Copilot Chat viven encima de VS Code o de su fork).

# Destacado

- **Arquitectura Electron + extensiones**: el core es minimo a proposito. Casi todo (soporte de lenguajes, linters, formatters, debuggers) llega como extension desde el **Marketplace**. Las extensiones corren en un **Extension Host** (un proceso Node separado) para que una extension lenta no congele la UI.
  - El motor de IntelliSense, ir-a-definicion, rename, etc. lo da el **LSP (Language Server Protocol)**, un estandar que Microsoft saco precisamente con VS Code: el editor habla por JSON-RPC con un "servidor de lenguaje" externo. Por eso el mismo motor de TypeScript sirve autocompletado en VS Code, en Neovim o donde sea.

- **Configuracion como datos (`settings.json`)**: todo ajuste es una clave en un JSON, no clicks perdidos en un menu.
  - Hay capas: **User settings** (globales, en tu home) y **Workspace settings** (`.vscode/settings.json` versionable en el repo). El workspace pisa al user.
  - Ejemplo tipico para un proyecto Angular/TS:
    ```jsonc
    {
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.codeActionsOnSave": { "source.organizeImports": "explicit" },
      "files.eol": "\n",
      "typescript.tsdk": "node_modules/typescript/lib" // usa el TS del proyecto, no el del editor
    }
    ```
  - Versionar `.vscode/settings.json` + `.vscode/extensions.json` (recomendaciones) hace que todo el equipo arranque con el mismo formateo y herramientas.

- **Integracion Git nativa (Source Control)**: stage/unstage por archivo o por lineas (hunks), diffs lado a lado, commit, push/pull y resolucion de merges desde la barra lateral. El **gutter** muestra lineas añadidas/modificadas/borradas en tiempo real. La extension **GitLens** lo sube de nivel (blame inline, historial de linea, comparar ramas).

- **Debugging integrado**: breakpoints, watch, call stack, inspeccion de variables y consola de depuracion, todo dentro del editor via **DAP (Debug Adapter Protocol)**, el primo del LSP pero para debuggers.
  - Se configura en `.vscode/launch.json`. Para web/Angular el flujo tipico es lanzar Chrome y debuggear el TS directamente con **source maps** (pones el breakpoint en el `.ts`, no en el JS transpilado).
  - **Breakpoints condicionales**, logpoints (loggear sin ensuciar el codigo con `console.log`) y "skip files" para no entrar en `node_modules`.

- **Terminal integrada**: una o varias shells (zsh, bash, PowerShell) dentro del editor, con split, perfiles y deteccion de links/errores clicables. Evita saltar a otra ventana para `ng serve`, `npm run`, `git` o `docker compose up`.

- **Command Palette y atajos** (lo que de verdad acelera):
  - `Cmd/Ctrl+Shift+P` -> **Command Palette**: ejecutar cualquier comando por nombre (todo en VS Code es un comando).
  - `Cmd/Ctrl+P` -> abrir archivo por nombre (fuzzy). `Cmd/Ctrl+P` y escribir `>` es la palette, `@` salta a simbolos del archivo, `#` a simbolos del workspace.
  - `Cmd/Ctrl+D` (multicursor en la siguiente coincidencia), `Alt+Click` (cursores arbitrarios), `Cmd/Ctrl+Shift+L` (seleccionar todas las ocurrencias).
  - `F2` rename simbolico (renombra en todo el proyecto via LSP, no es un find&replace tonto), `F12` ir a definicion, `Shift+F12` ver referencias.
  - Atajos configurables en `keybindings.json`.

- **Remote Development** (una de sus features mas potentes): el editor corre en local pero el "Extension Host" y el codigo viven en otra maquina, de forma transparente.
  - **Remote - SSH**: editar en un servidor remoto como si fuera local.
  - **WSL**: trabajar contra el subsistema Linux de Windows sin friccion de rutas/permisos.
  - **Dev Containers**: el entorno de desarrollo definido en un `devcontainer.json` + Docker. Abres el repo "dentro" de un contenedor con Node, deps y extensiones ya fijadas -> reproducibilidad total (adios al "en mi maquina funciona").
  - **GitHub Codespaces** es esto mismo pero en la nube.

- **Ecosistema de IA (2026)**: VS Code es hoy la plataforma sobre la que se monta casi todo el tooling de IA.
  - **GitHub Copilot / Copilot Chat** integrados, con modo **agente** (edita varios archivos, corre comandos, itera sobre errores). Soporte de **MCP (Model Context Protocol)** para conectar herramientas/datos externos al asistente.
  - Forks especializados como **Cursor** y **Windsurf** parten del codigo de VS Code, por eso heredan los atajos, extensiones y el `settings.json`.

- **Otros del dia a dia**: snippets (propios o por extension), Zen mode, Settings Sync (sincroniza ajustes/extensiones/atajos via tu cuenta GitHub/Microsoft entre maquinas), workspaces multi-root, profiles (perfiles distintos: uno para web, otro para Python, etc.) y `.editorconfig` respetado por extension.

# Mis notas
-
-
-

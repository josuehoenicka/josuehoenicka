# Resumen
- **Codex** es el agente de programación de OpenAI: un asistente que no solo sugiere código, sino que lee tu repo, edita ficheros, ejecuta comandos y corre tests por ti dentro de un bucle agéntico.
- Vive en varias superficies: **CLI** (`codex` en la terminal), **extensión de IDE** (VS Code y derivados), integración en la **web/nube** y revisión automática de **pull requests** en GitHub.
- Su competidor directo es **Claude Code** (Anthropic); compite también con Cursor, GitHub Copilot (modo agente) y Gemini CLI. La idea es la misma en todos: darle una tarea en lenguaje natural y que la ejecute end-to-end sobre tu código.
- Corre sobre modelos de la familia GPT-5 optimizados para coding (los "codex"/`gpt-5-codex`), pensados para razonar largo, usar herramientas y trabajar de forma autónoma.

# Destacado
- **Es un agente, no un autocompletado.** A diferencia del Copilot clásico (que completa la línea), Codex opera un ciclo *leer → planear → editar → ejecutar → verificar*: abre archivos, aplica diffs, lanza el linter/tests, lee la salida y corrige. Tú apruebas (o no) sus acciones.

- **Superficies principales (2026):**
  - **Codex CLI**: binario de terminal, open source. Lo lanzas en la raíz del proyecto y conversas con él ahí mismo. Es el equivalente directo a `claude` de Claude Code.
  - **Extensión de IDE**: integra el mismo agente dentro de VS Code, con contexto del archivo abierto y diffs revisables en el editor.
  - **Codex en la nube / web**: delega tareas a un entorno aislado en sandbox que clona tu repo, trabaja en paralelo y te devuelve un PR. Bueno para tareas largas mientras sigues con otra cosa.
  - **Code review en GitHub**: puedes pedirle que revise PRs y deje comentarios.

- **Modos de aprobación / autonomía.** Configuras cuánta correa le das:
  - *Suggest / read-only*: propone cambios, tú confirmas cada escritura y cada comando.
  - *Auto-edit*: edita ficheros solo, pero pide permiso para comandos.
  - *Full-auto / agentic*: edita y ejecuta dentro de un **sandbox** con red restringida, sin pararte en cada paso. Clave para no aprobar 40 veces seguidas, pero hay que entender el aislamiento antes de soltarlo.

- **Contexto del proyecto vía `AGENTS.md`.** Es el fichero de instrucciones que el agente lee para saber convenciones, comandos de build/test, estilo y "qué no tocar". Es el análogo de `CLAUDE.md` en Claude Code; de hecho `AGENTS.md` se ha vuelto un estándar de facto que varios agentes respetan.

- **Herramientas y MCP.** Codex usa herramientas (ejecutar shell, leer/escribir ficheros, buscar) y soporta **MCP (Model Context Protocol)** para conectarse a fuentes externas: bases de datos, APIs, documentación, tu issue tracker. Esto es lo que le da "manos" más allá del repo local.

- **Sandbox y seguridad.** En full-auto, los comandos corren en un entorno aislado (en local con restricciones del SO; en la nube en un contenedor efímero) con acceso de red limitado por defecto. Es la diferencia entre "que toque solo mi rama en un contenedor" y "que ejecute lo que quiera en mi máquina".

- **Flujo típico en CLI:**
  ```bash
  npm i -g @openai/codex     # o brew install codex
  cd mi-proyecto-angular
  codex                      # abre la sesión interactiva
  # luego, en lenguaje natural:
  # "añade un guard de auth a la ruta /admin y un test que lo cubra"
  ```
  También admite uso no interactivo (un prompt y a correr) para meterlo en scripts o CI.

- **Codex vs Claude Code (comparación honesta):**
  - **Modelo**: Codex = GPT-5/`gpt-5-codex` de OpenAI; Claude Code = familia Claude (Sonnet/Opus) de Anthropic. La calidad depende mucho de la tarea y va cambiando versión a versión.
  - **Filosofía**: muy parecida — terminal-first, agente que edita y ejecuta, fichero de instrucciones del repo, modos de aprobación, sandbox, MCP, hooks/extensibilidad. Si dominas uno, el otro se siente familiar.
  - **Config del repo**: `AGENTS.md` (Codex) vs `CLAUDE.md` (Claude Code). Conceptualmente lo mismo.
  - **Ecosistema**: Codex tira de la cuenta/planes de ChatGPT y del stack OpenAI; Claude Code del de Anthropic. La elección suele ir más por qué modelo te rinde mejor y qué suscripción ya pagas que por features.

- **No confundir** el Codex actual (agente, 2025-2026) con el viejo **OpenAI Codex** que potenciaba Copilot allá por 2021 y que se descontinuó. El nombre se reutilizó para esta nueva generación de agentes.

# Mis notas
-
-
-

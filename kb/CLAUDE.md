# Resumen

- **Claude** es la familia de modelos de IA (LLMs) de **Anthropic**, orientada a razonamiento, trabajo agéntico de largo horizonte, código y uso de herramientas.
- Como dev lo usas de tres formas: **Claude Code** (CLI/agente en la terminal), la **API** (`/v1/messages`, vía SDKs oficiales) y los clientes de chat.
- Sus diferenciales: **contexto largo** (hasta 1M de tokens), **tool use** (function calling), **thinking** (razonamiento explícito) y un fuerte enfoque en agentes que ejecutan tareas reales.

# Destacado

- **Familia de modelos (2026).** Se elige por la dupla inteligencia/coste, igual que eliges entre una build de prod y una de dev:
  - **Opus** — el más capaz e "inteligente" (Opus 4.8 es el actual). Para tareas duras: refactors grandes, agentes autónomos, código complejo.
  - **Sonnet** — el equilibrio velocidad/inteligencia (Sonnet 4.6). El "caballo de batalla" para la mayoría de apps.
  - **Haiku** — el más rápido y barato (Haiku 4.5). Clasificación, extracción, respuestas cortas.
  - **Fable 5** — el modelo más capaz de todos, por encima del tier Opus en precio. Solo cuando lo pides explícitamente.
  - Los IDs son strings exactos: `claude-opus-4-8`, `claude-sonnet-4-6`, `claude-haiku-4-5`. **No** se les añade sufijo de fecha.

- **Claude Code.** Agente de terminal pensado para devs: lee/escribe ficheros, corre comandos, navega el repo, abre PRs. Es el producto que probablemente más usas tú trabajando con Angular/n8n. Soporta *skills* (capacidades especializadas) y *MCP* (servidores de herramientas externas).

- **La API gira toda en torno a un solo endpoint: `POST /v1/messages`.** Tool use, structured outputs y server-side tools son *features* de esa misma llamada, no APIs separadas. Hay SDKs oficiales (TypeScript/JS, Python, etc.). En tu mundo, el de TS/JS:
  ```ts
  import Anthropic from "@anthropic-ai/sdk";
  const client = new Anthropic(); // lee ANTHROPIC_API_KEY del entorno

  const res = await client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 16000,
    messages: [{ role: "user", content: "Hola Claude" }],
  });
  // res.content es un array de bloques (discriminated union): hay que
  // estrechar por block.type === "text" antes de leer block.text
  ```

- **Tool use (function calling).** Defines herramientas con un JSON Schema; Claude decide cuándo llamarlas, tú las ejecutas y devuelves el resultado. El SDK trae un *tool runner* que maneja el bucle agéntico por ti (en TS, `betaZodTool` + Zod). También hay herramientas server-side que corren en infraestructura de Anthropic: búsqueda web, fetch de URLs, ejecución de código en sandbox.

- **Thinking + effort (razonamiento).** En los modelos actuales el "presupuesto de tokens de pensamiento" quedó obsoleto: ahora se usa `thinking: { type: "adaptive" }` (el modelo decide cuánto razonar) y `output_config: { effort: "low" | "medium" | "high" | "xhigh" | "max" }` para regular profundidad/coste. Para agentes y código, `high`/`xhigh` suele ser el punto dulce.

- **Contexto largo + prompt caching.** Ventana de hasta 1M de tokens en los modelos top. El *prompt caching* es un **prefix match**: cachea el prefijo estable del prompt y se invalida si cambia un solo byte antes del breakpoint. Por eso conviene poner lo estable primero (system prompt, herramientas) y lo volátil (timestamps, IDs) al final.

- **Streaming.** Para outputs largos o `max_tokens` grandes, conviene usar `client.messages.stream(...)` y `stream.finalMessage()` para evitar timeouts HTTP del SDK.

- **Structured outputs.** Puedes forzar que la respuesta cumpla un JSON Schema con `output_config.format` (en TS, `zodOutputFormat` + `client.messages.parse()`), útil para extracción fiable sin parsear texto a mano.

# Mis notas
-
-
-

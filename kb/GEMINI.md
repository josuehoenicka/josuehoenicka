# Resumen
- **Gemini** es la familia de modelos de IA generativa de **Google DeepMind**: LLMs **multimodales nativos** que entienden y generan texto, codigo, imagenes, audio y video desde una misma arquitectura (no es texto + modulos pegados, nacen multimodales).
- Es el sucesor de PaLM/Bard y el cerebro detras de **Gemini App** (el antiguo Bard), **AI Overviews** en Search, **Gemini en Workspace** (Gmail, Docs, Sheets) y **Android/Pixel**.
- Para devs se consume principalmente por la **Gemini API** (via **Google AI Studio** para prototipar rapido, o **Vertex AI** para entornos enterprise en GCP), con SDKs oficiales en **JS/TS, Python, Go** y endpoint REST.
- Sus dos senas de identidad frente a la competencia: **contexto larguisimo** (cientos de miles hasta millones de tokens) y **multimodalidad de primera clase** (le pasas un video o un PDF entero como input sin tubería extra).

# Destacado

- **Familia de modelos (gama 2.x, vigente a 2026):** se elige por compromiso coste/latencia/capacidad, igual que tallas de un producto:
  - **Gemini Pro** — el modelo "razonador" tope de gama, para tareas complejas, codigo, razonamiento multi-paso y agentes.
  - **Gemini Flash** — equilibrio coste/velocidad, el caballo de batalla para producción (chatbots, RAG, clasificación a volumen).
  - **Gemini Flash-Lite / Nano** — ultra baratos/ligeros; **Nano** corre **on-device** (en el propio Pixel/Android, sin red).
  - Convencion de nombres con version (`gemini-2.x-flash`, `gemini-2.x-pro`); conviene **fijar la version** en producción y no usar alias flotantes que pueden cambiar bajo tus pies.

- **Multimodalidad nativa:** una sola llamada acepta `parts` heterogeneas (texto + imagen + audio + video + PDF). Resuelve casos como "describe este screenshot", "extrae los datos de esta factura en PDF" o "resume este video" sin OCR ni pipelines aparte.

- **Contexto largo (long context):** ventanas de **cientos de miles a 1M+ de tokens**. Cambia el patrón mental: en vez de trocear y montar RAG para todo, a veces **metes el documento entero (o varios) en el prompt**. Brilla en "necesito en aguja en un pajar" sobre corpus grandes.

- **Razonamiento / thinking:** los modelos recientes exponen un modo de **razonamiento** (presupuesto de "thinking tokens") que puedes subir para problemas duros o bajar/apagar para respuestas rapidas y baratas. Es un dial de calidad-vs-coste, no un on/off binario.

- **Funciones para devs (las que importan):**
  - **Function calling / tools:** declaras funciones con su schema y el modelo decide cuando llamarlas y con que argumentos (JSON). Base para agentes y para conectar el LLM a tu backend.
  - **Structured output:** fuerzas la respuesta a un **JSON Schema** concreto -> parseable y tipable, sin "extrae el JSON del texto a mano".
  - **Grounding with Google Search:** ancla respuestas en resultados de busqueda en vivo (reduce alucinaciones, añade citas/frescura).
  - **Context caching:** cacheas un prefijo grande de contexto (ej. un manual de 200k tokens) y lo reutilizas en muchas llamadas pagando mucho menos -> clave para coste en apps con contexto fijo repetido.
  - **Embeddings:** modelos `text-embedding` propios para busqueda semantica / RAG.
  - **Live API:** sesiones **bidi en streaming** (voz/video en tiempo real, baja latencia) para asistentes conversacionales hablados.
  - **Imagen / Veo:** generacion de **imagen** (Imagen) y **video** (Veo) accesibles por la misma plataforma.

- **SDK en JS/TS (`@google/genai`):** el SDK unificado moderno (sustituye al viejo `@google/generative-ai`). Funciona contra Gemini API y Vertex AI con el mismo codigo. Patrón tipico:
  ```js
  import { GoogleGenAI } from "@google/genai";
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const res = await ai.models.generateContent({
    model: "gemini-2.x-flash",
    contents: "Resume este texto en 3 bullets...",
  });
  console.log(res.text);
  // streaming: ai.models.generateContentStream({...}) -> for await (chunk of stream)
  ```

- **Gemini CLI:** agente de IA **open-source para la terminal** (Apache 2.0). Es el equivalente "Google" a otras CLI de coding agents: lee/edita tu repo, ejecuta comandos, usa herramientas y **soporta MCP** (Model Context Protocol) para conectar servidores externos. Tier gratuito generoso al loguear con cuenta Google; es a la vez producto y referencia de como montar un agente sobre la Gemini API.

- **Gemini Code Assist:** la integracion en **VS Code / JetBrains** (autocompletado, chat, transformaciones de codigo) y en Android Studio. Mas el modelo **"Jules"**, un agente asincrono que toma una tarea/issue y abre PRs.

- **Acceso enterprise (Vertex AI):** misma familia de modelos pero con la gobernanza de GCP: IAM, VPC, residencia de datos, MLOps, y garantias de que **tus datos no se usan para entrenar**. Para producción seria en Google Cloud es la vía; AI Studio + Gemini API es la vía rapida para prototipar y proyectos indie.

- **Pricing (mental model):** por **tokens de input y de output** (output mas caro), con tarifas mas bajas para Flash que para Pro, descuentos por **context caching** y por **batch**. AI Studio ofrece free tier para empezar.

# Mis notas
-
-
-

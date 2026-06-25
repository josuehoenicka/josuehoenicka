# Resumen
- **Antigravity** es la **plataforma de desarrollo agéntica de Google** (anunciada en noviembre de 2025, junto a Gemini 3). No es solo un editor con IA: es un **IDE agent-first**, pensado para que **delegues tareas completas** a uno o varios agentes que planean, editan, ejecutan comandos y verifican por ti.
- Es un **fork de VS Code** (mantiene extensiones y atajos), pero le suma una capa propia: una vista **Manager** para orquestar agentes y darles acceso directo al **editor, la terminal y un navegador**.
- El "cerebro" por defecto es **Gemini 3 Pro** (con un Flash más rápido para tareas ágiles), pero ofrece **model optionality**: también puedes usar modelos de **Anthropic (Claude)** y open-source de OpenAI (GPT-OSS).
- Su competencia directa es **Cursor, Windsurf (Codeium), Claude Code, Codex y Copilot**. La apuesta diferencial de Google: subir el nivel de abstracción de "autocompletar líneas" a "**gestionar agentes que hacen la tarea entera**".

# Destacado

- **Dos superficies, dos modos de trabajar.** Es la clave del producto y su mayor diferencia frente a un IDE clásico:
  - **Editor View** — el VS Code de toda la vida con IA encima: tab completion, comandos inline, chat. Flujo **síncrono**, tú al volante.
  - **Manager / Agent Manager** — un panel de control para **lanzar, orquestar y observar varios agentes en paralelo** (hasta ~5) trabajando de forma **asíncrona** sobre distintos workspaces. Disparas 5 tareas, te vas, y vuelves cuando cada una termina.

- **Agentes con manos: editor + terminal + navegador.** A los agentes se les da acceso directo a las tres superficies. Lo más distintivo es el **control de navegador**: instala una **extensión de Chrome** y el agente puede **abrir una ventana, scrollear, escribir, hacer clic e inspeccionar la consola** de forma autónoma. Eso le permite **reproducir un bug, probar la UI y verificar su propio fix** en el browser real, no solo en código.

- **Artifacts (artefactos) — transparencia y confianza.** En vez de soltar un diff opaco, el agente genera **entregables tangibles**: listas de tareas, **planes de implementación**, screenshots, **grabaciones del navegador**. Puedes **dejar feedback directamente sobre el Artifact** y el agente lo incorpora **sin detener su ejecución**. Es la respuesta de Google al problema de "¿qué demonios está haciendo el agente?".

- **Knowledge base / aprendizaje persistente.** Los agentes **no empiezan de cero** cada vez que abres el IDE. Acumulan contexto, snippets y **procedimientos de setup reutilizables** en una base de conocimiento que vive en el Manager y se reusa entre tareas. El "aprender" es un primitivo de primera clase, no un añadido.

- **Model optionality.** No te casa con Gemini: el agente corre por defecto con **Gemini 3 Pro** (razonamiento/código) o **Gemini Flash** (rápido y barato), pero puedes cambiar a **Claude (Sonnet/Opus)** o **GPT-OSS** según la tarea. Útil porque la calidad del modelo varía por tarea y por versión.

- **Disponibilidad y precio.** Salió en **public preview gratis para individuos**, multiplataforma (**macOS, Windows, Linux**), con rate limits generosos sobre Gemini 3 Pro. La barrera de entrada para probarlo es básicamente cero.

- **Antigravity 2.0 (mayo 2026).** Pegó un salto de "IDE" a **plataforma agéntica completa**:
  - **App de escritorio** rediseñada con la **orquestación multi-agente al centro**.
  - **CLI** nuevo **escrito en Go** (más rápido que el anterior) — el agente fuera del IDE, en terminal/scripts.
  - **SDK** para **construir tus propios agentes** sobre la infraestructura de coding de Google.
  - **Comandos por voz** nativos (hablarle al agente en vez de teclear).
  - Modelo **Gemini 3.5 Flash**, que mejora en benchmarks de coding/agénticos corriendo varias veces más rápido.

- **Linaje técnico (matiz honesto).** Es un **fork de VS Code**, pero hay debate sobre si lo es directamente o vía **Windsurf** (el IDE de **Codeium**, que a su vez es fork de VS Code). En la práctica: si vienes de VS Code, **tus extensiones y atajos siguen funcionando**, y encima tienes la capa de agentes.

- **Dónde encaja vs. la competencia (visión honesta):**
  - Mismo ADN que **Cursor / Windsurf**: IDE basado en VS Code + agentes. Antigravity empuja más fuerte el **multi-agente en paralelo** y el **control de navegador con artefactos verificables**.
  - Frente a **Claude Code / Codex** (terminal-first), Antigravity es **IDE-first** con GUI rica de orquestación — aunque con 2.0 también tiene su CLI. El modelo mental converge: agente que edita, ejecuta y verifica.

# Mis notas
-
-
-

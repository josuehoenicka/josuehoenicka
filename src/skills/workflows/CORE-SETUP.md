# 🫀 Core — Setup e Integración

## Arquitectura

```
Persona1 (WhatsApp) → 🧠 Agent WABA (544) → 🫀 Core (subflow)
                                                  ├─ Transcribe audio (Google STT)
                                                  ├─ Extrae datos (Gemini 2.0 Flash)
                                                  ├─ Confirma a Persona1
                                                  ├─ Espera hasta fecha/hora
                                                  ├─ Envía recordatorio a Persona2
                                                  └─ Notifica a Persona1
```

## Flujo visual del subflow

```
[Trigger] → [Switch: audio/texto]
                ├─ Audio → [Get Media URL] → [Download] → [Transcribir (STT)]
                └─ Texto → [Set text] ─────────────────────────┐
                                                                ↓
            [Procesar con IA (Gemini)] → [¿Datos Válidos?]
                                            ├─ ✅ Sí → [Confirmar P1] → [Wait] → [Enviar P2] → [Notificar P1]
                                            └─ ❌ No → [Error P1]
```

## Paso 1: Importar el subflow

1. En tu instancia n8n (`workflow.dev.liberasoft.cloud`), ir a **Workflows → Import from File**
2. Seleccionar `core-subflow.json`
3. Se creará el workflow **🫀 Core**
4. Anotar el **ID del workflow** (aparece en la URL, ej: `TfpKIb9omPpUZso0`)

## Paso 2: Conectar desde 🧠 Agent WABA (544)

En el workflow principal, agregar un nodo **Execute Workflow** que llame a 🫀 Core:

### Nodo: Execute Workflow

```json
{
  "parameters": {
    "source": "database",
    "workflowId": "ID_DEL_WORKFLOW_CORE",
    "mode": "once",
    "options": {}
  },
  "type": "n8n-nodes-base.executeWorkflow"
}
```

### Datos que debe pasar el Agent WABA

Antes del Execute Workflow, usar un **Set node** o **Code node** para preparar:

```javascript
// Code node en el workflow padre
const msg = $input.first().json;

return [{
  json: {
    senderPhone: msg.from,                    // Número de Persona1 (ej: "584121234567")
    messageType: msg.type,                     // "text" o "audio"
    messageText: msg.text?.body || '',         // Texto del mensaje (si es texto)
    mediaId: msg.audio?.id || msg.voice?.id || '', // Media ID (si es audio/voz)
    senderName: msg.profile?.name || '',       // Nombre de Persona1
    phoneNumberId: 'TU_PHONE_NUMBER_ID',       // WABA Phone Number ID
    wabaToken: 'TU_WABA_ACCESS_TOKEN'          // WABA Bearer Token
  }
}];
```

> **Nota**: Ajusta los campos según la estructura de datos que tu webhook WABA recibe. Los campos `msg.from`, `msg.type`, etc. corresponden a la estructura estándar de la WhatsApp Cloud API.

## Paso 3: Detección de intención (en el Agent WABA)

El Agent WABA debe detectar cuándo un mensaje es una solicitud de recordatorio. Opciones:

### Opción A: IF node simple (keywords)
```javascript
// Condición en IF node
{{ $json.body.text?.body?.toLowerCase().includes('recuérdal') ||
   $json.body.text?.body?.toLowerCase().includes('recordal') ||
   $json.body.text?.body?.toLowerCase().includes('avísale') ||
   $json.body.text?.body?.toLowerCase().includes('escríbele') }}
```

### Opción B: El AI Agent decide (recomendado)
Si el 🧠 Agent WABA usa un nodo AI Agent, agregar en el system prompt:

```
Cuando el usuario te pida recordarle algo a otra persona, enviar un mensaje a alguien
en un horario específico, o agendar un aviso para otro contacto, usa la herramienta
"agendar_recordatorio" pasando el mensaje original.
```

Y conectar el Execute Workflow como tool del AI Agent.

## APIs utilizadas

| Servicio | Endpoint | API Key |
|----------|----------|---------|
| Google STT | `speech.googleapis.com/v1/speech:recognize` | `AIzaSyD2bX9W2QthYERE1VNX0HRUJsa9iNwQ_kk` |
| Gemini 2.0 Flash | `generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent` | Misma key |
| WhatsApp Cloud API | `graph.facebook.com/v21.0/{phoneNumberId}/messages` | WABA Token (pasado como input) |

## Ejemplo de uso

**Persona1 envía por WhatsApp:**
> "Recuérdale al 0412-5551234 mañana a las 3pm que tiene cita con el doctor"

**🫀 Core responde a Persona1:**
> ✅ *Recordatorio agendado*
>
> 📅 Fecha: 2026-04-21
> ⏰ Hora: 15:00
> 📱 Para: 584125551234
> 💬 _"Tienes cita con el doctor"_
>
> Te avisaré cuando lo envíe.

**Al día siguiente a las 3pm, 🫀 Core envía a Persona2 (0412-5551234):**
> 👋 Hola!
>
> Juan te envía este recordatorio:
>
> 💬 *Tienes cita con el doctor*

**Y notifica a Persona1:**
> ✅ Listo, le envié el recordatorio a 584125551234.

## Notas de producción

- **Wait node**: La ejecución queda "pausada" en n8n hasta la fecha/hora del recordatorio. Esto requiere que n8n use una base de datos (no SQLite) para persistir ejecuciones.
- **API Key**: En producción, mover la Google API key a una variable de entorno (`$env.GOOGLE_API_KEY`) y referenciarla en los Code nodes.
- **Timezone**: El workflow está configurado para `America/Caracas` (UTC-4). Ajustar en settings si se usa en otra zona.
- **Audio format**: WhatsApp envía voice notes en OGG/OPUS. Google STT está configurado para este formato.

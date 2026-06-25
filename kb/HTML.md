# Resumen
- HTML (HyperText Markup Language) es el lenguaje de marcado que define la **estructura y el significado** del contenido de una página web: es el esqueleto sobre el que CSS pone el estilo y JavaScript la interactividad.
- No es un lenguaje de programación: no tiene lógica ni variables, solo **etiquetas** (`<tag>`) que envuelven contenido y le dan semántica (esto es un encabezado, esto un párrafo, esto un botón).
- "HTML5" dejó de ser una versión numerada: hoy es un **Living Standard** que mantiene el WHATWG, evoluciona de forma continua y todos los navegadores siguen.
- Bien escrito, el HTML semántico te da gratis **accesibilidad**, **SEO** y compatibilidad: el navegador, los lectores de pantalla y Google ya saben qué es cada cosa sin que tengas que explicárselo con clases ni `div`s.

# Destacado

## Estructura de un documento
- Todo documento parte de un árbol bien definido: `<!DOCTYPE html>` activa el modo estándar, y luego `<html lang="es">` envuelve `<head>` (metadatos, no visible) y `<body>` (contenido visible).
  ```html
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Mi portafolio</title>
    </head>
    <body> ... </body>
  </html>
  ```
- El `lang` en `<html>` no es decorativo: lectores de pantalla eligen la voz/pronunciación con él, y ayuda a la traducción.
- `<meta charset="UTF-8">` debe ir lo primero del `<head>` para que los acentos y emojis no se rompan; `<meta name="viewport">` es obligatorio para que el responsive funcione en móvil.

## HTML semántico
- La idea central: usar la etiqueta que **describe el rol** del contenido en vez de `<div>`/`<span>` genéricos. Esto crea un "outline" del documento que máquinas y tecnologías de asistencia entienden.
- Etiquetas de estructura (landmarks): `<header>`, `<nav>`, `<main>` (solo uno por página), `<section>`, `<article>`, `<aside>`, `<footer>`.
- Etiquetas de texto con significado: `<h1>`–`<h6>` (jerarquía, no tamaño), `<p>`, `<ul>/<ol>/<li>`, `<figure>/<figcaption>`, `<time datetime="2026-06-24">`, `<mark>`, `<blockquote>`, `<code>`/`<pre>`.
- Regla práctica: si te descubres poniendo `<div class="nav">` o `<div class="button">`, casi siempre existe ya `<nav>` o `<button>` que lo hace mejor y accesible de fábrica.

## Accesibilidad (a11y), ARIA y roles
- **La primera regla de ARIA es no usar ARIA**: si hay un elemento nativo que ya hace el trabajo (`<button>`, `<a href>`, `<input>`, `<dialog>`), úsalo. Trae foco, teclado y rol semántico gratis.
- ARIA (Accessible Rich Internet Applications) son **atributos** que añaden o ajustan semántica cuando el HTML no alcanza, sobre todo en widgets complejos:
  - `role="..."` define qué es un elemento para la tecnología de asistencia (`role="tablist"`, `role="alert"`).
  - **Estados/propiedades**: `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-expanded`, `aria-hidden`, `aria-live` (para anunciar cambios dinámicos), `aria-current`.
- Otros básicos que mueven la aguja: texto alternativo real en `alt` (vacío `alt=""` si la imagen es decorativa), `<label for>` asociado a cada input, foco visible, y orden lógico del DOM (el orden de tabulación sigue al HTML, no al CSS).
- Estándar de referencia: **WCAG 2.2** (y el trabajo hacia WCAG 3.0). El objetivo nivel AA es el habitual en producción.

## Formularios
- El corazón de la entrada de datos en la web. `<form>` agrupa controles; cada control debería tener su `<label>`.
- Tipos de `<input>` modernos que activan teclados y UI nativa en móvil y validación sin JS: `email`, `tel`, `url`, `number`, `date`, `time`, `color`, `range`, `search`, `file`.
- **Validación nativa con atributos**: `required`, `min`/`max`, `minlength`/`maxlength`, `pattern` (regex), `step`. El navegador valida y muestra mensajes antes de tocar JavaScript.
- Atributos que mejoran UX/seguridad: `autocomplete` (clave para gestores de contraseñas), `inputmode`, `placeholder` (no sustituye al label), `name` (lo que viaja al servidor).
- Otros controles: `<select>/<option>`, `<textarea>`, `<fieldset>/<legend>` para agrupar, `<datalist>` (autocompletado), `<output>`, `<progress>`, `<meter>`.

## Metadatos y SEO
- En `<head>` defines cómo te ven buscadores y redes:
  - `<title>` y `<meta name="description">`: lo que sale en el resultado de Google.
  - **Open Graph** (`<meta property="og:title|og:image|og:description">`) y **Twitter Cards**: la tarjeta enriquecida al compartir un link.
  - `<link rel="canonical">` para evitar contenido duplicado; `<meta name="robots">` para indexación.
- **Datos estructurados** (JSON-LD con Schema.org dentro de `<script type="application/ld+json">`): le dicen a Google que esto es un `Article`, `Person`, `Product`... y habilitan rich results.
- Semántica + jerarquía correcta de encabezados + `alt` en imágenes = SEO técnico que sale "gratis" por escribir buen HTML.

## Elementos nativos modernos (2026)
- `<dialog>`: modales reales de plataforma. `.showModal()` activa el *top layer*, el *backdrop* (`::backdrop`), trampa de foco y cierre con `Esc` sin librerías.
  ```html
  <dialog id="d"><form method="dialog"><button>Cerrar</button></form></dialog>
  <script>d.showModal()</script>
  ```
- `<details>`/`<summary>`: acordeón/disclosure nativo y accesible, sin una línea de JS para abrir/cerrar.
- `<template>` y **slots** (`<slot>`): base de los Web Components / Shadow DOM; fragmentos inertes que clonas e insertas.
- `popover` (atributo) + `<dialog>` + el **Popover API** y *anchor positioning* en CSS: tooltips, menús y popovers nativos con manejo de top-layer y *light-dismiss*.
- `loading="lazy"` en `<img>`/`<iframe>` (carga diferida nativa), `<picture>`/`srcset`/`sizes` (imágenes responsive), `<video>`/`<audio>` nativos.

# Mis notas
-
-
-

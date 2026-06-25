# Resumen
- **CSS (Cascading Style Sheets)** es el lenguaje declarativo que define la presentacion visual de documentos HTML: colores, tipografia, espaciado, layout, animaciones y respuesta a distintos viewports.
- No es imperativo como JS: describes el *estado deseado* con reglas (`selector { propiedad: valor; }`) y el navegador resuelve como pintarlo aplicando la **cascada**, la **especificidad** y la **herencia**.
- Es uno de los tres pilares de la web junto a HTML y JavaScript. En 2026 dejo de ser "el lenguaje de los hacks" y se convirtio en una herramienta de layout y diseno sistemico real (Grid, container queries, `@layer`, nesting nativo).

# Destacado

## El modelo mental: cascada, especificidad y herencia
- **Cascada**: cuando varias reglas afectan al mismo elemento, gana segun (1) origen y `@layer`, (2) especificidad, (3) orden de aparicion. El *ultimo en igualdad de condiciones* gana.
- **Especificidad**: `inline (1000)` > `#id (100)` > `.clase / [attr] / :pseudo-clase (10)` > `elemento / ::pseudo-elemento (1)`. `!important` rompe esto (evitalo salvo para overrides puntuales o utilities).
- **Herencia**: propiedades como `color`, `font`, `line-height` se heredan a los hijos; las de layout (`margin`, `padding`, `border`) no. `inherit`, `initial`, `unset` y `revert` te dan control fino.

## Box model y `box-sizing`
- Cada elemento es una caja: `content` + `padding` + `border` + `margin`.
- Regla de oro moderna: `*, *::before, *::after { box-sizing: border-box; }` para que `width` incluya padding y border (mucho mas predecible).

## Custom properties (variables CSS)
- Variables reales en runtime, no preprocesador. Cascadean y se heredan:
  ```css
  :root {
    --color-primary: #4f46e5;
    --space: 1rem;
  }
  .btn { background: var(--color-primary); padding: var(--space); }
  ```
- Se pueden leer/escribir desde JS (`getComputedStyle(el).getPropertyValue('--x')` / `el.style.setProperty('--x', val)`) y cambian en vivo: base ideal para temas (dark/light) sin recompilar.
- Soportan fallback: `var(--gap, 8px)`.

## Layout moderno
- **Flexbox**: layout en *una dimension* (fila o columna). Ideal para barras de navegacion, alinear items, distribuir espacio.
  ```css
  .nav { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
  ```
- **Grid**: layout en *dos dimensiones* (filas y columnas simultaneas). Para estructuras de pagina y rejillas:
  ```css
  .cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
  ```
- Regla practica: Grid para el *macro-layout* (la pagina), Flexbox para el *micro-layout* (dentro de un componente).
- `gap` funciona tanto en Grid como en Flex (adios a los `margin` hacks).

## Responsive sin (tantos) media queries
- **Container queries** (`@container`): el componente responde al tamano de *su contenedor*, no del viewport. Cambia el juego para componentes reutilizables (un card se adapta este en sidebar o en grid principal):
  ```css
  .card-wrap { container-type: inline-size; }
  @container (min-width: 400px) {
    .card { display: grid; grid-template-columns: 120px 1fr; }
  }
  ```
- **`clamp(min, preferido, max)`**: tipografia y espaciado fluidos sin breakpoints:
  ```css
  h1 { font-size: clamp(1.5rem, 4vw + 1rem, 3rem); }
  ```

## Nesting nativo
- Desde ~2023-2024 ya no necesitas Sass solo para anidar. Soporte amplio en 2026:
  ```css
  .card {
    padding: 1rem;
    & .title { font-weight: 700; }
    &:hover { box-shadow: 0 4px 12px rgb(0 0 0 / 0.1); }
    @media (width >= 600px) { padding: 2rem; }
  }
  ```

## Cascade layers (`@layer`)
- Permiten ordenar la cascada *por capas* de forma explicita, por encima de la especificidad. Una capa declarada despues gana, sin importar selectores:
  ```css
  @layer reset, base, components, utilities;
  @layer components { .btn { color: blue; } }
  @layer utilities { .text-red { color: red; } } /* gana aunque sea menos especifico */
  ```
- Mata las guerras de especificidad y los `!important` en proyectos grandes y con librerias de terceros.

## Logical properties
- Sustituyen `top/right/bottom/left` por `block`/`inline`, que se adaptan a la direccion de escritura (LTR/RTL, vertical). Clave para i18n:
  - `margin-inline`, `padding-block`, `inset-inline-start`, `border-block-end`...
  - `margin-inline: auto` centra horizontalmente sin importar el idioma.

## Otros highlights de 2026
- Selectores modernos: `:has()` (el "parent selector" que faltaba), `:is()`, `:where()` (especificidad 0).
- Color: `oklch()` / `lch()` para colores perceptualmente uniformes y mejores gradientes; sintaxis `rgb(0 0 0 / 0.5)`.
- Scroll-driven animations (`animation-timeline: scroll()`), `:has()` para estados sin JS, `subgrid`, `text-wrap: balance/pretty`, `@property` para animar custom properties con tipado.

## Metodologia BEM (Block__Element--Modifier)
- Convencion de *nomenclatura* de clases para CSS escalable y autodocumentado, sin depender de la especificidad (todo queda plano a nivel de clase).
- **Block**: componente independiente. **Element**: parte del bloque (`__`). **Modifier**: variante/estado (`--`).
  ```html
  <div class="card card--featured">
    <h2 class="card__title">Titulo</h2>
    <button class="card__button card__button--disabled">Ok</button>
  </div>
  ```
  ```css
  .card {}                      /* Block */
  .card__title {}               /* Element */
  .card--featured {}            /* Modifier de block */
  .card__button--disabled {}    /* Modifier de element */
  ```
- Ventaja: leyendo el HTML sabes el componente y su estado; el CSS queda con baja especificidad y sin anidamientos profundos.

# Mis notas
-
-
-

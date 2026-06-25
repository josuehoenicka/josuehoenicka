# Resumen

- **Remotion** es un framework para crear vídeos **programáticamente con React**: en lugar de editarlos en una timeline manual, los describes con componentes y JSX, y un renderizador los convierte a **MP4** (u otros formatos).
- Idea central: un vídeo es una función del tiempo. Cada **frame** es un render de React; cuando avanza el frame, tu componente se vuelve a dibujar con datos distintos y eso produce la animación.
- Brilla en vídeos **automatizados y data-driven**: plantillas que se rellenan con datos (reels personalizados, resúmenes, dashboards animados, intros) y se renderizan en CI o en un servidor sin tocar un editor.
- En 2026 es la herramienta de referencia para "vídeo como código" en el ecosistema JS. Licencia de empresa para equipos grandes; gratis para uso individual y empresas pequeñas.

# Destacado

- **Modelo mental "componente = frame"**: el render recorre los frames (0, 1, 2, …) y en cada uno monta tu componente. La animación no es CSS que corre solo, sino tu JSX recalculado por frame en función del frame actual.
  ```tsx
  import { useCurrentFrame, interpolate } from "remotion";

  export const Fade = () => {
    const frame = useCurrentFrame();           // 0, 1, 2, ... en cada frame
    const opacity = interpolate(frame, [0, 30], [0, 1], {
      extrapolateRight: "clamp",
    });
    return <div style={{ opacity }}>Hola</div>;
  };
  ```

- **`useCurrentFrame()`**: el hook fundamental. Te da el número de frame que se está renderizando. Toda tu animación deriva de aquí: posición, opacidad, escala… son funciones puras de `frame`. Es determinista: el frame N siempre se ve igual.

- **`useVideoConfig()`**: devuelve `fps`, `width`, `height` y `durationInFrames`. Para pasar de frames a segundos haces `frame / fps`. Un vídeo de 5 s a 30 fps son 150 frames.

- **`interpolate(input, [a, b], [x, y])`**: mapea un rango a otro (regla de tres animada). Es el caballo de batalla para mover/desvanecer/escalar. Con `easing` (p.ej. `Easing.bezier`) le das curvas suaves, y con `extrapolateLeft/Right: "clamp"` evitas que se pase de los límites.

- **`spring()`**: animaciones con física de muelle (rebote natural) en vez de tiempos lineales. Recibe `frame`, `fps` y config de `damping`/`stiffness`. Ideal para entradas que se sienten "vivas".

- **Composición de tiempo y capas**:
  - **`<Sequence from={30} durationInFrames={60}>`**: desplaza el reloj de sus hijos; dentro, `useCurrentFrame()` arranca en 0 cuando empieza la secuencia. Así organizas escenas en el tiempo.
  - **`<Series>`**: encadena secuencias una tras otra automáticamente.
  - **`<AbsoluteFill>`**: un `div` que ocupa todo el lienzo (posición absoluta + 100%); el "stage" donde apilas capas.

- **Assets multimedia como componentes**: `<Video>`, `<Audio>`, `<Img>`, `<OffthreadVideo>` (mejor para render), `<Gif>`. Importas medios con `staticFile()` desde la carpeta `public/`. Puedes recortar, silenciar, ajustar volumen por frame y sincronizar todo con el reloj global.

- **Studio (preview en vivo)**: `npx remotion studio` abre un editor en el navegador con timeline, scrubbing y hot-reload. Editas el código y ves el vídeo actualizarse al instante — el flujo se siente como un dev server de React.

- **Render**: por CLI `npx remotion render <id> out.mp4` o vía Node con `renderMedia()`. Por debajo levanta un Chromium headless (Puppeteer) que captura cada frame y los une con **FFmpeg**. Soporta MP4/H.264, WebM, GIF, secuencias de PNG, audio, transparencia, etc.

- **`<Composition>` y props tipadas**: registras cada vídeo con su `id`, `fps`, `width`, `height`, `durationInFrames` y un `component`. Con **`inputProps`** (validados con **Zod**) inyectas datos al renderizar: la misma plantilla produce N vídeos distintos cambiando solo el JSON de entrada — la base de lo "data-driven".

- **Renderizado a escala / cloud**: `@remotion/lambda` reparte el render entre funciones AWS Lambda (paraleliza por frames → vídeos largos en segundos). También hay imagen Docker oficial y `@remotion/cli` para CI. Encaja perfecto en pipelines automáticos.

- **Ecosistema 2026**: paquetes oficiales como `@remotion/three` (Three.js / R3F dentro del vídeo), `@remotion/skia`, `@remotion/shapes`, `@remotion/animation-utils`, `@remotion/transitions`, `@remotion/captions` y plantillas para subtítulos auto-generados. Hay **Remotion Player** (`@remotion/player`) para **embeber el vídeo interactivo en una web React** sin renderizar a MP4.

- **Determinismo y "delayRender"**: como el frame N debe verse siempre igual, evitas aleatoriedad no controlada (`random()` con seed en lugar de `Math.random()`). Si necesitas cargar datos antes de pintar, usas `delayRender()`/`continueRender()` para decirle al renderer "espérame".

# Mis notas
-
-
-

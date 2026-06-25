# Resumen

- Framework de UI de Google para construir, desde **una sola base de código**, apps nativas de móvil (iOS/Android), web, escritorio (Windows/macOS/Linux) y embebidos.
- Usa el lenguaje **Dart** y un modelo declarativo donde la regla mental es **"todo es un widget"**: la UI se describe como un árbol de widgets que es función del estado actual.
- No renderiza con componentes nativos ni con WebViews: pinta sus propios píxeles en un canvas con el motor de render **Impeller** (sustituto de Skia), por lo que controla cada píxel y la UI se ve idéntica en todas las plataformas.
- En 2026 el estándar es Flutter 3.x con Dart 3 (null-safety obligatorio, records, patterns); el rey de la gestión de estado es **Riverpod**, con **Bloc** como gran alternativa para apps grandes.

# Destacado

- **Dart**: lenguaje de Google, tipado, orientado a objetos, con sintaxis muy familiar para alguien de JS/TS (`class`, `async`/`await`, `final`/`var`, arrow functions `=>`). Compila **AOT** a binario nativo ARM en producción (de ahí los 60/120fps) y **JIT** en desarrollo (lo que habilita el hot reload). Hoy es null-safe por defecto: `String?` vs `String`, igual que `strictNullChecks` en TS.
- **Todo es un widget**: no solo los botones o el texto; también el padding, el centrado, el espaciado y hasta el tema son widgets (`Padding`, `Center`, `Column`, `Row`, `Scaffold`). Compones la UI **anidando** widgets, no aplicando clases CSS.
  ```dart
  Center(
    child: Column(
      children: [
        Text('Hola'),
        ElevatedButton(
          onPressed: () => print('click'),
          child: Text('Pulsa'),
        ),
      ],
    ),
  )
  ```
- **Dos familias de widgets**:
  - **StatelessWidget**: inmutable, solo depende de sus parámetros (props). Como un componente puro.
  - **StatefulWidget**: tiene un objeto `State` mutable. Cuando llamas a `setState(() => ...)`, Flutter reconstruye (`build`) ese subárbol. Es el mismo patrón mental que `useState` + re-render de React.
- **El árbol de render por dentro**: Flutter mantiene tres árboles paralelos — Widget (la config inmutable que escribes), **Element** (la instancia viva que persiste entre builds) y RenderObject (el que mide y pinta). Cuando reconstruyes, Flutter **diffea** widgets contra elements para tocar lo mínimo. Es su versión del Virtual DOM/reconciliación de React, pero pintando píxeles en vez de DOM.
- **Hot reload**: inyecta el código nuevo en la VM de Dart **conservando el estado** de la app en milisegundos. Cambias un color o un texto y lo ves al instante sin reiniciar ni perder en qué pantalla estabas. Es bastante más potente que el HMR típico de web.
- **Material 3 + Cupertino**: trae de fábrica el set completo de widgets de Material Design 3 (Android/genérico) y de Cupertino (look iOS). El estilo es **programático**: no hay hojas de estilo, todo es configuración de widgets y un `ThemeData` central.
- **Layout**: el modelo es "constraints go down, sizes go up". `Row`/`Column` son tu Flexbox (con `Expanded`/`Flexible` como `flex`), `Stack` es el posicionamiento absoluto y `Container` es el navaja suiza (padding + margin + decoración + tamaño en un solo widget).
- **Gestión de estado** (lo que más se debate en el ecosistema):
  - `setState` para estado local y simple.
  - **InheritedWidget**: el mecanismo nativo para bajar datos por el árbol sin prop-drilling (la base sobre la que se montan los demás).
  - **Provider** y, sobre todo, **Riverpod** (la evolución, hoy la opción por defecto): inyección de dependencias + estado reactivo, comprobado en compilación.
  - **Bloc/Cubit**: arquitectura basada en streams de eventos→estados, popular en apps grandes y empresariales.
- **Async y reactividad**: Dart trae `Future` (≈ Promise) y `Stream` (≈ Observable de RxJS). El widget `FutureBuilder`/`StreamBuilder` reconstruye la UI según el estado del Future/Stream (loading/data/error), muy parecido al `async` pipe de Angular.
- **Ecosistema y tooling**: `flutter` CLI (crea, corre, compila), **pub.dev** como registro de paquetes (su npm) con `pubspec.yaml` como su `package.json`. **DevTools** para inspeccionar el árbol de widgets y perfilar. Casi todo lo "nativo" (cámara, geolocalización, push) va vía plugins oficiales.
- **Multiplataforma de verdad**: el mismo código a iOS, Android, web y desktop. La web compila a WebAssembly/CanvasKit (buenísima para apps internas/dashboards, más floja para SEO o landings públicas). Para tocar APIs nativas no cubiertas, usas **platform channels** (puente a código Kotlin/Swift) o el más moderno FFI.

# Mis notas
-
-
-

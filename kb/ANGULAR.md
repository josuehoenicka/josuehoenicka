# Resumen
- Framework de frontend de Google para construir SPAs y apps web a escala, basado en **TypeScript**.
- Es "con baterías incluidas": trae de fábrica router, formularios, HTTP client, DI (inyección de dependencias), testing y CLI. Frente a React (librería), Angular es un framework opinado y completo.
- Su CLI (`ng`) genera, sirve, testea y construye el proyecto; usa **esbuild/Vite** como pipeline moderno de build.
- Pensado para equipos y proyectos grandes: estructura clara, tipado fuerte y convenciones explícitas.

# Destacado

## Pilares que se mantienen en todas las versiones
- **Componentes**: clase TS + template HTML + estilos. La unidad de UI.
- **Inyección de dependencias (DI)**: el sistema más característico de Angular. Servicios `@Injectable` que el framework instancia y entrega; ideal para lógica compartida, estado y llamadas HTTP.
- **Templates con binding**: `{{ }}` (interpolación), `[prop]` (property binding), `(event)` (event binding), `[(ngModel)]` (two-way).
- **RxJS / Observables**: el `HttpClient` devuelve Observables; históricamente la reactividad central.

## La EVOLUCIÓN de arquitectura (lo más importante de entender)

### Angular ~12 — la era NgModules + ViewEngine→Ivy
- **NgModules** (`@NgModule`) eran obligatorios: todo componente, pipe o directiva tenía que **declararse** en un módulo, y los módulos importaban otros módulos. Mucho boilerplate y "¿por qué no encuentra mi componente?".
- **RxJS por todas partes**: el estado y los flujos asíncronos se modelaban con Observables, `async` pipe, operadores (`map`, `switchMap`, `combineLatest`...). Potente pero con curva de aprendizaje alta.
- Migración interna de **ViewEngine → Ivy** (el nuevo compilador/renderer): builds más pequeños, mejor tree-shaking y debugging. Ivy es la base sobre la que se construye todo lo posterior.
- Cambio de detección de cambios basado en **Zone.js** (parchea APIs async para saber cuándo "repintar").

### Angular 16 — el giro de paradigma
- **Standalone components estables**: un componente puede declarar sus propias dependencias con `imports: [...]` directamente, **sin NgModules**. Adiós al boilerplate de declarar todo en módulos.
  ```ts
  @Component({
    standalone: true,
    selector: 'app-card',
    imports: [CommonModule, RouterLink],
    template: `...`,
  })
  export class CardComponent {}
  ```
- **Signals (introducción)**: nueva primitiva de reactividad granular. Un `signal()` es un valor reactivo que se lee como función y notifica solo a quien lo usa.
  ```ts
  count = signal(0);
  doble = computed(() => this.count() * 2);
  this.count.set(5);        // o this.count.update(c => c + 1)
  ```
- **`inject()`**: función para obtener dependencias sin pasarlas por el constructor. Más flexible y combinable.
  ```ts
  private http = inject(HttpClient);
  ```
- Resultado: una arquitectura **distinta a la de módulos**, más cercana a componentes autocontenidos.

### Angular 20+ (2026) — paradigma moderno consolidado
- **Standalone por defecto**: las apps nuevas ya no usan NgModules. `standalone: true` es implícito; arranque con `bootstrapApplication()` y `app.config.ts`.
- **Signals como reactividad principal**: estado, `computed`, `effect()`, e inputs/outputs basados en signals (`input()`, `output()`, `model()`). RxJS sigue para flujos asíncronos complejos (con interop `toSignal` / `toObservable`), pero ya no es obligatorio para estado local.
- **Built-in control flow** (`@if` / `@for` / `@switch`): reemplaza `*ngIf`, `*ngFor`, `*ngSwitch`. Es más rápido, más legible y no necesita importar `CommonModule`.
  ```html
  @if (user(); as u) {
    <p>Hola {{ u.name }}</p>
  } @else {
    <p>Cargando…</p>
  }
  @for (item of items(); track item.id) {
    <li>{{ item.name }}</li>
  }
  ```
  - Ojo: `@for` **exige `track`** (equivalente a la `key` de React) para rendimiento.
- **`@defer`**: carga diferida (lazy) declarativa a nivel de template, con triggers (`on viewport`, `on idle`, `on interaction`) y bloques `@placeholder` / `@loading` / `@error`. Code-splitting sin configurar rutas.
- **Zoneless / sin Zone.js**: la detección de cambios puede apoyarse en Signals en vez de Zone.js (`provideZonelessChangeDetection()`). Menos overhead, menos "magia", mejor rendimiento y bundles más livianos.
- **SSR + Hydration**: renderizado en servidor con **hidratación incremental** (no re-renderiza lo que ya pintó el server; rehidrata bajo demanda). Mejora LCP/TTI y SEO.
- **Build moderno**: esbuild + Vite por defecto (dev server rápido, HMR).

## Buenas prácticas (2026)
- Componentes **standalone**, pequeños y con `ChangeDetectionStrategy.OnPush` (o zoneless).
- **Signals para estado local/derivado**; reservar RxJS para async pesado (websockets, debounce, combinación de streams).
- Usar `@if/@for/@switch` y `@defer` en vez de las directivas estructurales viejas.
- `inject()` sobre constructor para servicios; servicios `providedIn: 'root'` para singletons.
- Tipado estricto (`strict: true` en `tsconfig`) y `async` pipe / `toSignal` para evitar `subscribe` manuales y fugas.
- Lazy loading por rutas (`loadComponent` / `loadChildren`) + `@defer` para trozos de UI.

# Mis notas
-
-
-

# Resumen
- Librería de **componentes UI para Angular**: ~90 componentes ricos y listos para producción (tablas, formularios, dialogs, overlays, menús, charts, etc.).
- Pensada para no reinventar la rueda: en vez de maquetar a mano un `DataTable` con paginación, ordenamiento y filtros, importas `<p-table>` y lo configuras.
- Es la hermana Angular de la familia **PrimeTek** (PrimeReact, PrimeVue). Trae además **PrimeIcons** (set de iconos) y se acompaña de **PrimeFlex** (utilidades CSS tipo Tailwind-lite).
- Open source (licencia MIT). Theming potente y, desde v18, totalmente integrada con **Angular standalone** y signals.

# Destacado

## Catálogo de componentes (lo que te ahorra)
- **Datos**: `p-table` (la joya: lazy loading, paginación server-side, filtros por columna, selección, edición inline, scroll virtual), `p-treetable`, `p-dataview`, `p-orderlist`, `p-picklist`, `p-paginator`.
- **Formularios**: `p-inputtext`, `p-select` (antes `p-dropdown`), `p-multiselect`, `p-autocomplete`, `p-calendar`/`p-datepicker`, `p-checkbox`, `p-inputnumber`, `p-password`, `p-fileupload`, `p-slider`, `p-rating`, `p-chips`.
- **Overlays**: `p-dialog`, `p-confirmdialog`, `p-sidebar`/`p-drawer`, `p-tooltip`, `p-overlaypanel`/`p-popover`, `p-toast` (notificaciones), `p-dynamicdialog` (abrir componentes como modal desde un servicio).
- **Navegación/menús**: `p-menu`, `p-menubar`, `p-tabview`/`p-tabs`, `p-tieredmenu`, `p-breadcrumb`, `p-steps`, `p-panelmenu`.
- **Charts** (envuelve Chart.js) y **media** (`p-carousel`, `p-galleria`, `p-image`).
- Muchos componentes usan un **modelo declarativo de items**: un array de objetos `MenuItem`/`{label, icon, command}` describe el menú, en vez de pintar `<li>` a mano.

## Servicios inyectables (muy "Angular")
- `MessageService` + `<p-toast>`: disparas notificaciones desde cualquier sitio con `this.messageService.add({severity:'success', summary:'OK'})`.
- `ConfirmationService` + `<p-confirmdialog>`: confirmaciones imperativas (`this.confirmationService.confirm({...})`).
- `DialogService`: abre un **componente entero** como modal en runtime y recibe el resultado por un observable. Como un `dialog` de Material pero del ecosistema Prime.

## Theming (lo más renovado en v18+)
- Históricamente PrimeNG funcionaba con **theme CSS pre-compilados** (Saga, Lara, Vela...) que importabas como `.css`.
- **PrimeNG v18+ (2024–2025)** reescribió el theming sobre **design tokens + CSS variables** con el motor **`@primeng/themes`** (presets `Aura`, `Lara`, `Nora`, `Material`). Se configura en el bootstrap, no con un import de CSS suelto:
  ```ts
  import Aura from '@primeng/themes/aura';
  bootstrapApplication(App, {
    providers: [
      providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.dark' } } })
    ]
  });
  ```
- Dark mode incorporado vía un selector (clase `.dark` en `<html>`), sin hojas de estilo duplicadas.
- Los tokens permiten personalizar color/spacing/radius desde un objeto en TS o sobreescribiendo CSS variables, en vez de pelear con `::ng-deep` (aunque para overrides finos a veces sigue haciendo falta).
- Integra de fábrica con **Tailwind** (`tailwindcss-primeui`) si lo prefieres a PrimeFlex.

## Standalone y módulos (clave en 2026)
- Cada componente es **standalone**: lo importas directo en `imports: [...]` del componente, sin `NgModule`.
  ```ts
  @Component({
    selector: 'app-users',
    standalone: true,
    imports: [TableModule, ButtonModule, ToastModule],
    template: `<p-table [value]="users()"> ... </p-table>`,
  })
  ```
- Compatible con **signals**: pasas `[value]="users()"` (un `signal()`) y la tabla reacciona. Soporta `@if`/`@for` modernos en los templates donde proyectas contenido.
- Buen soporte de **accesibilidad (WAI-ARIA)**, i18n (objeto de traducciones vía `PrimeNG` config), RTL y SSR/hydration de Angular.

## Ecosistema PrimeTek
- **PrimeIcons**: iconos por clase (`<i class="pi pi-check"></i>`), usados internamente por los componentes (`icon="pi pi-plus"`).
- **PrimeFlex**: utilidades CSS (flex, grid, spacing, display) estilo utility-first; opcional, hoy mucha gente usa Tailwind en su lugar.
- **PrimeBlocks / Sakai / Apollo**: bloques y plantillas de admin (parte gratis, parte de pago) para arrancar dashboards rápido.

## A tener en cuenta
- Es una dependencia **grande**; conviene importar solo los módulos/componentes que usas (tree-shaking) y vigilar el bundle.
- Hubo **renombrados** entre versiones (p.ej. `p-dropdown` → `p-select`, `p-calendar` → `p-datepicker`, `p-sidebar` → `p-drawer`); al actualizar, revisar el changelog y usar el `migration assistant`.
- La personalización profunda de estilos a veces obliga a inspeccionar las clases internas; los design tokens de v18 mitigan bastante esto.

# Mis notas
-
-
-

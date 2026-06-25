# Resumen

- Lenguaje de programación de alto nivel, interpretado/JIT y multiparadigma (funcional, orientado a objetos por prototipos, imperativo) que nació en el navegador y hoy corre en todas partes.
- Es el **lenguaje de la web**: el único que ejecutan de forma nativa todos los navegadores. Con Node/Deno/Bun salió al servidor, a CLIs, a desktop (Electron) y a automatizaciones (n8n).
- Dinámicamente tipado, con **objetos como estructura central** y funciones como ciudadanos de primera clase (se pasan, se devuelven, se guardan en variables).
- Estandarizado como **ECMAScript (ES)**: cada año sale una versión (ES2026 al día de hoy), y los motores van adoptando las propuestas que pasan por el proceso TC39.

# Destacado

## Tipos y coerción
- Tipos primitivos: `string`, `number` (un único tipo numérico de coma flotante de 64 bits, IEEE 754), `boolean`, `bigint`, `symbol`, `undefined`, `null`. Todo lo demás es **objeto** (incluidos arrays y funciones).
- `typeof null === 'object'` es un bug histórico congelado por compatibilidad. `typeof función === 'function'`.
- **Coerción**: JS convierte tipos automáticamente. La regla de oro es usar siempre `===` (estricto, sin coerción) y reservar `==` para casos contados.
  - `0.1 + 0.2 !== 0.3` por la coma flotante; para dinero usa enteros (centavos) o `BigInt`.
  - Valores **falsy**: `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, `NaN`. Todo lo demás es truthy (ojo: `[]` y `{}` son truthy).
  - `??` (nullish coalescing) cae solo con `null`/`undefined`, a diferencia de `||` que cae con cualquier falsy. `a ?? b` vs `a || b` es una distinción que evita bugs con `0` o `''`.

## Prototipos
- JS **no usa clases reales**: hereda por **cadena de prototipos**. Cada objeto tiene un enlace interno (`[[Prototype]]`, accesible como `Object.getPrototypeOf(obj)`) a otro objeto del que "toma prestados" propiedades y métodos.
- `class` (ES2015) es **azúcar sintáctico** sobre prototipos: por dentro sigue siendo `function` + `prototype`. `extends` solo conecta cadenas de prototipos.
- Campos privados reales con `#`: `class A { #secreto = 1 }`. No accesibles desde fuera (no es convención, lo fuerza el motor).

## Closures
- Una **closure** es una función que "recuerda" el ámbito (scope) donde se creó, aunque se ejecute fuera de él. Es la base de la encapsulación, los módulos y los callbacks con estado.
  ```js
  function contador() {
    let n = 0;            // capturada por la closure
    return () => ++n;     // recuerda n entre llamadas
  }
  const c = contador();
  c(); // 1   c(); // 2
  ```

## `this`
- En JS `this` **no depende de dónde se define la función sino de cómo se llama**:
  - Método (`obj.fn()`) → `this` es `obj`.
  - Función suelta → `undefined` en modo estricto/módulos (no `window`).
  - `fn.call/apply/bind` → fijas `this` a mano.
  - **Arrow functions no tienen `this` propio**: lo heredan léxicamente del scope donde se escribieron. Por eso son ideales en callbacks (no se "pierde" el `this`).

## Event loop
- JS es **single-thread**: una sola pila de ejecución. La concurrencia la da el **event loop**, no hilos.
- Modelo: stack síncrono → al vaciarse, se procesan **microtareas** (Promesas, `queueMicrotask`) → luego **una macrotarea** (`setTimeout`, eventos, I/O) → y vuelta a empezar.
  - Un `await`/`.then()` siempre corre antes que un `setTimeout(fn, 0)`, porque microtareas vacían toda su cola antes de tocar una macrotarea.
- Bloquear el hilo (un `while` pesado) congela la UI entera. Para CPU intensivo: **Web Workers** en el navegador (o Worker Threads en Node).

## Promesas y async/await
- Una **Promesa** representa un valor futuro: estados `pending` → `fulfilled`/`rejected`. Se consume con `.then/.catch/.finally`.
- `async/await` es azúcar sobre Promesas: `await` pausa la función (no el hilo) hasta resolver, y el `try/catch` captura los rechazos como si fuera código síncrono.
- Combinadores clave:
  - `Promise.all([...])` → falla si una falla (todo o nada).
  - `Promise.allSettled([...])` → espera a todas y te da el resultado de cada una (ideal cuando algunas pueden fallar sin abortar el resto).
  - `Promise.race` / `Promise.any` → la primera que resuelve / la primera que cumple.

## Módulos ES (ESM)
- `import`/`export` es el sistema de módulos **estándar** (mismo en navegador, Node moderno, Angular/TS).
- `export` nombrados vs `export default`; imports estáticos (arriba, analizables) y `import()` dinámico (devuelve Promesa, para lazy-loading).
- Top-level `await` permitido en módulos.

## Sintaxis moderna que se usa a diario
- **Destructuring**: `const { nombre, edad } = persona;` / `const [a, b] = arr;`. Con valores por defecto y renombrado (`{ nombre: n }`).
- **Spread / rest**: `[...a, ...b]`, `{ ...obj, extra: 1 }` para copiar/combinar; rest en parámetros `(...args)` y en destructuring (`const [primero, ...resto] = arr`).
- **Optional chaining** `?.` y **nullish** `??`: `usuario?.direccion?.calle ?? 'sin datos'`.
- **Template literals**: `` `Hola ${nombre}` ``, multilínea y con expresiones.

## Métodos de array (estilo declarativo)
- `map` (transforma 1:1), `filter` (selecciona), `reduce` (colapsa a un valor), `find`/`findIndex`, `some`/`every`, `flatMap`, `forEach`.
  ```js
  const total = items
    .filter(i => i.activo)
    .map(i => i.precio)
    .reduce((acc, p) => acc + p, 0);
  ```
- Métodos **inmutables** modernos (ES2023): `toSorted`, `toReversed`, `toSpliced`, `with` devuelven copia en vez de mutar el original (muy útil con estado/Angular signals).

## Otros imprescindibles 2026
- Estructuras: `Map`, `Set`, `WeakMap`, `WeakRef`; `structuredClone()` para copias profundas nativas.
- `fetch`, `AbortController`, `URL`/`URLSearchParams` globales en navegador y Node.
- `Array.fromAsync`, `Object.groupBy`/`Map.groupBy` para agrupar; `Iterator` helpers (`.map/.filter/.take` sobre iteradores perezosos).
- **TypeScript** no es JS, pero es la forma en que la mayoría escribe JS "en serio" hoy: tipado estático que compila a JS plano.

# Mis notas
-
-
-

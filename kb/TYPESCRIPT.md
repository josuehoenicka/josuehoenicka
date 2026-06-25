# Resumen
- **Superset tipado de JavaScript**: todo JS válido es TS válido, pero TS le añade un sistema de tipos estático que se chequea en **tiempo de compilación**, no en runtime.
- No se ejecuta directamente: el compilador (`tsc`) lo **transpila a JavaScript** plano y, de paso, borra todos los tipos (type erasure). El navegador/Node nunca ven TS.
- Su valor real es el **tooling**: autocompletado, refactors seguros, navegación de código y errores detectados antes de ejecutar. Es la base de Angular y, hoy, casi un estándar en el frontend serio.
- Mantenido por Microsoft, con releases frecuentes (rama 5.x consolidada en 2026).

# Destacado

## La idea central: tipos en compilación, no en runtime
- Los tipos son una **capa de diseño** que desaparece al compilar. Esto es lo que más cuesta interiorizar viniendo de JS:
  ```ts
  interface User { id: number; name: string; }
  function greet(u: User) { return `Hola ${u.name}`; }
  // Tras compilar, el JS resultante no tiene ni rastro de `User`.
  ```
- Consecuencia práctica: **no puedes confiar en los tipos para validar datos externos** (respuestas HTTP, JSON, `localStorage`). El compilador te cree, pero en runtime puede llegar cualquier cosa. Para eso se usan validadores como **Zod** (que genera el tipo *y* lo valida en runtime).

## Tipos básicos y anotaciones
- Primitivos: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`.
- Arrays y tuplas: `number[]`, `Array<string>`, `[string, number]` (tupla de longitud y tipos fijos).
- `any` (apaga el chequeo, evítalo), `unknown` (el `any` seguro: hay que estrechar antes de usarlo) y `never` (lo que no puede ocurrir).
- **Inferencia**: en muchos casos no hace falta anotar; TS deduce el tipo. `const n = 5` ya es `number`. Anota en las **fronteras** (params, retornos públicos), deja inferir lo interno.

## `interface` vs `type`
- `interface`: pensada para describir la forma de objetos/clases; soporta **declaration merging** (se puede reabrir y extender) y `extends`.
- `type` (type alias): más general; sirve para uniones, intersecciones, primitivos, tuplas, mapped types... todo lo que una interface no puede.
  ```ts
  interface Animal { name: string; }
  interface Animal { legs: number; }   // merge: queda { name, legs }

  type ID = string | number;            // esto una interface no lo hace
  type Punto = { x: number } & { y: number };  // intersección
  ```
- Regla práctica: `interface` para objetos públicos/extensibles, `type` para uniones y composiciones.

## Union, intersection y narrowing
- **Union** (`A | B`): "uno u otro". **Intersection** (`A & B`): "los dos a la vez" (combina propiedades).
- **Narrowing**: estrechar un tipo amplio a uno concreto usando chequeos que TS entiende:
  - `typeof x === 'string'`, `Array.isArray(x)`, `'prop' in obj`, `x instanceof Clase`.
  - **Discriminated unions**: el patrón estrella. Una propiedad literal común (`kind`) que el compilador usa para saber en qué rama estás.
    ```ts
    type Estado =
      | { kind: 'loading' }
      | { kind: 'ok'; data: string[] }
      | { kind: 'error'; msg: string };

    function render(e: Estado) {
      switch (e.kind) {
        case 'ok': return e.data.length;   // aquí `data` existe seguro
        case 'error': return e.msg;        // aquí `msg` existe seguro
      }
    }
    ```
- **Type guards** propios con `arg is Tipo` para encapsular narrowing reutilizable.

## Generics
- Tipos parametrizados: la "función con argumentos pero a nivel de tipos". Permiten escribir código reutilizable sin perder el tipo concreto.
  ```ts
  function first<T>(arr: T[]): T | undefined { return arr[0]; }
  first([1, 2, 3]);      // T = number
  first(['a', 'b']);     // T = string
  ```
- Con **constraints** (`extends`) para limitar qué acepta el genérico:
  ```ts
  function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];   // retorno tipado con precisión
  }
  ```
- Es lo que hay detrás de `Promise<T>`, `Array<T>`, `Observable<T>` (RxJS) o las respuestas de `HttpClient` en Angular.

## Utility types (los que se usan a diario)
- `Partial<T>`: todas las props opcionales (ideal para updates/patches).
- `Required<T>`: todas obligatorias.
- `Pick<T, K>`: quédate solo con esas claves. `Omit<T, K>`: quita esas claves.
- `Readonly<T>`: inmutable a nivel de tipos.
- `Record<K, V>`: objeto-diccionario con claves `K` y valores `V`.
- `ReturnType<F>`, `Parameters<F>`, `Awaited<T>` (desenvuelve el valor de una Promise).
  ```ts
  interface User { id: number; name: string; email: string; }
  type UserUpdate = Partial<Omit<User, 'id'>>;   // editar nombre/email, nunca el id
  type UserCard   = Pick<User, 'id' | 'name'>;   // proyección ligera para una lista
  ```
- Internamente son **mapped types** + **conditional types**; rara vez necesitas escribirlos a mano, pero entenderlos ayuda a leer librerías.

## Tipos avanzados (cuando hacen falta)
- **`keyof`** (claves de un tipo como unión de literales), **indexed access** (`T['prop']`), **`typeof`** a nivel de tipos (`type T = typeof miObjeto`).
- **Mapped types**: `{ [K in keyof T]: ... }` para transformar cada propiedad.
- **Conditional types**: `T extends U ? X : Y`, con `infer` para extraer subtipos.
- **Template literal types**: `` `on${Capitalize<E>}` `` para construir strings tipados (muy usado en APIs de eventos).

## Configuración: `tsconfig.json`
- El cerebro del proyecto. Lo importante:
  - **`"strict": true`**: activa de golpe el set estricto (`strictNullChecks`, `noImplicitAny`, etc.). **Innegociable** en proyecto nuevo: `null`/`undefined` dejan de colarse silenciosamente.
  - `target` (versión de JS de salida, p.ej. `ES2022`) y `module` (`ESNext`, `NodeNext`).
  - `moduleResolution` (`bundler` / `nodenext` según el setup), `paths` (alias de imports tipo `@app/...`).
  - `noUncheckedIndexedAccess` (acceder a `arr[i]` te da `T | undefined`: más seguro), `noImplicitOverride`, `verbatimModuleSyntax`.
- En Angular el CLI ya trae un `tsconfig` con `strict` activado; rara vez lo tocas a mano salvo `paths` o flags extra.

## Ecosistema 2026
- **Type-only imports/exports**: `import type { User } from './user'` deja claro que es solo tipo y se borra al compilar (clave con `verbatimModuleSyntax`).
- **`satisfies`**: valida que un valor cumple un tipo **sin ensanchar** su tipo inferido. Lo mejor de anotar y de inferir a la vez.
  ```ts
  const rutas = { home: '/', user: '/u/:id' } satisfies Record<string, string>;
  // `rutas.home` sigue siendo el literal '/', no un `string` genérico.
  ```
- Tendencia a **transpilar con esbuild/SWC/Vite** (rápido) y dejar `tsc --noEmit` solo para chequear tipos. Node ya ejecuta `.ts` directamente en versiones recientes (type stripping).
- El compilador oficial se está reescribiendo en Go ("TypeScript 7" / proyecto Corsa) buscando builds mucho más rápidos; en 2026 conviven el `tsc` clásico (5.x) y el nuevo motor nativo.

# Mis notas
-
-
-

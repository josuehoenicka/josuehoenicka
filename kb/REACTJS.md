# Resumen

- Librería de JavaScript (no framework) creada por Meta para construir interfaces de usuario a partir de **componentes** reutilizables.
- Su modelo mental es declarativo: describes *qué* UI quieres para un estado dado y React se encarga de actualizar el DOM por ti (Virtual DOM + reconciliación).
- Es solo la capa de vista: routing, fetching, estado global, etc. los pones tú o vienen de su ecosistema (Next.js, React Router, TanStack Query…).
- En 2026 el estándar es React 19: componentes funcionales + Hooks, Server Components y el nuevo React Compiler que memoiza automáticamente.

# Destacado

- **JSX**: azúcar sintáctico que mezcla markup con JS. No es HTML: `class` → `className`, `for` → `htmlFor`, y las expresiones van entre llaves `{}`. Cada `.jsx`/`.tsx` se transpila a llamadas `React.createElement(...)` (o `jsx()` con el runtime moderno).
  ```jsx
  function Saludo({ nombre }) {
    return <h1>Hola, {nombre}</h1>;
  }
  ```
- **Componentes funcionales**: una función que recibe `props` (objeto inmutable, read-only) y devuelve JSX. Las clases siguen existiendo pero están de facto deprecadas; todo lo nuevo es función + Hooks.
- **Hooks** (funciones que empiezan por `use`, solo se llaman en el top-level del componente, nunca dentro de ifs/loops):
  - `useState`: estado local. Devuelve `[valor, setValor]`. El `set` es asíncrono y dispara un re-render.
    ```jsx
    const [count, setCount] = useState(0);
    setCount(c => c + 1); // forma funcional, segura ante batching
    ```
  - `useEffect`: efectos secundarios (fetch, suscripciones, listeners). Corre *después* del render. El **array de dependencias** controla cuándo re-ejecuta; el `return` es la función de limpieza (cleanup).
    ```jsx
    useEffect(() => {
      const id = setInterval(tick, 1000);
      return () => clearInterval(id); // cleanup
    }, []); // [] = solo al montar/desmontar
    ```
  - `useMemo` / `useCallback`: memoizan un valor calculado o una función para evitar recálculos/recreación entre renders.
  - `useRef`: caja mutable que persiste entre renders sin causar re-render (referencias al DOM o valores "instance-like").
  - `useContext`: consume un Context (mecanismo nativo para pasar datos sin prop-drilling).
  - `useReducer`: estado complejo estilo Redux (`dispatch(action)` → reducer puro).
  - **Custom hooks**: extraes lógica con estado a una función `useAlgo()` reutilizable. Es la forma idiomática de compartir comportamiento (lo que antes hacían los HOCs/render-props).
- **Reactividad por re-render**: cuando cambia el estado o las props, React vuelve a ejecutar la función del componente completa, genera un nuevo árbol virtual y lo *diffea* contra el anterior (reconciliación) para tocar el DOM mínimo. Las `key` estables en listas son críticas para que el diff sea correcto.
- **Estado: arriba y abajo**: los datos fluyen de padre a hijo (one-way data binding). Para "subir" se pasan callbacks. Si dos componentes comparten estado, se hace *lifting state up* al ancestro común.
- **Ecosistema** (React es deliberadamente minimalista, lo demás se ensambla):
  - **Next.js**: el meta-framework de referencia. App Router, file-based routing, SSR/SSG/ISR, Server Actions y **React Server Components** (componentes que se renderizan en el servidor y mandan cero JS al cliente).
  - Estado global: **Zustand**, Jotai, Redux Toolkit.
  - Data fetching/cache: **TanStack Query** (antes React Query).
  - Build/dev: **Vite** es hoy el estándar para SPAs (Create React App está oficialmente retirado).
  - Formularios: React Hook Form. Estilos: Tailwind, CSS Modules, styled-components.
- **React 19 / 2026**: el **React Compiler** memoiza automáticamente y reduce la necesidad manual de `useMemo`/`useCallback`; nuevo hook `use()` para leer promesas y contexto; `useActionState`, `useOptimistic` y `useFormStatus` para flujos de formularios/mutaciones; mejoras en Suspense para data fetching.

# Mis notas
-
-
-

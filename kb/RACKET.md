# Resumen

- Racket es un dialecto moderno de Lisp/Scheme, multiparadigma (con fuerte enfasis en programacion funcional) y orientado a la creacion de lenguajes (PLT = Programming Language Theory).
- Su lema es "A programmable programming language": viene con baterias incluidas (IDE DrRacket, gestor de paquetes `raco`, librerias para GUI, web, graficos, etc.).
- Se usa mucho en el ambito academico para aprender como funcionan los lenguajes (es la base del famoso libro *How to Design Programs*) y para prototipar DSLs (Domain-Specific Languages) gracias a su sistema de macros.

# Destacado

- **Sintaxis de parentesis (s-expressions):** todo es una lista donde el primer elemento es el operador. La notacion es prefija, no infija.
  ```racket
  (+ 1 2 3)            ; => 6  (en JS seria 1 + 2 + 3)
  (define (cuadrado x) (* x x))
  (cuadrado 5)         ; => 25
  ```
  - El codigo *es* una estructura de datos (homoiconicidad): un programa Racket se representa con las mismas listas que manipulas en runtime. Eso es lo que hace las macros tan potentes.

- **Programacion funcional de primera clase:** funciones como valores, closures, recursion (con optimizacion de tail calls real, no como en JS), e inmutabilidad por defecto en muchas estructuras.
  ```racket
  (map (lambda (x) (* x 2)) '(1 2 3))   ; => '(2 4 6)
  (filter even? '(1 2 3 4))             ; => '(2 4)
  (foldl + 0 '(1 2 3 4))                ; => 10
  ```

- **Macros higienicas (su superpoder):** a diferencia de los macros textuales de C, las macros de Racket operan sobre la sintaxis (AST) y respetan el scope ("higiene", no capturan variables por accidente). Te permiten crear sintaxis nueva, no solo funciones.
  - `define-syntax`, `syntax-rules`, `syntax-parse` para los casos avanzados.
  - Con esto puedes inventar tu propio lenguaje encima de Racket.

- **#lang: lenguajes a la carta:** la primera linea de un fichero declara que lenguaje usas. `#lang racket` es el completo, `#lang racket/base` el minimo, y existen `#lang typed/racket` (con tipos estaticos), `#lang scribble` (documentacion), `#lang datalog`, etc. Puedes definir tu propio `#lang`.

- **Typed Racket:** variante con tipado estatico gradual, util si vienes del mundo TypeScript y quieres garantias en tiempo de compilacion sin abandonar el ecosistema.

- **Tooling incluido:**
  - **DrRacket:** IDE pedagogico con REPL integrado, debugger paso a paso y visualizador de macros.
  - **`raco`:** la CLI todo-en-uno (`raco pkg install`, `raco test`, `raco exe` para compilar a ejecutable nativo).
  - **Scribble:** sistema de documentacion donde la doc tambien es codigo Racket.

- **Estado en 2026:** proyecto vivo y maduro (version 8.x, sobre la maquina virtual **Chez Scheme** desde Racket 8, lo que mejoro bastante el rendimiento). Comunidad mas pequena y academica que la de los lenguajes mainstream, pero muy activa en PLT y como herramienta de ensenanza.

- **Estructuras de datos:** listas (`'(1 2 3)`), pares/cons, vectores, hash tables (`hash`, `make-hash`), y `struct` para tipos compuestos. La quote `'` evita la evaluacion y trata lo que sigue como dato literal.

# Mis notas
-
-
-

# Resumen

- **Ruby** es un lenguaje de programación dinámico, interpretado y de tipado fuerte, creado por Yukihiro "Matz" Matsumoto en 1995, diseñado explícitamente para **optimizar la felicidad y productividad del desarrollador** ("developer happiness").
- Es **puramente orientado a objetos**: literalmente todo es un objeto (incluso un número o `nil` responde a métodos).
- Su uso estrella es **Ruby on Rails**, el framework web que popularizó la filosofía de "convención sobre configuración" e influyó en medio ecosistema web (incluido buena parte de lo que hoy damos por sentado en JS/Angular).
- Versión de referencia a 2026: la serie **3.x** (3.4 estable, con el compilador JIT **YJIT** maduro y mejoras de concurrencia).

# Destacado

- **Todo es un objeto, todo es una expresión.**
  - No hay primitivos: `5.times { ... }`, `"hola".upcase`, `nil.to_s`. Hasta las clases son objetos (instancias de `Class`).
  - Casi todo *devuelve* un valor: un `if`, un `case` o el último statement de un método. No hace falta `return` explícito.
  ```ruby
  estado = if activo then "on" else "off" end
  ```

- **Bloques, procs y lambdas** son la joya del lenguaje (el equivalente a las funciones/callbacks de JS, pero idiomático).
  - Un bloque se pasa a un método con `{ ... }` o `do ... end`:
  ```ruby
  [1, 2, 3].map { |n| n * 2 }       # => [2, 4, 6]
  usuarios.select { |u| u.activo? } # filter
  3.times { |i| puts i }
  ```
  - El método decide qué hacer con el bloque vía `yield` o un parámetro `&block`. Es la base de los iteradores: en Ruby casi nunca escribes un `for`.

- **Sintaxis "humana" y convenciones fuertes.**
  - Métodos terminados en `?` devuelven booleano (`empty?`, `nil?`, `active?`) y en `!` mutan/son la versión "peligrosa" (`sort!` vs `sort`).
  - Paréntesis y `;` opcionales; `snake_case` para métodos/variables, `CamelCase` para clases, `MAYUS` para constantes.
  - Símbolos (`:nombre`) = identificadores inmutables y ligeros, muy usados como claves de hash y nombres.

- **Hashes** = estructura clave-valor central:
  ```ruby
  user = { nombre: "Ana", edad: 30 }
  user[:nombre]   # => "Ana"
  ```

- **Duck typing y metaprogramación potente.**
  - "Si camina como un pato y grazna como un pato, es un pato": no importa la clase, sino que responda al método.
  - `method_missing`, `define_method`, `respond_to?`, monkey patching (reabrir clases existentes). Rails está construido sobre esta magia (los `find_by_email` que no existen hasta que se invocan).

- **Clases abiertas y mixins con `module`.**
  - Herencia simple, pero composición vía `include`/`extend` de módulos (parecido a las interfaces con implementación / mixins).
  - `attr_accessor`, `attr_reader`, `attr_writer` generan getters/setters automáticamente.

- **Ruby on Rails** — el motivo por el que la mayoría aprende Ruby.
  - **Convención sobre configuración (CoC)** y **DRY**: si sigues las convenciones de nombres, casi no escribes config. Una clase `User` mapea a la tabla `users` sin que se lo digas.
  - **MVC** completo, **Active Record** (ORM elegante), migraciones, generadores (`rails generate`), y desde Rails 7+ el stack **Hotwire (Turbo + Stimulus)** que apuesta por "HTML sobre el cable" y menos SPA. Rails 8 (2024) trae Solid Queue/Cache/Cable y autenticación incorporada.

- **Gems y Bundler** — el gestor de paquetes.
  - Una **gem** es una librería reutilizable; se publican en [rubygems.org](https://rubygems.org).
  - El `Gemfile` declara dependencias y **Bundler** resuelve/instala versiones (`bundle install`), con `Gemfile.lock` para builds reproducibles. Es el equivalente conceptual a `package.json` + `npm`/`lockfile`.

- **Herramientas del ecosistema:** `irb`/`pry` (REPL), **RSpec** (testing BDD), **rbenv**/**RVM** (gestión de versiones), **RuboCop** (linter/formatter), **Sorbet**/RBS (tipado gradual opcional, la respuesta de Ruby a TypeScript).

- **Rendimiento y concurrencia (estado 2026):**
  - **YJIT** (escrito en Rust) acelera mucho el código real sin cambiar nada.
  - El **GIL/GVL** limita el paralelismo de threads; para CPU se usan procesos o **Ractors** (actores con memoria aislada). **Fibers**/async manejan bien la concurrencia de I/O.

# Mis notas
-
-
-

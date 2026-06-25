# Resumen
- Java es un lenguaje de proposito general **orientado a objetos**, de **tipado estatico y fuerte**, compilado a *bytecode* que corre sobre la **JVM** (Java Virtual Machine).
- Su lema historico es **"write once, run anywhere"**: compilas una vez a bytecode y ese mismo `.jar` corre en Windows, Linux o macOS sin recompilar, gracias a la JVM.
- Es la columna vertebral de muchisimo backend empresarial, sistemas Android (historicamente), big data (Hadoop, Spark, Kafka) y servicios de gran escala.
- A 2026 la version vigente es **Java 25 (LTS)**, lanzada en septiembre de 2025; las anteriores LTS de referencia son 21, 17, 11 y 8 (esta ultima aun muy presente en legado).

# Destacado
- **OOP "de verdad" y obligatoria**: todo vive dentro de clases. No existe (clasicamente) la funcion suelta como en JS; hasta el `main` es un metodo estatico dentro de una clase. Tiene `class`, `interface`, `abstract`, herencia, `extends`/`implements`, modificadores de acceso (`public`/`private`/`protected`) reales y aplicados por el compilador.
  ```java
  public class Usuario {
      private String nombre;
      public Usuario(String nombre) { this.nombre = nombre; }
      public String getNombre() { return nombre; }
  }
  ```
- **Tipado estatico y verboso**: declaras tipos en todo. Desde Java 10 hay inferencia local con `var` (parecida al `var` de C# o al `let` tipado de TS), pero la fama de verboso viene de las firmas largas, los getters/setters y el ceremonial.
  ```java
  var lista = new ArrayList<String>();   // tipo inferido localmente
  Map<String, Integer> edades = new HashMap<>();
  ```
- **La JVM es la estrella**: el compilador (`javac`) genera bytecode `.class`; la JVM lo ejecuta con un **JIT** (Just-In-Time) que optimiza en caliente las rutas mas usadas. Esto da rendimiento alto en procesos de larga vida, a costa de un *warm-up* inicial. Tambien hay **GC** (garbage collector) automatico, con varios algoritmos elegibles (G1 por defecto, ZGC/Shenandoah para baja latencia).
- **Plataforma, no solo lenguaje**: sobre la JVM corren tambien Kotlin, Scala, Groovy y Clojure. Aprender la JVM rentabiliza mas que solo Java.
- **`record` (Java 16+)**: tipos de datos inmutables concisos, el antidoto al boilerplate de getters. Equivalente al `record` de C# o a un objeto inmutable bien tipado.
  ```java
  public record Punto(int x, int y) {}   // genera constructor, getters, equals, hashCode, toString
  ```
- **Streams API (Java 8+)**: programacion funcional sobre colecciones, el primo de los array methods de JS pero **lazy** y encadenable.
  - `filter` ≈ `filter`, `map` ≈ `map`, `reduce` ≈ `reduce`; ademas `collect`, `sorted`, `distinct`, `flatMap`.
  ```java
  List<String> adultos = usuarios.stream()
      .filter(u -> u.getEdad() >= 18)
      .map(Usuario::getNombre)
      .collect(Collectors.toList());
  ```
- **Lambdas e interfaces funcionales (Java 8+)**: `u -> u.getEdad()` son funciones flecha, pero por debajo son instancias de interfaces como `Function`, `Predicate`, `Consumer`. No son "funciones de primera clase" tan libres como en JS: siempre hay un tipo funcional detras.
- **Genericos**: `List<String>`, `Map<K,V>`. Cuidado con el **type erasure**: los genericos solo existen en compilacion y se "borran" en runtime (a diferencia de C#, donde son reificados).
- **Concurrencia**: hilos reales (`Thread`), `ExecutorService`, `CompletableFuture` (el analogo mas cercano a las `Promise`). Lo grande reciente: los **Virtual Threads** (Project Loom, estables desde Java 21), hilos ligerisimos que permiten escribir codigo bloqueante simple que escala como si fuera asincrono.
- **Ecosistema y tooling**:
  - **Spring / Spring Boot**: el framework dominante para backend (APIs REST, inyeccion de dependencias, JPA/Hibernate como ORM, seguridad). Es practicamente sinonimo de "backend Java moderno".
  - **Maven** y **Gradle**: gestores de build y dependencias. Maven usa `pom.xml` (declarativo, XML); Gradle usa Groovy/Kotlin DSL (mas flexible). Son el equivalente a `package.json` + npm, pero tambien compilan y empaquetan.
  - Repositorio central: **Maven Central** (su "npm registry").
  - **JUnit** para tests, **JavaDoc** para documentacion.
- **Distribuciones de la JVM**: ya no solo Oracle. **Eclipse Temurin (Adoptium)**, Amazon Corretto, Azul Zulu y GraalVM son builds OpenJDK habituales; GraalVM ademas permite compilacion **AOT a binario nativo** (arranque casi instantaneo, ideal para serverless).
- **Checked exceptions**: rasgo unico, el compilador te obliga a manejar o declarar ciertas excepciones con `throws`. Util pero polemico por la verbosidad que genera.

# Mis notas
-
-
-

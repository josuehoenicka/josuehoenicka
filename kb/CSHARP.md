# Resumen
- C# es el lenguaje principal del ecosistema **.NET** (Microsoft): de proposito general, **tipado fuerte y estatico**, compilado y orientado a objetos.
- Sirve para casi todo: APIs y backends web (**ASP.NET Core**), apps de escritorio, juegos (**Unity**), apps moviles/cross-platform (**.NET MAUI**), servicios cloud y herramientas de consola.
- A 2026 la version vigente es **C# 14 sobre .NET 10** (LTS), multiplataforma de verdad (Windows, Linux, macOS) y open source.

# Destacado
- **Tipado fuerte y estatico**: las variables tienen tipo en compilacion. Hay inferencia con `var` (como `let` en TS pero sin perder el tipo), y a partir de C# 9 existen los `record` para tipos inmutables orientados a datos.
  ```csharp
  var nombre = "Josue";        // string inferido
  int edad = 30;               // tipo explicito
  record Usuario(string Nombre, int Edad);  // tipo inmutable conciso
  ```
- **OOP completa**: clases, herencia, interfaces, `abstract`, `sealed`, genericos (`List<T>`, `Dictionary<K,V>`). Mucho mas formal que las clases de JS, que por debajo siguen siendo prototipos.
- **Propiedades (properties)**: en vez de getters/setters manuales, hay sintaxis de propiedad con `get`/`set`. Es el equivalente "de primera clase" a lo que en JS haces con `Object.defineProperty` o `get`/`set` en clases.
  ```csharp
  public string Nombre { get; set; }              // auto-property
  public string Slug => Nombre.ToLower();          // solo lectura (expression-bodied)
  public int Edad { get; init; }                   // solo asignable al construir
  ```
- **LINQ (Language Integrated Query)**: consultas funcionales sobre colecciones, casi calcadas a los array methods de JS pero perezosas (lazy) y encadenables.
  - `Where` ≈ `filter`, `Select` ≈ `map`, `Aggregate` ≈ `reduce`, `Any`/`All`, `OrderBy`, `GroupBy`, `First`/`FirstOrDefault`.
  ```csharp
  var adultos = usuarios
      .Where(u => u.Edad >= 18)
      .Select(u => u.Nombre)
      .ToList();
  ```
- **async/await**: C#/.NET fue de donde JavaScript tomo prestada la idea. Aqui `await` opera sobre `Task<T>` (el analogo de `Promise<T>`), y la palabra `async` marca el metodo igual que en JS.
  ```csharp
  async Task<string> GetDatosAsync() {
      var resp = await httpClient.GetStringAsync(url);
      return resp;
  }
  ```
- **Nullable**: control explicito de nulos. Los **value types** llevan `?` para admitir null (`int?`), y desde C# 8 existen los **nullable reference types** (`string?` vs `string`), donde el compilador te avisa de posibles `NullReferenceException`. Operadores utiles: `?.` (null-conditional, igual que JS), `??` y `??=` (null-coalescing, tambien igual que JS).
- **Ecosistema y tooling**: NuGet (gestor de paquetes, su "npm"), `dotnet` CLI (`dotnet new`, `dotnet run`, `dotnet test`), Entity Framework Core (ORM), y JIT + AOT nativo para compilar a binarios. Top-level statements permiten un `Program.cs` sin `Main` explicito, parecido a un script.
- **Pattern matching y switch expressions**: muy expresivo, con `is`, deconstruccion y guardas, mas potente que el `switch` clasico de JS.

# Mis notas
-
-
-

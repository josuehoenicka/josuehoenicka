# Resumen

- Lenguaje de programación de **propósito general**, interpretado, de alto nivel y multiparadigma (imperativo, orientado a objetos y con toques funcionales).
- Su sello es la **legibilidad**: sintaxis limpia, indentación obligatoria (los bloques se delimitan por espacios, no por `{}`) y filosofía "una forma obvia de hacer las cosas" (el *Zen de Python*, `import this`).
- **Tipado dinámico y fuerte**: no declaras el tipo de las variables, pero no mezcla tipos a lo loco (`"2" + 2` lanza error en vez de improvisar como JS).
- Es el lenguaje rey de **datos / IA / machine learning**, scripting, automatización, backend (Django, FastAPI) y *glue code*. En 2026 la versión estable de referencia es la rama **3.13/3.14** (Python 2 lleva muerto desde 2020).

# Destacado

- **Interpretado, pero compila a bytecode**: CPython (la implementación de referencia) compila tu `.py` a bytecode (`.pyc`) y lo ejecuta sobre una máquina virtual. No es "compilado a binario" como Go, pero tampoco es texto crudo línea a línea.

- **Tipado dinámico con type hints opcionales (PEP 484)**: el tipado sigue siendo dinámico en runtime, pero desde hace años puedes anotar tipos como en TypeScript. Las anotaciones **no se chequean al ejecutar**; las valida una herramienta externa (mypy, pyright/Pylance, o el nuevo verificador en Rust **ty** de Astral). Mismo espíritu que TS: el tipo es ayuda de diseño, no algo que viva en runtime.
  ```python
  def saludar(nombre: str, veces: int = 1) -> str:
      return f"Hola {nombre}\n" * veces
  ```

- **Estructuras de datos nativas potentes**:
  - `list` → array dinámico ordenado y mutable: `[1, 2, 3]`.
  - `dict` → mapa clave-valor (hash map), ordenado por inserción desde 3.7: `{"rol": "dev"}`.
  - `tuple` → como una lista pero inmutable: `(lat, lon)`.
  - `set` → conjunto de elementos únicos sin orden: `{1, 2, 3}`.

- **List / dict / set comprehensions**: la sintaxis estrella para construir colecciones de forma declarativa, en una sola línea, sin `for` + `append` manual.
  ```python
  cuadrados = [n*n for n in range(10)]              # list
  pares     = [n for n in range(10) if n % 2 == 0]  # con filtro
  por_id    = {u["id"]: u for u in usuarios}        # dict comprehension
  unicos    = {p.pais for p in personas}            # set comprehension
  ```

- **Funciones de primera clase y lo funcional**: las funciones son objetos; tienes `lambda`, `map()`, `filter()`, `sorted(key=...)` y el módulo `functools` (`reduce`, `partial`, `cache`). Aun así, el idioma idiomático suele preferir comprehensions a `map`/`filter`.

- **Entornos virtuales (venv)**: cada proyecto vive aislado con sus propias dependencias y versión, para que no se pisen entre sí (no hay equivalente a `node_modules` por carpeta: por defecto Python instala global, y el venv es lo que recrea ese aislamiento).
  ```bash
  python -m venv .venv          # crea el entorno
  source .venv/bin/activate     # actívalo (Windows: .venv\Scripts\activate)
  ```

- **pip y el empaquetado**:
  - `pip install requests` instala desde **PyPI** (el "npm de Python").
  - `requirements.txt` ≈ lista de dependencias; `pyproject.toml` es el formato moderno y estándar para definir el proyecto y sus deps.
  - En 2026 la herramienta que se ha comido el ecosistema es **`uv`** (de Astral, escrita en Rust): reemplaza a `pip` + `venv` + `pip-tools` siendo órdenes de magnitud más rápida (`uv venv`, `uv pip install`, `uv run`). Es el cambio de tooling más relevante de los últimos años.

- **Ecosistema gigantesco**:
  - **Datos / IA**: NumPy, pandas, **PyTorch**, scikit-learn, polars; y casi todo el stack de LLMs/agentes (los SDKs de OpenAI, Anthropic, LangChain) nace primero en Python.
  - **Web/backend**: **FastAPI** (async, type hints como contrato de la API), Django, Flask.
  - **Automatización/scripting**: `requests`, `httpx`, `subprocess`, BeautifulSoup, scrapers, tareas de sysadmin.

- **El GIL (Global Interpreter Lock)**: históricamente CPython solo ejecuta un hilo de bytecode Python a la vez, así que el `threading` no da paralelismo real para CPU (sí sirve para I/O). Para CPU se usa `multiprocessing`. **Novedad 2026**: Python 3.13 introdujo el build *free-threaded* (sin GIL) de forma experimental, abriendo la puerta al paralelismo real con hilos.

- **`async`/`await` nativo**: Python tiene corrutinas y un event loop (`asyncio`) con la **misma sintaxis** `async def` / `await` que ya usas en JS. FastAPI y httpx lo aprovechan para I/O concurrente sin bloquear.

- **f-strings**: interpolación de strings legible y rápida, calcada al *template literal* de JS pero con `f"..."` y `{expr}`:
  ```python
  nombre = "Josue"
  print(f"Hola {nombre}, tienes {2026 - 1998} años")
  ```

# Mis notas
-
-
-

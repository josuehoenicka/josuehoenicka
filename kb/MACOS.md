# Resumen
- macOS es el sistema operativo de escritorio de Apple para Mac (chips Apple Silicon M1–M4 / Intel en equipos viejos). Su núcleo (XNU + Darwin) es **Unix certificado (POSIX)**, así que por debajo es un Unix de verdad, no una imitación.
- Para un dev web es un punto dulce: la comodidad y el hardware de Apple (pantalla, trackpad, batería, build de la app de escritorio) con una terminal Unix nativa donde corre casi todo lo del mundo Linux/servidor.
- Versión actual (2026): **macOS 26 "Tahoe"** (Apple saltó a numeración por año en 2025, como iOS). Shell por defecto: **zsh**. Gestor de paquetes de facto: **Homebrew** (`brew`).
- Es el SO que necesitas si quieres compilar apps iOS/macOS (Xcode solo existe aquí), pero también es la base diaria de muchísimos devs JS/Node/Angular.

# Destacado
- **Unix por debajo, no Linux**: el userland viene de BSD, no de GNU. Esto importa en detalles: el `sed`, `grep` y `date` que trae son la versión BSD (banderas distintas a las de Linux). Si un script falla, suele ser eso. Solución típica: `brew install gnu-sed grep coreutils` para tener las herramientas GNU.

- **zsh como shell por defecto** (desde Catalina, 2019). Config en `~/.zshrc`. El combo casi universal entre devs es **Oh My Zsh** + un prompt como Starship o Powerlevel10k para git status, versión de Node, etc. en el prompt.
  ```zsh
  # ~/.zshrc típico
  eval "$(/opt/homebrew/bin/brew shellenv)"   # mete brew en el PATH
  export PATH="$HOME/.npm-global/bin:$PATH"
  alias ng="npx ng"
  ```

- **Homebrew (`brew`)**: el `npm` del sistema operativo. Instala CLIs, lenguajes y servicios.
  - `brew install node git postgresql redis` → herramientas de línea de comandos.
  - `brew install --cask google-chrome visual-studio-code docker` → apps de escritorio (los "casks" son apps con GUI).
  - `brew services start postgresql` → corre Postgres/Redis/Mongo como servicio en segundo plano (tu stack de DB local sin Docker si quieres).
  - En Apple Silicon Homebrew vive en `/opt/homebrew`; en Intel vivía en `/usr/local`. Esa diferencia de ruta es la causa #1 de "brew: command not found".

- **Apple Silicon (ARM64) y Rosetta 2**: los Mac modernos son ARM, no x86. Rosetta 2 traduce binarios x86 al vuelo, casi transparente. Relevante cuando una imagen de Docker o un binario solo viene en `amd64`: puede tirar warning de plataforma o ir más lento. Node, Angular CLI y casi todo el ecosistema JS ya son ARM nativos.

- **Terminal y herramientas**:
  - App **Terminal** nativa, pero la mayoría usa **iTerm2** o **Warp/Ghostty**.
  - `open .` abre Finder en la carpeta actual; `open archivo.html` lo abre con la app por defecto; `pbcopy`/`pbpaste` conectan el portapapeles con el shell (`cat token.txt | pbcopy`).
  - **Xcode Command Line Tools** (`xcode-select --install`): trae `git`, `clang`, `make`, headers de compilación. Es prerequisito casi de todo (incluso de Homebrew y de paquetes npm que compilan nativo).

- **Sistema de archivos y peculiaridades**:
  - **APFS**, case-insensitive por defecto (¡ojo!): `Components/` y `components/` son lo mismo. Esto muerde en deploys a Linux donde un import con mayúscula mal puesta funciona en tu Mac y rompe en CI/producción.
  - `~/Library` es la carpeta de configuración de apps (equivale al "AppData" o `~/.config`). Está oculta; se abre con `Cmd+Shift+.` en Finder.
  - **Gatekeeper / firma de código**: por seguridad bloquea apps no firmadas; se libera por Ajustes → Privacidad y seguridad, o `xattr -dr com.apple.quarantine app`.

- **Integración y productividad para devs**:
  - **Spotlight** (`Cmd+Espacio`) como lanzador; muchos lo cambian por **Raycast** o Alfred (con extensiones para devs).
  - Gestión de ventanas, espacios (escritorios virtuales) y atajos sólidos; trackpad con gestos.
  - **Apple Silicon = batería y rendimiento**: compilar Angular, correr Node y tener Docker + el navegador abierto sin que el ventilador despegue.

- **Docker en Mac**: no hay kernel Linux nativo, así que **Docker Desktop** corre una VM Linux ligera por debajo (o alternativas como OrbStack, muy popular en 2026 por ser más rápida y liviana). Tus contenedores siguen siendo Linux; el Mac solo los hospeda.

- **Versionado de Node**: en vez de instalar Node con brew y pelearte con permisos, lo normal es **nvm**, **fnm** o **Volta** para tener varias versiones y cambiar por proyecto (útil cuando un proyecto Angular viejo pide Node 18 y otro Node 22).

# Mis notas
-
-
-

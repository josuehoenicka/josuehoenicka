# Resumen

- **Windows** es el sistema operativo de escritorio de Microsoft y, con diferencia, el mas usado del mundo en PCs (cuota dominante, por delante de macOS y Linux en el escritorio).
- Es un SO de proposito general: gestiona procesos, memoria, ficheros (NTFS), drivers y la interfaz grafica; tu lo usas para programar, navegar, jugar y ofimatica sobre el mismo equipo.
- La version vigente en 2026 es **Windows 11** (Windows 10 quedo sin soporte estandar en octubre de 2025). El kernel sigue siendo **Windows NT**.
- Para un dev web hoy es una plataforma totalmente viable gracias a **WSL2** (Linux real dentro de Windows), **PowerShell**, **Windows Terminal** y gestores de paquetes tipo **winget**.

# Destacado

- **PowerShell** (el shell moderno, sucesor de `cmd.exe`):
  - No es un shell de texto plano como Bash: **trabaja con OBJETOS .NET**, no con strings. Cada comando (cmdlet) devuelve objetos con propiedades, y los conectas por pipe pasando objetos enteros, no lineas de texto.
  - Cmdlets con convencion `Verbo-Sustantivo`: `Get-Process`, `Get-ChildItem` (el `ls`), `Set-Location` (el `cd`), `Where-Object`, `Select-Object`.
  - Como devuelve objetos, filtras por propiedad sin parsear: `Get-Process | Where-Object CPU -gt 100 | Select-Object Name, CPU`. No necesitas `grep`/`awk`/`cut` para extraer campos.
  - Dos sabores: el viejo **Windows PowerShell 5.1** (preinstalado, sobre .NET Framework) y **PowerShell 7+** (multiplataforma, el comando es `pwsh`, sobre .NET moderno). En 2026 usa `pwsh`.

- **WSL2 (Windows Subsystem for Linux)** — la pieza clave para desarrollo:
  - Corre una **distro Linux real** (Ubuntu, Debian, etc.) con un kernel Linux genuino dentro de una VM ligera, integrada de forma transparente con Windows. No es una emulacion ni una capa de traduccion como WSL1.
  - Te da `bash`, `apt`, `node`, `git` y todo el toolchain Unix nativo, pero compartiendo red, ficheros y portapapeles con Windows.
  - **Interoperabilidad**: desde Windows accedes a los ficheros de la distro en `\\wsl$\Ubuntu\...`; desde Linux montas los discos de Windows en `/mnt/c/...`. Puedes invocar binarios cruzados (`explorer.exe .` desde Linux, o `wsl ls` desde PowerShell).
  - **Regla de rendimiento**: guarda tu proyecto DENTRO del filesystem de Linux (`~/proyecto`), NO en `/mnt/c/...`. El cruce entre filesystems Windows<->Linux es lento y mata el watch/hot-reload (clave para `ng serve`, Vite, n8n).
  - **VS Code** se conecta a WSL con la extension Remote-WSL: editas en Windows con la GUI, pero el codigo, el terminal y Node corren en Linux. Es el setup estandar de un dev web en Windows hoy.

- **Gestores de paquetes** (instalas software por linea de comandos, estilo `apt`/`brew`):
  - **winget** — el gestor OFICIAL de Microsoft, ya preinstalado en Windows 11. `winget install Git.Git`, `winget upgrade --all`. Es la opcion por defecto.
  - **Chocolatey (choco)** — el veterano de la comunidad, repositorio enorme. `choco install nodejs git -y`. Muy usado en CI y scripts de bootstrap.
  - **Scoop** — alternativa que instala en el espacio del usuario (sin admin), ideal para herramientas de dev portables.

- **Windows Terminal**: terminal moderno con pestañas, paneles divididos, GPU rendering y perfiles. Reune en una sola ventana PowerShell, cmd, WSL/Ubuntu y Azure Cloud Shell. Sustituye a la vieja consola `conhost`.

- **Sistema de ficheros y rutas** (los choques tipicos viniendo de Unix):
  - Rutas con backslash y letra de unidad: `C:\Users\josue\proyecto`. En PowerShell el separador de PATH es `;` (no `:` como en Unix).
  - **Saltos de linea CRLF** (`\r\n`) frente a LF de Unix: causa de bugs clasicos en Git y scripts. Por eso `core.autocrlf` y el `.gitattributes`.
  - Filesystem **case-insensitive** por defecto (`Archivo.ts` == `archivo.ts`), al reves que Linux. Rompe builds que en local pasan y en CI (Linux) fallan por un import con mayuscula mal puesta.
  - **NTFS** es el filesystem nativo (permisos ACL, journaling, enlaces simbolicos con privilegios).

- **Herramientas de dev nativas**: **Visual Studio Code** (el editor multiplataforma de facto) y **Visual Studio** (IDE pesado, sobre todo .NET/C++). **Node.js**, **Git** y **Docker Desktop** corren todos perfectamente, y Docker Desktop usa WSL2 como backend.

- **Capas de la plataforma (2026)**:
  - **APIs**: la vieja **Win32** (C nativo) y la moderna **WinUI 3 / WinAppSDK** para apps de escritorio.
  - **Empaquetado**: **MSIX** es el formato moderno de instalador; conviven con los clasicos `.exe`/`.msi`.
  - **IA integrada**: **Copilot** esta incrustado en el SO, y los **Copilot+ PCs** llevan NPU para inferencia local de modelos.

# Mis notas
-
-
-

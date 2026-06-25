# Resumen

- **Linux** es una familia de sistemas operativos de codigo abierto tipo Unix construidos alrededor del **kernel Linux** (creado por Linus Torvalds en 1991). El kernel es la pieza central que habla con el hardware; lo demas (shell, comandos, librerias) lo aporta sobre todo el ecosistema **GNU** y cada distribucion.
- Una **distribucion (distro)** = kernel + gestor de paquetes + utilidades + politica de actualizaciones. Ubuntu, Debian, Fedora, Arch, Alpine... todas comparten el mismo kernel pero empaquetan el resto distinto.
- Es el sistema que mueve practicamente todo el backend del mundo: servidores web, la nube, contenedores Docker, CI/CD y dispositivos embebidos. Si despliegas algo, casi seguro corre sobre Linux aunque desarrolles en Mac o Windows.
- Para un dev web no es "otro SO": es el entorno por defecto de tus contenedores, tus servidores y tus pipelines. Saber moverte por la terminal de Linux es saber operar donde vive tu app en produccion.

# Destacado

- **Kernel vs distro (la distincion base)**:
  - El **kernel** gestiona procesos, memoria, sistema de ficheros, red y drivers. Es uno solo, versionado (en 2026 anda por la serie 6.x).
  - La **distro** es el "sabor" que envuelve ese kernel con un gestor de paquetes y un set de utilidades. Cambias de Ubuntu a Alpine y el kernel es el mismo; cambia como instalas software y que viene preinstalado.
  - Distros que te importan como dev: **Ubuntu/Debian** (servidores, base de muchas imagenes Docker), **Alpine** (imagenes minimas de ~5 MB, la favorita para contenedores), **Fedora/RHEL** (entornos enterprise).

- **Shell (bash / zsh)**: el interprete de comandos, tu interfaz de texto con el sistema. Es a la vez un REPL y un lenguaje de scripting.
  - **bash** es el estandar historico y el que asumen casi todos los scripts (`#!/bin/bash`). **zsh** es el default en macOS y muy popular por su autocompletado y plugins (oh-my-zsh).
  - Conceptos clave: variables (`NAME="josue"`, se leen con `$NAME`), tuberias y redireccion:
    ```bash
    cat access.log | grep "ERROR" | wc -l   # cuenta lineas con ERROR
    npm run build > salida.txt 2>&1          # stdout y stderr a un fichero
    cmd1 && cmd2                             # cmd2 solo si cmd1 fue OK (exit 0)
    ```
  - Cada proceso devuelve un **exit code**: `0` = exito, cualquier otro = error. Es lo que CI usa para decidir si tu paso paso o fallo.

- **Sistema de ficheros (FHS)**: todo cuelga de la raiz `/` (no hay `C:\`). Es un solo arbol; los discos y volumenes se "montan" en carpetas.
  - `/etc` configuracion del sistema · `/var` datos variables y **logs** (`/var/log`) · `/home/usuario` tu carpeta · `/usr/bin` y `/bin` binarios · `/tmp` temporal · `/opt` software de terceros.
  - **Todo es un fichero**: discos, dispositivos e incluso procesos se exponen como ficheros (`/dev`, `/proc`, `/sys`). Esa idea unifica como interactuas con el sistema.
  - Rutas absolutas (`/var/log/nginx`) vs relativas (`./dist`, `../`), `~` es tu home.

- **Permisos**: cada fichero tiene **owner / group / others** y tres bits **r** (read) **w** (write) **x** (execute).
  ```bash
  ls -l app.sh        # -rwxr-xr-- 1 josue staff ...
  chmod +x deploy.sh  # hazlo ejecutable
  chmod 644 .env      # rw para owner, r para el resto (notacion octal)
  chown www-data:www-data /var/www   # cambia el dueño
  ```
  - La notacion octal: cada digito es la suma de r(4)+w(2)+x(1). `755` = `rwxr-xr-x`, `644` = `rw-r--r--`.
  - **sudo** ejecuta un comando como root (superusuario). El clasico "Permission denied" suele resolverse entendiendo permisos, no metiendo `sudo` a todo.

- **Paquetes (gestores)**: instalas software desde repositorios oficiales en vez de bajar instaladores. Es el "npm del sistema operativo".
  - Familia **Debian/Ubuntu** -> `apt`:
    ```bash
    sudo apt update          # refresca el indice de paquetes
    sudo apt install nginx   # instala
    sudo apt upgrade         # actualiza todo
    ```
  - Familia **RHEL/Fedora** -> `dnf`/`yum`; **Alpine** -> `apk`; transversal y moderno -> **Flatpak/Snap** (apps de escritorio sandboxeadas).

- **Procesos**: cada programa en ejecucion es un proceso con un **PID**. Linux es multitarea y multiusuario de verdad.
  ```bash
  ps aux | grep node    # busca procesos node
  top / htop            # monitor en vivo (CPU, RAM)
  kill -9 <PID>         # mata un proceso (SIGKILL)
  jobs / fg / bg        # control de trabajos en la shell
  node server.js &      # lanza en segundo plano
  ```
  - **Señales**: el SO comunica eventos a los procesos. `SIGTERM` (apaga con gracia, la que deberias manejar), `SIGKILL` (mata sin piedad), `SIGINT` (el Ctrl+C). Tu app deberia cerrar conexiones al recibir `SIGTERM`.

- **systemd**: el sistema de init y gestor de servicios de la mayoria de distros modernas. Es el "PID 1" que arranca y supervisa todo lo demas.
  ```bash
  systemctl status nginx     # ¿esta corriendo?
  systemctl start/stop/restart nginx
  systemctl enable nginx     # arranca solo al bootear
  journalctl -u nginx -f     # logs de ese servicio en vivo
  ```
  - Defines tus propios servicios con un fichero `.service` (`/etc/systemd/system/miapp.service`): le dices que comando lanzar, como reiniciarlo si crashea (`Restart=always`) y de que depende. Asi corre tu Node API o tu n8n como servicio gestionado, no como un proceso suelto en una terminal.

- **Base de servidores y Docker**:
  - Los contenedores Docker **comparten el kernel del host** (por eso son ligeros): un contenedor Linux es procesos aislados del host mediante **namespaces** (aislan PID, red, filesystem) y **cgroups** (limitan CPU/RAM). No es una VM, es Linux usando funciones del propio kernel para separar.
  - Por eso `FROM node:22-alpine` o `FROM debian` en tu Dockerfile es elegir una **distro Linux** como base de tu imagen. Cuando entras con `docker exec -it cont sh`, estas en una shell Linux.
  - En produccion el flujo tipico es: SSH al servidor, gestionar el servicio con systemd, leer `/var/log` o `journalctl`, y manejar permisos de ficheros (`.env`, claves SSH con `chmod 600`).

- **Otros que conviene tener en el radar (2026)**:
  - **SSH** para acceso remoto seguro (`ssh user@host`), con claves en `~/.ssh` (nunca subas la privada).
  - **Variables de entorno** (`export`, `printenv`, ficheros `.env`): el canal estandar para configurar apps y secrets sin hardcodear.
  - **WSL2** en Windows: un Linux real corriendo sobre Windows, hoy la forma normal de desarrollar "como en el servidor" desde una maquina Windows.
  - **cron** para tareas programadas (`crontab -e`), util para jobs recurrentes sin depender de tu app.

# Mis notas
-
-
-

# Resumen
- Single Board Computer (SBC): un ordenador completo del tamaño de una tarjeta de crédito que arranca un Linux real (Raspberry Pi OS, basado en Debian).
- Tiene CPU, RAM, GPU, USB, red, salida de vídeo y, lo más característico, pines GPIO para hablar con el mundo físico.
- Ideal para servidores caseros (homelab), IoT, prototipos, retro-gaming, dashboards y aprender Linux sin arriesgar tu máquina principal.
- A diferencia de un Arduino, no es un microcontrolador: es un PC de bajo consumo donde corres procesos, contenedores y servicios.

# Destacado
- **Es un ordenador, no un microcontrolador (la diferencia clave con Arduino):**
  - El Pi corre un sistema operativo multitarea (Linux), con sistema de ficheros, red TCP/IP, usuarios, `systemd`, `apt`, Node.js, Docker… Puedes hacer `ssh` y trabajar como en cualquier servidor.
  - El Arduino ejecuta UN solo programa en bucle, sin SO, sobre un microcontrolador. Es determinista y de tiempo real; el Pi no garantiza timing exacto porque el kernel reparte CPU.
  - Regla práctica: si necesitas **lógica, red, base de datos o un servidor** → Pi. Si necesitas **leer un sensor con timing preciso y muy bajo consumo** → microcontrolador (Arduino / ESP32). A menudo se combinan: ESP32 en el sensor + Pi como cerebro.

- **GPIO (General Purpose Input/Output):**
  - Cabezal de 40 pines que mezcla alimentación (3.3V / 5V), tierra (GND) y pines digitales programables, más buses como I2C, SPI y UART.
  - Atención: el Pi trabaja a **3.3V**, no a 5V. Meter 5V directo a un pin GPIO puede freír el chip.
  - Desde Linux los controlas por software; en Python lo clásico es `gpiozero`. Desde Node.js tienes librerías como `onoff` o `pigpio`:
    ```js
    // Encender un LED con Node.js (lib onoff)
    const { Gpio } = require('onoff');
    const led = new Gpio(17, 'out');   // BCM 17
    led.writeSync(1);                  // 1 = HIGH (encendido)
    ```

- **Familia y modelos (estado a 2026):**
  - **Raspberry Pi 5** (2023): el buque insignia. CPU quad-core ARM Cortex-A76, hasta 16GB RAM (variante añadida en 2025), PCIe para SSD NVMe vía HAT, dos puertos micro-HDMI 4K. Para servidores serios en casa, es la opción.
  - **Raspberry Pi 500 / 500+** (2025): el Pi 5 integrado dentro de un teclado, un mini-PC de escritorio listo para usar.
  - **Pi Zero 2 W**: diminuto y barato, con WiFi/BT, para proyectos IoT pequeños y de bajo consumo.
  - **Raspberry Pi Pico / Pico 2**: ojo, este SÍ es un microcontrolador (chip RP2040 / RP2350), la respuesta de Raspberry a Arduino. No corre Linux; programas en C o MicroPython.

- **Arranque y almacenamiento:**
  - Tradicionalmente arranca desde tarjeta microSD; el flujo estándar es usar **Raspberry Pi Imager** para grabar la imagen del OS.
  - El Imager permite preconfigurar hostname, usuario, WiFi y **habilitar SSH antes del primer arranque** → montaje "headless" (sin pantalla ni teclado), entras directo por red.
  - En el Pi 5 puedes (y conviene para servidores) arrancar desde SSD NVMe o USB: mucho más rápido y fiable que la SD, que se desgasta con escrituras.

- **Conectividad e I/O:** Ethernet Gigabit, WiFi y Bluetooth integrados (en los modelos "W"/5), varios USB, CSI para cámara y el ya mencionado GPIO. Esto lo hace perfecto como nodo siempre encendido en la red local.

- **HATs:** placas de expansión que encajan sobre el GPIO (pantallas, relés, sensores, NVMe, PoE). "Plug and play" físico para añadir hardware.

- **Casos de uso típicos en homelab:**
  - Pi-hole (bloqueador de anuncios a nivel de red / DNS), Home Assistant (domótica), servidor de archivos (Samba/NFS), Docker corriendo tus contenedores, túneles tipo Tailscale/Cloudflare Tunnel, o un runner que ejecute tus scripts y automatizaciones 24/7.

# Mis notas
-
-
-

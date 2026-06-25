# Resumen

- **Arduino** es una plataforma open-source de electronica para makers que combina **placas con microcontroladores** (hardware) y un **entorno de programacion** (software) para crear proyectos fisicos que interactuan con el mundo: leer sensores y controlar actuadores (LEDs, motores, reles, pantallas).
- Se programa en un dialecto de **C/C++** sobre un microcontrolador (chips AVR como el ATmega328P del Uno, o ARM/ESP32 en placas mas nuevas). No hay sistema operativo: tu codigo *es* lo unico que corre en la placa.
- Su gran aporte fue **bajar la barrera de entrada** al hardware: API sencilla (`digitalWrite`, `analogRead`), IDE multiplataforma y un ecosistema enorme de librerias, shields y tutoriales.

# Destacado

- **Modelo de ejecucion: `setup()` + `loop()`.** Todo sketch tiene dos funciones obligatorias:
  ```cpp
  void setup() {
    // corre UNA vez al arrancar/resetear: configuras pines, Serial, etc.
    pinMode(13, OUTPUT);
    Serial.begin(115200);
  }
  void loop() {
    // se repite para SIEMPRE, sin parar, mientras haya energia
    digitalWrite(13, HIGH);
    delay(1000);
    digitalWrite(13, LOW);
    delay(1000);
  }
  ```
  No hay `main()` visible: el framework lo provee y llama a tu `setup()` una vez y a tu `loop()` en bucle infinito.

- **Pines: digitales vs analogicos.**
  - **Digitales:** solo dos estados, `HIGH`/`LOW` (1/0, ~5V o ~3.3V / 0V). Se leen con `digitalRead()` y escriben con `digitalWrite()`. Hay que declarar su modo con `pinMode(pin, INPUT | OUTPUT | INPUT_PULLUP)`.
  - **Analogicos (entrada):** `analogRead()` usa un ADC y devuelve un rango (0–1023 en placas AVR de 10 bits) que mapea un voltaje continuo (p.ej. un potenciometro o un sensor de luz LDR).
  - **PWM (salida "analogica" simulada):** `analogWrite()` no genera voltaje real intermedio, sino una onda cuadrada con *duty cycle* variable (0–255). Sirve para regular brillo de LEDs o velocidad de motores. Solo en pines marcados con `~`.

- **Comunicacion.** Protocolos de bus que conectan la placa con sensores/modulos:
  - **Serial/UART** (`Serial.print`, `Serial.read`) — el canal estrella para depurar via USB y hablar con el PC.
  - **I2C** (`Wire.h`) — dos cables (SDA/SCL), muchos dispositivos en el mismo bus por direccion.
  - **SPI** (`SPI.h`) — mas rapido, ideal para pantallas y tarjetas SD.

- **El IDE y el ecosistema (2026).**
  - **Arduino IDE 2.x** es el oficial actual (basado en Eclipse Theia/Electron): autocompletado, debugger y **Library Manager** / **Board Manager** integrados. El viejo IDE 1.x quedo en legacy.
  - **arduino-cli** para flujos por terminal/CI, y **Arduino Cloud** para IoT (dashboards, OTA, variables sincronizadas).
  - **PlatformIO** (extension de VS Code) es la alternativa "pro" muy usada: gestion de dependencias por proyecto, multi-placa y mejor integracion con editores modernos.
  - Librerias para casi todo via gestor: `Servo`, `Adafruit_*`, `FastLED`, `ArduinoJson`, etc.

- **Familia de placas.** El **Uno R3** sigue siendo la placa de aprendizaje canonica; el **Uno R4** (2023+, micro Renesas RA4M1 de 32 bits, mas RAM y con variante WiFi/matriz LED) lo moderniza. Para conectividad/potencia se usan **ESP32** y **ESP8266** (WiFi+BT, muy populares y baratos, compatibles con el framework Arduino), **Nano**, **Mega** (mas pines) y placas con **RP2040** (Raspberry Pi Pico) tambien programables con Arduino.

- **Limitaciones que marcan el estilo de codigo.** Memoria minuscula (el Uno R3 tiene **2 KB de RAM** y 32 KB de flash), sin heap fiable (se evita `String` dinamico y `new`), un solo nucleo de ejecucion. Por eso reina el patron **non-blocking con `millis()`** en vez de `delay()`, para "hacer varias cosas a la vez" sin congelar el loop.

- **Interrupciones y tiempo.** `millis()`/`micros()` dan tiempo desde el arranque; `attachInterrupt()` permite reaccionar a eventos de hardware (un boton, un encoder) sin estar haciendo polling constante en el loop.

# Mis notas
-
-
-

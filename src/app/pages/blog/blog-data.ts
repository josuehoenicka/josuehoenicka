import { Lang } from '../../services/i18n.service';

export type Difficulty = 'easy' | 'normal' | 'hard';

export interface Article {
  id: number;
  slug: string;
  area: string;
  techs: string[];
  difficulty: Difficulty;
  youtube?: string;
  content: Partial<Record<Lang, string>>;
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: '1-flashing-led',
    area: 'Robotics',
    techs: ['Arduino', 'C++'],
    difficulty: 'easy',
    youtube: 'https://www.youtube.com/embed/s9uQptOZuOE',
    content: {
      es: `## ¿Qué hace este proyecto?

Un solo LED parpadea encendiéndose y apagándose cada segundo. Es el equivalente a imprimir "Hola Mundo" en software, pero con hardware.

## Requerimientos

1. Visual Studio Code con Arduino CLI
2. Arduino Nano (o Uno)
3. LED integrado en el pin 13, o un LED externo
4. Resistencia de 220Ω si usás un LED externo
5. Cables jumper si usás un LED externo
6. Protoboard si usás un LED externo
7. Cable USB

## Conceptos clave

- **Pin digital.** Un pin digital solo puede estar en dos estados: \`HIGH\` o \`LOW\`.

- **\`pinMode(pin, OUTPUT)\`.** Le indica al Arduino que ese pin se usará para enviar señal.

- **\`digitalWrite(pin, valor)\`.** Cambia el estado del pin a \`HIGH\` o \`LOW\`.

- **\`delay(1000)\`.** Pausa el programa 1000 milisegundos, o sea 1 segundo.

- **Resistencia.** Si usás un LED externo, la resistencia limita la corriente para no quemarlo.

## Conexiones

### Opción A: LED integrado

No necesitás cables. Solo conectá el Arduino por USB y subí el código.

### Opción B: LED externo

| Componente | Conexión |
|---|---|
| LED (pata larga +) | → Resistencia 220Ω → Pin 13 |
| LED (pata corta −) | → GND |
| GND del Arduino | → GND de la protoboard |

## Instalación

\`\`\`terminal
---mac---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./flashing-led

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./flashing-led
---linux---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./flashing-led

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./flashing-led
---windows---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano .\\flashing-led

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\flashing-led
\`\`\`

## flashing-led.ino

\`\`\`cpp
int led = 13;

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);
  delay(1000);
  digitalWrite(led, LOW);
  delay(1000);
}
\`\`\`

## Experimenta

- Cambiá \`delay(1000)\` por \`delay(200)\` para que el LED parpadee más rápido.
- Cambiá \`int led = 13\` por otro pin si usás un LED externo.
- Probá un patrón distinto, por ejemplo dos parpadeos cortos y una pausa larga.

## Notas

- Si no pasa nada, revisá que el cable USB soporte datos.
- El LED integrado puede verse tenue en algunas placas, eso es normal.
- Si usás un LED externo, respetá la polaridad y la resistencia.`,

      en: `## What does this project do?

A single LED blinks on and off every second. It is the hardware version of a "Hello World" program.

## Requirements

1. Visual Studio Code with Arduino CLI
2. Arduino Nano or Uno
3. Built-in LED on pin 13, or an external LED
4. 220Ω resistor if you use an external LED
5. Jumper wires if you use an external LED
6. Breadboard if you use an external LED
7. USB cable

## Key concepts

- **Digital pin.** A digital pin can only be \`HIGH\` or \`LOW\`.

- **\`pinMode(pin, OUTPUT)\`.** Tells the Arduino that the pin will send a signal.

- **\`digitalWrite(pin, value)\`.** Changes the pin state to \`HIGH\` or \`LOW\`.

- **\`delay(1000)\`.** Pauses the program for 1000 milliseconds, which is 1 second.

- **Resistor.** If you use an external LED, the resistor limits current so the LED is not damaged.

## Wiring

### Option A: Built-in LED

No wires are needed. Just connect the Arduino over USB and upload the code.

### Option B: External LED

| Component | Connection |
|---|---|
| LED (long leg +) | → 220Ω resistor → Pin 13 |
| LED (short leg −) | → GND |
| Arduino GND | → Breadboard GND |

## Installation

\`\`\`terminal
---mac---
# Compile
arduino-cli compile --fqbn arduino:avr:nano ./flashing-led

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./flashing-led
---linux---
# Compile
arduino-cli compile --fqbn arduino:avr:nano ./flashing-led

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./flashing-led
---windows---
# Compile
arduino-cli compile --fqbn arduino:avr:nano .\\flashing-led

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\flashing-led
\`\`\`

## flashing-led.ino

\`\`\`cpp
int led = 13;

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);
  delay(1000);
  digitalWrite(led, LOW);
  delay(1000);
}
\`\`\`

## Experiment

- Change \`delay(1000)\` to \`delay(200)\` for faster blinking.
- Change \`int led = 13\` to another pin if you use an external LED.
- Try a different pattern such as two short blinks and one long pause.

## Notes

- If nothing happens, check that the USB cable supports data.
- The built-in LED can look dim on some boards, that is normal.
- If you use an external LED, respect polarity and always use a resistor.`,

      pt: `## O que este projeto faz?

Um único LED pisca, acendendo e apagando a cada segundo. É a versão em hardware de um "Olá Mundo".

## Requisitos

1. Visual Studio Code com Arduino CLI
2. Arduino Nano ou Uno
3. LED integrado no pino 13, ou um LED externo
4. Resistor de 220Ω se você usar LED externo
5. Cabos jumper se você usar LED externo
6. Protoboard se você usar LED externo
7. Cabo USB

## Conceitos-chave

- **Pino digital.** Um pino digital só pode estar em \`HIGH\` ou \`LOW\`.

- **\`pinMode(pin, OUTPUT)\`.** Diz ao Arduino que o pino será usado para enviar sinal.

- **\`digitalWrite(pin, valor)\`.** Muda o estado do pino para \`HIGH\` ou \`LOW\`.

- **\`delay(1000)\`.** Pausa o programa por 1000 milissegundos, ou seja, 1 segundo.

- **Resistor.** Se você usar um LED externo, o resistor limita a corrente para não danificar o LED.

## Conexões

### Opção A: LED integrado

Não são necessários fios. Basta ligar o Arduino por USB e enviar o código.

### Opção B: LED externo

| Componente | Conexão |
|---|---|
| LED (perna longa +) | → Resistor 220Ω → Pino 13 |
| LED (perna curta −) | → GND |
| GND do Arduino | → GND da protoboard |

## Instalação

\`\`\`terminal
---mac---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./flashing-led

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./flashing-led
---linux---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./flashing-led

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./flashing-led
---windows---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano .\\flashing-led

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\flashing-led
\`\`\`

## flashing-led.ino

\`\`\`cpp
int led = 13;

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);
  delay(1000);
  digitalWrite(led, LOW);
  delay(1000);
}
\`\`\`

## Experimente

- Troque \`delay(1000)\` por \`delay(200)\` para piscar mais rápido.
- Troque \`int led = 13\` por outro pino se usar LED externo.
- Tente um padrão diferente, como dois piscas curtos e uma pausa longa.

## Notas

- Se nada acontecer, verifique se o cabo USB suporta dados.
- O LED integrado pode parecer fraco em algumas placas, isso é normal.
- Se usar LED externo, respeite a polaridade e sempre use resistor.`,
    },
  },
  {
    id: 2,
    slug: '2-hoenix',
    area: 'Robotics',
    techs: ['Python', 'Raspberry Pi', 'Groq', 'I2S'],
    difficulty: 'hard',
    content: {
      es: `## ¿Qué hace este proyecto?

Este robot escucha tu voz, la transcribe, genera una respuesta y la reproduce por un parlante. Usa una Raspberry Pi Zero 2 W, un micrófono I2S, un amplificador I2S y la API de Groq.

## Requerimientos

1. Visual Studio Code con acceso SSH a la Raspberry Pi
2. Raspberry Pi Zero 2 W con WiFi
3. Micrófono INMP441
4. Amplificador MAX98357A
5. Parlante de 3W
6. Cables jumper
7. Fuente o cable USB para la Pi
8. API key de Groq

## Conceptos clave

- **I2S.** Protocolo digital de audio para comunicar la Raspberry Pi con el micrófono y el amplificador.

- **Whisper.** Convierte la voz en texto.

- **LLM.** Genera la respuesta del robot a partir del texto transcripto.

- **TTS.** Convierte la respuesta en audio para reproducirla por el parlante.

- **Latencia.** Este proyecto depende de internet y de servicios externos, por eso no es instantáneo como un sketch de Arduino.

## Conexiones

### INMP441 → Raspberry Pi

| Pin INMP441 | Pin Raspberry Pi |
|---|---|
| VDD | 3.3V |
| GND | GND |
| WS | GPIO19 |
| SCK | GPIO18 |
| SD | GPIO20 |
| L/R | GND |

### MAX98357A → Raspberry Pi

| Pin MAX98357A | Pin Raspberry Pi |
|---|---|
| VIN | 5V |
| GND | GND |
| BCLK | GPIO18 |
| LRC | GPIO19 |
| DIN | GPIO21 |

## Instalación

\`\`\`terminal
---linux---
# En la Raspberry Pi
sudo apt update
sudo apt install -y python3-pip mpg123 python3-sounddevice portaudio19-dev
pip3 install groq edge-tts sounddevice numpy --break-system-packages
\`\`\`

## robot.py

\`\`\`python
import os
from groq import Groq

client = Groq(api_key=os.environ["GROQ_API_KEY"])
print("Hoenix listo")
\`\`\`

## Experimenta

- Probá primero grabar y reproducir audio antes de sumar Groq.
- Cambiá la voz del TTS para probar diferentes idiomas.
- Limitá la respuesta a una oración para acelerar el flujo.

## Notas

- Este proyecto es avanzado y depende de hardware, red y APIs externas.
- Verificá el audio de entrada y salida por separado antes de integrar todo.
- Si usás servicios en la nube, controlá cuotas y credenciales.`,

      en: `## What does this project do?

This robot listens to your voice, transcribes it, generates a reply, and plays the answer through a speaker. It uses a Raspberry Pi Zero 2 W, an I2S microphone, an I2S amplifier, and the Groq API.

## Requirements

1. Visual Studio Code with SSH access to the Raspberry Pi
2. Raspberry Pi Zero 2 W with WiFi
3. INMP441 microphone
4. MAX98357A amplifier
5. 3W speaker
6. Jumper wires
7. Power supply or USB cable for the Pi
8. Groq API key

## Key concepts

- **I2S.** Digital audio protocol used between the Raspberry Pi, microphone, and amplifier.

- **Whisper.** Turns speech into text.

- **LLM.** Generates the robot reply from the transcribed text.

- **TTS.** Turns the reply into audio for the speaker.

- **Latency.** This project depends on internet access and external services, so it is not as immediate as an Arduino sketch.

## Wiring

### INMP441 → Raspberry Pi

| INMP441 pin | Raspberry Pi pin |
|---|---|
| VDD | 3.3V |
| GND | GND |
| WS | GPIO19 |
| SCK | GPIO18 |
| SD | GPIO20 |
| L/R | GND |

### MAX98357A → Raspberry Pi

| MAX98357A pin | Raspberry Pi pin |
|---|---|
| VIN | 5V |
| GND | GND |
| BCLK | GPIO18 |
| LRC | GPIO19 |
| DIN | GPIO21 |

## Installation

\`\`\`terminal
---linux---
# On the Raspberry Pi
sudo apt update
sudo apt install -y python3-pip mpg123 python3-sounddevice portaudio19-dev
pip3 install groq edge-tts sounddevice numpy --break-system-packages
\`\`\`

## robot.py

\`\`\`python
import os
from groq import Groq

client = Groq(api_key=os.environ["GROQ_API_KEY"])
print("Hoenix ready")
\`\`\`

## Experiment

- Test audio input and output first before adding Groq.
- Change the TTS voice to try different languages.
- Limit the reply to one sentence to reduce latency.

## Notes

- This is an advanced project and depends on hardware, network, and external APIs.
- Validate audio input and output separately before integrating everything.
- If you use cloud services, monitor quotas and credentials.`,

      pt: `## O que este projeto faz?

Este robô escuta sua voz, transcreve, gera uma resposta e reproduz a fala em um alto-falante. Ele usa uma Raspberry Pi Zero 2 W, um microfone I2S, um amplificador I2S e a API do Groq.

## Requisitos

1. Visual Studio Code com acesso SSH à Raspberry Pi
2. Raspberry Pi Zero 2 W com WiFi
3. Microfone INMP441
4. Amplificador MAX98357A
5. Alto-falante de 3W
6. Cabos jumper
7. Fonte ou cabo USB para a Pi
8. Chave de API do Groq

## Conceitos-chave

- **I2S.** Protocolo digital de áudio usado entre a Raspberry Pi, o microfone e o amplificador.

- **Whisper.** Converte a voz em texto.

- **LLM.** Gera a resposta do robô a partir do texto transcrito.

- **TTS.** Converte a resposta em áudio para o alto-falante.

- **Latência.** Este projeto depende de internet e de serviços externos, então não é tão imediato quanto um sketch de Arduino.

## Conexões

### INMP441 → Raspberry Pi

| Pino INMP441 | Pino Raspberry Pi |
|---|---|
| VDD | 3.3V |
| GND | GND |
| WS | GPIO19 |
| SCK | GPIO18 |
| SD | GPIO20 |
| L/R | GND |

### MAX98357A → Raspberry Pi

| Pino MAX98357A | Pino Raspberry Pi |
|---|---|
| VIN | 5V |
| GND | GND |
| BCLK | GPIO18 |
| LRC | GPIO19 |
| DIN | GPIO21 |

## Instalação

\`\`\`terminal
---linux---
# Na Raspberry Pi
sudo apt update
sudo apt install -y python3-pip mpg123 python3-sounddevice portaudio19-dev
pip3 install groq edge-tts sounddevice numpy --break-system-packages
\`\`\`

## robot.py

\`\`\`python
import os
from groq import Groq

client = Groq(api_key=os.environ["GROQ_API_KEY"])
print("Hoenix pronto")
\`\`\`

## Experimente

- Teste primeiro a captura e reprodução de áudio antes de integrar o Groq.
- Troque a voz do TTS para experimentar outros idiomas.
- Limite a resposta a uma frase para reduzir a latência.

## Notas

- Este é um projeto avançado e depende de hardware, rede e APIs externas.
- Valide áudio de entrada e saída separadamente antes de integrar tudo.
- Se usar serviços em nuvem, acompanhe cotas e credenciais.`,
    },
  },
  {
    id: 3,
    slug: '3-oled-1-3',
    area: 'Robotics',
    techs: ['Arduino', 'C++', 'OLED', 'I2C'],
    difficulty: 'normal',
    content: {
      es: `## ¿Qué hace este proyecto?

Muestra texto y un contador de tiempo en una pantalla OLED de 1.3 pulgadas conectada por I2C a un Arduino. Es una base ideal para relojes, medidores, menús y mini interfaces para tus proyectos de robótica.

## Requerimientos

1. Visual Studio Code con Arduino CLI
2. Arduino Nano (o Uno/Mega)
3. Pantalla OLED de 1.3" con driver **SH1106**, 128x64, interfaz I2C
4. Cables jumper
5. Protoboard (opcional)
6. Cable USB

## Conceptos clave

- **SH1106 vs SSD1306.** La pantalla de 1.3" usa el driver **SH1106**, mientras que la de 0.96" usa **SSD1306**. Si elegís la biblioteca equivocada vas a ver la imagen corrida o con basura en pantalla.

- **I2C.** Protocolo de dos hilos (\`SDA\` y \`SCL\`) que permite comunicar varios dispositivos con muy pocos pines. En un Arduino Uno/Nano, \`SDA\` está en \`A4\` y \`SCL\` en \`A5\`.

- **Dirección I2C.** Casi todas estas pantallas vienen con la dirección \`0x3C\`. Si no funciona, un escáner I2C te dice la dirección real.

- **Biblioteca U8g2.** Es la biblioteca recomendada para estas pantallas. Soporta SH1106, fuentes, figuras, buffer completo y bajo consumo.

- **Buffer completo.** El modo \`_F_\` (full buffer) dibuja todo en memoria y envía de golpe con \`sendBuffer()\`. Es el más simple y fluido para Arduino Uno/Nano.

## Conexiones

| Pin de la OLED | Conexión Arduino |
|---|---|
| VCC | 5V (el módulo trae regulador, 3.3V también funciona) |
| GND | GND |
| SCL | A5 |
| SDA | A4 |

> **Importante:** La pantalla de 1.3" usa el driver **SH1106**, no SSD1306. Si usás la biblioteca de SSD1306 la imagen va a aparecer corrida o cortada.

## Instalación

\`\`\`terminal
---mac---
# Instalar la biblioteca U8g2 una sola vez
arduino-cli lib install "U8g2"

# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./oled-1.3

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./oled-1.3
---linux---
# Instalar la biblioteca U8g2 una sola vez
arduino-cli lib install "U8g2"

# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./oled-1.3

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./oled-1.3
---windows---
# Instalar la biblioteca U8g2 una sola vez
arduino-cli lib install "U8g2"

# Compilar
arduino-cli compile --fqbn arduino:avr:nano .\\oled-1.3

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\oled-1.3
\`\`\`

## oled-1.3.ino

\`\`\`cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <Wire.h>

U8G2_SH1106_128X64_NONAME_F_HW_I2C display(U8G2_R0, U8X8_PIN_NONE);

void setup() {
  display.begin();
  display.setContrast(200);
}

void loop() {
  unsigned long segundos = millis() / 1000;

  display.clearBuffer();

  display.setFont(u8g2_font_ncenB10_tr);
  display.drawStr(0, 14, "OLED 1.3\\"");

  display.setFont(u8g2_font_6x10_tf);
  display.drawStr(0, 30, "SH1106 128x64 I2C");
  display.drawStr(0, 44, "Hola, Josue!");

  display.drawFrame(0, 50, 128, 14);
  display.setCursor(4, 61);
  display.print("uptime: ");
  display.print(segundos);
  display.print("s");

  display.sendBuffer();
  delay(200);
}
\`\`\`

## Experimenta

- Cambiá la fuente por otra de U8g2, por ejemplo \`u8g2_font_logisoso16_tf\`, para un contador grande.
- Dibujá figuras con \`drawCircle\`, \`drawLine\` y \`drawBox\` para entender las coordenadas.
- Mostrá la distancia de un HC-SR04 en vez del uptime y tenés un medidor de distancia listo.
- Conectá un potenciómetro a \`A0\` y dibujá una barra que siga su valor.

## Notas

- Si ves la imagen corrida o con rayas, casi seguro estás usando SSD1306 en lugar de SH1106.
- Si no se enciende nada, revisá \`SDA\`/\`SCL\`, \`VCC\` y \`GND\`, y probá un escáner I2C para confirmar la dirección.
- El módulo de 1.3" suele soportar tanto 3.3V como 5V gracias al regulador integrado.
- En ESP32, \`SDA\` está en \`GPIO21\` y \`SCL\` en \`GPIO22\` por defecto.`,

      en: `## What does this project do?

It shows text and an uptime counter on a 1.3-inch OLED display connected over I2C to an Arduino. It is a perfect base for clocks, gauges, menus, and tiny user interfaces for your robotics projects.

## Requirements

1. Visual Studio Code with Arduino CLI
2. Arduino Nano (or Uno/Mega)
3. 1.3" OLED display with **SH1106** driver, 128x64, I2C interface
4. Jumper wires
5. Breadboard (optional)
6. USB cable

## Key concepts

- **SH1106 vs SSD1306.** The 1.3" panel uses the **SH1106** driver, while the 0.96" panel uses **SSD1306**. Picking the wrong library gives you a shifted or garbled image.

- **I2C.** A two-wire protocol (\`SDA\` and \`SCL\`) that lets several devices share only two pins. On Arduino Uno/Nano, \`SDA\` is \`A4\` and \`SCL\` is \`A5\`.

- **I2C address.** These panels almost always use address \`0x3C\`. If that does not work, an I2C scanner sketch will report the correct one.

- **U8g2 library.** The recommended library for these displays. It supports SH1106, rich fonts, shapes, full-buffer mode, and low power usage.

- **Full buffer mode.** The \`_F_\` (full buffer) flavor draws everything in RAM and pushes it to the panel with \`sendBuffer()\`. It is the simplest and smoothest choice on Arduino Uno/Nano.

## Wiring

| OLED pin | Arduino connection |
|---|---|
| VCC | 5V (the module has an onboard regulator, 3.3V also works) |
| GND | GND |
| SCL | A5 |
| SDA | A4 |

> **Important:** The 1.3" panel uses the **SH1106** driver, not SSD1306. If you use the SSD1306 library, the image will look shifted or cut off.

## Installation

\`\`\`terminal
---mac---
# Install the U8g2 library once
arduino-cli lib install "U8g2"

# Compile
arduino-cli compile --fqbn arduino:avr:nano ./oled-1.3

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./oled-1.3
---linux---
# Install the U8g2 library once
arduino-cli lib install "U8g2"

# Compile
arduino-cli compile --fqbn arduino:avr:nano ./oled-1.3

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./oled-1.3
---windows---
# Install the U8g2 library once
arduino-cli lib install "U8g2"

# Compile
arduino-cli compile --fqbn arduino:avr:nano .\\oled-1.3

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\oled-1.3
\`\`\`

## oled-1.3.ino

\`\`\`cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <Wire.h>

U8G2_SH1106_128X64_NONAME_F_HW_I2C display(U8G2_R0, U8X8_PIN_NONE);

void setup() {
  display.begin();
  display.setContrast(200);
}

void loop() {
  unsigned long seconds = millis() / 1000;

  display.clearBuffer();

  display.setFont(u8g2_font_ncenB10_tr);
  display.drawStr(0, 14, "OLED 1.3\\"");

  display.setFont(u8g2_font_6x10_tf);
  display.drawStr(0, 30, "SH1106 128x64 I2C");
  display.drawStr(0, 44, "Hello, Josue!");

  display.drawFrame(0, 50, 128, 14);
  display.setCursor(4, 61);
  display.print("uptime: ");
  display.print(seconds);
  display.print("s");

  display.sendBuffer();
  delay(200);
}
\`\`\`

## Experiment

- Switch to another U8g2 font such as \`u8g2_font_logisoso16_tf\` for a big-digit counter.
- Draw shapes with \`drawCircle\`, \`drawLine\`, and \`drawBox\` to learn the coordinate system.
- Show the distance from an HC-SR04 instead of the uptime and you have a ready-to-use distance meter.
- Wire a potentiometer to \`A0\` and draw a bar that tracks its value.

## Notes

- If the image looks shifted or striped, you are almost certainly using SSD1306 instead of SH1106.
- If nothing lights up, check \`SDA\`/\`SCL\`, \`VCC\`, and \`GND\`, and run an I2C scanner to confirm the address.
- The 1.3" module usually accepts both 3.3V and 5V thanks to the onboard regulator.
- On ESP32, \`SDA\` is \`GPIO21\` and \`SCL\` is \`GPIO22\` by default.`,

      pt: `## O que este projeto faz?

Mostra texto e um contador de tempo em uma tela OLED de 1.3 polegadas conectada por I2C a um Arduino. É uma base excelente para relógios, medidores, menus e pequenas interfaces para seus projetos de robótica.

## Requisitos

1. Visual Studio Code com Arduino CLI
2. Arduino Nano (ou Uno/Mega)
3. Display OLED de 1.3" com driver **SH1106**, 128x64, interface I2C
4. Cabos jumper
5. Protoboard (opcional)
6. Cabo USB

## Conceitos-chave

- **SH1106 vs SSD1306.** O painel de 1.3" usa o driver **SH1106**, enquanto o de 0.96" usa **SSD1306**. Escolher a biblioteca errada faz a imagem aparecer deslocada ou distorcida.

- **I2C.** Protocolo de dois fios (\`SDA\` e \`SCL\`) que permite conectar vários dispositivos usando pouquíssimos pinos. No Arduino Uno/Nano, \`SDA\` fica em \`A4\` e \`SCL\` em \`A5\`.

- **Endereço I2C.** Esses painéis quase sempre usam o endereço \`0x3C\`. Se não funcionar, um scanner I2C mostra o endereço real.

- **Biblioteca U8g2.** É a biblioteca recomendada para esses displays. Suporta SH1106, fontes, figuras, modo de buffer completo e baixo consumo.

- **Modo buffer completo.** A variação \`_F_\` (full buffer) desenha tudo na memória e envia de uma vez com \`sendBuffer()\`. É a opção mais simples e fluida em Arduino Uno/Nano.

## Conexões

| Pino da OLED | Conexão Arduino |
|---|---|
| VCC | 5V (o módulo tem regulador, 3.3V também funciona) |
| GND | GND |
| SCL | A5 |
| SDA | A4 |

> **Importante:** O painel de 1.3" usa o driver **SH1106**, não SSD1306. Se você usar a biblioteca do SSD1306 a imagem vai aparecer deslocada ou cortada.

## Instalação

\`\`\`terminal
---mac---
# Instalar a biblioteca U8g2 uma única vez
arduino-cli lib install "U8g2"

# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./oled-1.3

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./oled-1.3
---linux---
# Instalar a biblioteca U8g2 uma única vez
arduino-cli lib install "U8g2"

# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./oled-1.3

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./oled-1.3
---windows---
# Instalar a biblioteca U8g2 uma única vez
arduino-cli lib install "U8g2"

# Compilar
arduino-cli compile --fqbn arduino:avr:nano .\\oled-1.3

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\oled-1.3
\`\`\`

## oled-1.3.ino

\`\`\`cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <Wire.h>

U8G2_SH1106_128X64_NONAME_F_HW_I2C display(U8G2_R0, U8X8_PIN_NONE);

void setup() {
  display.begin();
  display.setContrast(200);
}

void loop() {
  unsigned long segundos = millis() / 1000;

  display.clearBuffer();

  display.setFont(u8g2_font_ncenB10_tr);
  display.drawStr(0, 14, "OLED 1.3\\"");

  display.setFont(u8g2_font_6x10_tf);
  display.drawStr(0, 30, "SH1106 128x64 I2C");
  display.drawStr(0, 44, "Olá, Josue!");

  display.drawFrame(0, 50, 128, 14);
  display.setCursor(4, 61);
  display.print("uptime: ");
  display.print(segundos);
  display.print("s");

  display.sendBuffer();
  delay(200);
}
\`\`\`

## Experimente

- Troque a fonte por outra do U8g2, como \`u8g2_font_logisoso16_tf\`, para um contador bem grande.
- Desenhe figuras com \`drawCircle\`, \`drawLine\` e \`drawBox\` para entender o sistema de coordenadas.
- Mostre a distância de um HC-SR04 em vez do uptime e você tem um medidor de distância pronto.
- Ligue um potenciômetro em \`A0\` e desenhe uma barra que acompanhe o valor.

## Notas

- Se a imagem aparecer deslocada ou com listras, quase certamente você está usando SSD1306 no lugar de SH1106.
- Se nada acender, confira \`SDA\`/\`SCL\`, \`VCC\` e \`GND\`, e rode um scanner I2C para confirmar o endereço.
- O módulo de 1.3" normalmente aceita tanto 3.3V quanto 5V graças ao regulador integrado.
- No ESP32, \`SDA\` fica em \`GPIO21\` e \`SCL\` em \`GPIO22\` por padrão.`,
    },
  },
  {
    id: 4,
    slug: '4-traffic-light',
    area: 'Robotics',
    techs: ['Arduino', 'C++'],
    difficulty: 'easy',
    content: {
      es: `## ¿Qué hace este proyecto?

Simula un semáforo real con tres LEDs: rojo, amarillo y verde. Cada luz se enciende en secuencia respetando los tiempos típicos de un semáforo de tránsito.

## Requerimientos

1. Visual Studio Code con Arduino CLI
2. Arduino Nano (o Uno)
3. 1 LED rojo
4. 1 LED amarillo
5. 1 LED verde
6. 3 resistencias de 220Ω
7. Cables jumper
8. Protoboard
9. Cable USB

## Conceptos clave

- **Secuencia de estados.** Un semáforo real tiene tres estados (verde → amarillo → rojo) que se repiten en un ciclo. En código, esto es un \`loop()\` con \`delay()\` entre cada cambio.

- **Múltiples pines de salida.** A diferencia del LED Flashes donde usás un solo pin, acá controlás tres pines al mismo tiempo. Cada LED tiene su propio pin digital.

- **\`digitalWrite()\` combinado.** Para cambiar de estado, primero apagás todos los LEDs y después encendés solo el que corresponde. Eso evita que queden dos luces prendidas a la vez.

- **Resistencia por LED.** Cada LED necesita su propia resistencia de 220Ω en serie para limitar la corriente.

## Conexiones

| Componente | Conexión |
|---|---|
| LED rojo (pata larga +) | → Resistencia 220Ω → Pin 4 |
| LED rojo (pata corta −) | → GND |
| LED amarillo (pata larga +) | → Resistencia 220Ω → Pin 3 |
| LED amarillo (pata corta −) | → GND |
| LED verde (pata larga +) | → Resistencia 220Ω → Pin 2 |
| LED verde (pata corta −) | → GND |

## Instalación

\`\`\`terminal
---mac---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./traffic-light

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./traffic-light
---linux---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./traffic-light

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./traffic-light
---windows---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano .\\traffic-light

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\traffic-light
\`\`\`

## traffic-light.ino

\`\`\`cpp
int red = 4;
int yellow = 3;
int green = 2;

void setup() {
  pinMode(red, OUTPUT);
  pinMode(yellow, OUTPUT);
  pinMode(green, OUTPUT);
}

void loop() {
  // Green
  digitalWrite(red, LOW);
  digitalWrite(yellow, LOW);
  digitalWrite(green, HIGH);
  delay(5000);

  // Yellow
  digitalWrite(green, LOW);
  digitalWrite(yellow, HIGH);
  delay(2000);

  // Red
  digitalWrite(yellow, LOW);
  digitalWrite(red, HIGH);
  delay(5000);
}
\`\`\`

## Experimenta

- Agregá un segundo semáforo (peatonal) con dos LEDs más y sincronizalos.
- Cambiá los tiempos del \`delay()\` para simular una intersección con tráfico pesado.
- Agregá un buzzer que suene durante el amarillo como alerta.

## Notas

- Si un LED no enciende, verificá la polaridad (pata larga al pin, corta a GND).
- El orden de los pines es arbitrario, podés usar otros si lo reflejás en el código.
- Usá resistencias de 220Ω; sin ellas los LEDs pueden quemarse.`,

      en: `## What does this project do?

It simulates a real traffic light with three LEDs: red, yellow, and green. Each light turns on in sequence following the typical timing of a traffic signal.

## Requirements

1. Visual Studio Code with Arduino CLI
2. Arduino Nano or Uno
3. 1 red LED
4. 1 yellow LED
5. 1 green LED
6. 3 × 220Ω resistors
7. Jumper wires
8. Breadboard
9. USB cable

## Key concepts

- **State sequence.** A real traffic light has three states (green → yellow → red) that repeat in a cycle. In code, this is a \`loop()\` with \`delay()\` between each change.

- **Multiple output pins.** Unlike LED Flashes where you use a single pin, here you control three pins at once. Each LED has its own digital pin.

- **Combined \`digitalWrite()\`.** To change state, you first turn all LEDs off and then turn on only the one that should be lit. That prevents two lights from being on at the same time.

- **One resistor per LED.** Each LED needs its own 220Ω resistor in series to limit the current.

## Wiring

| Component | Connection |
|---|---|
| Red LED (long leg +) | → 220Ω resistor → Pin 4 |
| Red LED (short leg −) | → GND |
| Yellow LED (long leg +) | → 220Ω resistor → Pin 3 |
| Yellow LED (short leg −) | → GND |
| Green LED (long leg +) | → 220Ω resistor → Pin 2 |
| Green LED (short leg −) | → GND |

## Installation

\`\`\`terminal
---mac---
# Compile
arduino-cli compile --fqbn arduino:avr:nano ./traffic-light

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./traffic-light
---linux---
# Compile
arduino-cli compile --fqbn arduino:avr:nano ./traffic-light

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./traffic-light
---windows---
# Compile
arduino-cli compile --fqbn arduino:avr:nano .\\traffic-light

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\traffic-light
\`\`\`

## traffic-light.ino

\`\`\`cpp
int red = 4;
int yellow = 3;
int green = 2;

void setup() {
  pinMode(red, OUTPUT);
  pinMode(yellow, OUTPUT);
  pinMode(green, OUTPUT);
}

void loop() {
  // Green
  digitalWrite(red, LOW);
  digitalWrite(yellow, LOW);
  digitalWrite(green, HIGH);
  delay(5000);

  // Yellow
  digitalWrite(green, LOW);
  digitalWrite(yellow, HIGH);
  delay(2000);

  // Red
  digitalWrite(yellow, LOW);
  digitalWrite(red, HIGH);
  delay(5000);
}
\`\`\`

## Experiment

- Add a second traffic light (pedestrian) with two more LEDs and synchronize them.
- Change the \`delay()\` values to simulate an intersection with heavy traffic.
- Add a buzzer that sounds during the yellow phase as a warning.

## Notes

- If an LED does not light up, check its polarity (long leg to pin, short leg to GND).
- The pin assignment is arbitrary; you can use different pins as long as the code matches.
- Use 220Ω resistors; without them the LEDs can burn out.`,

      pt: `## O que este projeto faz?

Simula um semáforo real com três LEDs: vermelho, amarelo e verde. Cada luz acende em sequência respeitando os tempos típicos de um sinal de trânsito.

## Requisitos

1. Visual Studio Code com Arduino CLI
2. Arduino Nano ou Uno
3. 1 LED vermelho
4. 1 LED amarelo
5. 1 LED verde
6. 3 resistores de 220Ω
7. Cabos jumper
8. Protoboard
9. Cabo USB

## Conceitos-chave

- **Sequência de estados.** Um semáforo real tem três estados (verde → amarelo → vermelho) que se repetem em ciclo. No código, isso é um \`loop()\` com \`delay()\` entre cada mudança.

- **Múltiplos pinos de saída.** Diferente do LED Flashes onde você usa um único pino, aqui você controla três pinos ao mesmo tempo. Cada LED tem seu próprio pino digital.

- **\`digitalWrite()\` combinado.** Para mudar de estado, primeiro você apaga todos os LEDs e depois acende apenas o correto. Isso evita que duas luzes fiquem acesas ao mesmo tempo.

- **Resistor por LED.** Cada LED precisa do seu próprio resistor de 220Ω em série para limitar a corrente.

## Conexões

| Componente | Conexão |
|---|---|
| LED vermelho (perna longa +) | → Resistor 220Ω → Pino 4 |
| LED vermelho (perna curta −) | → GND |
| LED amarelo (perna longa +) | → Resistor 220Ω → Pino 3 |
| LED amarelo (perna curta −) | → GND |
| LED verde (perna longa +) | → Resistor 220Ω → Pino 2 |
| LED verde (perna curta −) | → GND |

## Instalação

\`\`\`terminal
---mac---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./traffic-light

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./traffic-light
---linux---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./traffic-light

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./traffic-light
---windows---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano .\\traffic-light

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\traffic-light
\`\`\`

## traffic-light.ino

\`\`\`cpp
int red = 4;
int yellow = 3;
int green = 2;

void setup() {
  pinMode(red, OUTPUT);
  pinMode(yellow, OUTPUT);
  pinMode(green, OUTPUT);
}

void loop() {
  // Green
  digitalWrite(red, LOW);
  digitalWrite(yellow, LOW);
  digitalWrite(green, HIGH);
  delay(5000);

  // Yellow
  digitalWrite(green, LOW);
  digitalWrite(yellow, HIGH);
  delay(2000);

  // Red
  digitalWrite(yellow, LOW);
  digitalWrite(red, HIGH);
  delay(5000);
}
\`\`\`

## Experimente

- Adicione um segundo semáforo (pedestre) com dois LEDs extras e sincronize-os.
- Mude os valores do \`delay()\` para simular um cruzamento com tráfego pesado.
- Adicione um buzzer que soe durante o amarelo como alerta.

## Notas

- Se um LED não acender, verifique a polaridade (perna longa no pino, curta no GND).
- A atribuição dos pinos é arbitrária; você pode usar outros desde que o código acompanhe.
- Use resistores de 220Ω; sem eles os LEDs podem queimar.`,
    },
  },
  {
    id: 5,
    slug: '5-servo-helicopter',
    area: 'Robotics',
    techs: ['Arduino', 'C++', 'Servo'],
    difficulty: 'easy',
    content: {
      es: `## ¿Qué hace este proyecto?

Controla un servo motor que gira de 0° a 180° y vuelve, simulando el movimiento de las aspas de un helicóptero. Es la base para entender cómo mover piezas mecánicas con Arduino.

## Requerimientos

1. Visual Studio Code con Arduino CLI
2. Arduino Nano (o Uno)
3. Servo motor SG90 (o similar)
4. Cables jumper
5. Protoboard (opcional)
6. Cable USB

## Conceptos clave

- **Servo motor.** Un motor que se posiciona en un ángulo exacto (0° a 180°) según la señal PWM que recibe. No gira libremente como un motor DC.

- **PWM (Pulse Width Modulation).** El Arduino envía pulsos de diferente duración para indicarle al servo a qué ángulo moverse. La biblioteca \`Servo.h\` maneja esto automáticamente.

- **\`Servo.attach(pin)\`.** Conecta el objeto servo a un pin PWM del Arduino.

- **\`Servo.write(ángulo)\`.** Mueve el servo al ángulo indicado (0 a 180).

- **Alimentación.** El SG90 funciona con 5V del Arduino para pruebas simples. Con múltiples servos, usá una fuente externa.

## Conexiones

| Cable del servo | Conexión Arduino |
|---|---|
| Rojo (VCC) | 5V |
| Marrón o negro (GND) | GND |
| Naranja o blanco (señal) | Pin 9 |

## Instalación

\`\`\`terminal
---mac---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./servo-helicopter

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./servo-helicopter
---linux---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./servo-helicopter

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./servo-helicopter
---windows---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano .\\servo-helicopter

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\servo-helicopter
\`\`\`

## servo-helicopter.ino

\`\`\`cpp
#include <Servo.h>

Servo motor;

void setup() {
  motor.attach(9);
}

void loop() {
  for (int angle = 0; angle <= 180; angle++) {
    motor.write(angle);
    delay(15);
  }

  for (int angle = 180; angle >= 0; angle--) {
    motor.write(angle);
    delay(15);
  }
}
\`\`\`

## Experimenta

- Cambiá el \`delay(15)\` por un valor menor para que el servo gire más rápido.
- Conectá un potenciómetro a \`A0\` y usá \`analogRead()\` + \`map()\` para controlar el ángulo manualmente.
- Montá una hélice o aspa de cartón en el eje del servo para visualizar el movimiento.

## Notas

- Si el servo vibra o se mueve erráticamente, revisá que GND del servo y GND del Arduino estén conectados.
- El SG90 no tiene mucha fuerza; no le pongas objetos pesados en el eje.
- Para proyectos con más de un servo, usá una fuente externa de 5V, no el pin 5V del Arduino.`,

      en: `## What does this project do?

It controls a servo motor that sweeps from 0° to 180° and back, simulating a helicopter blade motion. It is the foundation for understanding how to move mechanical parts with Arduino.

## Requirements

1. Visual Studio Code with Arduino CLI
2. Arduino Nano or Uno
3. SG90 servo motor (or similar)
4. Jumper wires
5. Breadboard (optional)
6. USB cable

## Key concepts

- **Servo motor.** A motor that holds a precise angle (0° to 180°) based on the PWM signal it receives. Unlike a DC motor, it does not spin freely.

- **PWM (Pulse Width Modulation).** The Arduino sends pulses of varying width to tell the servo which angle to reach. The \`Servo.h\` library handles this automatically.

- **\`Servo.attach(pin)\`.** Binds the servo object to a PWM-capable pin on the Arduino.

- **\`Servo.write(angle)\`.** Moves the servo to the specified angle (0 to 180).

- **Power.** The SG90 runs on 5V from the Arduino for simple tests. With multiple servos, use an external power supply.

## Wiring

| Servo wire | Arduino connection |
|---|---|
| Red (VCC) | 5V |
| Brown or black (GND) | GND |
| Orange or white (signal) | Pin 9 |

## Installation

\`\`\`terminal
---mac---
# Compile
arduino-cli compile --fqbn arduino:avr:nano ./servo-helicopter

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./servo-helicopter
---linux---
# Compile
arduino-cli compile --fqbn arduino:avr:nano ./servo-helicopter

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./servo-helicopter
---windows---
# Compile
arduino-cli compile --fqbn arduino:avr:nano .\\servo-helicopter

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\servo-helicopter
\`\`\`

## servo-helicopter.ino

\`\`\`cpp
#include <Servo.h>

Servo motor;

void setup() {
  motor.attach(9);
}

void loop() {
  for (int angle = 0; angle <= 180; angle++) {
    motor.write(angle);
    delay(15);
  }

  for (int angle = 180; angle >= 0; angle--) {
    motor.write(angle);
    delay(15);
  }
}
\`\`\`

## Experiment

- Lower \`delay(15)\` to make the servo sweep faster.
- Wire a potentiometer to \`A0\` and use \`analogRead()\` + \`map()\` to control the angle manually.
- Attach a cardboard propeller to the servo shaft to visualize the motion.

## Notes

- If the servo jitters or moves erratically, check that the servo GND and Arduino GND are connected.
- The SG90 has limited torque; do not attach heavy objects to the shaft.
- For projects with more than one servo, use an external 5V supply instead of the Arduino 5V pin.`,

      pt: `## O que este projeto faz?

Controla um servo motor que gira de 0° a 180° e volta, simulando o movimento das pás de um helicóptero. É a base para entender como mover peças mecânicas com Arduino.

## Requisitos

1. Visual Studio Code com Arduino CLI
2. Arduino Nano ou Uno
3. Servo motor SG90 (ou similar)
4. Cabos jumper
5. Protoboard (opcional)
6. Cabo USB

## Conceitos-chave

- **Servo motor.** Um motor que se posiciona em um ângulo exato (0° a 180°) conforme o sinal PWM recebido. Diferente de um motor DC, ele não gira livremente.

- **PWM (Pulse Width Modulation).** O Arduino envia pulsos de diferentes durações para indicar ao servo em qual ângulo se posicionar. A biblioteca \`Servo.h\` cuida disso automaticamente.

- **\`Servo.attach(pin)\`.** Conecta o objeto servo a um pino PWM do Arduino.

- **\`Servo.write(ângulo)\`.** Move o servo para o ângulo indicado (0 a 180).

- **Alimentação.** O SG90 funciona com 5V do Arduino para testes simples. Com múltiplos servos, use uma fonte externa.

## Conexões

| Fio do servo | Conexão Arduino |
|---|---|
| Vermelho (VCC) | 5V |
| Marrom ou preto (GND) | GND |
| Laranja ou branco (sinal) | Pino 9 |

## Instalação

\`\`\`terminal
---mac---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./servo-helicopter

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./servo-helicopter
---linux---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./servo-helicopter

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./servo-helicopter
---windows---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano .\\servo-helicopter

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\servo-helicopter
\`\`\`

## servo-helicopter.ino

\`\`\`cpp
#include <Servo.h>

Servo motor;

void setup() {
  motor.attach(9);
}

void loop() {
  for (int angle = 0; angle <= 180; angle++) {
    motor.write(angle);
    delay(15);
  }

  for (int angle = 180; angle >= 0; angle--) {
    motor.write(angle);
    delay(15);
  }
}
\`\`\`

## Experimente

- Diminua o \`delay(15)\` para que o servo gire mais rápido.
- Conecte um potenciômetro no \`A0\` e use \`analogRead()\` + \`map()\` para controlar o ângulo manualmente.
- Monte uma hélice de papelão no eixo do servo para visualizar o movimento.

## Notas

- Se o servo vibrar ou se mover de forma errática, verifique se o GND do servo e o GND do Arduino estão conectados.
- O SG90 tem pouca força; não coloque objetos pesados no eixo.
- Para projetos com mais de um servo, use uma fonte externa de 5V em vez do pino 5V do Arduino.`,
    },
  },
  {
    id: 6,
    slug: '6-dynamic-screen',
    area: 'Robotics',
    techs: ['Arduino', 'C++', 'LCD', 'I2C'],
    difficulty: 'easy',
    content: {
      es: `## ¿Qué hace este proyecto?

Muestra "Josue Hoenicka" en la primera línea de un LCD 16x2 y un contador de segundos en la segunda, actualizado cada 500ms desde que arranca el Arduino.

## Requerimientos

1. Visual Studio Code con Arduino CLI
2. Arduino Nano (o Uno)
3. Pantalla LCD 16x2 con módulo I2C (PCF8574)
4. 4 cables jumper
5. Cable USB

## Conceptos clave

- **I2C.** Protocolo serie que codifica la información en mensajes de bits enviados por SDA mientras SCL marca el pulso. El módulo PCF8574 recibe esos mensajes y mueve los pines del LCD por vos. Resultado: de ~10 cables a solo 2 de datos (más VCC y GND).

- **SDA (Serial Data).** El cable por el que viajan los datos. En Arduino Nano, está en \`A4\`.

- **SCL (Serial Clock).** El cable de reloj que marca el ritmo de lectura. En Arduino Nano, está en \`A5\`.

- **Dirección I2C.** Los módulos PCF8574 vienen de fábrica con dirección \`0x27\`. Algunos usan \`0x3F\`. Si la pantalla no muestra nada, cambiá la dirección en el sketch.

- **\`lcd.setCursor(col, fila)\`.** Posiciona el cursor en una columna y fila específica del LCD antes de escribir.

## Conexiones

| Pin del módulo | Pin del Arduino Nano |
|---|---|
| VCC | 5V |
| GND | GND |
| SDA | A4 |
| SCL | A5 |

## Instalación

\`\`\`terminal
---mac---
# Instalar la biblioteca LiquidCrystal I2C
arduino-cli lib install "LiquidCrystal I2C"

# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./dynamic-screen

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./dynamic-screen
---linux---
# Instalar la biblioteca LiquidCrystal I2C
arduino-cli lib install "LiquidCrystal I2C"

# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./dynamic-screen

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./dynamic-screen
---windows---
# Instalar la biblioteca LiquidCrystal I2C
arduino-cli lib install "LiquidCrystal I2C"

# Compilar
arduino-cli compile --fqbn arduino:avr:nano .\\dynamic-screen

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\dynamic-screen
\`\`\`

## dynamic-screen.ino

\`\`\`cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Dirección más común: 0x27
// Si no muestra nada, probá 0x3F:
//   LiquidCrystal_I2C lcd(0x3F, 16, 2);
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();

  lcd.setCursor(0, 0);
  lcd.print("Josue Hoenicka");
}

void loop() {
  unsigned long seconds = millis() / 1000;

  lcd.setCursor(0, 1);
  lcd.print("Time: ");
  lcd.print(seconds);
  lcd.print("s  ");

  delay(500);
}
\`\`\`

## Experimenta

- Cambiá el texto de la primera línea por tu nombre o un mensaje personalizado.
- Mostrá la lectura de un sensor (temperatura, distancia) en la segunda línea.
- Agregá un botón que alterne entre dos pantallas distintas.

## Notas

- No alimentes el módulo con 3.3V. El LCD trabaja a 5V; con 3.3V el contraste falla.
- Si ves cuadros negros y nada más, ajustá el contraste con el potenciómetro azul en la parte trasera del módulo.
- No desconectes SDA/SCL con el Arduino encendido si hay otros dispositivos I2C en el bus.`,

      en: `## What does this project do?

Displays "Josue Hoenicka" on the first line of a 16x2 LCD and a seconds counter on the second line, updated every 500ms since the Arduino started.

## Requirements

1. Visual Studio Code with Arduino CLI
2. Arduino Nano or Uno
3. 16x2 LCD with I2C module (PCF8574)
4. 4 jumper wires
5. USB cable

## Key concepts

- **I2C.** A serial protocol that encodes information into bit messages sent over SDA while SCL marks the pulse. The PCF8574 module receives those messages and handles moving the LCD pins for you. Result: from ~10 wires down to just 2 data wires (plus VCC and GND).

- **SDA (Serial Data).** The wire that carries the data. On Arduino Nano, it is \`A4\`.

- **SCL (Serial Clock).** The clock wire that sets the reading pace. On Arduino Nano, it is \`A5\`.

- **I2C address.** PCF8574 modules come from the factory with address \`0x27\`. Some use \`0x3F\`. If the screen shows nothing, change the address in the sketch.

- **\`lcd.setCursor(col, row)\`.** Positions the cursor at a specific column and row on the LCD before writing.

## Wiring

| Module pin | Arduino Nano pin |
|---|---|
| VCC | 5V |
| GND | GND |
| SDA | A4 |
| SCL | A5 |

## Installation

\`\`\`terminal
---mac---
# Install the LiquidCrystal I2C library
arduino-cli lib install "LiquidCrystal I2C"

# Compile
arduino-cli compile --fqbn arduino:avr:nano ./dynamic-screen

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./dynamic-screen
---linux---
# Install the LiquidCrystal I2C library
arduino-cli lib install "LiquidCrystal I2C"

# Compile
arduino-cli compile --fqbn arduino:avr:nano ./dynamic-screen

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./dynamic-screen
---windows---
# Install the LiquidCrystal I2C library
arduino-cli lib install "LiquidCrystal I2C"

# Compile
arduino-cli compile --fqbn arduino:avr:nano .\\dynamic-screen

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\dynamic-screen
\`\`\`

## dynamic-screen.ino

\`\`\`cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Most common I2C address: 0x27
// If the display shows nothing, try 0x3F:
//   LiquidCrystal_I2C lcd(0x3F, 16, 2);
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();

  lcd.setCursor(0, 0);
  lcd.print("Josue Hoenicka");
}

void loop() {
  unsigned long seconds = millis() / 1000;

  lcd.setCursor(0, 1);
  lcd.print("Time: ");
  lcd.print(seconds);
  lcd.print("s  ");

  delay(500);
}
\`\`\`

## Experiment

- Change the first line text to your name or a custom message.
- Show a sensor reading (temperature, distance) on the second line.
- Add a button that toggles between two different screens.

## Notes

- Do not power the module with 3.3V. The LCD works at 5V; with 3.3V the contrast fails.
- If you see black squares and nothing else, adjust the contrast with the blue potentiometer on the back of the module.
- Do not disconnect SDA/SCL with the Arduino powered on if there are other I2C devices on the bus.`,

      pt: `## O que este projeto faz?

Mostra "Josue Hoenicka" na primeira linha de um LCD 16x2 e um contador de segundos na segunda, atualizado a cada 500ms desde que o Arduino é ligado.

## Requisitos

1. Visual Studio Code com Arduino CLI
2. Arduino Nano ou Uno
3. Tela LCD 16x2 com módulo I2C (PCF8574)
4. 4 cabos jumper
5. Cabo USB

## Conceitos-chave

- **I2C.** Protocolo serial que codifica a informação em mensagens de bits enviadas pelo SDA enquanto SCL marca o pulso. O módulo PCF8574 recebe essas mensagens e move os pinos do LCD por você. Resultado: de ~10 fios para apenas 2 de dados (mais VCC e GND).

- **SDA (Serial Data).** O fio por onde trafegam os dados. No Arduino Nano, fica em \`A4\`.

- **SCL (Serial Clock).** O fio de clock que marca o ritmo de leitura. No Arduino Nano, fica em \`A5\`.

- **Endereço I2C.** Os módulos PCF8574 vêm de fábrica com endereço \`0x27\`. Alguns usam \`0x3F\`. Se a tela não mostrar nada, mude o endereço no sketch.

- **\`lcd.setCursor(col, linha)\`.** Posiciona o cursor em uma coluna e linha específica do LCD antes de escrever.

## Conexões

| Pino do módulo | Pino do Arduino Nano |
|---|---|
| VCC | 5V |
| GND | GND |
| SDA | A4 |
| SCL | A5 |

## Instalação

\`\`\`terminal
---mac---
# Instalar a biblioteca LiquidCrystal I2C
arduino-cli lib install "LiquidCrystal I2C"

# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./dynamic-screen

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./dynamic-screen
---linux---
# Instalar a biblioteca LiquidCrystal I2C
arduino-cli lib install "LiquidCrystal I2C"

# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./dynamic-screen

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./dynamic-screen
---windows---
# Instalar a biblioteca LiquidCrystal I2C
arduino-cli lib install "LiquidCrystal I2C"

# Compilar
arduino-cli compile --fqbn arduino:avr:nano .\\dynamic-screen

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\dynamic-screen
\`\`\`

## dynamic-screen.ino

\`\`\`cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Endereço mais comum: 0x27
// Se não mostrar nada, tente 0x3F:
//   LiquidCrystal_I2C lcd(0x3F, 16, 2);
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();

  lcd.setCursor(0, 0);
  lcd.print("Josue Hoenicka");
}

void loop() {
  unsigned long seconds = millis() / 1000;

  lcd.setCursor(0, 1);
  lcd.print("Time: ");
  lcd.print(seconds);
  lcd.print("s  ");

  delay(500);
}
\`\`\`

## Experimente

- Mude o texto da primeira linha para seu nome ou uma mensagem personalizada.
- Mostre a leitura de um sensor (temperatura, distância) na segunda linha.
- Adicione um botão que alterne entre duas telas diferentes.

## Notas

- Não alimente o módulo com 3.3V. O LCD funciona a 5V; com 3.3V o contraste falha.
- Se você vir quadrados pretos e nada mais, ajuste o contraste com o potenciômetro azul na parte traseira do módulo.
- Não desconecte SDA/SCL com o Arduino ligado se houver outros dispositivos I2C no barramento.`,
    },
  },
];

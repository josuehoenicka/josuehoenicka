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
];

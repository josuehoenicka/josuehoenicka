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
    slug: '3-ultrasonic-sensor',
    area: 'Robotics',
    techs: ['Arduino', 'C++', 'HC-SR04'],
    difficulty: 'normal',
    content: {
      es: `## ¿Qué hace este proyecto?

El sensor ultrasónico HC-SR04 mide la distancia hasta un objeto y muestra el valor en centímetros por el Monitor Serial. Es una base muy útil para robots que evitan obstáculos, alarmas de proximidad y sistemas simples de medición.

## Requerimientos

1. Visual Studio Code con Arduino CLI
2. Arduino Nano (o Uno/Mega)
3. Sensor ultrasónico HC-SR04
4. Cables jumper
5. Protoboard (opcional, pero ayuda a fijar el sensor)
6. Cable USB

## Conceptos clave

- **Trig.** El pin \`Trig\` recibe un pulso corto de 10 microsegundos. Ese pulso le indica al sensor que emita la onda ultrasónica.

- **Echo.** El pin \`Echo\` permanece en \`HIGH\` mientras la onda viaja, rebota y regresa. Ese tiempo es la base del cálculo de distancia.

- **\`pulseIn(echo, HIGH)\`.** Esta función mide cuántos microsegundos el pin \`Echo\` estuvo en \`HIGH\`. Cuanto mayor es el tiempo, más lejos está el objeto.

- **Velocidad del sonido.** La fórmula \`duracion * 0.034 / 2\` convierte el tiempo en centímetros. El \`0.034\` representa la velocidad del sonido en cm por microsegundo y el \`/ 2\` corrige el viaje de ida y vuelta.

- **Rango útil.** El HC-SR04 suele funcionar bien entre 2 cm y 400 cm. Objetos muy pequeños, blandos o inclinados pueden dar lecturas inestables.

## Conexiones

| Pin del sensor | Conexión Arduino |
|---|---|
| VCC | 5V |
| Trig | Pin digital 9 |
| Echo | Pin digital 10 |
| GND | GND |

> **Importante:** En un Arduino Nano, Uno o Mega no necesitás resistencias adicionales. Si usás una placa de 3.3V, como ESP32, necesitás un divisor de tensión en \`Echo\` para bajar de 5V a 3.3V.

## Instalación

\`\`\`terminal
---mac---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./ultrasonic-sensor

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./ultrasonic-sensor
---linux---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./ultrasonic-sensor

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./ultrasonic-sensor
---windows---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano .\\ultrasonic-sensor

# Subir
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\ultrasonic-sensor
\`\`\`

## ultrasonic-sensor.ino

\`\`\`cpp
const int trig = 9;
const int echo = 10;

void setup() {
  Serial.begin(9600);
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
}

void loop() {
  digitalWrite(trig, LOW);
  delayMicroseconds(2);
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);

  long duracion = pulseIn(echo, HIGH);
  float distancia = duracion * 0.034 / 2; // cm

  Serial.print("Distancia: ");
  Serial.print(distancia);
  Serial.println(" cm");
  delay(500);
}
\`\`\`

## Experimenta

- Acercá y alejā la mano frente al sensor y mirá cómo cambia la distancia en el Monitor Serial.
- Reducí \`delay(500)\` a \`delay(100)\` para obtener lecturas más rápidas.
- Encendé un LED o activá un buzzer cuando \`distancia < 20\` para convertirlo en una alarma de proximidad.
- Promediá 5 mediciones seguidas para filtrar lecturas inestables.

## Notas

- No se necesitan resistencias adicionales con un Arduino de 5V.
- El rango útil típico es de 2 cm a 400 cm.
- Si la lectura se queda siempre en 0 o en valores absurdos, revisá primero \`Trig\`, \`Echo\`, \`VCC\` y \`GND\`.
- Si usás ESP32 u otra placa de 3.3V, protegé el pin \`Echo\` con un divisor de tensión.`,

      en: `## What does this project do?

The HC-SR04 ultrasonic sensor measures the distance to an object and prints the value in centimeters to the Serial Monitor. It is a strong starting point for obstacle-avoiding robots, proximity alarms, and simple distance-measurement projects.

## Requirements

1. Visual Studio Code with Arduino CLI
2. Arduino Nano (or Uno/Mega)
3. HC-SR04 ultrasonic sensor
4. Jumper wires
5. Breadboard (optional, but useful to hold the sensor)
6. USB cable

## Key concepts

- **Trig.** The \`Trig\` pin receives a short 10-microsecond pulse. That pulse tells the sensor to emit the ultrasonic wave.

- **Echo.** The \`Echo\` pin stays \`HIGH\` while the wave travels, bounces, and returns. That duration is the base of the distance calculation.

- **\`pulseIn(echo, HIGH)\`.** This function measures how many microseconds the \`Echo\` pin stayed \`HIGH\`. The longer the time, the farther away the object is.

- **Speed of sound.** The formula \`duration * 0.034 / 2\` converts the measured time into centimeters. The \`0.034\` represents the speed of sound in cm per microsecond and the \`/ 2\` corrects the round trip.

- **Useful range.** The HC-SR04 usually works well between 2 cm and 400 cm. Very small, soft, or angled objects can produce unstable readings.

## Wiring

| Sensor pin | Arduino connection |
|---|---|
| VCC | 5V |
| Trig | Digital pin 9 |
| Echo | Digital pin 10 |
| GND | GND |

> **Important:** On an Arduino Nano, Uno, or Mega you do not need extra resistors. If you use a 3.3V board such as ESP32, you must use a voltage divider on \`Echo\` to step down from 5V to 3.3V.

## Installation

\`\`\`terminal
---mac---
# Compile
arduino-cli compile --fqbn arduino:avr:nano ./ultrasonic-sensor

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./ultrasonic-sensor
---linux---
# Compile
arduino-cli compile --fqbn arduino:avr:nano ./ultrasonic-sensor

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./ultrasonic-sensor
---windows---
# Compile
arduino-cli compile --fqbn arduino:avr:nano .\\ultrasonic-sensor

# Upload
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\ultrasonic-sensor
\`\`\`

## ultrasonic-sensor.ino

\`\`\`cpp
const int trig = 9;
const int echo = 10;

void setup() {
  Serial.begin(9600);
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
}

void loop() {
  digitalWrite(trig, LOW);
  delayMicroseconds(2);
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);

  long duration = pulseIn(echo, HIGH);
  float distance = duration * 0.034 / 2; // cm

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  delay(500);
}
\`\`\`

## Experiment

- Move your hand closer and farther from the sensor and watch the reading change in the Serial Monitor.
- Reduce \`delay(500)\` to \`delay(100)\` for faster updates.
- Turn on an LED or buzzer when \`distance < 20\` to transform it into a proximity alarm.
- Average 5 consecutive measurements to smooth unstable readings.

## Notes

- No extra resistors are needed with a 5V Arduino board.
- The useful range is usually about 2 cm to 400 cm.
- If the reading stays at 0 or obviously wrong values, check \`Trig\`, \`Echo\`, \`VCC\`, and \`GND\` first.
- If you use ESP32 or another 3.3V board, protect the \`Echo\` pin with a voltage divider.`,

      pt: `## O que este projeto faz?

O sensor ultrassônico HC-SR04 mede a distância até um objeto e mostra o valor em centímetros no Monitor Serial. É uma ótima base para robôs que evitam obstáculos, alarmes de proximidade e projetos simples de medição.

## Requisitos

1. Visual Studio Code com Arduino CLI
2. Arduino Nano (ou Uno/Mega)
3. Sensor ultrassônico HC-SR04
4. Cabos jumper
5. Protoboard (opcional, mas ajuda a fixar o sensor)
6. Cabo USB

## Conceitos-chave

- **Trig.** O pino \`Trig\` recebe um pulso curto de 10 microssegundos. Esse pulso manda o sensor emitir a onda ultrassônica.

- **Echo.** O pino \`Echo\` fica em \`HIGH\` enquanto a onda viaja, rebate e retorna. Esse tempo é a base do cálculo da distância.

- **\`pulseIn(echo, HIGH)\`.** Essa função mede quantos microssegundos o pino \`Echo\` ficou em \`HIGH\`. Quanto maior o tempo, mais distante está o objeto.

- **Velocidade do som.** A fórmula \`duracao * 0.034 / 2\` converte o tempo em centímetros. O \`0.034\` representa a velocidade do som em cm por microssegundo e o \`/ 2\` corrige o percurso de ida e volta.

- **Alcance útil.** O HC-SR04 normalmente funciona bem entre 2 cm e 400 cm. Objetos muito pequenos, macios ou inclinados podem gerar leituras instáveis.

## Conexões

| Pino do sensor | Conexão Arduino |
|---|---|
| VCC | 5V |
| Trig | Pino digital 9 |
| Echo | Pino digital 10 |
| GND | GND |

> **Importante:** Em um Arduino Nano, Uno ou Mega não são necessários resistores extras. Se você usar uma placa de 3.3V, como ESP32, precisa usar um divisor de tensão no \`Echo\` para baixar de 5V para 3.3V.

## Instalação

\`\`\`terminal
---mac---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./ultrasonic-sensor

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port /dev/cu.usbserial-110 ./ultrasonic-sensor
---linux---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano ./ultrasonic-sensor

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port /dev/ttyUSB0 ./ultrasonic-sensor
---windows---
# Compilar
arduino-cli compile --fqbn arduino:avr:nano .\\ultrasonic-sensor

# Enviar
arduino-cli upload --fqbn arduino:avr:nano --port COM3 .\\ultrasonic-sensor
\`\`\`

## ultrasonic-sensor.ino

\`\`\`cpp
const int trig = 9;
const int echo = 10;

void setup() {
  Serial.begin(9600);
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
}

void loop() {
  digitalWrite(trig, LOW);
  delayMicroseconds(2);
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);

  long duracao = pulseIn(echo, HIGH);
  float distancia = duracao * 0.034 / 2; // cm

  Serial.print("Distancia: ");
  Serial.print(distancia);
  Serial.println(" cm");
  delay(500);
}
\`\`\`

## Experimente

- Aproxime e afaste a mão do sensor e observe a distância mudar no Monitor Serial.
- Reduza \`delay(500)\` para \`delay(100)\` para obter leituras mais rápidas.
- Acenda um LED ou ative um buzzer quando \`distancia < 20\` para transformar o projeto em um alarme de proximidade.
- Faça a média de 5 medições seguidas para suavizar leituras instáveis.

## Notas

- Não são necessários resistores extras com uma placa Arduino de 5V.
- O alcance útil típico fica entre 2 cm e 400 cm.
- Se a leitura ficar sempre em 0 ou em valores absurdos, revise primeiro \`Trig\`, \`Echo\`, \`VCC\` e \`GND\`.
- Se usar ESP32 ou outra placa de 3.3V, proteja o pino \`Echo\` com um divisor de tensão.`,
    },
  },
];

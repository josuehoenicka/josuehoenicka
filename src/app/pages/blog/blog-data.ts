import { Lang } from '../../services/i18n.service';

export type Difficulty = 'easy' | 'normal' | 'hard';

export interface Article {
  id: number;
  slug: string;
  area: string;
  techs: string[];
  difficulty: Difficulty;
  updatedAt: string;
  youtube?: string;
  content: Partial<Record<Lang, string>>;
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: '1-flashing-led',
    area: 'Hardware',
    techs: ['Hardware'],
    difficulty: 'easy',
    updatedAt: '2026-05-05',
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
    id: 4,
    slug: '4-traffic-light',
    area: 'Hardware',
    techs: ['Hardware'],
    difficulty: 'easy',
    updatedAt: '2026-05-05',
    youtube: 'https://www.youtube.com/embed/127lsD3_ozo',
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
    area: 'Hardware',
    techs: ['Hardware'],
    difficulty: 'easy',
    updatedAt: '2026-05-05',
    youtube: 'https://www.youtube.com/embed/dB2RDcFegts',
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
    area: 'Hardware',
    techs: ['Hardware'],
    difficulty: 'easy',
    updatedAt: '2026-05-05',
    youtube: 'https://www.youtube.com/embed/b55iOBIN81Y',
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
  {
    id: 7,
    slug: '7-claude',
    area: 'Telecommuting',
    techs: ['AI'],
    difficulty: 'easy',
    updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es Claude?

Claude es un asistente de inteligencia artificial creado por **Anthropic**, una empresa fundada en 2021 enfocada en la seguridad de la IA. Claude está diseñado para ser útil, honesto e inofensivo.

Se destaca por su capacidad de **razonamiento profundo**, su habilidad para analizar documentos extensos y la calidad de sus respuestas escritas.

## ¿Para qué sirve?

- **Redacción.** Escribe artículos, emails, publicaciones para redes sociales, guiones de video y contenido creativo.
- **Análisis de documentos.** Lee y resume PDFs, contratos, informes y archivos extensos (equivalente a ~500 páginas).
- **Estrategia.** Ayuda a planificar campañas de marketing, estrategias de contenido y planes de negocio.
- **Investigación.** Resume temas complejos y los explica de forma simple.
- **Traducción y redacción multilingüe.** Traduce y adapta contenido entre idiomas manteniendo el tono original.
- **Lluvia de ideas.** Genera nombres, slogans, conceptos creativos y propuestas.

## Modelos disponibles

| Modelo | Velocidad | Ideal para |
|---|---|---|
| Claude Opus | Normal | Tareas complejas que requieren análisis profundo |
| Claude Sonnet | Rápido | Uso diario, redacción, resúmenes |
| Claude Haiku | Muy rápido | Respuestas cortas e instantáneas |

## Cómo empezar desde cero

### 1. Crear una cuenta
Andá a [claude.ai](https://claude.ai) y registrate con tu email o cuenta de Google. Es gratis para empezar.

### 2. Escribí tu primera pregunta
No necesitás instalar nada. Simplemente escribí en el chat lo que necesitás:

> "Escribime 5 ideas de contenido para Instagram sobre cocina saludable"

> "Resumime este PDF en 3 puntos clave" (arrastrá el archivo al chat)

> "Creame un plan de marketing para lanzar una tienda online"

### 3. Subir archivos
Podés arrastrar archivos al chat: PDFs, imágenes, documentos. Claude los lee y te da respuestas basadas en su contenido.

### 4. Proyectos
Creá un "Proyecto" para agrupar conversaciones sobre el mismo tema. Por ejemplo, un proyecto para tu marca donde Claude recuerda tu tono de voz, tu audiencia y tus objetivos.

## Ejemplos prácticos por profesión

### Marketing
> "Escribime 10 títulos para un email de venta de un curso online de fotografía"

> "Analizá este texto de venta y decime cómo mejorarlo para convertir más"

### Creación de contenido
> "Creame un guión de 60 segundos para un reel sobre productividad"

> "Escribime un artículo de blog de 800 palabras sobre tendencias de diseño 2026"

### Emprendedores
> "Ayudame a escribir el pitch de mi startup en 30 segundos"

> "¿Qué modelo de negocio me conviene para una app de delivery de comida saludable?"

### Estudiantes y principiantes
> "Explicame qué es la inteligencia artificial como si tuviera 12 años"

> "Resumime este capítulo de libro en puntos clave"

## Funciones destacadas

- **Lectura de archivos.** Analiza PDFs, imágenes y documentos directamente.
- **Visión.** Puede describir y analizar fotos, capturas de pantalla y diseños.
- **Memoria por proyecto.** Recordá tu contexto dentro de un proyecto específico.
- **Respuestas largas y detalladas.** Ideal para informes, artículos y análisis extensos.

## Precios

| Plan | Costo | Incluye |
|---|---|---|
| Free | Gratis | Uso limitado |
| Pro | $20/mes | Más uso y acceso a todos los modelos |
| Team | $25/mes por persona | Colaboración en equipo |

## Notas

- Claude no navega internet en tiempo real. Sus respuestas se basan en su entrenamiento.
- Tus conversaciones no se usan para entrenar el modelo.
- Está disponible en web, app de escritorio y celular.`,

      en: `## What is Claude?

Claude is an artificial intelligence assistant created by **Anthropic**, a company founded in 2021 focused on AI safety. Claude is designed to be helpful, honest, and harmless.

It stands out for its **deep reasoning** capability, its ability to analyze lengthy documents, and the quality of its written responses.

## What is it for?

- **Writing.** Creates articles, emails, social media posts, video scripts, and creative content.
- **Document analysis.** Reads and summarizes PDFs, contracts, reports, and large files (equivalent to ~500 pages).
- **Strategy.** Helps plan marketing campaigns, content strategies, and business plans.
- **Research.** Summarizes complex topics and explains them simply.
- **Translation and multilingual writing.** Translates and adapts content between languages keeping the original tone.
- **Brainstorming.** Generates names, slogans, creative concepts, and proposals.

## Available models

| Model | Speed | Ideal for |
|---|---|---|
| Claude Opus | Normal | Complex tasks requiring deep analysis |
| Claude Sonnet | Fast | Daily use, writing, summaries |
| Claude Haiku | Very fast | Short, instant responses |

## Getting started from zero

### 1. Create an account
Go to [claude.ai](https://claude.ai) and sign up with your email or Google account. It's free to start.

### 2. Write your first question
No installation needed. Simply type what you need in the chat:

> "Give me 5 Instagram content ideas about healthy cooking"

> "Summarize this PDF in 3 key points" (drag the file into the chat)

> "Create a marketing plan for launching an online store"

### 3. Upload files
You can drag files into the chat: PDFs, images, documents. Claude reads them and gives you answers based on their content.

### 4. Projects
Create a "Project" to group conversations about the same topic. For example, a project for your brand where Claude remembers your tone of voice, audience, and goals.

## Practical examples by profession

### Marketing
> "Write me 10 subject lines for a sales email for an online photography course"

> "Analyze this sales copy and tell me how to improve it for better conversions"

### Content creation
> "Create a 60-second script for a reel about productivity"

> "Write me an 800-word blog article about 2026 design trends"

### Entrepreneurs
> "Help me write my startup pitch in 30 seconds"

> "What business model suits a healthy food delivery app?"

### Students and beginners
> "Explain what artificial intelligence is as if I were 12 years old"

> "Summarize this book chapter in key points"

## Key features

- **File reading.** Analyzes PDFs, images, and documents directly.
- **Vision.** Can describe and analyze photos, screenshots, and designs.
- **Per-project memory.** Remembers your context within a specific project.
- **Long, detailed responses.** Ideal for reports, articles, and extensive analysis.

## Pricing

| Plan | Cost | Includes |
|---|---|---|
| Free | Free | Limited usage |
| Pro | $20/month | More usage and access to all models |
| Team | $25/month per person | Team collaboration |

## Notes

- Claude does not browse the internet in real time. Its responses are based on its training.
- Your conversations are not used to train the model.
- Available on web, desktop app, and mobile.`,

      pt: `## O que é Claude?

Claude é um assistente de inteligência artificial criado pela **Anthropic**, uma empresa fundada em 2021 focada na segurança da IA. Claude é projetado para ser útil, honesto e inofensivo.

Se destaca pela sua capacidade de **raciocínio profundo**, habilidade para analisar documentos extensos e qualidade das respostas escritas.

## Para que serve?

- **Redação.** Escreve artigos, emails, posts para redes sociais, roteiros de vídeo e conteúdo criativo.
- **Análise de documentos.** Lê e resume PDFs, contratos, relatórios e arquivos extensos (equivalente a ~500 páginas).
- **Estratégia.** Ajuda a planejar campanhas de marketing, estratégias de conteúdo e planos de negócio.
- **Pesquisa.** Resume temas complexos e os explica de forma simples.
- **Tradução e redação multilíngue.** Traduz e adapta conteúdo entre idiomas mantendo o tom original.
- **Brainstorming.** Gera nomes, slogans, conceitos criativos e propostas.

## Modelos disponíveis

| Modelo | Velocidade | Ideal para |
|---|---|---|
| Claude Opus | Normal | Tarefas complexas que exigem análise profunda |
| Claude Sonnet | Rápido | Uso diário, redação, resumos |
| Claude Haiku | Muito rápido | Respostas curtas e instantâneas |

## Como começar do zero

### 1. Criar uma conta
Acesse [claude.ai](https://claude.ai) e registre-se com seu email ou conta Google. É grátis para começar.

### 2. Escreva sua primeira pergunta
Não precisa instalar nada. Simplesmente escreva no chat o que você precisa:

> "Me dê 5 ideias de conteúdo para Instagram sobre culinária saudável"

> "Resuma este PDF em 3 pontos-chave" (arraste o arquivo para o chat)

> "Crie um plano de marketing para lançar uma loja online"

### 3. Enviar arquivos
Você pode arrastar arquivos para o chat: PDFs, imagens, documentos. Claude os lê e dá respostas baseadas no conteúdo.

### 4. Projetos
Crie um "Projeto" para agrupar conversas sobre o mesmo tema. Por exemplo, um projeto para sua marca onde Claude lembra seu tom de voz, audiência e objetivos.

## Exemplos práticos por profissão

### Marketing
> "Escreva 10 títulos para um email de venda de um curso online de fotografia"

> "Analise este texto de venda e me diga como melhorá-lo para converter mais"

### Criação de conteúdo
> "Crie um roteiro de 60 segundos para um reel sobre produtividade"

> "Escreva um artigo de blog de 800 palavras sobre tendências de design 2026"

### Empreendedores
> "Me ajude a escrever o pitch da minha startup em 30 segundos"

> "Qual modelo de negócio combina com um app de delivery de comida saudável?"

### Estudantes e iniciantes
> "Explique o que é inteligência artificial como se eu tivesse 12 anos"

> "Resuma este capítulo de livro em pontos-chave"

## Funções destacadas

- **Leitura de arquivos.** Analisa PDFs, imagens e documentos diretamente.
- **Visão.** Pode descrever e analisar fotos, capturas de tela e designs.
- **Memória por projeto.** Lembra seu contexto dentro de um projeto específico.
- **Respostas longas e detalhadas.** Ideal para relatórios, artigos e análises extensas.

## Preços

| Plano | Custo | Inclui |
|---|---|---|
| Free | Grátis | Uso limitado |
| Pro | $20/mês | Mais uso e acesso a todos os modelos |
| Team | $25/mês por pessoa | Colaboração em equipe |

## Notas

- Claude não navega na internet em tempo real. Suas respostas são baseadas no seu treinamento.
- Suas conversas não são usadas para treinar o modelo.
- Disponível na web, app de desktop e celular.`,
    },
  },
  {
    id: 8,
    slug: '8-chatgpt',
    area: 'Telecommuting',
    techs: ['AI'],
    difficulty: 'easy',
    updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es ChatGPT?

ChatGPT es un asistente de inteligencia artificial creado por **OpenAI**. Lanzado en noviembre de 2022, fue la primera IA conversacional en volverse masiva. Hoy es usado por millones de personas en todo el mundo para trabajar, estudiar y crear.

Se destaca por su **versatilidad**, su capacidad de generar imágenes, navegar internet en tiempo real y la posibilidad de crear asistentes personalizados (GPTs).

## ¿Para qué sirve?

- **Redacción.** Escribe textos de cualquier tipo: emails, posts, artículos, descripciones de producto, guiones.
- **Generación de imágenes.** Crea imágenes originales directamente desde el chat con DALL-E.
- **Búsqueda web.** Navega internet en tiempo real para encontrar información actualizada.
- **Análisis de archivos.** Lee PDFs, planillas Excel, imágenes y documentos.
- **Asistentes personalizados.** Creá tu propio GPT especializado sin necesidad de saber programar.
- **Conversación por voz.** Hablá con ChatGPT desde tu celular como si fuera una llamada.

## Modelos disponibles

| Modelo | Velocidad | Ideal para |
|---|---|---|
| GPT-4o | Rápido | Uso general, imágenes, audio |
| GPT-4o mini | Muy rápido | Preguntas simples, alto volumen |
| o1 / o3 | Normal | Problemas que requieren pensar paso a paso |

## Cómo empezar desde cero

### 1. Crear una cuenta
Andá a [chat.openai.com](https://chat.openai.com) y registrate con email, Google o Microsoft. Es gratis.

### 2. Escribí tu primera pregunta
El chat está listo para usar. Probá algo así:

> "Dame ideas para el nombre de una marca de ropa deportiva femenina"

> "Escribime un email profesional para presentar mis servicios de diseño"

> "Creame una imagen de un logo minimalista para una cafetería"

### 3. Subir archivos
Arrastrá cualquier archivo al chat: PDFs, fotos, planillas. ChatGPT los analiza y responde.

### 4. GPTs personalizados
Explorá la tienda de GPTs o creá el tuyo propio. Por ejemplo, un GPT que sepa todo sobre tu negocio y responda como vos lo harías.

## Ejemplos prácticos por profesión

### Marketing
> "Creame un calendario de contenido para redes sociales de una panadería artesanal"

> "Escribime 5 versiones de un anuncio de Facebook para un gimnasio"

### Creación de contenido
> "Generame una imagen para la portada de un podcast sobre finanzas personales"

> "Escribime un hilo de Twitter sobre hábitos de productividad"

### Emprendedores
> "Analizá esta planilla de ventas y decime cuáles son mis productos más rentables"

> "Escribime los términos y condiciones para mi tienda online"

### Estudiantes y principiantes
> "Explicame el cambio climático de forma simple y con ejemplos"

> "Ayudame a preparar una presentación sobre energías renovables"

## Funciones destacadas

- **DALL-E.** Genera y edita imágenes originales desde el chat.
- **Búsqueda web.** Accede a información actualizada de internet.
- **Visión.** Analiza fotos, capturas de pantalla y documentos escaneados.
- **Voz.** Conversación por voz en la app móvil (iOS y Android).
- **GPT Builder.** Creá asistentes personalizados para tareas específicas.
- **Memoria.** Recordá tus preferencias y datos entre conversaciones.

## Precios

| Plan | Costo | Incluye |
|---|---|---|
| Free | Gratis | Uso limitado |
| Plus | $20/mes | Todos los modelos, DALL-E, búsqueda web |
| Team | $25/mes por persona | Colaboración en equipo |

## Notas

- ChatGPT tiene acceso a internet en tiempo real.
- Los GPTs personalizados pueden compartirse o mantenerse privados.
- Disponible en web, escritorio, iOS y Android con soporte de voz.`,

      en: `## What is ChatGPT?

ChatGPT is an artificial intelligence assistant created by **OpenAI**. Launched in November 2022, it was the first conversational AI to go mainstream. Today it's used by millions of people worldwide to work, study, and create.

It stands out for its **versatility**, its ability to generate images, browse the internet in real time, and the option to create custom assistants (GPTs).

## What is it for?

- **Writing.** Creates any type of text: emails, posts, articles, product descriptions, scripts.
- **Image generation.** Creates original images directly from the chat with DALL-E.
- **Web search.** Browses the internet in real time for up-to-date information.
- **File analysis.** Reads PDFs, Excel spreadsheets, images, and documents.
- **Custom assistants.** Create your own specialized GPT without needing to know how to code.
- **Voice conversation.** Talk to ChatGPT from your phone like a phone call.

## Available models

| Model | Speed | Ideal for |
|---|---|---|
| GPT-4o | Fast | General use, images, audio |
| GPT-4o mini | Very fast | Simple questions, high volume |
| o1 / o3 | Normal | Problems that require step-by-step thinking |

## Getting started from zero

### 1. Create an account
Go to [chat.openai.com](https://chat.openai.com) and sign up with email, Google, or Microsoft. It's free.

### 2. Write your first question
The chat is ready to use. Try something like:

> "Give me name ideas for a women's athletic clothing brand"

> "Write me a professional email to present my design services"

> "Create an image of a minimalist logo for a coffee shop"

### 3. Upload files
Drag any file into the chat: PDFs, photos, spreadsheets. ChatGPT analyzes them and responds.

### 4. Custom GPTs
Explore the GPT store or create your own. For example, a GPT that knows everything about your business and responds the way you would.

## Practical examples by profession

### Marketing
> "Create a social media content calendar for an artisan bakery"

> "Write me 5 versions of a Facebook ad for a gym"

### Content creation
> "Generate an image for a podcast cover about personal finance"

> "Write me a Twitter thread about productivity habits"

### Entrepreneurs
> "Analyze this sales spreadsheet and tell me which are my most profitable products"

> "Write me the terms and conditions for my online store"

### Students and beginners
> "Explain climate change in simple terms with examples"

> "Help me prepare a presentation about renewable energy"

## Key features

- **DALL-E.** Generates and edits original images from the chat.
- **Web search.** Accesses up-to-date information from the internet.
- **Vision.** Analyzes photos, screenshots, and scanned documents.
- **Voice.** Voice conversation on the mobile app (iOS and Android).
- **GPT Builder.** Create custom assistants for specific tasks.
- **Memory.** Remembers your preferences and data between conversations.

## Pricing

| Plan | Cost | Includes |
|---|---|---|
| Free | Free | Limited usage |
| Plus | $20/month | All models, DALL-E, web search |
| Team | $25/month per person | Team collaboration |

## Notes

- ChatGPT has real-time internet access.
- Custom GPTs can be shared or kept private.
- Available on web, desktop, iOS, and Android with voice support.`,

      pt: `## O que é ChatGPT?

ChatGPT é um assistente de inteligência artificial criado pela **OpenAI**. Lançado em novembro de 2022, foi a primeira IA conversacional a se tornar massiva. Hoje é usado por milhões de pessoas no mundo todo para trabalhar, estudar e criar.

Se destaca pela sua **versatilidade**, capacidade de gerar imagens, navegar na internet em tempo real e a possibilidade de criar assistentes personalizados (GPTs).

## Para que serve?

- **Redação.** Escreve textos de qualquer tipo: emails, posts, artigos, descrições de produto, roteiros.
- **Geração de imagens.** Cria imagens originais diretamente do chat com DALL-E.
- **Busca web.** Navega na internet em tempo real para encontrar informações atualizadas.
- **Análise de arquivos.** Lê PDFs, planilhas Excel, imagens e documentos.
- **Assistentes personalizados.** Crie seu próprio GPT especializado sem precisar saber programar.
- **Conversa por voz.** Fale com o ChatGPT pelo celular como se fosse uma ligação.

## Modelos disponíveis

| Modelo | Velocidade | Ideal para |
|---|---|---|
| GPT-4o | Rápido | Uso geral, imagens, áudio |
| GPT-4o mini | Muito rápido | Perguntas simples, alto volume |
| o1 / o3 | Normal | Problemas que exigem pensar passo a passo |

## Como começar do zero

### 1. Criar uma conta
Acesse [chat.openai.com](https://chat.openai.com) e registre-se com email, Google ou Microsoft. É grátis.

### 2. Escreva sua primeira pergunta
O chat está pronto para usar. Tente algo assim:

> "Me dê ideias de nome para uma marca de roupas esportivas femininas"

> "Escreva um email profissional para apresentar meus serviços de design"

> "Crie uma imagem de um logo minimalista para uma cafeteria"

### 3. Enviar arquivos
Arraste qualquer arquivo para o chat: PDFs, fotos, planilhas. O ChatGPT os analisa e responde.

### 4. GPTs personalizados
Explore a loja de GPTs ou crie o seu próprio. Por exemplo, um GPT que saiba tudo sobre seu negócio e responda como você faria.

## Exemplos práticos por profissão

### Marketing
> "Crie um calendário de conteúdo para redes sociais de uma padaria artesanal"

> "Escreva 5 versões de um anúncio de Facebook para uma academia"

### Criação de conteúdo
> "Gere uma imagem para a capa de um podcast sobre finanças pessoais"

> "Escreva uma thread de Twitter sobre hábitos de produtividade"

### Empreendedores
> "Analise esta planilha de vendas e me diga quais são meus produtos mais rentáveis"

> "Escreva os termos e condições para minha loja online"

### Estudantes e iniciantes
> "Explique as mudanças climáticas de forma simples e com exemplos"

> "Me ajude a preparar uma apresentação sobre energias renováveis"

## Funções destacadas

- **DALL-E.** Gera e edita imagens originais a partir do chat.
- **Busca web.** Acessa informações atualizadas da internet.
- **Visão.** Analisa fotos, capturas de tela e documentos escaneados.
- **Voz.** Conversa por voz no app móvel (iOS e Android).
- **GPT Builder.** Crie assistentes personalizados para tarefas específicas.
- **Memória.** Lembra suas preferências e dados entre conversas.

## Preços

| Plano | Custo | Inclui |
|---|---|---|
| Free | Grátis | Uso limitado |
| Plus | $20/mês | Todos os modelos, DALL-E, busca web |
| Team | $25/mês por pessoa | Colaboração em equipe |

## Notas

- O ChatGPT tem acesso à internet em tempo real.
- GPTs personalizados podem ser compartilhados ou mantidos privados.
- Disponível na web, desktop, iOS e Android com suporte de voz.`,
    },
  },
  {
    id: 9,
    slug: '9-gemini',
    area: 'Telecommuting',
    techs: ['AI'],
    difficulty: 'easy',
    updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es Gemini?

Gemini es el asistente de inteligencia artificial de **Google**, lanzado en diciembre de 2023. Su mayor ventaja es que está **integrado con todo el ecosistema de Google**: Gmail, Drive, Docs, Maps, YouTube y la búsqueda de Google.

También puede entender **texto, imágenes, audio y video** en una misma conversación, lo que lo hace muy versátil para distintos tipos de trabajo.

## ¿Para qué sirve?

- **Productividad.** Asistente dentro de Gmail, Docs, Sheets y Slides para redactar, resumir y organizar.
- **Búsqueda inteligente.** Respuestas directas con información actualizada de internet.
- **Análisis visual.** Analiza fotos, capturas de pantalla y videos que le envíes.
- **Redacción.** Escribe emails, presentaciones, resúmenes y contenido para redes.
- **Planificación.** Ayuda a organizar viajes, itinerarios y planes usando Google Maps.
- **Celular.** Funciona como asistente en Android, reemplazando al antiguo Google Assistant.

## Modelos disponibles

| Modelo | Velocidad | Ideal para |
|---|---|---|
| Gemini Ultra | Normal | Tareas complejas y análisis profundo |
| Gemini Pro | Rápido | Uso general, redacción, resúmenes |
| Gemini Flash | Muy rápido | Respuestas instantáneas |
| Gemini Nano | Instantáneo | Funciones sin internet en el celular |

## Cómo empezar desde cero

### 1. Iniciar sesión
Andá a [gemini.google.com](https://gemini.google.com) e iniciá sesión con tu cuenta de Google. Si tenés Gmail, ya tenés cuenta.

### 2. Escribí tu primera pregunta
El chat funciona como Google pero conversacional. Probá algo así:

> "Resumime las noticias más importantes de hoy"

> "Ayudame a escribir un email para pedir presupuesto a un proveedor"

> "Buscá vuelos baratos de Buenos Aires a Madrid en julio"

### 3. Subir imágenes
Podés enviar fotos directamente en el chat. Por ejemplo, una foto de un plato de comida y preguntar la receta, o una captura de pantalla para que la analice.

### 4. Extensiones de Google
Activá las extensiones para que Gemini acceda a tu Gmail, Drive, Maps y YouTube. Así podés decirle:

> "Buscá en mi Drive el documento del presupuesto 2026"

> "Mostrá mis emails no leídos de esta semana"

## Ejemplos prácticos por profesión

### Marketing
> "Escribime un plan de contenido semanal para el Instagram de una inmobiliaria"

> "Resumime qué dicen las reseñas de mi negocio en Google Maps"

### Creación de contenido
> "Describime esta imagen y escribime un caption para Instagram"

> "Dame ideas para 10 videos de YouTube sobre viajes económicos"

### Emprendedores
> "Buscá en mi Gmail todos los emails de proveedores del último mes y haceme un resumen"

> "Creame una presentación en Google Slides sobre mi proyecto"

### Estudiantes y principiantes
> "Explicame la fotosíntesis de forma simple con un ejemplo cotidiano"

> "Ayudame a organizar mi semana de estudio para 5 materias"

## Funciones destacadas

- **Integración con Google.** Accede a Gmail, Drive, Docs, Sheets, Maps y YouTube.
- **Búsqueda en tiempo real.** Siempre tiene información actualizada de internet.
- **Visión.** Analiza imágenes, fotos y capturas de pantalla.
- **Gems.** Versiones personalizadas de Gemini para tareas específicas (tu asistente de marketing, tu tutor, etc.).
- **Android.** Asistente de voz integrado en celulares Android.
- **Modo offline.** Gemini Nano funciona sin internet en algunos dispositivos.

## Precios

| Plan | Costo | Incluye |
|---|---|---|
| Free | Gratis | Gemini Pro con límites |
| Advanced | $20/mes | Todos los modelos + 2TB en Google One |
| Business | $20/mes por persona | Integración completa con Google Workspace |

## Notas

- Gemini tiene acceso a internet en tiempo real por defecto.
- Si ya usás Google Workspace (Gmail, Drive, Docs), Gemini se integra directamente.
- Disponible en web, app de Android y como asistente de voz en celulares.`,

      en: `## What is Gemini?

Gemini is **Google's** artificial intelligence assistant, launched in December 2023. Its biggest advantage is that it's **integrated with the entire Google ecosystem**: Gmail, Drive, Docs, Maps, YouTube, and Google Search.

It can also understand **text, images, audio, and video** in the same conversation, making it very versatile for different types of work.

## What is it for?

- **Productivity.** Assistant inside Gmail, Docs, Sheets, and Slides for writing, summarizing, and organizing.
- **Smart search.** Direct answers with up-to-date information from the internet.
- **Visual analysis.** Analyzes photos, screenshots, and videos you send.
- **Writing.** Creates emails, presentations, summaries, and social media content.
- **Planning.** Helps organize trips, itineraries, and plans using Google Maps.
- **Mobile.** Works as an assistant on Android, replacing the old Google Assistant.

## Available models

| Model | Speed | Ideal for |
|---|---|---|
| Gemini Ultra | Normal | Complex tasks and deep analysis |
| Gemini Pro | Fast | General use, writing, summaries |
| Gemini Flash | Very fast | Instant responses |
| Gemini Nano | Instant | Offline features on mobile |

## Getting started from zero

### 1. Sign in
Go to [gemini.google.com](https://gemini.google.com) and sign in with your Google account. If you have Gmail, you already have an account.

### 2. Write your first question
The chat works like Google but conversational. Try something like:

> "Summarize today's most important news"

> "Help me write an email to request a quote from a supplier"

> "Search for cheap flights from New York to London in July"

### 3. Upload images
You can send photos directly in the chat. For example, a photo of a dish to ask for the recipe, or a screenshot for analysis.

### 4. Google Extensions
Activate extensions so Gemini can access your Gmail, Drive, Maps, and YouTube. Then you can say:

> "Search my Drive for the 2026 budget document"

> "Show me my unread emails from this week"

## Practical examples by profession

### Marketing
> "Write me a weekly content plan for a real estate company's Instagram"

> "Summarize what people say in my business reviews on Google Maps"

### Content creation
> "Describe this image and write me an Instagram caption"

> "Give me ideas for 10 YouTube videos about budget travel"

### Entrepreneurs
> "Search my Gmail for all supplier emails from last month and make a summary"

> "Create a Google Slides presentation about my project"

### Students and beginners
> "Explain photosynthesis simply with an everyday example"

> "Help me organize my study week for 5 subjects"

## Key features

- **Google integration.** Accesses Gmail, Drive, Docs, Sheets, Maps, and YouTube.
- **Real-time search.** Always has up-to-date information from the internet.
- **Vision.** Analyzes images, photos, and screenshots.
- **Gems.** Customized versions of Gemini for specific tasks (your marketing assistant, your tutor, etc.).
- **Android.** Voice assistant built into Android phones.
- **Offline mode.** Gemini Nano works without internet on some devices.

## Pricing

| Plan | Cost | Includes |
|---|---|---|
| Free | Free | Gemini Pro with limits |
| Advanced | $20/month | All models + 2TB Google One |
| Business | $20/month per person | Full Google Workspace integration |

## Notes

- Gemini has real-time internet access by default.
- If you already use Google Workspace (Gmail, Drive, Docs), Gemini integrates directly.
- Available on web, Android app, and as a voice assistant on phones.`,

      pt: `## O que é Gemini?

Gemini é o assistente de inteligência artificial do **Google**, lançado em dezembro de 2023. Sua maior vantagem é estar **integrado com todo o ecossistema Google**: Gmail, Drive, Docs, Maps, YouTube e a busca do Google.

Também consegue entender **texto, imagens, áudio e vídeo** na mesma conversa, o que o torna muito versátil para diferentes tipos de trabalho.

## Para que serve?

- **Produtividade.** Assistente dentro do Gmail, Docs, Sheets e Slides para redigir, resumir e organizar.
- **Busca inteligente.** Respostas diretas com informações atualizadas da internet.
- **Análise visual.** Analisa fotos, capturas de tela e vídeos que você enviar.
- **Redação.** Escreve emails, apresentações, resumos e conteúdo para redes.
- **Planejamento.** Ajuda a organizar viagens, roteiros e planos usando Google Maps.
- **Celular.** Funciona como assistente no Android, substituindo o antigo Google Assistant.

## Modelos disponíveis

| Modelo | Velocidade | Ideal para |
|---|---|---|
| Gemini Ultra | Normal | Tarefas complexas e análise profunda |
| Gemini Pro | Rápido | Uso geral, redação, resumos |
| Gemini Flash | Muito rápido | Respostas instantâneas |
| Gemini Nano | Instantâneo | Funções sem internet no celular |

## Como começar do zero

### 1. Fazer login
Acesse [gemini.google.com](https://gemini.google.com) e faça login com sua conta Google. Se você tem Gmail, já tem conta.

### 2. Escreva sua primeira pergunta
O chat funciona como o Google, mas conversacional. Tente algo assim:

> "Resuma as notícias mais importantes de hoje"

> "Me ajude a escrever um email para pedir orçamento a um fornecedor"

> "Busque voos baratos de São Paulo para Lisboa em julho"

### 3. Enviar imagens
Você pode enviar fotos diretamente no chat. Por exemplo, uma foto de um prato de comida para perguntar a receita, ou uma captura de tela para análise.

### 4. Extensões do Google
Ative as extensões para que o Gemini acesse seu Gmail, Drive, Maps e YouTube. Assim você pode dizer:

> "Busque no meu Drive o documento do orçamento 2026"

> "Mostre meus emails não lidos desta semana"

## Exemplos práticos por profissão

### Marketing
> "Escreva um plano de conteúdo semanal para o Instagram de uma imobiliária"

> "Resuma o que dizem as avaliações do meu negócio no Google Maps"

### Criação de conteúdo
> "Descreva esta imagem e escreva uma legenda para Instagram"

> "Me dê ideias para 10 vídeos de YouTube sobre viagens econômicas"

### Empreendedores
> "Busque no meu Gmail todos os emails de fornecedores do último mês e faça um resumo"

> "Crie uma apresentação no Google Slides sobre meu projeto"

### Estudantes e iniciantes
> "Explique a fotossíntese de forma simples com um exemplo cotidiano"

> "Me ajude a organizar minha semana de estudo para 5 matérias"

## Funções destacadas

- **Integração com Google.** Acessa Gmail, Drive, Docs, Sheets, Maps e YouTube.
- **Busca em tempo real.** Sempre tem informações atualizadas da internet.
- **Visão.** Analisa imagens, fotos e capturas de tela.
- **Gems.** Versões personalizadas do Gemini para tarefas específicas (seu assistente de marketing, seu tutor, etc.).
- **Android.** Assistente de voz integrado em celulares Android.
- **Modo offline.** Gemini Nano funciona sem internet em alguns dispositivos.

## Preços

| Plano | Custo | Inclui |
|---|---|---|
| Free | Grátis | Gemini Pro com limites |
| Advanced | $20/mês | Todos os modelos + 2TB no Google One |
| Business | $20/mês por pessoa | Integração completa com Google Workspace |

## Notas

- O Gemini tem acesso à internet em tempo real por padrão.
- Se você já usa Google Workspace (Gmail, Drive, Docs), o Gemini se integra diretamente.
- Disponível na web, app de Android e como assistente de voz em celulares.`,
    },
  },
  {
    id: 10,
    slug: '10-linkedin',
    area: 'Telecommuting',
    techs: ['Networking'],
    difficulty: 'easy',
    updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es LinkedIn?

LinkedIn es la **red social profesional más grande del mundo**, con más de 1.000 millones de usuarios. Fue creada en 2003 y hoy pertenece a **Microsoft**. A diferencia de otras redes, LinkedIn está enfocada exclusivamente en el ámbito laboral y profesional.

Es el lugar donde las personas buscan empleo, construyen su marca personal, hacen networking y comparten conocimiento de su industria.

## ¿Para qué sirve?

- **Buscar empleo.** Miles de ofertas laborales publicadas diariamente por empresas de todo el mundo.
- **Networking.** Conectar con profesionales de tu industria, clientes potenciales y colaboradores.
- **Marca personal.** Mostrar tu experiencia, logros y conocimientos para posicionarte como referente.
- **Generar contenido.** Publicar artículos, posts y videos para ganar visibilidad profesional.
- **Reclutar talento.** Buscar y contactar candidatos para tu empresa o proyecto.
- **Aprender.** LinkedIn Learning ofrece miles de cursos en video sobre negocios, tecnología y más.

## Cómo empezar desde cero

### 1. Crear tu perfil
Andá a [linkedin.com](https://linkedin.com) y registrate. Completá tu perfil como si fuera tu CV digital:
- Foto profesional (aumenta 14x las visitas a tu perfil)
- Titular claro que diga qué hacés y para quién
- Resumen de 3-4 líneas con tu propuesta de valor
- Experiencia laboral y educación

### 2. Conectar con personas
Empezá conectando con compañeros de trabajo, ex colegas y personas de tu industria. LinkedIn sugiere conexiones basadas en tu perfil.

### 3. Publicar contenido
Compartí lo que sabés. Puede ser una reflexión sobre tu industria, un aprendizaje reciente o un consejo práctico.

### 4. Interactuar
Comentá y reaccioná a publicaciones de otros. Esto te da visibilidad y construye relaciones.

## Ejemplos prácticos por profesión

### Marketing
> Publicar casos de éxito de campañas que hayas gestionado

> Compartir tendencias de marketing digital con tu opinión

### Creación de contenido
> Mostrar tu portfolio y detrás de escena de tus proyectos

> Escribir artículos sobre tu proceso creativo

### Emprendedores
> Contar la historia de tu emprendimiento y los aprendizajes

> Conectar con inversores y potenciales socios

### Personas buscando empleo
> Optimizar tu perfil con palabras clave de tu industria

> Postularte a ofertas y contactar reclutadores directamente

## Funciones destacadas

- **Feed de noticias.** Contenido profesional de tu red de contactos.
- **Empleos.** Motor de búsqueda de trabajo con filtros avanzados.
- **Mensajes.** Chat directo con cualquier profesional.
- **LinkedIn Learning.** Plataforma de cursos online incluida en Premium.
- **Páginas de empresa.** Presencia oficial de tu marca o negocio.
- **Newsletters.** Creá tu propio boletín y ganá suscriptores.

## Precios

| Plan | Costo | Incluye |
|---|---|---|
| Free | Gratis | Perfil, publicar, conectar, postularte |
| Premium | Desde $30/mes | InMail, quién vio tu perfil, LinkedIn Learning |

## Notas

- Un perfil completo recibe hasta 40x más oportunidades.
- Publicar al menos 1 vez por semana aumenta tu visibilidad significativamente.
- Disponible en web, iOS y Android.`,

      en: `## What is LinkedIn?

LinkedIn is the **world's largest professional social network**, with over 1 billion users. Created in 2003, it now belongs to **Microsoft**. Unlike other networks, LinkedIn is focused exclusively on the professional world.

It's where people search for jobs, build their personal brand, network, and share industry knowledge.

## What is it for?

- **Job searching.** Thousands of job offers posted daily by companies worldwide.
- **Networking.** Connect with professionals in your industry, potential clients, and collaborators.
- **Personal branding.** Showcase your experience, achievements, and knowledge to position yourself as a reference.
- **Content creation.** Publish articles, posts, and videos to gain professional visibility.
- **Recruiting.** Search and contact candidates for your company or project.
- **Learning.** LinkedIn Learning offers thousands of video courses on business, technology, and more.

## Getting started from zero

### 1. Create your profile
Go to [linkedin.com](https://linkedin.com) and sign up. Complete your profile like a digital resume:
- Professional photo (increases profile visits 14x)
- Clear headline saying what you do and for whom
- 3-4 line summary with your value proposition
- Work experience and education

### 2. Connect with people
Start by connecting with coworkers, former colleagues, and people in your industry. LinkedIn suggests connections based on your profile.

### 3. Post content
Share what you know. It could be an industry reflection, a recent learning, or a practical tip.

### 4. Engage
Comment and react to others' posts. This gives you visibility and builds relationships.

## Practical examples by profession

### Marketing
> Post case studies of campaigns you've managed

> Share digital marketing trends with your opinion

### Content creation
> Showcase your portfolio and behind-the-scenes of your projects

> Write articles about your creative process

### Entrepreneurs
> Tell your startup story and the lessons learned

> Connect with investors and potential partners

### Job seekers
> Optimize your profile with industry keywords

> Apply to offers and contact recruiters directly

## Key features

- **News feed.** Professional content from your network.
- **Jobs.** Job search engine with advanced filters.
- **Messages.** Direct chat with any professional.
- **LinkedIn Learning.** Online course platform included with Premium.
- **Company pages.** Official presence for your brand or business.
- **Newsletters.** Create your own newsletter and gain subscribers.

## Pricing

| Plan | Cost | Includes |
|---|---|---|
| Free | Free | Profile, posting, connecting, applying |
| Premium | From $30/month | InMail, who viewed your profile, LinkedIn Learning |

## Notes

- A complete profile receives up to 40x more opportunities.
- Posting at least once a week significantly increases your visibility.
- Available on web, iOS, and Android.`,

      pt: `## O que é LinkedIn?

LinkedIn é a **maior rede social profissional do mundo**, com mais de 1 bilhão de usuários. Criada em 2003, hoje pertence à **Microsoft**. Diferente de outras redes, o LinkedIn é focado exclusivamente no âmbito profissional.

É onde as pessoas buscam emprego, constroem sua marca pessoal, fazem networking e compartilham conhecimento da sua indústria.

## Para que serve?

- **Buscar emprego.** Milhares de vagas publicadas diariamente por empresas do mundo todo.
- **Networking.** Conectar com profissionais da sua área, clientes potenciais e colaboradores.
- **Marca pessoal.** Mostrar sua experiência, conquistas e conhecimentos para se posicionar como referência.
- **Criar conteúdo.** Publicar artigos, posts e vídeos para ganhar visibilidade profissional.
- **Recrutar.** Buscar e contatar candidatos para sua empresa ou projeto.
- **Aprender.** LinkedIn Learning oferece milhares de cursos em vídeo sobre negócios, tecnologia e mais.

## Como começar do zero

### 1. Criar seu perfil
Acesse [linkedin.com](https://linkedin.com) e registre-se. Complete seu perfil como um currículo digital:
- Foto profissional (aumenta 14x as visitas ao perfil)
- Título claro dizendo o que você faz e para quem
- Resumo de 3-4 linhas com sua proposta de valor
- Experiência profissional e educação

### 2. Conectar com pessoas
Comece conectando com colegas de trabalho, ex-colegas e pessoas da sua área. O LinkedIn sugere conexões baseadas no seu perfil.

### 3. Publicar conteúdo
Compartilhe o que você sabe. Pode ser uma reflexão sobre sua área, um aprendizado recente ou uma dica prática.

### 4. Interagir
Comente e reaja a publicações de outros. Isso dá visibilidade e constrói relacionamentos.

## Exemplos práticos por profissão

### Marketing
> Publicar cases de sucesso de campanhas que você gerenciou

> Compartilhar tendências de marketing digital com sua opinião

### Criação de conteúdo
> Mostrar seu portfólio e bastidores dos seus projetos

> Escrever artigos sobre seu processo criativo

### Empreendedores
> Contar a história do seu negócio e os aprendizados

> Conectar com investidores e potenciais sócios

### Pessoas buscando emprego
> Otimizar seu perfil com palavras-chave da sua área

> Candidatar-se a vagas e contatar recrutadores diretamente

## Funções destacadas

- **Feed de notícias.** Conteúdo profissional da sua rede de contatos.
- **Vagas.** Motor de busca de emprego com filtros avançados.
- **Mensagens.** Chat direto com qualquer profissional.
- **LinkedIn Learning.** Plataforma de cursos online incluída no Premium.
- **Páginas de empresa.** Presença oficial da sua marca ou negócio.
- **Newsletters.** Crie seu próprio boletim e ganhe assinantes.

## Preços

| Plano | Custo | Inclui |
|---|---|---|
| Free | Grátis | Perfil, publicar, conectar, candidatar-se |
| Premium | A partir de $30/mês | InMail, quem viu seu perfil, LinkedIn Learning |

## Notas

- Um perfil completo recebe até 40x mais oportunidades.
- Publicar ao menos 1 vez por semana aumenta significativamente sua visibilidade.
- Disponível na web, iOS e Android.`,
    },
  },
  {
    id: 11,
    slug: '11-discord',
    area: 'Telecommuting',
    techs: ['Comunicación'],
    difficulty: 'easy',
    updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es Discord?

Discord es una plataforma de comunicación gratuita que permite chatear por **texto, voz y video** en tiempo real. Originalmente creada para gamers en 2015, hoy es usada por comunidades de todo tipo: educación, trabajo remoto, arte, tecnología, marcas y más.

Se organiza en **servidores** (como grupos) que pueden tener múltiples canales temáticos.

## ¿Para qué sirve?

- **Comunidades.** Crear o unirte a grupos de personas con intereses en común.
- **Trabajo en equipo.** Comunicación en tiempo real con tu equipo de trabajo remoto.
- **Llamadas de voz y video.** Reuniones grupales sin límite de tiempo.
- **Compartir archivos.** Enviar imágenes, documentos y links en canales organizados.
- **Eventos en vivo.** Charlas, workshops y sesiones de preguntas con tu audiencia.
- **Bots y automatizaciones.** Agregar funcionalidades automáticas a tu servidor.

## Cómo empezar desde cero

### 1. Crear una cuenta
Andá a [discord.com](https://discord.com) o descargá la app. Registrate con tu email.

### 2. Unirte a un servidor
Buscá comunidades que te interesen o aceptá invitaciones de otros usuarios. Hay servidores de todo: idiomas, marketing, diseño, emprendimiento.

### 3. Crear tu servidor
Si querés tu propia comunidad, creá un servidor en un clic. Podés agregar canales de texto y voz para organizar las conversaciones.

### 4. Participar
Escribí en los canales, uníte a llamadas de voz y compartí contenido relevante.

## Ejemplos prácticos por profesión

### Marketing
> Crear un servidor para tu marca donde tu audiencia interactúe

> Unirte a comunidades de marketing para aprender y hacer networking

### Creación de contenido
> Tener un canal exclusivo para tu comunidad de seguidores

> Organizar sesiones de Q&A en vivo por voz

### Emprendedores
> Usar Discord como herramienta de comunicación interna gratuita

> Crear un espacio para feedback de tus clientes

### Estudiantes
> Unirte a servidores de estudio grupal o tutoría

> Crear un grupo con compañeros para organizar proyectos

## Funciones destacadas

- **Canales de texto.** Conversaciones organizadas por tema.
- **Canales de voz.** Llamadas grupales permanentes donde entrar y salir libremente.
- **Hilos.** Conversaciones secundarias dentro de un canal sin interrumpir el flujo.
- **Stage Channels.** Eventos tipo conferencia con speakers y audiencia.
- **Roles.** Asignar permisos y colores a los miembros de tu servidor.
- **Screen sharing.** Compartir tu pantalla en videollamadas.

## Precios

| Plan | Costo | Incluye |
|---|---|---|
| Free | Gratis | Todo lo esencial |
| Nitro | $10/mes | Mejor calidad de video, emojis, archivos grandes |

## Notas

- Discord es completamente gratis para uso básico.
- Disponible en web, escritorio (Windows, Mac, Linux), iOS y Android.
- Ideal para comunidades que necesitan comunicación en tiempo real.`,

      en: `## What is Discord?

Discord is a free communication platform for chatting via **text, voice, and video** in real time. Originally created for gamers in 2015, today it's used by all types of communities: education, remote work, art, technology, brands, and more.

It's organized into **servers** (like groups) that can have multiple themed channels.

## What is it for?

- **Communities.** Create or join groups of people with common interests.
- **Teamwork.** Real-time communication with your remote work team.
- **Voice and video calls.** Group meetings with no time limit.
- **File sharing.** Send images, documents, and links in organized channels.
- **Live events.** Talks, workshops, and Q&A sessions with your audience.
- **Bots and automations.** Add automatic features to your server.

## Getting started from zero

### 1. Create an account
Go to [discord.com](https://discord.com) or download the app. Sign up with your email.

### 2. Join a server
Search for communities that interest you or accept invitations. There are servers for everything: languages, marketing, design, entrepreneurship.

### 3. Create your server
If you want your own community, create a server in one click. Add text and voice channels to organize conversations.

### 4. Participate
Write in channels, join voice calls, and share relevant content.

## Practical examples by profession

### Marketing
> Create a server for your brand where your audience interacts

> Join marketing communities to learn and network

### Content creation
> Have an exclusive channel for your follower community

> Organize live Q&A sessions by voice

### Entrepreneurs
> Use Discord as a free internal communication tool

> Create a space for customer feedback

### Students
> Join group study or tutoring servers

> Create a group with classmates to organize projects

## Key features

- **Text channels.** Conversations organized by topic.
- **Voice channels.** Permanent group calls you can join and leave freely.
- **Threads.** Side conversations within a channel without interrupting flow.
- **Stage Channels.** Conference-style events with speakers and audience.
- **Roles.** Assign permissions and colors to server members.
- **Screen sharing.** Share your screen in video calls.

## Pricing

| Plan | Cost | Includes |
|---|---|---|
| Free | Free | All essentials |
| Nitro | $10/month | Better video quality, emojis, large files |

## Notes

- Discord is completely free for basic use.
- Available on web, desktop (Windows, Mac, Linux), iOS, and Android.
- Ideal for communities that need real-time communication.`,

      pt: `## O que é Discord?

Discord é uma plataforma de comunicação gratuita para conversar por **texto, voz e vídeo** em tempo real. Originalmente criada para gamers em 2015, hoje é usada por comunidades de todo tipo: educação, trabalho remoto, arte, tecnologia, marcas e mais.

Se organiza em **servidores** (como grupos) que podem ter múltiplos canais temáticos.

## Para que serve?

- **Comunidades.** Criar ou se juntar a grupos de pessoas com interesses em comum.
- **Trabalho em equipe.** Comunicação em tempo real com sua equipe remota.
- **Chamadas de voz e vídeo.** Reuniões em grupo sem limite de tempo.
- **Compartilhar arquivos.** Enviar imagens, documentos e links em canais organizados.
- **Eventos ao vivo.** Palestras, workshops e sessões de perguntas com sua audiência.
- **Bots e automações.** Adicionar funcionalidades automáticas ao seu servidor.

## Como começar do zero

### 1. Criar uma conta
Acesse [discord.com](https://discord.com) ou baixe o app. Registre-se com seu email.

### 2. Entrar em um servidor
Busque comunidades que te interessem ou aceite convites. Há servidores de tudo: idiomas, marketing, design, empreendedorismo.

### 3. Criar seu servidor
Se quiser sua própria comunidade, crie um servidor em um clique. Adicione canais de texto e voz para organizar as conversas.

### 4. Participar
Escreva nos canais, entre em chamadas de voz e compartilhe conteúdo relevante.

## Exemplos práticos por profissão

### Marketing
> Criar um servidor para sua marca onde sua audiência interaja

> Entrar em comunidades de marketing para aprender e fazer networking

### Criação de conteúdo
> Ter um canal exclusivo para sua comunidade de seguidores

> Organizar sessões de Q&A ao vivo por voz

### Empreendedores
> Usar Discord como ferramenta de comunicação interna gratuita

> Criar um espaço para feedback dos seus clientes

### Estudantes
> Entrar em servidores de estudo em grupo ou tutoria

> Criar um grupo com colegas para organizar projetos

## Funções destacadas

- **Canais de texto.** Conversas organizadas por tema.
- **Canais de voz.** Chamadas em grupo permanentes onde entrar e sair livremente.
- **Threads.** Conversas secundárias dentro de um canal sem interromper o fluxo.
- **Stage Channels.** Eventos tipo conferência com palestrantes e audiência.
- **Cargos.** Atribuir permissões e cores aos membros do servidor.
- **Compartilhamento de tela.** Compartilhe sua tela em videochamadas.

## Preços

| Plano | Custo | Inclui |
|---|---|---|
| Free | Grátis | Tudo o essencial |
| Nitro | $10/mês | Melhor qualidade de vídeo, emojis, arquivos grandes |

## Notas

- Discord é completamente grátis para uso básico.
- Disponível na web, desktop (Windows, Mac, Linux), iOS e Android.
- Ideal para comunidades que precisam de comunicação em tempo real.`,
    },
  },
  {
    id: 12,
    slug: '12-duolingo',
    area: 'Telecommuting',
    techs: ['Idiomas'],
    difficulty: 'easy',
    updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es Duolingo?

Duolingo es la **app de idiomas más popular del mundo**, con más de 500 millones de usuarios. Es gratuita y usa **gamificación** (puntos, rachas, ligas) para que aprender un idioma sea tan adictivo como un juego.

Ofrece cursos en más de 40 idiomas, desde inglés y portugués hasta japonés y esperanto.

## ¿Para qué sirve?

- **Aprender idiomas.** Lecciones cortas de 5-15 minutos diarias.
- **Practicar vocabulario.** Repetición espaciada para memorizar palabras.
- **Mejorar pronunciación.** Ejercicios de habla con reconocimiento de voz.
- **Lectura y escucha.** Historias interactivas y ejercicios de audio.
- **Preparar exámenes.** Práctica para certificaciones de idiomas.
- **Mantener una rutina.** El sistema de rachas motiva a practicar todos los días.

## Cómo empezar desde cero

### 1. Descargar la app
Disponible en iOS, Android o en [duolingo.com](https://duolingo.com). Creá tu cuenta gratis.

### 2. Elegir tu idioma
Seleccioná el idioma que querés aprender. Si ya sabés algo, podés hacer un test de nivel.

### 3. Practicar cada día
Las lecciones duran 5 minutos. Duolingo te envía recordatorios para mantener tu racha.

### 4. Ganar puntos
Cada lección completada te da XP. Competí en ligas semanales con otros usuarios.

## Ejemplos prácticos por profesión

### Marketing
> Aprender inglés para entender tendencias globales y herramientas internacionales

### Emprendedores
> Aprender el idioma de tu mercado objetivo para comunicarte mejor con clientes

### Viajeros y creadores
> Aprender lo básico del idioma local antes de un viaje o proyecto internacional

### Estudiantes
> Complementar tus clases de idiomas con práctica diaria gratuita

## Funciones destacadas

- **Lecciones cortas.** Ejercicios de 5 minutos que cubren vocabulario, gramática y pronunciación.
- **Rachas.** Contador de días consecutivos que motiva la práctica diaria.
- **Ligas.** Competencia semanal con otros usuarios para ganar puntos.
- **Historias.** Cuentos interactivos para practicar lectura y comprensión.
- **Podcasts.** Episodios en el idioma que estás aprendiendo (algunos idiomas).
- **Duolingo Max.** IA para practicar conversaciones y recibir explicaciones personalizadas.

## Precios

| Plan | Costo | Incluye |
|---|---|---|
| Free | Gratis | Todas las lecciones con publicidad |
| Super | $7/mes | Sin publicidad, vidas ilimitadas, práctica extra |
| Max | $14/mes | Todo de Super + conversaciones con IA |

## Notas

- 5 minutos al día es suficiente para empezar a notar progreso.
- La racha es un motivador poderoso: muchos usuarios llevan años sin romperla.
- Disponible en iOS, Android y web.`,

      en: `## What is Duolingo?

Duolingo is the **world's most popular language app**, with over 500 million users. It's free and uses **gamification** (points, streaks, leagues) to make learning a language as addictive as a game.

It offers courses in over 40 languages, from English and Portuguese to Japanese and Esperanto.

## What is it for?

- **Learning languages.** Short 5-15 minute daily lessons.
- **Practicing vocabulary.** Spaced repetition to memorize words.
- **Improving pronunciation.** Speaking exercises with voice recognition.
- **Reading and listening.** Interactive stories and audio exercises.
- **Exam preparation.** Practice for language certifications.
- **Maintaining a routine.** The streak system motivates daily practice.

## Getting started from zero

### 1. Download the app
Available on iOS, Android, or at [duolingo.com](https://duolingo.com). Create your free account.

### 2. Choose your language
Select the language you want to learn. If you already know some, you can take a placement test.

### 3. Practice every day
Lessons take 5 minutes. Duolingo sends reminders to keep your streak going.

### 4. Earn points
Each completed lesson gives you XP. Compete in weekly leagues with other users.

## Practical examples by profession

### Marketing
> Learn English to understand global trends and international tools

### Entrepreneurs
> Learn your target market's language to communicate better with clients

### Travelers and creators
> Learn the basics of the local language before a trip or international project

### Students
> Complement your language classes with free daily practice

## Key features

- **Short lessons.** 5-minute exercises covering vocabulary, grammar, and pronunciation.
- **Streaks.** Consecutive day counter that motivates daily practice.
- **Leagues.** Weekly competition with other users to earn points.
- **Stories.** Interactive tales to practice reading and comprehension.
- **Podcasts.** Episodes in the language you're learning (some languages).
- **Duolingo Max.** AI for practicing conversations and receiving personalized explanations.

## Pricing

| Plan | Cost | Includes |
|---|---|---|
| Free | Free | All lessons with ads |
| Super | $7/month | No ads, unlimited lives, extra practice |
| Max | $14/month | Everything in Super + AI conversations |

## Notes

- 5 minutes a day is enough to start noticing progress.
- The streak is a powerful motivator: many users have kept theirs for years.
- Available on iOS, Android, and web.`,

      pt: `## O que é Duolingo?

Duolingo é o **app de idiomas mais popular do mundo**, com mais de 500 milhões de usuários. É gratuito e usa **gamificação** (pontos, sequências, ligas) para tornar o aprendizado de idiomas tão viciante quanto um jogo.

Oferece cursos em mais de 40 idiomas, desde inglês e espanhol até japonês e esperanto.

## Para que serve?

- **Aprender idiomas.** Lições curtas de 5-15 minutos diárias.
- **Praticar vocabulário.** Repetição espaçada para memorizar palavras.
- **Melhorar pronúncia.** Exercícios de fala com reconhecimento de voz.
- **Leitura e escuta.** Histórias interativas e exercícios de áudio.
- **Preparar exames.** Prática para certificações de idiomas.
- **Manter uma rotina.** O sistema de sequências motiva a praticar todos os dias.

## Como começar do zero

### 1. Baixar o app
Disponível no iOS, Android ou em [duolingo.com](https://duolingo.com). Crie sua conta grátis.

### 2. Escolher seu idioma
Selecione o idioma que quer aprender. Se já sabe algo, pode fazer um teste de nível.

### 3. Praticar cada dia
As lições duram 5 minutos. O Duolingo envia lembretes para manter sua sequência.

### 4. Ganhar pontos
Cada lição completada dá XP. Compita em ligas semanais com outros usuários.

## Exemplos práticos por profissão

### Marketing
> Aprender inglês para entender tendências globais e ferramentas internacionais

### Empreendedores
> Aprender o idioma do seu mercado-alvo para se comunicar melhor com clientes

### Viajantes e criadores
> Aprender o básico do idioma local antes de uma viagem ou projeto internacional

### Estudantes
> Complementar suas aulas de idiomas com prática diária gratuita

## Funções destacadas

- **Lições curtas.** Exercícios de 5 minutos cobrindo vocabulário, gramática e pronúncia.
- **Sequências.** Contador de dias consecutivos que motiva a prática diária.
- **Ligas.** Competição semanal com outros usuários para ganhar pontos.
- **Histórias.** Contos interativos para praticar leitura e compreensão.
- **Podcasts.** Episódios no idioma que está aprendendo (alguns idiomas).
- **Duolingo Max.** IA para praticar conversas e receber explicações personalizadas.

## Preços

| Plano | Custo | Inclui |
|---|---|---|
| Free | Grátis | Todas as lições com publicidade |
| Super | $7/mês | Sem publicidade, vidas ilimitadas, prática extra |
| Max | $14/mês | Tudo do Super + conversas com IA |

## Notas

- 5 minutos por dia é suficiente para começar a notar progresso.
- A sequência é um motivador poderoso: muitos usuários mantêm a deles por anos.
- Disponível no iOS, Android e web.`,
    },
  },
  {
    id: 13,
    slug: '13-vscode',
    area: 'Telecommuting',
    techs: ['Editor'],
    difficulty: 'easy',
    updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es Visual Studio Code?

Visual Studio Code (VS Code) es un **editor de texto gratuito** creado por **Microsoft**. Es el editor más usado del mundo por desarrolladores, pero también es útil para cualquier persona que trabaje con archivos de texto, documentos o proyectos organizados en carpetas.

Es liviano, rápido y se puede personalizar con miles de extensiones.

## ¿Para qué sirve?

- **Editar archivos.** Abrir y editar cualquier tipo de archivo de texto.
- **Organizar proyectos.** Ver y navegar carpetas completas de trabajo.
- **Extensiones.** Agregar funcionalidades como corrector ortográfico, temas visuales, IA y más.
- **Terminal integrada.** Ejecutar comandos sin salir del editor.
- **Colaboración.** Trabajar en el mismo archivo en tiempo real con otras personas.
- **Control de versiones.** Ver el historial de cambios de tus archivos.

## Cómo empezar desde cero

### 1. Descargar
Andá a [code.visualstudio.com](https://code.visualstudio.com) y descargá la versión para tu sistema.

### 2. Abrir una carpeta
Arrastrá una carpeta a VS Code o usá Archivo → Abrir carpeta. Vas a ver todos los archivos en el panel lateral.

### 3. Instalar extensiones
Hacé clic en el ícono de extensiones (cuadrado en el panel izquierdo) y buscá lo que necesites.

### 4. Personalizar
Cambiá el tema de colores, el tamaño de letra y los atajos de teclado a tu gusto.

## Extensiones recomendadas para empezar

| Extensión | Para qué sirve |
|---|---|
| Spanish Language Pack | Interfaz en español |
| Prettier | Formatear archivos automáticamente |
| Live Server | Ver cambios en tu navegador en tiempo real |
| Claude Code | Asistente de IA de Anthropic |
| GitHub Copilot | Asistente de IA de GitHub |

## Funciones destacadas

- **Multi-cursor.** Editar varias líneas al mismo tiempo.
- **Búsqueda global.** Buscar texto en todos los archivos de tu proyecto.
- **Terminal integrada.** Línea de comandos dentro del editor.
- **Live Share.** Colaborar en tiempo real con otra persona.
- **Temas.** Personalizar colores y apariencia.
- **Snippets.** Atajos para escribir bloques de texto frecuentes.

## Precios

| Plan | Costo |
|---|---|
| VS Code | Gratis y de código abierto |

## Notas

- Es el editor más popular del mundo con más de 15 millones de usuarios activos.
- Funciona en Windows, Mac y Linux.
- Es diferente de "Visual Studio" (que es un IDE más pesado). VS Code es liviano y rápido.`,

      en: `## What is Visual Studio Code?

Visual Studio Code (VS Code) is a **free text editor** created by **Microsoft**. It's the most used editor in the world by developers, but it's also useful for anyone working with text files, documents, or projects organized in folders.

It's lightweight, fast, and can be customized with thousands of extensions.

## What is it for?

- **Editing files.** Open and edit any type of text file.
- **Organizing projects.** View and navigate complete work folders.
- **Extensions.** Add features like spell checkers, visual themes, AI, and more.
- **Integrated terminal.** Run commands without leaving the editor.
- **Collaboration.** Work on the same file in real time with others.
- **Version control.** See the change history of your files.

## Getting started from zero

### 1. Download
Go to [code.visualstudio.com](https://code.visualstudio.com) and download the version for your system.

### 2. Open a folder
Drag a folder to VS Code or use File → Open Folder. You'll see all files in the side panel.

### 3. Install extensions
Click the extensions icon (square in the left panel) and search for what you need.

### 4. Customize
Change the color theme, font size, and keyboard shortcuts to your liking.

## Recommended extensions to start

| Extension | What it does |
|---|---|
| Language Pack | Interface in your language |
| Prettier | Format files automatically |
| Live Server | See changes in your browser in real time |
| Claude Code | Anthropic's AI assistant |
| GitHub Copilot | GitHub's AI assistant |

## Key features

- **Multi-cursor.** Edit multiple lines at the same time.
- **Global search.** Search text across all files in your project.
- **Integrated terminal.** Command line inside the editor.
- **Live Share.** Collaborate in real time with another person.
- **Themes.** Customize colors and appearance.
- **Snippets.** Shortcuts for writing frequent text blocks.

## Pricing

| Plan | Cost |
|---|---|
| VS Code | Free and open source |

## Notes

- It's the most popular editor in the world with over 15 million active users.
- Works on Windows, Mac, and Linux.
- It's different from "Visual Studio" (which is a heavier IDE). VS Code is lightweight and fast.`,

      pt: `## O que é Visual Studio Code?

Visual Studio Code (VS Code) é um **editor de texto gratuito** criado pela **Microsoft**. É o editor mais usado do mundo por desenvolvedores, mas também é útil para qualquer pessoa que trabalhe com arquivos de texto, documentos ou projetos organizados em pastas.

É leve, rápido e pode ser personalizado com milhares de extensões.

## Para que serve?

- **Editar arquivos.** Abrir e editar qualquer tipo de arquivo de texto.
- **Organizar projetos.** Ver e navegar pastas completas de trabalho.
- **Extensões.** Adicionar funcionalidades como corretor ortográfico, temas visuais, IA e mais.
- **Terminal integrado.** Executar comandos sem sair do editor.
- **Colaboração.** Trabalhar no mesmo arquivo em tempo real com outras pessoas.
- **Controle de versões.** Ver o histórico de mudanças dos seus arquivos.

## Como começar do zero

### 1. Baixar
Acesse [code.visualstudio.com](https://code.visualstudio.com) e baixe a versão para seu sistema.

### 2. Abrir uma pasta
Arraste uma pasta para o VS Code ou use Arquivo → Abrir Pasta. Você verá todos os arquivos no painel lateral.

### 3. Instalar extensões
Clique no ícone de extensões (quadrado no painel esquerdo) e busque o que precisar.

### 4. Personalizar
Mude o tema de cores, tamanho da fonte e atalhos de teclado ao seu gosto.

## Extensões recomendadas para começar

| Extensão | Para que serve |
|---|---|
| Portuguese Language Pack | Interface em português |
| Prettier | Formatar arquivos automaticamente |
| Live Server | Ver mudanças no navegador em tempo real |
| Claude Code | Assistente de IA da Anthropic |
| GitHub Copilot | Assistente de IA do GitHub |

## Funções destacadas

- **Multi-cursor.** Editar várias linhas ao mesmo tempo.
- **Busca global.** Buscar texto em todos os arquivos do seu projeto.
- **Terminal integrado.** Linha de comando dentro do editor.
- **Live Share.** Colaborar em tempo real com outra pessoa.
- **Temas.** Personalizar cores e aparência.
- **Snippets.** Atalhos para escrever blocos de texto frequentes.

## Preços

| Plano | Custo |
|---|---|
| VS Code | Grátis e de código aberto |

## Notas

- É o editor mais popular do mundo com mais de 15 milhões de usuários ativos.
- Funciona no Windows, Mac e Linux.
- É diferente do "Visual Studio" (que é um IDE mais pesado). VS Code é leve e rápido.`,
    },
  },
  {
    id: 14, slug: '14-github-copilot', area: 'Telecommuting', techs: ['AI'], difficulty: 'easy', updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es GitHub Copilot?

GitHub Copilot es un **asistente de IA** creado por **GitHub** (propiedad de Microsoft) que trabaja dentro de tu editor de texto. Mientras escribís, Copilot sugiere texto, completa frases y genera contenido basándose en el contexto de lo que estás haciendo.

Funciona como un compañero de trabajo que anticipa lo que necesitás escribir.

## ¿Para qué sirve?

- **Autocompletar texto.** Sugiere el resto de lo que estás escribiendo.
- **Generar contenido.** Crea textos completos a partir de una descripción breve.
- **Chat integrado.** Hacele preguntas directamente dentro de tu editor.
- **Explicar archivos.** Pedile que te explique el contenido de cualquier documento.
- **Traducir.** Ayuda a traducir textos entre idiomas.
- **Corregir.** Encuentra errores y sugiere mejoras.

## Cómo empezar desde cero

### 1. Tener una cuenta en GitHub
Registrate gratis en [github.com](https://github.com).

### 2. Activar Copilot
Suscribite a GitHub Copilot desde tu cuenta de GitHub. Hay prueba gratuita.

### 3. Instalar en VS Code
Buscá "GitHub Copilot" en las extensiones de VS Code e instalalo.

### 4. Empezar a escribir
Copilot empezará a sugerirte texto automáticamente. Presioná Tab para aceptar.

## Funciones destacadas

- **Sugerencias en línea.** Texto sugerido mientras escribís, en gris.
- **Chat.** Conversación con la IA dentro del editor para preguntas y tareas.
- **Explicaciones.** Seleccioná cualquier texto y pedí que te lo explique.
- **Múltiples editores.** Funciona en VS Code, JetBrains y más.

## Precios

| Plan | Costo | Incluye |
|---|---|---|
| Free | Gratis | Uso limitado |
| Pro | $10/mes | Uso ilimitado |
| Business | $19/mes por persona | Para equipos |

## Notas

- Funciona mejor cuanto más contexto le des sobre lo que estás trabajando.
- Requiere VS Code u otro editor compatible.
- Creado en colaboración con OpenAI.`,

      en: `## What is GitHub Copilot?

GitHub Copilot is an **AI assistant** created by **GitHub** (owned by Microsoft) that works inside your text editor. As you write, Copilot suggests text, completes sentences, and generates content based on the context of what you're doing.

It works like a coworker who anticipates what you need to write.

## What is it for?

- **Autocomplete text.** Suggests the rest of what you're writing.
- **Generate content.** Creates complete texts from a brief description.
- **Integrated chat.** Ask it questions directly inside your editor.
- **Explain files.** Ask it to explain the content of any document.
- **Translate.** Helps translate texts between languages.
- **Correct.** Finds errors and suggests improvements.

## Getting started from zero

### 1. Have a GitHub account
Sign up for free at [github.com](https://github.com).

### 2. Activate Copilot
Subscribe to GitHub Copilot from your GitHub account. There's a free trial.

### 3. Install in VS Code
Search "GitHub Copilot" in VS Code extensions and install it.

### 4. Start writing
Copilot will start suggesting text automatically. Press Tab to accept.

## Key features

- **Inline suggestions.** Suggested text as you type, shown in gray.
- **Chat.** Conversation with AI inside the editor for questions and tasks.
- **Explanations.** Select any text and ask for an explanation.
- **Multiple editors.** Works in VS Code, JetBrains, and more.

## Pricing

| Plan | Cost | Includes |
|---|---|---|
| Free | Free | Limited usage |
| Pro | $10/month | Unlimited usage |
| Business | $19/month per person | For teams |

## Notes

- Works better the more context you give about what you're working on.
- Requires VS Code or another compatible editor.
- Created in collaboration with OpenAI.`,

      pt: `## O que é GitHub Copilot?

GitHub Copilot é um **assistente de IA** criado pelo **GitHub** (propriedade da Microsoft) que funciona dentro do seu editor de texto. Enquanto você escreve, o Copilot sugere texto, completa frases e gera conteúdo baseado no contexto do que está fazendo.

Funciona como um colega de trabalho que antecipa o que você precisa escrever.

## Para que serve?

- **Autocompletar texto.** Sugere o restante do que você está escrevendo.
- **Gerar conteúdo.** Cria textos completos a partir de uma descrição breve.
- **Chat integrado.** Faça perguntas diretamente dentro do seu editor.
- **Explicar arquivos.** Peça para explicar o conteúdo de qualquer documento.
- **Traduzir.** Ajuda a traduzir textos entre idiomas.
- **Corrigir.** Encontra erros e sugere melhorias.

## Como começar do zero

### 1. Ter uma conta no GitHub
Registre-se grátis em [github.com](https://github.com).

### 2. Ativar Copilot
Assine o GitHub Copilot na sua conta GitHub. Há teste gratuito.

### 3. Instalar no VS Code
Busque "GitHub Copilot" nas extensões do VS Code e instale.

### 4. Começar a escrever
O Copilot começará a sugerir texto automaticamente. Pressione Tab para aceitar.

## Funções destacadas

- **Sugestões em linha.** Texto sugerido enquanto você digita, em cinza.
- **Chat.** Conversa com a IA dentro do editor para perguntas e tarefas.
- **Explicações.** Selecione qualquer texto e peça uma explicação.
- **Múltiplos editores.** Funciona no VS Code, JetBrains e mais.

## Preços

| Plano | Custo | Inclui |
|---|---|---|
| Free | Grátis | Uso limitado |
| Pro | $10/mês | Uso ilimitado |
| Business | $19/mês por pessoa | Para equipes |

## Notas

- Funciona melhor quanto mais contexto você der sobre o que está trabalhando.
- Requer VS Code ou outro editor compatível.
- Criado em colaboração com a OpenAI.`,
    },
  },
  {
    id: 15, slug: '15-claude-code', area: 'Telecommuting', techs: ['AI'], difficulty: 'easy', updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es Claude Code?

Claude Code es una **herramienta de línea de comandos** creada por **Anthropic** que te permite trabajar con la IA Claude directamente desde tu terminal o editor de texto. A diferencia del chat web de Claude, Claude Code puede leer tus archivos, hacer cambios y ejecutar tareas complejas de forma autónoma.

Es como tener un asistente que entiende todo tu proyecto y puede trabajar en él directamente.

## ¿Para qué sirve?

- **Editar archivos.** Pedile que modifique cualquier archivo de tu proyecto.
- **Crear contenido.** Generar documentos, textos y archivos nuevos.
- **Buscar información.** Encontrar datos específicos dentro de tus archivos.
- **Organizar proyectos.** Reestructurar carpetas y archivos según tus necesidades.
- **Automatizar tareas.** Ejecutar secuencias de acciones repetitivas.
- **Analizar documentos.** Leer y resumir archivos extensos de tu computadora.

## Cómo empezar desde cero

### 1. Requisito previo
Necesitás tener Node.js instalado en tu computadora y una cuenta en Anthropic.

### 2. Abrir la terminal
En Mac o Linux, abrí la Terminal. En Windows, abrí PowerShell.

### 3. Empezar a usarlo
Navegá a la carpeta de tu proyecto y escribí "claude" para iniciar una conversación con la IA sobre tus archivos.

### 4. Pedir lo que necesitás
Escribí en lenguaje natural lo que querés hacer. Claude Code entiende el contexto de tu proyecto.

## Funciones destacadas

- **Lee tus archivos.** Entiende el contenido de todo tu proyecto.
- **Edita directamente.** Hace cambios en tus archivos con tu aprobación.
- **Ejecuta comandos.** Puede correr tareas en tu computadora.
- **Memoria.** Recordá instrucciones y contexto entre sesiones.
- **Multi-archivo.** Trabaja con múltiples archivos al mismo tiempo.

## Precios

| Plan | Costo |
|---|---|
| Requiere plan Claude Pro o API | Desde $20/mes |

## Notas

- Requiere conocimientos básicos de terminal.
- Siempre pide confirmación antes de hacer cambios en tus archivos.
- Disponible para Mac, Linux y Windows.
- También funciona integrado dentro de VS Code como extensión.`,

      en: `## What is Claude Code?

Claude Code is a **command-line tool** created by **Anthropic** that lets you work with Claude AI directly from your terminal or text editor. Unlike Claude's web chat, Claude Code can read your files, make changes, and execute complex tasks autonomously.

It's like having an assistant that understands your entire project and can work on it directly.

## What is it for?

- **Edit files.** Ask it to modify any file in your project.
- **Create content.** Generate documents, texts, and new files.
- **Search information.** Find specific data within your files.
- **Organize projects.** Restructure folders and files according to your needs.
- **Automate tasks.** Execute sequences of repetitive actions.
- **Analyze documents.** Read and summarize extensive files on your computer.

## Getting started from zero

### 1. Prerequisite
You need Node.js installed on your computer and an Anthropic account.

### 2. Open the terminal
On Mac or Linux, open Terminal. On Windows, open PowerShell.

### 3. Start using it
Navigate to your project folder and type "claude" to start a conversation with AI about your files.

### 4. Ask for what you need
Write in natural language what you want to do. Claude Code understands your project context.

## Key features

- **Reads your files.** Understands the content of your entire project.
- **Edits directly.** Makes changes to your files with your approval.
- **Runs commands.** Can execute tasks on your computer.
- **Memory.** Remembers instructions and context between sessions.
- **Multi-file.** Works with multiple files at the same time.

## Pricing

| Plan | Cost |
|---|---|
| Requires Claude Pro plan or API | From $20/month |

## Notes

- Requires basic terminal knowledge.
- Always asks for confirmation before making changes to your files.
- Available for Mac, Linux, and Windows.
- Also works integrated within VS Code as an extension.`,

      pt: `## O que é Claude Code?

Claude Code é uma **ferramenta de linha de comando** criada pela **Anthropic** que permite trabalhar com a IA Claude diretamente do seu terminal ou editor de texto. Diferente do chat web do Claude, o Claude Code pode ler seus arquivos, fazer mudanças e executar tarefas complexas de forma autônoma.

É como ter um assistente que entende todo seu projeto e pode trabalhar nele diretamente.

## Para que serve?

- **Editar arquivos.** Peça para modificar qualquer arquivo do seu projeto.
- **Criar conteúdo.** Gerar documentos, textos e arquivos novos.
- **Buscar informação.** Encontrar dados específicos dentro dos seus arquivos.
- **Organizar projetos.** Reestruturar pastas e arquivos conforme suas necessidades.
- **Automatizar tarefas.** Executar sequências de ações repetitivas.
- **Analisar documentos.** Ler e resumir arquivos extensos do seu computador.

## Como começar do zero

### 1. Pré-requisito
Você precisa ter Node.js instalado no computador e uma conta na Anthropic.

### 2. Abrir o terminal
No Mac ou Linux, abra o Terminal. No Windows, abra o PowerShell.

### 3. Começar a usar
Navegue até a pasta do seu projeto e digite "claude" para iniciar uma conversa com a IA sobre seus arquivos.

### 4. Pedir o que precisa
Escreva em linguagem natural o que quer fazer. Claude Code entende o contexto do seu projeto.

## Funções destacadas

- **Lê seus arquivos.** Entende o conteúdo de todo seu projeto.
- **Edita diretamente.** Faz mudanças nos seus arquivos com sua aprovação.
- **Executa comandos.** Pode rodar tarefas no seu computador.
- **Memória.** Lembra instruções e contexto entre sessões.
- **Multi-arquivo.** Trabalha com múltiplos arquivos ao mesmo tempo.

## Preços

| Plano | Custo |
|---|---|
| Requer plano Claude Pro ou API | A partir de $20/mês |

## Notas

- Requer conhecimentos básicos de terminal.
- Sempre pede confirmação antes de fazer mudanças nos seus arquivos.
- Disponível para Mac, Linux e Windows.
- Também funciona integrado dentro do VS Code como extensão.`,
    },
  },
  {
    id: 16, slug: '16-n8n', area: 'Telecommuting', techs: ['Automatización'], difficulty: 'easy', updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es n8n?

n8n es una plataforma de **automatización visual** que permite conectar aplicaciones y crear flujos de trabajo sin necesidad de programar. Funciona con un editor de arrastrar y soltar donde conectás nodos (bloques) que representan acciones.

Podés automatizar tareas repetitivas como enviar emails, sincronizar datos, publicar en redes sociales y mucho más.

## ¿Para qué sirve?

- **Automatizar tareas.** Conectar apps para que trabajen juntas automáticamente.
- **Integraciones.** Más de 400 apps disponibles: Gmail, Slack, WhatsApp, Sheets, etc.
- **Flujos condicionales.** Si pasa X, entonces hacé Y.
- **Procesamiento de datos.** Transformar, filtrar y mover información entre sistemas.
- **Notificaciones.** Alertas automáticas cuando algo sucede.
- **Self-hosted.** Podés instalarlo en tu propio servidor para mayor control.

## Cómo empezar desde cero

### 1. Crear una cuenta
Andá a [n8n.io](https://n8n.io) y registrate para usar la versión cloud, o instalalo en tu servidor.

### 2. Crear tu primer flujo
Arrastrá nodos al canvas y conectalos. Cada nodo representa una acción (enviar email, leer planilla, etc.).

### 3. Ejemplo simple
> "Cada vez que reciba un email con adjunto en Gmail, guardalo automáticamente en Google Drive"

### 4. Activar el flujo
Una vez configurado, activá el flujo y n8n lo ejecutará automáticamente.

## Ejemplos prácticos

> Publicar automáticamente en redes sociales cuando subís un video a YouTube

> Enviar un mensaje de WhatsApp de bienvenida cuando un cliente llena un formulario

> Sincronizar contactos entre tu CRM y una planilla de Google Sheets

## Precios

| Plan | Costo | Incluye |
|---|---|---|
| Community | Gratis (self-hosted) | Todo, en tu servidor |
| Starter | $20/mes | Cloud, 2.500 ejecuciones |
| Pro | $50/mes | Cloud, 10.000 ejecuciones |

## Notas

- La versión self-hosted es gratuita y de código abierto.
- Ideal para quienes quieren automatizar sin depender de un desarrollador.
- Alternativa a Zapier y Make con más flexibilidad.`,

      en: `## What is n8n?

n8n is a **visual automation** platform that lets you connect applications and create workflows without coding. It works with a drag-and-drop editor where you connect nodes (blocks) representing actions.

You can automate repetitive tasks like sending emails, syncing data, posting on social media, and much more.

## What is it for?

- **Automate tasks.** Connect apps to work together automatically.
- **Integrations.** Over 400 available apps: Gmail, Slack, WhatsApp, Sheets, etc.
- **Conditional flows.** If X happens, then do Y.
- **Data processing.** Transform, filter, and move information between systems.
- **Notifications.** Automatic alerts when something happens.
- **Self-hosted.** You can install it on your own server for more control.

## Getting started from zero

### 1. Create an account
Go to [n8n.io](https://n8n.io) and sign up for the cloud version, or install it on your server.

### 2. Create your first flow
Drag nodes onto the canvas and connect them. Each node represents an action (send email, read spreadsheet, etc.).

### 3. Simple example
> "Every time I receive an email with an attachment in Gmail, automatically save it to Google Drive"

### 4. Activate the flow
Once configured, activate the flow and n8n will run it automatically.

## Practical examples

> Automatically post on social media when you upload a video to YouTube

> Send a WhatsApp welcome message when a client fills out a form

> Sync contacts between your CRM and a Google Sheets spreadsheet

## Pricing

| Plan | Cost | Includes |
|---|---|---|
| Community | Free (self-hosted) | Everything, on your server |
| Starter | $20/month | Cloud, 2,500 executions |
| Pro | $50/month | Cloud, 10,000 executions |

## Notes

- The self-hosted version is free and open source.
- Ideal for those who want to automate without depending on a developer.
- Alternative to Zapier and Make with more flexibility.`,

      pt: `## O que é n8n?

n8n é uma plataforma de **automação visual** que permite conectar aplicações e criar fluxos de trabalho sem precisar programar. Funciona com um editor de arrastar e soltar onde você conecta nós (blocos) que representam ações.

Você pode automatizar tarefas repetitivas como enviar emails, sincronizar dados, publicar em redes sociais e muito mais.

## Para que serve?

- **Automatizar tarefas.** Conectar apps para trabalharem juntas automaticamente.
- **Integrações.** Mais de 400 apps disponíveis: Gmail, Slack, WhatsApp, Sheets, etc.
- **Fluxos condicionais.** Se acontecer X, então faça Y.
- **Processamento de dados.** Transformar, filtrar e mover informação entre sistemas.
- **Notificações.** Alertas automáticos quando algo acontece.
- **Self-hosted.** Pode instalá-lo no seu próprio servidor para mais controle.

## Como começar do zero

### 1. Criar uma conta
Acesse [n8n.io](https://n8n.io) e registre-se para a versão cloud, ou instale no seu servidor.

### 2. Criar seu primeiro fluxo
Arraste nós para o canvas e conecte-os. Cada nó representa uma ação (enviar email, ler planilha, etc.).

### 3. Exemplo simples
> "Toda vez que receber um email com anexo no Gmail, salve automaticamente no Google Drive"

### 4. Ativar o fluxo
Uma vez configurado, ative o fluxo e o n8n o executará automaticamente.

## Exemplos práticos

> Publicar automaticamente em redes sociais quando subir um vídeo no YouTube

> Enviar mensagem de WhatsApp de boas-vindas quando um cliente preencher um formulário

> Sincronizar contatos entre seu CRM e uma planilha do Google Sheets

## Preços

| Plano | Custo | Inclui |
|---|---|---|
| Community | Grátis (self-hosted) | Tudo, no seu servidor |
| Starter | $20/mês | Cloud, 2.500 execuções |
| Pro | $50/mês | Cloud, 10.000 execuções |

## Notas

- A versão self-hosted é gratuita e de código aberto.
- Ideal para quem quer automatizar sem depender de um desenvolvedor.
- Alternativa ao Zapier e Make com mais flexibilidade.`,
    },
  },
  {
    id: 17, slug: '17-meta', area: 'Telecommuting', techs: ['Redes Sociales'], difficulty: 'easy', updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es Meta Business Suite?

Meta Business Suite es la **plataforma gratuita de Meta** para gestionar tu presencia en Facebook, Instagram y WhatsApp Business desde un solo lugar. Permite programar publicaciones, responder mensajes, ver estadísticas y gestionar anuncios.

## ¿Para qué sirve?

- **Programar publicaciones.** Planificá posts para Facebook e Instagram con anticipación.
- **Bandeja unificada.** Respondé mensajes de Facebook, Instagram y WhatsApp en un solo lugar.
- **Estadísticas.** Métricas de alcance, interacciones y crecimiento de audiencia.
- **Anuncios.** Crear y gestionar campañas publicitarias en Facebook e Instagram.
- **Tienda.** Configurar catálogos de productos para venta en redes.
- **Automatizaciones.** Respuestas automáticas y mensajes de bienvenida.

## Cómo empezar desde cero

### 1. Tener una página de Facebook
Si no tenés una, creala desde [facebook.com/pages/create](https://facebook.com/pages/create).

### 2. Acceder a Meta Business Suite
Andá a [business.facebook.com](https://business.facebook.com) e iniciá sesión.

### 3. Conectar Instagram
Vinculá tu cuenta de Instagram a tu página de Facebook para gestionar ambas.

### 4. Programar tu primer post
Usá el calendario para programar publicaciones en Facebook e Instagram al mismo tiempo.

## Funciones destacadas

- **Planner.** Calendario visual para programar contenido.
- **Inbox.** Bandeja unificada de mensajes de todas las plataformas.
- **Insights.** Métricas detalladas de rendimiento.
- **Ads Manager.** Crear campañas publicitarias segmentadas.
- **Creator Studio.** Herramientas avanzadas para creadores de contenido.

## Precios

| Herramienta | Costo |
|---|---|
| Meta Business Suite | Gratis |
| Anuncios | Pago por campaña (desde $1/día) |

## Notas

- Es completamente gratis para gestión orgánica.
- Los anuncios se pagan aparte según tu presupuesto.
- Disponible en web y app móvil.`,

      en: `## What is Meta Business Suite?

Meta Business Suite is **Meta's free platform** for managing your presence on Facebook, Instagram, and WhatsApp Business from one place. It lets you schedule posts, reply to messages, view analytics, and manage ads.

## What is it for?

- **Schedule posts.** Plan posts for Facebook and Instagram in advance.
- **Unified inbox.** Reply to Facebook, Instagram, and WhatsApp messages in one place.
- **Analytics.** Metrics on reach, engagement, and audience growth.
- **Ads.** Create and manage advertising campaigns on Facebook and Instagram.
- **Shop.** Set up product catalogs for selling on social media.
- **Automations.** Auto-replies and welcome messages.

## Getting started from zero

### 1. Have a Facebook page
If you don't have one, create it at [facebook.com/pages/create](https://facebook.com/pages/create).

### 2. Access Meta Business Suite
Go to [business.facebook.com](https://business.facebook.com) and sign in.

### 3. Connect Instagram
Link your Instagram account to your Facebook page to manage both.

### 4. Schedule your first post
Use the calendar to schedule posts on Facebook and Instagram at the same time.

## Key features

- **Planner.** Visual calendar for scheduling content.
- **Inbox.** Unified message inbox from all platforms.
- **Insights.** Detailed performance metrics.
- **Ads Manager.** Create targeted advertising campaigns.
- **Creator Studio.** Advanced tools for content creators.

## Pricing

| Tool | Cost |
|---|---|
| Meta Business Suite | Free |
| Ads | Pay per campaign (from $1/day) |

## Notes

- Completely free for organic management.
- Ads are paid separately based on your budget.
- Available on web and mobile app.`,

      pt: `## O que é Meta Business Suite?

Meta Business Suite é a **plataforma gratuita da Meta** para gerenciar sua presença no Facebook, Instagram e WhatsApp Business a partir de um só lugar. Permite programar publicações, responder mensagens, ver estatísticas e gerenciar anúncios.

## Para que serve?

- **Programar publicações.** Planeje posts para Facebook e Instagram com antecedência.
- **Caixa unificada.** Responda mensagens do Facebook, Instagram e WhatsApp em um só lugar.
- **Estatísticas.** Métricas de alcance, interações e crescimento de audiência.
- **Anúncios.** Criar e gerenciar campanhas publicitárias no Facebook e Instagram.
- **Loja.** Configurar catálogos de produtos para venda nas redes.
- **Automações.** Respostas automáticas e mensagens de boas-vindas.

## Como começar do zero

### 1. Ter uma página no Facebook
Se não tem uma, crie em [facebook.com/pages/create](https://facebook.com/pages/create).

### 2. Acessar Meta Business Suite
Acesse [business.facebook.com](https://business.facebook.com) e faça login.

### 3. Conectar Instagram
Vincule sua conta do Instagram à sua página do Facebook para gerenciar ambas.

### 4. Programar seu primeiro post
Use o calendário para programar publicações no Facebook e Instagram ao mesmo tempo.

## Funções destacadas

- **Planner.** Calendário visual para programar conteúdo.
- **Inbox.** Caixa unificada de mensagens de todas as plataformas.
- **Insights.** Métricas detalhadas de desempenho.
- **Ads Manager.** Criar campanhas publicitárias segmentadas.
- **Creator Studio.** Ferramentas avançadas para criadores de conteúdo.

## Preços

| Ferramenta | Custo |
|---|---|
| Meta Business Suite | Grátis |
| Anúncios | Pago por campanha (a partir de $1/dia) |

## Notas

- É completamente grátis para gestão orgânica.
- Os anúncios são pagos à parte conforme seu orçamento.
- Disponível na web e app móvel.`,
    },
  },
  {
    id: 18, slug: '18-firebase', area: 'Telecommuting', techs: ['Cloud'], difficulty: 'easy', updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es Firebase?

Firebase es una **plataforma de Google** que ofrece herramientas para crear, alojar y hacer crecer aplicaciones web y móviles. Permite tener tu sitio web online, enviar notificaciones, autenticar usuarios y almacenar datos sin necesidad de gestionar servidores.

## ¿Para qué sirve?

- **Hosting.** Alojar tu sitio web o app con dominio propio y certificado SSL gratis.
- **Base de datos.** Almacenar información en la nube en tiempo real.
- **Autenticación.** Login con Google, email, teléfono y redes sociales.
- **Notificaciones push.** Enviar notificaciones a usuarios de tu app.
- **Almacenamiento.** Guardar archivos, imágenes y videos en la nube.
- **Analytics.** Métricas detalladas del uso de tu app.

## Cómo empezar desde cero

### 1. Crear una cuenta
Andá a [firebase.google.com](https://firebase.google.com) e iniciá sesión con tu cuenta de Google.

### 2. Crear un proyecto
Hacé clic en "Agregar proyecto" y seguí los pasos. En minutos tenés tu proyecto listo.

### 3. Elegir servicios
Activá los servicios que necesitás: Hosting, Database, Auth, etc.

### 4. Publicar tu sitio
Subí tu sitio web al hosting de Firebase y estará online en segundos con HTTPS.

## Precios

| Plan | Costo | Incluye |
|---|---|---|
| Spark | Gratis | Hosting, Auth, Database con límites generosos |
| Blaze | Pago por uso | Sin límites, pagás solo lo que usás |

## Notas

- El plan gratuito es suficiente para proyectos personales y MVPs.
- Integrado con todo el ecosistema de Google Cloud.
- Disponible para web, iOS, Android y más.`,

      en: `## What is Firebase?

Firebase is a **Google platform** that provides tools to build, host, and grow web and mobile applications. It lets you put your website online, send notifications, authenticate users, and store data without managing servers.

## What is it for?

- **Hosting.** Host your website or app with custom domain and free SSL certificate.
- **Database.** Store information in the cloud in real time.
- **Authentication.** Login with Google, email, phone, and social networks.
- **Push notifications.** Send notifications to your app users.
- **Storage.** Save files, images, and videos in the cloud.
- **Analytics.** Detailed metrics of your app usage.

## Getting started from zero

### 1. Create an account
Go to [firebase.google.com](https://firebase.google.com) and sign in with your Google account.

### 2. Create a project
Click "Add project" and follow the steps. In minutes your project is ready.

### 3. Choose services
Activate the services you need: Hosting, Database, Auth, etc.

### 4. Publish your site
Upload your website to Firebase hosting and it'll be online in seconds with HTTPS.

## Pricing

| Plan | Cost | Includes |
|---|---|---|
| Spark | Free | Hosting, Auth, Database with generous limits |
| Blaze | Pay-per-use | No limits, pay only what you use |

## Notes

- The free plan is enough for personal projects and MVPs.
- Integrated with the entire Google Cloud ecosystem.
- Available for web, iOS, Android, and more.`,

      pt: `## O que é Firebase?

Firebase é uma **plataforma do Google** que oferece ferramentas para criar, hospedar e fazer crescer aplicações web e móveis. Permite ter seu site online, enviar notificações, autenticar usuários e armazenar dados sem precisar gerenciar servidores.

## Para que serve?

- **Hosting.** Hospedar seu site ou app com domínio próprio e certificado SSL grátis.
- **Banco de dados.** Armazenar informações na nuvem em tempo real.
- **Autenticação.** Login com Google, email, telefone e redes sociais.
- **Notificações push.** Enviar notificações para usuários do seu app.
- **Armazenamento.** Guardar arquivos, imagens e vídeos na nuvem.
- **Analytics.** Métricas detalhadas do uso do seu app.

## Como começar do zero

### 1. Criar uma conta
Acesse [firebase.google.com](https://firebase.google.com) e faça login com sua conta Google.

### 2. Criar um projeto
Clique em "Adicionar projeto" e siga os passos. Em minutos seu projeto está pronto.

### 3. Escolher serviços
Ative os serviços que precisa: Hosting, Database, Auth, etc.

### 4. Publicar seu site
Suba seu site para o hosting do Firebase e estará online em segundos com HTTPS.

## Preços

| Plano | Custo | Inclui |
|---|---|---|
| Spark | Grátis | Hosting, Auth, Database com limites generosos |
| Blaze | Pago por uso | Sem limites, pague apenas o que usar |

## Notas

- O plano gratuito é suficiente para projetos pessoais e MVPs.
- Integrado com todo o ecossistema Google Cloud.
- Disponível para web, iOS, Android e mais.`,
    },
  },
  {
    id: 19, slug: '19-cloudflare', area: 'Telecommuting', techs: ['Cloud'], difficulty: 'easy', updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es Cloudflare?

Cloudflare es un servicio de **seguridad, rendimiento y alojamiento web**. Protege tu sitio de ataques, lo hace más rápido distribuyendo copias en servidores alrededor del mundo (CDN) y ofrece hosting gratuito para sitios web estáticos.

## ¿Para qué sirve?

- **Seguridad.** Protege tu sitio contra ataques y bots maliciosos.
- **Velocidad.** Hace tu sitio más rápido con su red global de servidores.
- **DNS.** Gestiona tu dominio con el DNS más rápido del mundo.
- **SSL gratis.** Certificado HTTPS automático para tu sitio.
- **Pages.** Hosting gratuito para sitios web y apps.
- **Workers.** Ejecutar lógica en el borde de la red (sin servidor tradicional).

## Cómo empezar desde cero

### 1. Crear una cuenta
Andá a [cloudflare.com](https://cloudflare.com) y registrate gratis.

### 2. Agregar tu sitio
Ingresá tu dominio y Cloudflare escaneará tu configuración actual.

### 3. Cambiar los DNS
Apuntá los nameservers de tu dominio a Cloudflare (tu registrador te dirá cómo).

### 4. Disfrutar
Tu sitio ahora está protegido, más rápido y con SSL gratis.

## Precios

| Plan | Costo | Incluye |
|---|---|---|
| Free | Gratis | DNS, SSL, CDN, protección básica |
| Pro | $20/mes | Optimización avanzada, WAF |
| Pages | Gratis | Hosting para sitios estáticos |

## Notas

- El plan gratuito es sorprendentemente completo.
- Usado por más del 20% de todos los sitios web del mundo.
- Cloudflare Pages es una excelente alternativa gratuita a Netlify o Vercel.`,

      en: `## What is Cloudflare?

Cloudflare is a **web security, performance, and hosting** service. It protects your site from attacks, makes it faster by distributing copies across servers worldwide (CDN), and offers free hosting for static websites.

## What is it for?

- **Security.** Protects your site against attacks and malicious bots.
- **Speed.** Makes your site faster with its global server network.
- **DNS.** Manage your domain with the fastest DNS in the world.
- **Free SSL.** Automatic HTTPS certificate for your site.
- **Pages.** Free hosting for websites and apps.
- **Workers.** Run logic at the edge of the network (no traditional server needed).

## Getting started from zero

### 1. Create an account
Go to [cloudflare.com](https://cloudflare.com) and sign up for free.

### 2. Add your site
Enter your domain and Cloudflare will scan your current configuration.

### 3. Change DNS
Point your domain's nameservers to Cloudflare (your registrar will show you how).

### 4. Enjoy
Your site is now protected, faster, and has free SSL.

## Pricing

| Plan | Cost | Includes |
|---|---|---|
| Free | Free | DNS, SSL, CDN, basic protection |
| Pro | $20/month | Advanced optimization, WAF |
| Pages | Free | Hosting for static sites |

## Notes

- The free plan is surprisingly comprehensive.
- Used by over 20% of all websites worldwide.
- Cloudflare Pages is an excellent free alternative to Netlify or Vercel.`,

      pt: `## O que é Cloudflare?

Cloudflare é um serviço de **segurança, desempenho e hospedagem web**. Protege seu site contra ataques, o torna mais rápido distribuindo cópias em servidores ao redor do mundo (CDN) e oferece hospedagem gratuita para sites estáticos.

## Para que serve?

- **Segurança.** Protege seu site contra ataques e bots maliciosos.
- **Velocidade.** Torna seu site mais rápido com sua rede global de servidores.
- **DNS.** Gerencie seu domínio com o DNS mais rápido do mundo.
- **SSL grátis.** Certificado HTTPS automático para seu site.
- **Pages.** Hospedagem gratuita para sites e apps.
- **Workers.** Executar lógica na borda da rede (sem servidor tradicional).

## Como começar do zero

### 1. Criar uma conta
Acesse [cloudflare.com](https://cloudflare.com) e registre-se grátis.

### 2. Adicionar seu site
Insira seu domínio e o Cloudflare escaneará sua configuração atual.

### 3. Mudar o DNS
Aponte os nameservers do seu domínio para o Cloudflare (seu registrador mostrará como).

### 4. Aproveitar
Seu site agora está protegido, mais rápido e com SSL grátis.

## Preços

| Plano | Custo | Inclui |
|---|---|---|
| Free | Grátis | DNS, SSL, CDN, proteção básica |
| Pro | $20/mês | Otimização avançada, WAF |
| Pages | Grátis | Hospedagem para sites estáticos |

## Notas

- O plano gratuito é surpreendentemente completo.
- Usado por mais de 20% de todos os sites do mundo.
- Cloudflare Pages é uma excelente alternativa gratuita ao Netlify ou Vercel.`,
    },
  },
  {
    id: 20, slug: '20-canva', area: 'Telecommuting', techs: ['Diseño'], difficulty: 'easy', updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es Canva?

Canva es una **plataforma de diseño gráfico online** que permite crear contenido visual profesional sin necesidad de ser diseñador. Con plantillas prediseñadas, millones de imágenes y una interfaz de arrastrar y soltar, cualquier persona puede crear diseños atractivos en minutos.

## ¿Para qué sirve?

- **Redes sociales.** Posts, stories, reels, portadas y banners.
- **Presentaciones.** Slides profesionales con animaciones.
- **Documentos.** CVs, tarjetas de visita, folletos e infografías.
- **Videos.** Editar videos cortos con texto, música y transiciones.
- **Impresión.** Diseños listos para imprimir (tarjetas, posters, stickers).
- **Branding.** Kit de marca con colores, tipografías y logos.

## Cómo empezar desde cero

### 1. Crear una cuenta
Andá a [canva.com](https://canva.com) y registrate gratis con email o Google.

### 2. Elegir una plantilla
Buscá por tipo de diseño (post de Instagram, presentación, CV) y elegí una plantilla.

### 3. Personalizar
Cambiá textos, colores, imágenes y fuentes. Arrastrá elementos como stickers, íconos y formas.

### 4. Descargar o compartir
Exportá tu diseño en PNG, JPG, PDF o video. También podés compartir un link directo.

## Ejemplos prácticos por profesión

### Marketing
> Crear un calendario visual de contenido para redes sociales

> Diseñar banners para campañas de email marketing

### Creación de contenido
> Diseñar miniaturas para videos de YouTube

> Crear carruseles informativos para Instagram

### Emprendedores
> Diseñar el logo y la identidad visual de tu marca

> Crear presentaciones para inversores o clientes

### Estudiantes
> Hacer infografías para trabajos y presentaciones

> Diseñar un CV profesional y atractivo

## Funciones destacadas

- **Plantillas.** Miles de diseños prediseñados para todo tipo de formato.
- **Magic Design.** IA que genera diseños a partir de una descripción.
- **Brand Kit.** Guardá tus colores, logos y tipografías para mantener coherencia.
- **Colaboración.** Trabajar en equipo en el mismo diseño en tiempo real.
- **Programar publicaciones.** Publicar directamente en redes sociales desde Canva.
- **Redimensionar.** Convertir un diseño a cualquier formato en un clic.

## Precios

| Plan | Costo | Incluye |
|---|---|---|
| Free | Gratis | Plantillas básicas, 5GB almacenamiento |
| Pro | $13/mes | Todo de Free + plantillas premium, IA, Brand Kit |
| Teams | $10/mes por persona | Colaboración en equipo |

## Notas

- El plan gratuito es muy completo para empezar.
- Canva Pro para educación es gratis para docentes y estudiantes.
- Disponible en web, iOS y Android.`,

      en: `## What is Canva?

Canva is an **online graphic design platform** that lets you create professional visual content without being a designer. With pre-designed templates, millions of images, and a drag-and-drop interface, anyone can create attractive designs in minutes.

## What is it for?

- **Social media.** Posts, stories, reels, covers, and banners.
- **Presentations.** Professional slides with animations.
- **Documents.** Resumes, business cards, brochures, and infographics.
- **Videos.** Edit short videos with text, music, and transitions.
- **Print.** Print-ready designs (cards, posters, stickers).
- **Branding.** Brand kit with colors, fonts, and logos.

## Getting started from zero

### 1. Create an account
Go to [canva.com](https://canva.com) and sign up for free with email or Google.

### 2. Choose a template
Search by design type (Instagram post, presentation, resume) and pick a template.

### 3. Customize
Change texts, colors, images, and fonts. Drag elements like stickers, icons, and shapes.

### 4. Download or share
Export your design as PNG, JPG, PDF, or video. You can also share a direct link.

## Practical examples by profession

### Marketing
> Create a visual content calendar for social media

> Design banners for email marketing campaigns

### Content creation
> Design thumbnails for YouTube videos

> Create informative carousels for Instagram

### Entrepreneurs
> Design your brand logo and visual identity

> Create presentations for investors or clients

### Students
> Make infographics for assignments and presentations

> Design a professional and attractive resume

## Key features

- **Templates.** Thousands of pre-designed layouts for every format.
- **Magic Design.** AI that generates designs from a description.
- **Brand Kit.** Save your colors, logos, and fonts for consistency.
- **Collaboration.** Work as a team on the same design in real time.
- **Schedule posts.** Publish directly to social media from Canva.
- **Resize.** Convert a design to any format in one click.

## Pricing

| Plan | Cost | Includes |
|---|---|---|
| Free | Free | Basic templates, 5GB storage |
| Pro | $13/month | Everything in Free + premium templates, AI, Brand Kit |
| Teams | $10/month per person | Team collaboration |

## Notes

- The free plan is very complete to get started.
- Canva Pro for Education is free for teachers and students.
- Available on web, iOS, and Android.`,

      pt: `## O que é Canva?

Canva é uma **plataforma de design gráfico online** que permite criar conteúdo visual profissional sem precisar ser designer. Com templates predefinidos, milhões de imagens e uma interface de arrastar e soltar, qualquer pessoa pode criar designs atrativos em minutos.

## Para que serve?

- **Redes sociais.** Posts, stories, reels, capas e banners.
- **Apresentações.** Slides profissionais com animações.
- **Documentos.** Currículos, cartões de visita, folhetos e infográficos.
- **Vídeos.** Editar vídeos curtos com texto, música e transições.
- **Impressão.** Designs prontos para imprimir (cartões, posters, adesivos).
- **Branding.** Kit de marca com cores, tipografias e logos.

## Como começar do zero

### 1. Criar uma conta
Acesse [canva.com](https://canva.com) e registre-se grátis com email ou Google.

### 2. Escolher um template
Busque por tipo de design (post de Instagram, apresentação, currículo) e escolha um template.

### 3. Personalizar
Mude textos, cores, imagens e fontes. Arraste elementos como stickers, ícones e formas.

### 4. Baixar ou compartilhar
Exporte seu design em PNG, JPG, PDF ou vídeo. Também pode compartilhar um link direto.

## Exemplos práticos por profissão

### Marketing
> Criar um calendário visual de conteúdo para redes sociais

> Desenhar banners para campanhas de email marketing

### Criação de conteúdo
> Desenhar miniaturas para vídeos do YouTube

> Criar carrosséis informativos para Instagram

### Empreendedores
> Desenhar o logo e a identidade visual da sua marca

> Criar apresentações para investidores ou clientes

### Estudantes
> Fazer infográficos para trabalhos e apresentações

> Desenhar um currículo profissional e atrativo

## Funções destacadas

- **Templates.** Milhares de layouts predefinidos para todo tipo de formato.
- **Magic Design.** IA que gera designs a partir de uma descrição.
- **Brand Kit.** Salve suas cores, logos e tipografias para manter coerência.
- **Colaboração.** Trabalhar em equipe no mesmo design em tempo real.
- **Programar publicações.** Publicar diretamente nas redes sociais a partir do Canva.
- **Redimensionar.** Converter um design para qualquer formato em um clique.

## Preços

| Plano | Custo | Inclui |
|---|---|---|
| Free | Grátis | Templates básicos, 5GB armazenamento |
| Pro | $13/mês | Tudo do Free + templates premium, IA, Brand Kit |
| Teams | $10/mês por pessoa | Colaboração em equipe |

## Notas

- O plano gratuito é muito completo para começar.
- Canva Pro para Educação é grátis para professores e estudantes.
- Disponível na web, iOS e Android.`,
    },
  },
  {
    id: 21, slug: '21-clipchamp', area: 'Telecommuting', techs: ['Video'], difficulty: 'easy', updatedAt: '2026-05-05',
    content: {
      es: `## ¿Qué es Clipchamp?

Clipchamp es un **editor de video online** creado por **Microsoft**, integrado en Windows 11. Permite crear y editar videos de forma simple sin necesidad de instalar software pesado. Es ideal para contenido de redes sociales, presentaciones en video y proyectos audiovisuales básicos.

## ¿Para qué sirve?

- **Editar videos.** Cortar, unir y recortar clips de video.
- **Texto y títulos.** Agregar textos animados y subtítulos.
- **Música y audio.** Biblioteca de música libre de derechos y grabación de voz.
- **Filtros y efectos.** Transiciones, fondos y efectos visuales.
- **Formatos para redes.** Exportar en formatos optimizados para cada red social.
- **Grabación de pantalla.** Grabar tu pantalla y cámara al mismo tiempo.

## Cómo empezar desde cero

### 1. Acceder
Andá a [clipchamp.com](https://clipchamp.com) o abrilo desde Windows 11. Iniciá sesión con tu cuenta de Microsoft.

### 2. Crear un proyecto
Hacé clic en "Crear un video" y elegí el formato (horizontal, vertical o cuadrado).

### 3. Agregar contenido
Subí tus videos, fotos y audios arrastrándolos al editor. También podés usar la biblioteca de stock.

### 4. Editar y exportar
Cortá, agregá texto y música, aplicá transiciones y exportá tu video.

## Ejemplos prácticos por profesión

### Marketing
> Crear videos promocionales para redes sociales con texto animado

> Editar testimonios de clientes para campañas

### Creación de contenido
> Editar reels y shorts con transiciones y música

> Agregar subtítulos automáticos a tus videos

### Emprendedores
> Grabar y editar tutoriales de tu producto

> Crear videos de presentación para tu marca

### Estudiantes
> Editar presentaciones en video para proyectos

> Crear contenido audiovisual para trabajos universitarios

## Funciones destacadas

- **Arrastrar y soltar.** Interfaz intuitiva sin curva de aprendizaje.
- **Subtítulos automáticos.** Genera subtítulos con IA a partir del audio.
- **Grabación.** Graba pantalla, cámara o ambas.
- **Stock library.** Biblioteca de videos, imágenes y música gratis.
- **Texto a voz.** Convierte texto escrito en narración de voz con IA.
- **Exportación.** Hasta 1080p gratis.

## Precios

| Plan | Costo | Incluye |
|---|---|---|
| Free | Gratis | Edición completa, exportación 1080p |
| Essentials | $12/mes | Stock premium, Brand Kit, sin marca de agua premium |

## Notas

- El plan gratuito no pone marca de agua en los videos.
- Integrado en Windows 11 como app predeterminada.
- Disponible en web para cualquier sistema operativo.`,

      en: `## What is Clipchamp?

Clipchamp is an **online video editor** created by **Microsoft**, integrated into Windows 11. It lets you create and edit videos simply without installing heavy software. It's ideal for social media content, video presentations, and basic audiovisual projects.

## What is it for?

- **Edit videos.** Cut, join, and trim video clips.
- **Text and titles.** Add animated text and subtitles.
- **Music and audio.** Royalty-free music library and voice recording.
- **Filters and effects.** Transitions, backgrounds, and visual effects.
- **Social media formats.** Export in formats optimized for each social network.
- **Screen recording.** Record your screen and camera at the same time.

## Getting started from zero

### 1. Access
Go to [clipchamp.com](https://clipchamp.com) or open it from Windows 11. Sign in with your Microsoft account.

### 2. Create a project
Click "Create a video" and choose the format (landscape, portrait, or square).

### 3. Add content
Upload your videos, photos, and audio by dragging them to the editor. You can also use the stock library.

### 4. Edit and export
Cut, add text and music, apply transitions, and export your video.

## Practical examples by profession

### Marketing
> Create promotional videos for social media with animated text

> Edit client testimonials for campaigns

### Content creation
> Edit reels and shorts with transitions and music

> Add automatic subtitles to your videos

### Entrepreneurs
> Record and edit product tutorials

> Create presentation videos for your brand

### Students
> Edit video presentations for projects

> Create audiovisual content for university assignments

## Key features

- **Drag and drop.** Intuitive interface with no learning curve.
- **Auto captions.** Generates subtitles with AI from audio.
- **Recording.** Record screen, camera, or both.
- **Stock library.** Free library of videos, images, and music.
- **Text to speech.** Converts written text into AI voice narration.
- **Export.** Up to 1080p for free.

## Pricing

| Plan | Cost | Includes |
|---|---|---|
| Free | Free | Full editing, 1080p export |
| Essentials | $12/month | Premium stock, Brand Kit, no premium watermark |

## Notes

- The free plan does not add watermarks to videos.
- Integrated into Windows 11 as the default app.
- Available on web for any operating system.`,

      pt: `## O que é Clipchamp?

Clipchamp é um **editor de vídeo online** criado pela **Microsoft**, integrado no Windows 11. Permite criar e editar vídeos de forma simples sem precisar instalar software pesado. É ideal para conteúdo de redes sociais, apresentações em vídeo e projetos audiovisuais básicos.

## Para que serve?

- **Editar vídeos.** Cortar, unir e aparar clipes de vídeo.
- **Texto e títulos.** Adicionar textos animados e legendas.
- **Música e áudio.** Biblioteca de música livre de direitos e gravação de voz.
- **Filtros e efeitos.** Transições, fundos e efeitos visuais.
- **Formatos para redes.** Exportar em formatos otimizados para cada rede social.
- **Gravação de tela.** Gravar sua tela e câmera ao mesmo tempo.

## Como começar do zero

### 1. Acessar
Acesse [clipchamp.com](https://clipchamp.com) ou abra a partir do Windows 11. Faça login com sua conta Microsoft.

### 2. Criar um projeto
Clique em "Criar um vídeo" e escolha o formato (paisagem, retrato ou quadrado).

### 3. Adicionar conteúdo
Suba seus vídeos, fotos e áudios arrastando para o editor. Também pode usar a biblioteca de stock.

### 4. Editar e exportar
Corte, adicione texto e música, aplique transições e exporte seu vídeo.

## Exemplos práticos por profissão

### Marketing
> Criar vídeos promocionais para redes sociais com texto animado

> Editar depoimentos de clientes para campanhas

### Criação de conteúdo
> Editar reels e shorts com transições e música

> Adicionar legendas automáticas aos seus vídeos

### Empreendedores
> Gravar e editar tutoriais do seu produto

> Criar vídeos de apresentação para sua marca

### Estudantes
> Editar apresentações em vídeo para projetos

> Criar conteúdo audiovisual para trabalhos universitários

## Funções destacadas

- **Arrastar e soltar.** Interface intuitiva sem curva de aprendizado.
- **Legendas automáticas.** Gera legendas com IA a partir do áudio.
- **Gravação.** Grave tela, câmera ou ambos.
- **Biblioteca de stock.** Biblioteca gratuita de vídeos, imagens e música.
- **Texto para fala.** Converte texto escrito em narração de voz com IA.
- **Exportação.** Até 1080p grátis.

## Preços

| Plano | Custo | Inclui |
|---|---|---|
| Free | Grátis | Edição completa, exportação 1080p |
| Essentials | $12/mês | Stock premium, Brand Kit, sem marca d'água premium |

## Notas

- O plano gratuito não coloca marca d'água nos vídeos.
- Integrado no Windows 11 como app padrão.
- Disponível na web para qualquer sistema operacional.`,
    },
  },
  {
    id: 22, slug: '22-python', area: 'Software', techs: ['Python'], difficulty: 'easy', updatedAt: '2026-05-05',
    youtube: 'https://www.youtube.com/embed/UYblVc9bF9A',
    content: {
      es: `## ¿Qué es Python?

Python es un **lenguaje de programación de propósito general**, interpretado y de alto nivel. Su sintaxis limpia y legible lo convierte en uno de los lenguajes más populares del mundo. Fue creado por **Guido van Rossum** en 1991 y es ampliamente usado en desarrollo web, ciencia de datos, inteligencia artificial, automatización y scripting.

## ¿Para qué sirve?

- **Desarrollo web.** Frameworks como Django y Flask permiten crear aplicaciones web robustas.
- **Ciencia de datos.** Librerías como Pandas, NumPy y Matplotlib para análisis y visualización.
- **Inteligencia artificial.** TensorFlow, PyTorch y scikit-learn para machine learning y deep learning.
- **Automatización.** Scripts para automatizar tareas repetitivas del sistema o la web.
- **Scripting.** Procesamiento de archivos, web scraping y tareas de línea de comandos.
- **APIs.** Crear servicios REST con FastAPI o Flask.

## Cómo empezar desde cero

### 1. Instalar Python
Descargá Python desde [python.org](https://python.org). En macOS y Linux generalmente viene preinstalado. Verificá con \`python3 --version\`.

### 2. Configurar el editor
Instalá Visual Studio Code y la extensión de Python. También podés usar PyCharm.

### 3. Tu primer programa
Creá un archivo \`main.py\` y escribí:

\`\`\`python
print("Hola mundo")
\`\`\`

Ejecutalo con \`python3 main.py\`.

### 4. Conceptos fundamentales

- **Variables.** No necesitan declarar tipo: \`nombre = "Juan"\`.
- **Listas.** Colecciones ordenadas: \`frutas = ["manzana", "banana"]\`.
- **Diccionarios.** Pares clave-valor: \`persona = {"nombre": "Ana", "edad": 25}\`.
- **Funciones.** Se definen con \`def\`: \`def saludar(nombre): return f"Hola {nombre}"\`.
- **Clases.** POO con \`class\`: \`class Usuario: ...\`.

### 5. Gestor de paquetes
Usá \`pip\` para instalar librerías: \`pip install requests\`.

## Ejemplo práctico

\`\`\`python
import requests

response = requests.get("https://api.github.com/users/octocat")
data = response.json()
print(f"Usuario: {data['login']}")
print(f"Repos públicos: {data['public_repos']}")
\`\`\`

## Ecosistema principal

| Categoría | Herramientas |
|---|---|
| Web | Django, Flask, FastAPI |
| Data Science | Pandas, NumPy, Jupyter |
| Machine Learning | TensorFlow, PyTorch, scikit-learn |
| Automatización | Selenium, BeautifulSoup, Celery |
| Testing | pytest, unittest |

## Notas

- Python usa **indentación** en lugar de llaves para definir bloques de código.
- La comunidad es enorme: cualquier duda ya fue respondida en Stack Overflow.
- Python 2 ya no tiene soporte. Usá siempre Python 3.`,

      en: `## What is Python?

Python is a **general-purpose, interpreted, high-level programming language**. Its clean and readable syntax makes it one of the most popular languages in the world. It was created by **Guido van Rossum** in 1991 and is widely used in web development, data science, artificial intelligence, automation, and scripting.

## What is it used for?

- **Web development.** Frameworks like Django and Flask for building robust web applications.
- **Data science.** Libraries like Pandas, NumPy, and Matplotlib for analysis and visualization.
- **Artificial intelligence.** TensorFlow, PyTorch, and scikit-learn for machine learning and deep learning.
- **Automation.** Scripts to automate repetitive system or web tasks.
- **Scripting.** File processing, web scraping, and command-line tasks.
- **APIs.** Building REST services with FastAPI or Flask.

## How to get started

### 1. Install Python
Download Python from [python.org](https://python.org). On macOS and Linux it usually comes preinstalled. Verify with \`python3 --version\`.

### 2. Set up your editor
Install Visual Studio Code and the Python extension. You can also use PyCharm.

### 3. Your first program
Create a file \`main.py\` and write:

\`\`\`python
print("Hello world")
\`\`\`

Run it with \`python3 main.py\`.

### 4. Core concepts

- **Variables.** No type declaration needed: \`name = "John"\`.
- **Lists.** Ordered collections: \`fruits = ["apple", "banana"]\`.
- **Dictionaries.** Key-value pairs: \`person = {"name": "Ana", "age": 25}\`.
- **Functions.** Defined with \`def\`: \`def greet(name): return f"Hello {name}"\`.
- **Classes.** OOP with \`class\`: \`class User: ...\`.

### 5. Package manager
Use \`pip\` to install libraries: \`pip install requests\`.

## Practical example

\`\`\`python
import requests

response = requests.get("https://api.github.com/users/octocat")
data = response.json()
print(f"User: {data['login']}")
print(f"Public repos: {data['public_repos']}")
\`\`\`

## Main ecosystem

| Category | Tools |
|---|---|
| Web | Django, Flask, FastAPI |
| Data Science | Pandas, NumPy, Jupyter |
| Machine Learning | TensorFlow, PyTorch, scikit-learn |
| Automation | Selenium, BeautifulSoup, Celery |
| Testing | pytest, unittest |

## Notes

- Python uses **indentation** instead of braces to define code blocks.
- The community is huge: any question has already been answered on Stack Overflow.
- Python 2 is no longer supported. Always use Python 3.`,

      pt: `## O que é Python?

Python é uma **linguagem de programação de propósito geral**, interpretada e de alto nível. Sua sintaxe limpa e legível a torna uma das linguagens mais populares do mundo. Foi criada por **Guido van Rossum** em 1991 e é amplamente usada em desenvolvimento web, ciência de dados, inteligência artificial, automação e scripting.

## Para que serve?

- **Desenvolvimento web.** Frameworks como Django e Flask para criar aplicações web robustas.
- **Ciência de dados.** Bibliotecas como Pandas, NumPy e Matplotlib para análise e visualização.
- **Inteligência artificial.** TensorFlow, PyTorch e scikit-learn para machine learning e deep learning.
- **Automação.** Scripts para automatizar tarefas repetitivas do sistema ou da web.
- **Scripting.** Processamento de arquivos, web scraping e tarefas de linha de comando.
- **APIs.** Criar serviços REST com FastAPI ou Flask.

## Como começar do zero

### 1. Instalar Python
Baixe Python em [python.org](https://python.org). No macOS e Linux geralmente vem pré-instalado. Verifique com \`python3 --version\`.

### 2. Configurar o editor
Instale o Visual Studio Code e a extensão Python. Também pode usar o PyCharm.

### 3. Seu primeiro programa
Crie um arquivo \`main.py\` e escreva:

\`\`\`python
print("Olá mundo")
\`\`\`

Execute com \`python3 main.py\`.

### 4. Conceitos fundamentais

- **Variáveis.** Não precisam declarar tipo: \`nome = "João"\`.
- **Listas.** Coleções ordenadas: \`frutas = ["maçã", "banana"]\`.
- **Dicionários.** Pares chave-valor: \`pessoa = {"nome": "Ana", "idade": 25}\`.
- **Funções.** Definidas com \`def\`: \`def saudar(nome): return f"Olá {nome}"\`.
- **Classes.** POO com \`class\`: \`class Usuario: ...\`.

### 5. Gerenciador de pacotes
Use \`pip\` para instalar bibliotecas: \`pip install requests\`.

## Exemplo prático

\`\`\`python
import requests

response = requests.get("https://api.github.com/users/octocat")
data = response.json()
print(f"Usuário: {data['login']}")
print(f"Repos públicos: {data['public_repos']}")
\`\`\`

## Ecossistema principal

| Categoria | Ferramentas |
|---|---|
| Web | Django, Flask, FastAPI |
| Data Science | Pandas, NumPy, Jupyter |
| Machine Learning | TensorFlow, PyTorch, scikit-learn |
| Automação | Selenium, BeautifulSoup, Celery |
| Testing | pytest, unittest |

## Notas

- Python usa **indentação** em vez de chaves para definir blocos de código.
- A comunidade é enorme: qualquer dúvida já foi respondida no Stack Overflow.
- Python 2 não tem mais suporte. Use sempre Python 3.`,
    },
  },
  {
    id: 23, slug: '23-javascript', area: 'Software', techs: ['JavaScript'], difficulty: 'easy', updatedAt: '2026-05-05',
    youtube: 'https://www.youtube.com/embed/jVBDgNU0B0Y',
    content: {
      es: `## ¿Qué es JavaScript?

JavaScript es un **lenguaje de programación interpretado** que originalmente fue creado para dar interactividad a las páginas web. Hoy es un lenguaje de propósito general que corre tanto en el navegador como en el servidor (con Node.js). Es el **lenguaje más usado del mundo** según encuestas de desarrolladores.

## ¿Para qué sirve?

- **Frontend web.** Manipulación del DOM, animaciones, interactividad con React, Vue o Angular.
- **Backend.** Servidores y APIs con Node.js, Express, NestJS.
- **Mobile.** Apps móviles con React Native o Ionic.
- **Desktop.** Aplicaciones de escritorio con Electron.
- **Full-stack.** Un solo lenguaje para todo el stack de desarrollo.
- **Serverless.** Funciones en la nube con AWS Lambda, Vercel, Cloudflare Workers.

## Cómo empezar desde cero

### 1. No necesitás instalar nada
Abrí la consola del navegador (F12 → Console) y ya podés escribir JavaScript.

### 2. Para proyectos reales
Instalá [Node.js](https://nodejs.org) para ejecutar JS fuera del navegador y usar npm.

### 3. Tu primer programa
Creá un archivo \`index.js\` y escribí:

\`\`\`javascript
console.log("Hola mundo");
\`\`\`

Ejecutalo con \`node index.js\`.

### 4. Conceptos fundamentales

- **Variables.** \`const nombre = "Juan"\` (constante) o \`let edad = 25\` (mutable).
- **Arrow functions.** \`const saludar = (nombre) => \`Hola \${nombre}\`\`.
- **Arrays.** \`const frutas = ["manzana", "banana"]\` con métodos como \`.map()\`, \`.filter()\`.
- **Objetos.** \`const persona = { nombre: "Ana", edad: 25 }\`.
- **Async/Await.** Para operaciones asíncronas como llamadas a APIs.
- **Destructuring.** \`const { nombre, edad } = persona\`.

### 5. Gestor de paquetes
\`npm install axios\` o \`yarn add axios\` para instalar dependencias.

## Ejemplo práctico

\`\`\`javascript
const response = await fetch("https://api.github.com/users/octocat");
const data = await response.json();
console.log(\`Usuario: \${data.login}\`);
console.log(\`Repos públicos: \${data.public_repos}\`);
\`\`\`

## Ecosistema principal

| Categoría | Herramientas |
|---|---|
| Frontend | React, Vue, Angular, Svelte |
| Backend | Node.js, Express, NestJS, Fastify |
| Mobile | React Native, Ionic, Expo |
| Testing | Jest, Vitest, Playwright, Cypress |
| Build tools | Vite, Webpack, esbuild, Turbopack |

## Notas

- JavaScript **no es Java**. Son lenguajes completamente diferentes.
- TypeScript es un superset de JavaScript que agrega tipado estático.
- ES6+ introdujo mejoras enormes: \`const\`/\`let\`, arrow functions, modules, etc.`,

      en: `## What is JavaScript?

JavaScript is an **interpreted programming language** originally created to add interactivity to web pages. Today it is a general-purpose language that runs both in the browser and on the server (with Node.js). It is the **most widely used language in the world** according to developer surveys.

## What is it used for?

- **Web frontend.** DOM manipulation, animations, interactivity with React, Vue, or Angular.
- **Backend.** Servers and APIs with Node.js, Express, NestJS.
- **Mobile.** Mobile apps with React Native or Ionic.
- **Desktop.** Desktop applications with Electron.
- **Full-stack.** A single language for the entire development stack.
- **Serverless.** Cloud functions with AWS Lambda, Vercel, Cloudflare Workers.

## How to get started

### 1. No installation needed
Open the browser console (F12 → Console) and you can start writing JavaScript.

### 2. For real projects
Install [Node.js](https://nodejs.org) to run JS outside the browser and use npm.

### 3. Your first program
Create a file \`index.js\` and write:

\`\`\`javascript
console.log("Hello world");
\`\`\`

Run it with \`node index.js\`.

### 4. Core concepts

- **Variables.** \`const name = "John"\` (constant) or \`let age = 25\` (mutable).
- **Arrow functions.** \`const greet = (name) => \`Hello \${name}\`\`.
- **Arrays.** \`const fruits = ["apple", "banana"]\` with methods like \`.map()\`, \`.filter()\`.
- **Objects.** \`const person = { name: "Ana", age: 25 }\`.
- **Async/Await.** For asynchronous operations like API calls.
- **Destructuring.** \`const { name, age } = person\`.

### 5. Package manager
\`npm install axios\` or \`yarn add axios\` to install dependencies.

## Practical example

\`\`\`javascript
const response = await fetch("https://api.github.com/users/octocat");
const data = await response.json();
console.log(\`User: \${data.login}\`);
console.log(\`Public repos: \${data.public_repos}\`);
\`\`\`

## Main ecosystem

| Category | Tools |
|---|---|
| Frontend | React, Vue, Angular, Svelte |
| Backend | Node.js, Express, NestJS, Fastify |
| Mobile | React Native, Ionic, Expo |
| Testing | Jest, Vitest, Playwright, Cypress |
| Build tools | Vite, Webpack, esbuild, Turbopack |

## Notes

- JavaScript **is not Java**. They are completely different languages.
- TypeScript is a superset of JavaScript that adds static typing.
- ES6+ introduced huge improvements: \`const\`/\`let\`, arrow functions, modules, etc.`,

      pt: `## O que é JavaScript?

JavaScript é uma **linguagem de programação interpretada** originalmente criada para adicionar interatividade às páginas web. Hoje é uma linguagem de propósito geral que roda tanto no navegador quanto no servidor (com Node.js). É a **linguagem mais usada no mundo** segundo pesquisas de desenvolvedores.

## Para que serve?

- **Frontend web.** Manipulação do DOM, animações, interatividade com React, Vue ou Angular.
- **Backend.** Servidores e APIs com Node.js, Express, NestJS.
- **Mobile.** Apps móveis com React Native ou Ionic.
- **Desktop.** Aplicações desktop com Electron.
- **Full-stack.** Uma única linguagem para toda a stack de desenvolvimento.
- **Serverless.** Funções na nuvem com AWS Lambda, Vercel, Cloudflare Workers.

## Como começar do zero

### 1. Não precisa instalar nada
Abra o console do navegador (F12 → Console) e já pode escrever JavaScript.

### 2. Para projetos reais
Instale o [Node.js](https://nodejs.org) para rodar JS fora do navegador e usar npm.

### 3. Seu primeiro programa
Crie um arquivo \`index.js\` e escreva:

\`\`\`javascript
console.log("Olá mundo");
\`\`\`

Execute com \`node index.js\`.

### 4. Conceitos fundamentais

- **Variáveis.** \`const nome = "João"\` (constante) ou \`let idade = 25\` (mutável).
- **Arrow functions.** \`const saudar = (nome) => \`Olá \${nome}\`\`.
- **Arrays.** \`const frutas = ["maçã", "banana"]\` com métodos como \`.map()\`, \`.filter()\`.
- **Objetos.** \`const pessoa = { nome: "Ana", idade: 25 }\`.
- **Async/Await.** Para operações assíncronas como chamadas a APIs.
- **Destructuring.** \`const { nome, idade } = pessoa\`.

### 5. Gerenciador de pacotes
\`npm install axios\` ou \`yarn add axios\` para instalar dependências.

## Exemplo prático

\`\`\`javascript
const response = await fetch("https://api.github.com/users/octocat");
const data = await response.json();
console.log(\`Usuário: \${data.login}\`);
console.log(\`Repos públicos: \${data.public_repos}\`);
\`\`\`

## Ecossistema principal

| Categoria | Ferramentas |
|---|---|
| Frontend | React, Vue, Angular, Svelte |
| Backend | Node.js, Express, NestJS, Fastify |
| Mobile | React Native, Ionic, Expo |
| Testing | Jest, Vitest, Playwright, Cypress |
| Build tools | Vite, Webpack, esbuild, Turbopack |

## Notas

- JavaScript **não é Java**. São linguagens completamente diferentes.
- TypeScript é um superset de JavaScript que adiciona tipagem estática.
- ES6+ introduziu melhorias enormes: \`const\`/\`let\`, arrow functions, modules, etc.`,
    },
  },
  {
    id: 24, slug: '24-csharp', area: 'Software', techs: ['C#'], difficulty: 'normal', updatedAt: '2026-05-05',
    youtube: 'https://www.youtube.com/embed/ZB3HYu_fiGc',
    content: {
      es: `## ¿Qué es C#?

C# (pronunciado "C sharp") es un **lenguaje de programación orientado a objetos** desarrollado por **Microsoft** como parte de la plataforma .NET. Es un lenguaje moderno, tipado y compilado, usado para crear aplicaciones de escritorio, web, móviles, videojuegos y servicios en la nube.

## ¿Para qué sirve?

- **Aplicaciones web.** APIs y aplicaciones con ASP.NET Core.
- **Videojuegos.** Motor de juegos Unity usa C# como lenguaje principal.
- **Aplicaciones de escritorio.** Windows Forms, WPF y MAUI.
- **Mobile.** Aplicaciones multiplataforma con .NET MAUI y Xamarin.
- **Servicios en la nube.** Azure Functions y microservicios.
- **Aplicaciones empresariales.** Sistemas robustos con Entity Framework y SQL Server.

## Cómo empezar desde cero

### 1. Instalar .NET SDK
Descargá el SDK desde [dotnet.microsoft.com](https://dotnet.microsoft.com). Verificá con \`dotnet --version\`.

### 2. Configurar el editor
Instalá Visual Studio (completo) o Visual Studio Code con la extensión C# Dev Kit.

### 3. Tu primer programa
Creá un proyecto con \`dotnet new console -n MiApp\` y editá \`Program.cs\`:

\`\`\`csharp
Console.WriteLine("Hola mundo");
\`\`\`

Ejecutalo con \`dotnet run\`.

### 4. Conceptos fundamentales

- **Tipado fuerte.** Cada variable declara su tipo: \`string nombre = "Juan";\`.
- **Clases.** Todo se organiza en clases: \`public class Usuario { ... }\`.
- **Interfaces.** Contratos de comportamiento: \`public interface IServicio { ... }\`.
- **LINQ.** Consultas integradas: \`var adultos = personas.Where(p => p.Edad >= 18);\`.
- **Async/Await.** Programación asíncrona nativa.
- **Nullable.** Control de nulos: \`string? nombre = null;\`.

### 5. Gestor de paquetes
NuGet es el gestor: \`dotnet add package Newtonsoft.Json\`.

## Ejemplo práctico

\`\`\`csharp
using System.Net.Http.Json;

var client = new HttpClient();
var data = await client.GetFromJsonAsync<JsonElement>(
    "https://api.github.com/users/octocat");
Console.WriteLine($"Usuario: {data.GetProperty("login")}");
Console.WriteLine($"Repos: {data.GetProperty("public_repos")}");
\`\`\`

## Ecosistema principal

| Categoría | Herramientas |
|---|---|
| Web | ASP.NET Core, Blazor, Minimal APIs |
| Desktop | WPF, WinForms, .NET MAUI |
| Juegos | Unity, MonoGame, Godot |
| ORM | Entity Framework Core, Dapper |
| Testing | xUnit, NUnit, MSTest |

## Notas

- C# evoluciona rápido: cada versión trae mejoras de productividad.
- .NET es multiplataforma: corre en Windows, macOS y Linux.
- Unity hace que C# sea el lenguaje más usado en desarrollo de videojuegos indie.`,

      en: `## What is C#?

C# (pronounced "C sharp") is an **object-oriented programming language** developed by **Microsoft** as part of the .NET platform. It is a modern, typed, and compiled language used to build desktop, web, mobile, game, and cloud applications.

## What is it used for?

- **Web applications.** APIs and applications with ASP.NET Core.
- **Video games.** Unity game engine uses C# as its primary language.
- **Desktop applications.** Windows Forms, WPF, and MAUI.
- **Mobile.** Cross-platform apps with .NET MAUI and Xamarin.
- **Cloud services.** Azure Functions and microservices.
- **Enterprise applications.** Robust systems with Entity Framework and SQL Server.

## How to get started

### 1. Install .NET SDK
Download the SDK from [dotnet.microsoft.com](https://dotnet.microsoft.com). Verify with \`dotnet --version\`.

### 2. Set up your editor
Install Visual Studio (full) or Visual Studio Code with C# Dev Kit extension.

### 3. Your first program
Create a project with \`dotnet new console -n MyApp\` and edit \`Program.cs\`:

\`\`\`csharp
Console.WriteLine("Hello world");
\`\`\`

Run it with \`dotnet run\`.

### 4. Core concepts

- **Strong typing.** Every variable declares its type: \`string name = "John";\`.
- **Classes.** Everything is organized in classes: \`public class User { ... }\`.
- **Interfaces.** Behavior contracts: \`public interface IService { ... }\`.
- **LINQ.** Integrated queries: \`var adults = people.Where(p => p.Age >= 18);\`.
- **Async/Await.** Native asynchronous programming.
- **Nullable.** Null control: \`string? name = null;\`.

### 5. Package manager
NuGet is the package manager: \`dotnet add package Newtonsoft.Json\`.

## Practical example

\`\`\`csharp
using System.Net.Http.Json;

var client = new HttpClient();
var data = await client.GetFromJsonAsync<JsonElement>(
    "https://api.github.com/users/octocat");
Console.WriteLine($"User: {data.GetProperty("login")}");
Console.WriteLine($"Repos: {data.GetProperty("public_repos")}");
\`\`\`

## Main ecosystem

| Category | Tools |
|---|---|
| Web | ASP.NET Core, Blazor, Minimal APIs |
| Desktop | WPF, WinForms, .NET MAUI |
| Games | Unity, MonoGame, Godot |
| ORM | Entity Framework Core, Dapper |
| Testing | xUnit, NUnit, MSTest |

## Notes

- C# evolves quickly: each version brings productivity improvements.
- .NET is cross-platform: runs on Windows, macOS, and Linux.
- Unity makes C# the most used language in indie game development.`,

      pt: `## O que é C#?

C# (pronunciado "C sharp") é uma **linguagem de programação orientada a objetos** desenvolvida pela **Microsoft** como parte da plataforma .NET. É uma linguagem moderna, tipada e compilada, usada para criar aplicações desktop, web, móveis, jogos e serviços na nuvem.

## Para que serve?

- **Aplicações web.** APIs e aplicações com ASP.NET Core.
- **Jogos.** O motor de jogos Unity usa C# como linguagem principal.
- **Aplicações desktop.** Windows Forms, WPF e MAUI.
- **Mobile.** Apps multiplataforma com .NET MAUI e Xamarin.
- **Serviços na nuvem.** Azure Functions e microsserviços.
- **Aplicações empresariais.** Sistemas robustos com Entity Framework e SQL Server.

## Como começar do zero

### 1. Instalar .NET SDK
Baixe o SDK em [dotnet.microsoft.com](https://dotnet.microsoft.com). Verifique com \`dotnet --version\`.

### 2. Configurar o editor
Instale o Visual Studio (completo) ou Visual Studio Code com a extensão C# Dev Kit.

### 3. Seu primeiro programa
Crie um projeto com \`dotnet new console -n MeuApp\` e edite \`Program.cs\`:

\`\`\`csharp
Console.WriteLine("Olá mundo");
\`\`\`

Execute com \`dotnet run\`.

### 4. Conceitos fundamentais

- **Tipagem forte.** Cada variável declara seu tipo: \`string nome = "João";\`.
- **Classes.** Tudo é organizado em classes: \`public class Usuario { ... }\`.
- **Interfaces.** Contratos de comportamento: \`public interface IServico { ... }\`.
- **LINQ.** Consultas integradas: \`var adultos = pessoas.Where(p => p.Idade >= 18);\`.
- **Async/Await.** Programação assíncrona nativa.
- **Nullable.** Controle de nulos: \`string? nome = null;\`.

### 5. Gerenciador de pacotes
NuGet é o gerenciador: \`dotnet add package Newtonsoft.Json\`.

## Exemplo prático

\`\`\`csharp
using System.Net.Http.Json;

var client = new HttpClient();
var data = await client.GetFromJsonAsync<JsonElement>(
    "https://api.github.com/users/octocat");
Console.WriteLine($"Usuário: {data.GetProperty("login")}");
Console.WriteLine($"Repos: {data.GetProperty("public_repos")}");
\`\`\`

## Ecossistema principal

| Categoria | Ferramentas |
|---|---|
| Web | ASP.NET Core, Blazor, Minimal APIs |
| Desktop | WPF, WinForms, .NET MAUI |
| Jogos | Unity, MonoGame, Godot |
| ORM | Entity Framework Core, Dapper |
| Testing | xUnit, NUnit, MSTest |

## Notas

- C# evolui rapidamente: cada versão traz melhorias de produtividade.
- .NET é multiplataforma: roda no Windows, macOS e Linux.
- Unity faz do C# a linguagem mais usada no desenvolvimento de jogos indie.`,
    },
  },
  {
    id: 25, slug: '25-golang', area: 'Software', techs: ['Go'], difficulty: 'normal', updatedAt: '2026-05-05',
    youtube: 'https://www.youtube.com/embed/7ve-aE0yGmo',
    content: {
      es: `## ¿Qué es Go?

Go (también llamado Golang) es un **lenguaje de programación compilado** creado por **Google** en 2009. Fue diseñado para ser simple, eficiente y excelente en concurrencia. Es ideal para construir servidores, herramientas CLI, microservicios y sistemas de alto rendimiento.

## ¿Para qué sirve?

- **Backend y APIs.** Servidores HTTP de alto rendimiento con net/http, Gin o Echo.
- **Microservicios.** Binarios pequeños, arranque rápido y bajo consumo de memoria.
- **Herramientas CLI.** Compilación a un solo binario sin dependencias.
- **Infraestructura.** Docker, Kubernetes y Terraform están escritos en Go.
- **Concurrencia.** Goroutines y channels para procesamiento paralelo eficiente.
- **Cloud native.** Lenguaje preferido para herramientas DevOps y cloud.

## Cómo empezar desde cero

### 1. Instalar Go
Descargá Go desde [go.dev](https://go.dev). Verificá con \`go version\`.

### 2. Configurar el editor
Instalá Visual Studio Code con la extensión oficial de Go.

### 3. Tu primer programa
Creá un archivo \`main.go\`:

\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hola mundo")
}
\`\`\`

Ejecutalo con \`go run main.go\`.

### 4. Conceptos fundamentales

- **Tipado estático.** Variables con tipo: \`var nombre string = "Juan"\` o \`nombre := "Juan"\`.
- **Funciones.** Pueden retornar múltiples valores: \`func dividir(a, b int) (int, error)\`.
- **Structs.** En vez de clases: \`type Usuario struct { Nombre string; Edad int }\`.
- **Interfaces.** Implícitas: si un tipo tiene los métodos, implementa la interfaz.
- **Goroutines.** Concurrencia liviana: \`go miFuncion()\`.
- **Channels.** Comunicación entre goroutines: \`ch := make(chan string)\`.

### 5. Módulos
Inicializá un módulo con \`go mod init mi-proyecto\` y agregá dependencias con \`go get\`.

## Ejemplo práctico

\`\`\`go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    resp, _ := http.Get("https://api.github.com/users/octocat")
    defer resp.Body.Close()
    var data map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&data)
    fmt.Printf("Usuario: %s\\n", data["login"])
    fmt.Printf("Repos: %.0f\\n", data["public_repos"])
}
\`\`\`

## Ecosistema principal

| Categoría | Herramientas |
|---|---|
| Web | Gin, Echo, Fiber, Chi |
| ORM | GORM, sqlx, ent |
| CLI | Cobra, urfave/cli |
| Testing | testing (estándar), testify |
| Cloud | Docker SDK, Kubernetes client-go |

## Notas

- Go no tiene clases ni herencia. Usa composición con structs e interfaces.
- El compilador es extremadamente rápido.
- \`gofmt\` formatea el código automáticamente, eliminando debates de estilo.`,

      en: `## What is Go?

Go (also called Golang) is a **compiled programming language** created by **Google** in 2009. It was designed to be simple, efficient, and excellent at concurrency. It is ideal for building servers, CLI tools, microservices, and high-performance systems.

## What is it used for?

- **Backend and APIs.** High-performance HTTP servers with net/http, Gin, or Echo.
- **Microservices.** Small binaries, fast startup, and low memory usage.
- **CLI tools.** Compiles to a single binary with no dependencies.
- **Infrastructure.** Docker, Kubernetes, and Terraform are written in Go.
- **Concurrency.** Goroutines and channels for efficient parallel processing.
- **Cloud native.** Preferred language for DevOps and cloud tools.

## How to get started

### 1. Install Go
Download Go from [go.dev](https://go.dev). Verify with \`go version\`.

### 2. Set up your editor
Install Visual Studio Code with the official Go extension.

### 3. Your first program
Create a file \`main.go\`:

\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello world")
}
\`\`\`

Run it with \`go run main.go\`.

### 4. Core concepts

- **Static typing.** Typed variables: \`var name string = "John"\` or \`name := "John"\`.
- **Functions.** Can return multiple values: \`func divide(a, b int) (int, error)\`.
- **Structs.** Instead of classes: \`type User struct { Name string; Age int }\`.
- **Interfaces.** Implicit: if a type has the methods, it implements the interface.
- **Goroutines.** Lightweight concurrency: \`go myFunction()\`.
- **Channels.** Communication between goroutines: \`ch := make(chan string)\`.

### 5. Modules
Initialize a module with \`go mod init my-project\` and add dependencies with \`go get\`.

## Practical example

\`\`\`go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    resp, _ := http.Get("https://api.github.com/users/octocat")
    defer resp.Body.Close()
    var data map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&data)
    fmt.Printf("User: %s\\n", data["login"])
    fmt.Printf("Repos: %.0f\\n", data["public_repos"])
}
\`\`\`

## Main ecosystem

| Category | Tools |
|---|---|
| Web | Gin, Echo, Fiber, Chi |
| ORM | GORM, sqlx, ent |
| CLI | Cobra, urfave/cli |
| Testing | testing (standard), testify |
| Cloud | Docker SDK, Kubernetes client-go |

## Notes

- Go has no classes or inheritance. It uses composition with structs and interfaces.
- The compiler is extremely fast.
- \`gofmt\` automatically formats code, eliminating style debates.`,

      pt: `## O que é Go?

Go (também chamado Golang) é uma **linguagem de programação compilada** criada pelo **Google** em 2009. Foi projetada para ser simples, eficiente e excelente em concorrência. É ideal para construir servidores, ferramentas CLI, microsserviços e sistemas de alto desempenho.

## Para que serve?

- **Backend e APIs.** Servidores HTTP de alto desempenho com net/http, Gin ou Echo.
- **Microsserviços.** Binários pequenos, inicialização rápida e baixo consumo de memória.
- **Ferramentas CLI.** Compilação para um único binário sem dependências.
- **Infraestrutura.** Docker, Kubernetes e Terraform são escritos em Go.
- **Concorrência.** Goroutines e channels para processamento paralelo eficiente.
- **Cloud native.** Linguagem preferida para ferramentas DevOps e cloud.

## Como começar do zero

### 1. Instalar Go
Baixe Go em [go.dev](https://go.dev). Verifique com \`go version\`.

### 2. Configurar o editor
Instale o Visual Studio Code com a extensão oficial de Go.

### 3. Seu primeiro programa
Crie um arquivo \`main.go\`:

\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Olá mundo")
}
\`\`\`

Execute com \`go run main.go\`.

### 4. Conceitos fundamentais

- **Tipagem estática.** Variáveis com tipo: \`var nome string = "João"\` ou \`nome := "João"\`.
- **Funções.** Podem retornar múltiplos valores: \`func dividir(a, b int) (int, error)\`.
- **Structs.** Em vez de classes: \`type Usuario struct { Nome string; Idade int }\`.
- **Interfaces.** Implícitas: se um tipo tem os métodos, implementa a interface.
- **Goroutines.** Concorrência leve: \`go minhaFuncao()\`.
- **Channels.** Comunicação entre goroutines: \`ch := make(chan string)\`.

### 5. Módulos
Inicialize um módulo com \`go mod init meu-projeto\` e adicione dependências com \`go get\`.

## Exemplo prático

\`\`\`go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    resp, _ := http.Get("https://api.github.com/users/octocat")
    defer resp.Body.Close()
    var data map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&data)
    fmt.Printf("Usuário: %s\\n", data["login"])
    fmt.Printf("Repos: %.0f\\n", data["public_repos"])
}
\`\`\`

## Ecossistema principal

| Categoria | Ferramentas |
|---|---|
| Web | Gin, Echo, Fiber, Chi |
| ORM | GORM, sqlx, ent |
| CLI | Cobra, urfave/cli |
| Testing | testing (padrão), testify |
| Cloud | Docker SDK, Kubernetes client-go |

## Notas

- Go não tem classes nem herança. Usa composição com structs e interfaces.
- O compilador é extremamente rápido.
- \`gofmt\` formata o código automaticamente, eliminando debates de estilo.`,
    },
  },
  {
    id: 26, slug: '26-ruby', area: 'Software', techs: ['Ruby'], difficulty: 'easy', updatedAt: '2026-05-05',
    youtube: 'https://www.youtube.com/embed/q2TWofwPt-o',
    content: {
      es: `## ¿Qué es Ruby?

Ruby es un **lenguaje de programación interpretado y orientado a objetos** creado por **Yukihiro "Matz" Matsumoto** en 1995 en Japón. Su filosofía es que la programación debe ser productiva y divertida. Es conocido por su sintaxis elegante y por el framework **Ruby on Rails**, que revolucionó el desarrollo web.

## ¿Para qué sirve?

- **Desarrollo web.** Ruby on Rails para crear aplicaciones web completas rápidamente.
- **APIs.** APIs REST con Rails API mode, Sinatra o Grape.
- **Scripting.** Automatización de tareas y procesamiento de datos.
- **DevOps.** Herramientas como Chef y Vagrant están escritas en Ruby.
- **Prototipos.** Desarrollo rápido de MVPs y startups.
- **E-commerce.** Plataformas como Shopify están construidas con Rails.

## Cómo empezar desde cero

### 1. Instalar Ruby
Usá un gestor de versiones como \`rbenv\` o \`rvm\`. Verificá con \`ruby --version\`.

### 2. Configurar el editor
Visual Studio Code con la extensión Ruby LSP, o RubyMine de JetBrains.

### 3. Tu primer programa
Creá un archivo \`main.rb\`:

\`\`\`ruby
puts "Hola mundo"
\`\`\`

Ejecutalo con \`ruby main.rb\`.

### 4. Conceptos fundamentales

- **Todo es un objeto.** Incluso los números: \`5.times { puts "hola" }\`.
- **Bloques.** Código entre llaves o do/end: \`[1,2,3].each { |n| puts n }\`.
- **Símbolos.** Identificadores inmutables: \`:nombre\`, usados como claves de hash.
- **Hashes.** Diccionarios: \`persona = { nombre: "Ana", edad: 25 }\`.
- **Clases.** \`class Usuario; attr_accessor :nombre; end\`.
- **Gems.** Paquetes de Ruby: \`gem install rails\`.

### 5. Ruby on Rails
Creá una app web completa con \`rails new mi-app\` y \`rails server\`.

## Ejemplo práctico

\`\`\`ruby
require 'net/http'
require 'json'

uri = URI("https://api.github.com/users/octocat")
response = Net::HTTP.get(uri)
data = JSON.parse(response)
puts "Usuario: #{data['login']}"
puts "Repos públicos: #{data['public_repos']}"
\`\`\`

## Ecosistema principal

| Categoría | Herramientas |
|---|---|
| Web | Ruby on Rails, Sinatra, Hanami |
| Testing | RSpec, Minitest, Capybara |
| ORM | ActiveRecord, Sequel |
| Background jobs | Sidekiq, Resque, GoodJob |
| API | Grape, GraphQL Ruby |

## Notas

- Ruby prioriza la felicidad del programador sobre la velocidad de ejecución.
- Rails popularizó el patrón MVC y "Convention over Configuration".
- Grandes empresas usan Rails: Shopify, GitHub, Airbnb, Basecamp.`,

      en: `## What is Ruby?

Ruby is an **interpreted, object-oriented programming language** created by **Yukihiro "Matz" Matsumoto** in 1995 in Japan. Its philosophy is that programming should be productive and fun. It is known for its elegant syntax and the **Ruby on Rails** framework, which revolutionized web development.

## What is it used for?

- **Web development.** Ruby on Rails for building complete web applications quickly.
- **APIs.** REST APIs with Rails API mode, Sinatra, or Grape.
- **Scripting.** Task automation and data processing.
- **DevOps.** Tools like Chef and Vagrant are written in Ruby.
- **Prototypes.** Rapid development of MVPs and startups.
- **E-commerce.** Platforms like Shopify are built with Rails.

## How to get started

### 1. Install Ruby
Use a version manager like \`rbenv\` or \`rvm\`. Verify with \`ruby --version\`.

### 2. Set up your editor
Visual Studio Code with Ruby LSP extension, or JetBrains RubyMine.

### 3. Your first program
Create a file \`main.rb\`:

\`\`\`ruby
puts "Hello world"
\`\`\`

Run it with \`ruby main.rb\`.

### 4. Core concepts

- **Everything is an object.** Even numbers: \`5.times { puts "hello" }\`.
- **Blocks.** Code between braces or do/end: \`[1,2,3].each { |n| puts n }\`.
- **Symbols.** Immutable identifiers: \`:name\`, used as hash keys.
- **Hashes.** Dictionaries: \`person = { name: "Ana", age: 25 }\`.
- **Classes.** \`class User; attr_accessor :name; end\`.
- **Gems.** Ruby packages: \`gem install rails\`.

### 5. Ruby on Rails
Create a complete web app with \`rails new my-app\` and \`rails server\`.

## Practical example

\`\`\`ruby
require 'net/http'
require 'json'

uri = URI("https://api.github.com/users/octocat")
response = Net::HTTP.get(uri)
data = JSON.parse(response)
puts "User: #{data['login']}"
puts "Public repos: #{data['public_repos']}"
\`\`\`

## Main ecosystem

| Category | Tools |
|---|---|
| Web | Ruby on Rails, Sinatra, Hanami |
| Testing | RSpec, Minitest, Capybara |
| ORM | ActiveRecord, Sequel |
| Background jobs | Sidekiq, Resque, GoodJob |
| API | Grape, GraphQL Ruby |

## Notes

- Ruby prioritizes programmer happiness over execution speed.
- Rails popularized the MVC pattern and "Convention over Configuration".
- Major companies use Rails: Shopify, GitHub, Airbnb, Basecamp.`,

      pt: `## O que é Ruby?

Ruby é uma **linguagem de programação interpretada e orientada a objetos** criada por **Yukihiro "Matz" Matsumoto** em 1995 no Japão. Sua filosofia é que a programação deve ser produtiva e divertida. É conhecida por sua sintaxe elegante e pelo framework **Ruby on Rails**, que revolucionou o desenvolvimento web.

## Para que serve?

- **Desenvolvimento web.** Ruby on Rails para criar aplicações web completas rapidamente.
- **APIs.** APIs REST com Rails API mode, Sinatra ou Grape.
- **Scripting.** Automação de tarefas e processamento de dados.
- **DevOps.** Ferramentas como Chef e Vagrant são escritas em Ruby.
- **Protótipos.** Desenvolvimento rápido de MVPs e startups.
- **E-commerce.** Plataformas como Shopify são construídas com Rails.

## Como começar do zero

### 1. Instalar Ruby
Use um gerenciador de versões como \`rbenv\` ou \`rvm\`. Verifique com \`ruby --version\`.

### 2. Configurar o editor
Visual Studio Code com extensão Ruby LSP, ou JetBrains RubyMine.

### 3. Seu primeiro programa
Crie um arquivo \`main.rb\`:

\`\`\`ruby
puts "Olá mundo"
\`\`\`

Execute com \`ruby main.rb\`.

### 4. Conceitos fundamentais

- **Tudo é um objeto.** Até números: \`5.times { puts "olá" }\`.
- **Blocos.** Código entre chaves ou do/end: \`[1,2,3].each { |n| puts n }\`.
- **Símbolos.** Identificadores imutáveis: \`:nome\`, usados como chaves de hash.
- **Hashes.** Dicionários: \`pessoa = { nome: "Ana", idade: 25 }\`.
- **Classes.** \`class Usuario; attr_accessor :nome; end\`.
- **Gems.** Pacotes Ruby: \`gem install rails\`.

### 5. Ruby on Rails
Crie uma app web completa com \`rails new meu-app\` e \`rails server\`.

## Exemplo prático

\`\`\`ruby
require 'net/http'
require 'json'

uri = URI("https://api.github.com/users/octocat")
response = Net::HTTP.get(uri)
data = JSON.parse(response)
puts "Usuário: #{data['login']}"
puts "Repos públicos: #{data['public_repos']}"
\`\`\`

## Ecossistema principal

| Categoria | Ferramentas |
|---|---|
| Web | Ruby on Rails, Sinatra, Hanami |
| Testing | RSpec, Minitest, Capybara |
| ORM | ActiveRecord, Sequel |
| Background jobs | Sidekiq, Resque, GoodJob |
| API | Grape, GraphQL Ruby |

## Notas

- Ruby prioriza a felicidade do programador sobre a velocidade de execução.
- Rails popularizou o padrão MVC e "Convention over Configuration".
- Grandes empresas usam Rails: Shopify, GitHub, Airbnb, Basecamp.`,
    },
  },
  {
    id: 27, slug: '27-php', area: 'Software', techs: ['PHP'], difficulty: 'easy', updatedAt: '2026-05-05',
    youtube: 'https://www.youtube.com/embed/kbm9grp1SOE',
    content: {
      es: `## ¿Qué es PHP?

PHP es un **lenguaje de programación interpretado del lado del servidor** creado por **Rasmus Lerdorf** en 1995. Fue diseñado específicamente para desarrollo web y hoy potencia casi el **80% de los sitios web del mundo**, incluyendo WordPress, Facebook (en sus inicios) y Wikipedia.

## ¿Para qué sirve?

- **Desarrollo web.** Sitios dinámicos y aplicaciones web con Laravel, Symfony.
- **CMS.** WordPress, Drupal y Joomla están escritos en PHP.
- **E-commerce.** WooCommerce, Magento, PrestaShop.
- **APIs.** APIs REST con Laravel o Slim Framework.
- **Scripting del servidor.** Procesamiento de formularios, sesiones, autenticación.
- **Línea de comandos.** Scripts CLI para tareas de mantenimiento.

## Cómo empezar desde cero

### 1. Instalar PHP
Descargá PHP desde [php.net](https://php.net) o usá XAMPP/Laragon para un entorno completo. Verificá con \`php --version\`.

### 2. Configurar el editor
Visual Studio Code con la extensión PHP Intelephense, o PhpStorm.

### 3. Tu primer programa
Creá un archivo \`index.php\`:

\`\`\`php
<?php
echo "Hola mundo";
\`\`\`

Ejecutalo con \`php index.php\` o levantá un servidor con \`php -S localhost:8000\`.

### 4. Conceptos fundamentales

- **Variables.** Siempre empiezan con \`$\`: \`$nombre = "Juan";\`.
- **Arrays.** Asociativos y numéricos: \`$persona = ["nombre" => "Ana", "edad" => 25];\`.
- **Funciones.** \`function saludar($nombre) { return "Hola $nombre"; }\`.
- **Clases.** POO completa: \`class Usuario { public string $nombre; }\`.
- **Namespaces.** Organización del código: \`namespace App\\Models;\`.
- **Tipado.** PHP 8+ soporta tipos estrictos: \`function sumar(int $a, int $b): int\`.

### 5. Composer
El gestor de dependencias: \`composer require guzzlehttp/guzzle\`.

## Ejemplo práctico

\`\`\`php
<?php
$response = file_get_contents("https://api.github.com/users/octocat",
    false, stream_context_create(["http" => ["header" => "User-Agent: PHP"]]));
$data = json_decode($response, true);
echo "Usuario: {$data['login']}\\n";
echo "Repos públicos: {$data['public_repos']}\\n";
\`\`\`

## Ecosistema principal

| Categoría | Herramientas |
|---|---|
| Web | Laravel, Symfony, CodeIgniter |
| CMS | WordPress, Drupal, Statamic |
| Testing | PHPUnit, Pest, Codeception |
| ORM | Eloquent, Doctrine |
| Herramientas | Composer, PHP-CS-Fixer, PHPStan |

## Notas

- PHP moderno (8.x) es muy diferente al PHP antiguo: tipado estricto, enums, fibers, match.
- Laravel es uno de los frameworks web más populares del mundo.
- El hosting para PHP es el más económico y disponible.`,

      en: `## What is PHP?

PHP is a **server-side interpreted programming language** created by **Rasmus Lerdorf** in 1995. It was designed specifically for web development and today powers nearly **80% of the world's websites**, including WordPress, Facebook (in its early days), and Wikipedia.

## What is it used for?

- **Web development.** Dynamic sites and web applications with Laravel, Symfony.
- **CMS.** WordPress, Drupal, and Joomla are written in PHP.
- **E-commerce.** WooCommerce, Magento, PrestaShop.
- **APIs.** REST APIs with Laravel or Slim Framework.
- **Server scripting.** Form processing, sessions, authentication.
- **Command line.** CLI scripts for maintenance tasks.

## How to get started

### 1. Install PHP
Download PHP from [php.net](https://php.net) or use XAMPP/Laragon for a complete environment. Verify with \`php --version\`.

### 2. Set up your editor
Visual Studio Code with PHP Intelephense extension, or PhpStorm.

### 3. Your first program
Create a file \`index.php\`:

\`\`\`php
<?php
echo "Hello world";
\`\`\`

Run it with \`php index.php\` or start a server with \`php -S localhost:8000\`.

### 4. Core concepts

- **Variables.** Always start with \`$\`: \`$name = "John";\`.
- **Arrays.** Associative and numeric: \`$person = ["name" => "Ana", "age" => 25];\`.
- **Functions.** \`function greet($name) { return "Hello $name"; }\`.
- **Classes.** Full OOP: \`class User { public string $name; }\`.
- **Namespaces.** Code organization: \`namespace App\\Models;\`.
- **Typing.** PHP 8+ supports strict types: \`function add(int $a, int $b): int\`.

### 5. Composer
The dependency manager: \`composer require guzzlehttp/guzzle\`.

## Practical example

\`\`\`php
<?php
$response = file_get_contents("https://api.github.com/users/octocat",
    false, stream_context_create(["http" => ["header" => "User-Agent: PHP"]]));
$data = json_decode($response, true);
echo "User: {$data['login']}\\n";
echo "Public repos: {$data['public_repos']}\\n";
\`\`\`

## Main ecosystem

| Category | Tools |
|---|---|
| Web | Laravel, Symfony, CodeIgniter |
| CMS | WordPress, Drupal, Statamic |
| Testing | PHPUnit, Pest, Codeception |
| ORM | Eloquent, Doctrine |
| Tools | Composer, PHP-CS-Fixer, PHPStan |

## Notes

- Modern PHP (8.x) is very different from old PHP: strict typing, enums, fibers, match.
- Laravel is one of the most popular web frameworks in the world.
- PHP hosting is the most affordable and widely available.`,

      pt: `## O que é PHP?

PHP é uma **linguagem de programação interpretada do lado do servidor** criada por **Rasmus Lerdorf** em 1995. Foi projetada especificamente para desenvolvimento web e hoje alimenta quase **80% dos sites do mundo**, incluindo WordPress, Facebook (nos seus primórdios) e Wikipedia.

## Para que serve?

- **Desenvolvimento web.** Sites dinâmicos e aplicações web com Laravel, Symfony.
- **CMS.** WordPress, Drupal e Joomla são escritos em PHP.
- **E-commerce.** WooCommerce, Magento, PrestaShop.
- **APIs.** APIs REST com Laravel ou Slim Framework.
- **Scripting do servidor.** Processamento de formulários, sessões, autenticação.
- **Linha de comando.** Scripts CLI para tarefas de manutenção.

## Como começar do zero

### 1. Instalar PHP
Baixe PHP em [php.net](https://php.net) ou use XAMPP/Laragon para um ambiente completo. Verifique com \`php --version\`.

### 2. Configurar o editor
Visual Studio Code com a extensão PHP Intelephense, ou PhpStorm.

### 3. Seu primeiro programa
Crie um arquivo \`index.php\`:

\`\`\`php
<?php
echo "Olá mundo";
\`\`\`

Execute com \`php index.php\` ou inicie um servidor com \`php -S localhost:8000\`.

### 4. Conceitos fundamentais

- **Variáveis.** Sempre começam com \`$\`: \`$nome = "João";\`.
- **Arrays.** Associativos e numéricos: \`$pessoa = ["nome" => "Ana", "idade" => 25];\`.
- **Funções.** \`function saudar($nome) { return "Olá $nome"; }\`.
- **Classes.** POO completa: \`class Usuario { public string $nome; }\`.
- **Namespaces.** Organização do código: \`namespace App\\Models;\`.
- **Tipagem.** PHP 8+ suporta tipos estritos: \`function somar(int $a, int $b): int\`.

### 5. Composer
O gerenciador de dependências: \`composer require guzzlehttp/guzzle\`.

## Exemplo prático

\`\`\`php
<?php
$response = file_get_contents("https://api.github.com/users/octocat",
    false, stream_context_create(["http" => ["header" => "User-Agent: PHP"]]));
$data = json_decode($response, true);
echo "Usuário: {$data['login']}\\n";
echo "Repos públicos: {$data['public_repos']}\\n";
\`\`\`

## Ecossistema principal

| Categoria | Ferramentas |
|---|---|
| Web | Laravel, Symfony, CodeIgniter |
| CMS | WordPress, Drupal, Statamic |
| Testing | PHPUnit, Pest, Codeception |
| ORM | Eloquent, Doctrine |
| Ferramentas | Composer, PHP-CS-Fixer, PHPStan |

## Notas

- PHP moderno (8.x) é muito diferente do PHP antigo: tipagem estrita, enums, fibers, match.
- Laravel é um dos frameworks web mais populares do mundo.
- Hospedagem para PHP é a mais acessível e amplamente disponível.`,
    },
  },
  {
    id: 28, slug: '28-rust', area: 'Software', techs: ['Rust'], difficulty: 'hard', updatedAt: '2026-05-05',
    youtube: 'https://www.youtube.com/embed/llYdxpGNHFg',
    content: {
      es: `## ¿Qué es Rust?

Rust es un **lenguaje de programación de sistemas** desarrollado por **Mozilla** y lanzado en 2015. Fue diseñado para ser seguro, concurrente y de alto rendimiento. Su sistema de **ownership** (propiedad) elimina errores de memoria en tiempo de compilación sin necesidad de garbage collector. Ha sido elegido como el **lenguaje más amado** en Stack Overflow múltiples años consecutivos.

## ¿Para qué sirve?

- **Programación de sistemas.** Reemplazo de C/C++ con seguridad de memoria garantizada.
- **WebAssembly.** Compilación a WASM para rendimiento nativo en el navegador.
- **CLI tools.** Herramientas de línea de comandos rápidas y confiables.
- **Servidores web.** APIs de alto rendimiento con Actix Web o Axum.
- **Sistemas embebidos.** Programación bare-metal sin sistema operativo.
- **Blockchain.** Solana y otros proyectos de blockchain usan Rust.

## Cómo empezar desde cero

### 1. Instalar Rust
Usá rustup: \`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\`. Verificá con \`rustc --version\`.

### 2. Configurar el editor
Visual Studio Code con la extensión rust-analyzer.

### 3. Tu primer programa
Creá un proyecto con \`cargo new mi-proyecto\` y editá \`src/main.rs\`:

\`\`\`rust
fn main() {
    println!("Hola mundo");
}
\`\`\`

Ejecutalo con \`cargo run\`.

### 4. Conceptos fundamentales

- **Ownership.** Cada valor tiene un dueño único. Cuando el dueño sale del scope, se libera la memoria.
- **Borrowing.** Referencias inmutables (\`&x\`) o mutables (\`&mut x\`) sin transferir propiedad.
- **Enums.** Tipos algebraicos: \`enum Resultado { Ok(i32), Error(String) }\`.
- **Pattern matching.** \`match\` exhaustivo: todos los casos deben cubrirse.
- **Traits.** Similar a interfaces: \`trait Saludar { fn hola(&self) -> String; }\`.
- **Result y Option.** Manejo de errores sin excepciones: \`Result<T, E>\`, \`Option<T>\`.

### 5. Cargo
El gestor de paquetes y build: \`cargo add serde\` para agregar dependencias.

## Ejemplo práctico

\`\`\`rust
use reqwest;
use serde_json::Value;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let data: Value = reqwest::Client::new()
        .get("https://api.github.com/users/octocat")
        .header("User-Agent", "rust")
        .send().await?
        .json().await?;
    println!("Usuario: {}", data["login"]);
    println!("Repos: {}", data["public_repos"]);
    Ok(())
}
\`\`\`

## Ecosistema principal

| Categoría | Herramientas |
|---|---|
| Web | Actix Web, Axum, Rocket |
| Async | Tokio, async-std |
| Serialización | serde, serde_json |
| CLI | clap, dialoguer |
| Testing | cargo test (integrado), proptest |

## Notas

- La curva de aprendizaje es empinada por el sistema de ownership, pero vale la pena.
- El compilador de Rust tiene los mejores mensajes de error de cualquier lenguaje.
- No tiene garbage collector: la memoria se gestiona en tiempo de compilación.`,

      en: `## What is Rust?

Rust is a **systems programming language** developed by **Mozilla** and released in 2015. It was designed to be safe, concurrent, and high-performance. Its **ownership** system eliminates memory errors at compile time without needing a garbage collector. It has been voted the **most loved language** on Stack Overflow for multiple consecutive years.

## What is it used for?

- **Systems programming.** C/C++ replacement with guaranteed memory safety.
- **WebAssembly.** Compilation to WASM for native performance in the browser.
- **CLI tools.** Fast and reliable command-line tools.
- **Web servers.** High-performance APIs with Actix Web or Axum.
- **Embedded systems.** Bare-metal programming without an operating system.
- **Blockchain.** Solana and other blockchain projects use Rust.

## How to get started

### 1. Install Rust
Use rustup: \`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\`. Verify with \`rustc --version\`.

### 2. Set up your editor
Visual Studio Code with rust-analyzer extension.

### 3. Your first program
Create a project with \`cargo new my-project\` and edit \`src/main.rs\`:

\`\`\`rust
fn main() {
    println!("Hello world");
}
\`\`\`

Run it with \`cargo run\`.

### 4. Core concepts

- **Ownership.** Each value has a single owner. When the owner leaves scope, memory is freed.
- **Borrowing.** Immutable (\`&x\`) or mutable (\`&mut x\`) references without transferring ownership.
- **Enums.** Algebraic types: \`enum Result { Ok(i32), Error(String) }\`.
- **Pattern matching.** Exhaustive \`match\`: all cases must be covered.
- **Traits.** Similar to interfaces: \`trait Greet { fn hello(&self) -> String; }\`.
- **Result and Option.** Error handling without exceptions: \`Result<T, E>\`, \`Option<T>\`.

### 5. Cargo
The package manager and build tool: \`cargo add serde\` to add dependencies.

## Practical example

\`\`\`rust
use reqwest;
use serde_json::Value;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let data: Value = reqwest::Client::new()
        .get("https://api.github.com/users/octocat")
        .header("User-Agent", "rust")
        .send().await?
        .json().await?;
    println!("User: {}", data["login"]);
    println!("Repos: {}", data["public_repos"]);
    Ok(())
}
\`\`\`

## Main ecosystem

| Category | Tools |
|---|---|
| Web | Actix Web, Axum, Rocket |
| Async | Tokio, async-std |
| Serialization | serde, serde_json |
| CLI | clap, dialoguer |
| Testing | cargo test (built-in), proptest |

## Notes

- The learning curve is steep due to the ownership system, but it's worth it.
- The Rust compiler has the best error messages of any language.
- No garbage collector: memory is managed at compile time.`,

      pt: `## O que é Rust?

Rust é uma **linguagem de programação de sistemas** desenvolvida pela **Mozilla** e lançada em 2015. Foi projetada para ser segura, concorrente e de alto desempenho. Seu sistema de **ownership** (propriedade) elimina erros de memória em tempo de compilação sem precisar de garbage collector. Foi eleita a **linguagem mais amada** no Stack Overflow por múltiplos anos consecutivos.

## Para que serve?

- **Programação de sistemas.** Substituto do C/C++ com segurança de memória garantida.
- **WebAssembly.** Compilação para WASM para desempenho nativo no navegador.
- **Ferramentas CLI.** Ferramentas de linha de comando rápidas e confiáveis.
- **Servidores web.** APIs de alto desempenho com Actix Web ou Axum.
- **Sistemas embarcados.** Programação bare-metal sem sistema operacional.
- **Blockchain.** Solana e outros projetos blockchain usam Rust.

## Como começar do zero

### 1. Instalar Rust
Use rustup: \`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\`. Verifique com \`rustc --version\`.

### 2. Configurar o editor
Visual Studio Code com a extensão rust-analyzer.

### 3. Seu primeiro programa
Crie um projeto com \`cargo new meu-projeto\` e edite \`src/main.rs\`:

\`\`\`rust
fn main() {
    println!("Olá mundo");
}
\`\`\`

Execute com \`cargo run\`.

### 4. Conceitos fundamentais

- **Ownership.** Cada valor tem um dono único. Quando o dono sai do escopo, a memória é liberada.
- **Borrowing.** Referências imutáveis (\`&x\`) ou mutáveis (\`&mut x\`) sem transferir propriedade.
- **Enums.** Tipos algébricos: \`enum Resultado { Ok(i32), Erro(String) }\`.
- **Pattern matching.** \`match\` exaustivo: todos os casos devem ser cobertos.
- **Traits.** Similar a interfaces: \`trait Saudar { fn ola(&self) -> String; }\`.
- **Result e Option.** Tratamento de erros sem exceções: \`Result<T, E>\`, \`Option<T>\`.

### 5. Cargo
O gerenciador de pacotes e build: \`cargo add serde\` para adicionar dependências.

## Exemplo prático

\`\`\`rust
use reqwest;
use serde_json::Value;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let data: Value = reqwest::Client::new()
        .get("https://api.github.com/users/octocat")
        .header("User-Agent", "rust")
        .send().await?
        .json().await?;
    println!("Usuário: {}", data["login"]);
    println!("Repos: {}", data["public_repos"]);
    Ok(())
}
\`\`\`

## Ecossistema principal

| Categoria | Ferramentas |
|---|---|
| Web | Actix Web, Axum, Rocket |
| Async | Tokio, async-std |
| Serialização | serde, serde_json |
| CLI | clap, dialoguer |
| Testing | cargo test (integrado), proptest |

## Notas

- A curva de aprendizado é íngreme pelo sistema de ownership, mas vale a pena.
- O compilador de Rust tem as melhores mensagens de erro de qualquer linguagem.
- Não tem garbage collector: a memória é gerenciada em tempo de compilação.`,
    },
  },
];

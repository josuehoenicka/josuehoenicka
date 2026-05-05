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
    area: 'Hardware',

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
    id: 4,
    slug: '4-traffic-light',
    area: 'Hardware',

    techs: ['Arduino', 'C++'],
    difficulty: 'easy',
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

    techs: ['Arduino', 'C++'],
    difficulty: 'easy',
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

    techs: ['Arduino', 'C++'],
    difficulty: 'easy',
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
];

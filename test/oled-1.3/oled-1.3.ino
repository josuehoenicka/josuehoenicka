/*
  1.3" OLED Display (SH1106, 128x64, I2C) - Arduino UNO demo

  Wiring (I2C):
    OLED VCC -> Arduino 5V  (module has onboard regulator; 3.3V also works)
    OLED GND -> Arduino GND
    OLED SCL -> Arduino A5  (SCL on UNO)
    OLED SDA -> Arduino A4  (SDA on UNO)

  Notes:
    - The 1.3" OLED uses the SH1106 driver (NOT SSD1306 like the 0.96").
      Using the SSD1306 library will show a shifted/garbled image.
    - Default I2C address is 0x3C.
    - Install "U8g2" library by oliver via the Arduino Library Manager.
*/

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
  display.drawStr(0, 14, "OLED 1.3\"");

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

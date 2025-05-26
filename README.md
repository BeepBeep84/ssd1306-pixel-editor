# ssd1306-pixel-editor
WYSIWYG Pixel placement for the ssd1306 using MicroPython

# SSD1306 Pixel Editor

This project provides a graphical interface to design pixel art for SSD1306 OLED displays using MicroPython.

🔗 [Blog post](https://blog.randomboo.com/ssd1306/)  
🔗 [Live demo](https://randomboo.com/ssd1306OLED_micropython/pixel_draw_convert.html)

## Features

- **Interactive grid**: 128×64 canvas
- **Pixel toggling**: Click to turn pixels on/off
- **Code generation**: Produces ready-to-paste MicroPython code
- **Clipboard copy**: Copy generated code with a button click

## Usage

Open `index.html` in your browser, draw, then click "Generate MicroPython Code".

## Output Example

```python
from machine import Pin, I2C
import ssd1306
i2c = I2C(-1, scl=Pin(##), sda=Pin(##))
display = ss1306.SSD1306_I2C(128, 64, i2c, 0x3c, False)

display.fill(0)
display.pixel(10, 20, 1)
display.show()

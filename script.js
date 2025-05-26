document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById('pixel-grid');
    const output = document.getElementById('output');
    const copyButton = document.getElementById('copy-code');

    // Create the grid
    for (let y = 0; y < 64; y++) {
        for (let x = 0; x < 128; x++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.dataset.x = x + 1;  // Adjust X to start from 1 instead of 0
            pixel.dataset.y = y + 1;  // Adjust Y to start from 1 instead of 0

            // Toggle pixel on click
            pixel.addEventListener('click', function () {
                pixel.classList.toggle('active');
            });

            grid.appendChild(pixel);
        }
    }

    // Generate MicroPython code
    document.getElementById('generate-code').addEventListener('click', function () {
        let micropythonCode = "from machine import Pin, I2C\nimport ssd1306\ni2c = I2C(-1, scl=Pin(##), sda=Pin(##))\ndisplay = ss1306.SSD1306_I2C(128, 64, i2c, 0x3c, False)\n\ndisplay.fill(0)\n";

        const pixels = document.querySelectorAll('.pixel');
        pixels.forEach(pixel => {
            if (pixel.classList.contains('active')) {
                const x = pixel.dataset.x;
                const y = pixel.dataset.y;
                micropythonCode += `display.pixel(${x}, ${y}, 1)\n`;
            }
        });

        micropythonCode += "display.show()\n";

        // Output the generated code to the textarea
        output.value = micropythonCode;

        // Adjust textarea height to fit content
        output.style.height = 'auto';
        output.style.height = (output.scrollHeight) + 'px';
    });

    // Copy code to clipboard
    copyButton.addEventListener('click', function () {
        output.select();
        document.execCommand("copy");
        alert("Code copied to clipboard!");
    });
});

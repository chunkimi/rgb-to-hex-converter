# RGB to Hex Color Conversion Tool

The RGB to Hex Color Conversion Tool allows users to adjust RGB values through numeric input or sliders to obtain the corresponding HEX color code.

[Live Lemo](https://chunkimi.github.io/rgb-to-hex-converter/)
![preview](https://raw.githubusercontent.com/chunkimi/rgb-to-hex-converter/refs/heads/main/assets/preview.png)

## Features
- **Dual Conversion Methods**: This tool offers two ways to adjust RGB values: numeric input fields and sliders.
- **Real-Time Color Preview**: When users modify the RGB values, the background color of the display updates instantly to reflect the current color, along with the corresponding HEX code.
- **Synchronized Controls**: Adjusting any RGB value updates the displays in both the input fields and slider sections (including numeric values and color code previews).

## How to Use

1. **Adjust RGB Values**:
   - Set the input fields or sliders for color conversion, including the respective R (Red), G (Green), and B (Blue) components.
   - You can change the color codes using either numeric input or by sliding the sliders (changes will only activate when the mouse is pressed and moved).

2. **View Color Changes**:
   - As the colors are adjusted, the preview box and color code value will update in real-time to display the selected color.
   - The background color of the display will instantly reflect the combination of the current RGB values and provide the HEX code.
   - The HEX code is displayed in the specified box in the format `#RRGGBB`, where RR, GG, and BB represent the hexadecimal values of the red, green, and blue components.

3. **Synchronized Controls**:
   - Changing any control (input field or slider) will reflect the same changes in the corresponding linked control, ensuring consistency.
   - The slider movements will only activate changes when the mouse is pressed and moved.

4. **Input Validation**:
   - If an invalid value is entered (such as a decimal or a number out of range), a prompt will alert the user to correct it, and the color will reset to black.


---

## Installation

1. **Clone the repository:**
   Clone the project repository to your local machine:
   ```bash
   git clone https://github.com/chunkimi/rgb-to-hex-converter.git
   ```

2. **Navigate to the project directory:**
   Change into the project directory:
   ```bash
   cd rgb-to-hex-converter
   ```

3. **Open the HTML file:**
   Open `index.html` using your default browser:
   - On macOS:
     ```bash
     open index.html
     ```
   - On Windows:
     ```bash
     start index.html
     ```

4. **View the application:**
   The page should load in your browser, and you can start using the application.
---

## 3D Parallax Tilt Card Effect ✨

A simple and cool demonstration of a 3D parallax tilting card effect created using the **Tilt.js** jQuery plugin. This project shows how to create layers that appear to float at different depths, reacting to mouse movement.

---

### **[🚀 View the Live Demo Here!](https://raunakongithub.github.io/parallax-effect-using-tilt-js/)**

---

## 📸 Preview

Here's what the effect looks like. Notice how the inner elements seem to float above the background card.

[![image.png](https://i.postimg.cc/J0g6fHq6/image.png)](https://postimg.cc/FkyVcRw3)
*The final layered parallax effect.*

[![image.png](https://i.postimg.cc/Wb86qkrQ/image.png)](https://postimg.cc/svBZt1Tc)
*The concept: using `translateZ` to push elements forward.*

---

## 🛠️ Libraries & Technologies Used

* **HTML5**: For the basic structure of the card and its layers.
* **CSS3**: For styling, positioning, and creating the 3D space.
* **jQuery**: Tilt.js is a jQuery plugin, so the core jQuery library is required.
* **[Tilt.js](https://gijsroge.github.io/tilt.js/)**: The star of the show! A lightweight JavaScript library for creating this tilting effect.

---

## 🤔 How It Works: The Core Concept

The entire effect is based on one simple idea: creating a **3D space** in CSS and placing items at different **depths** within it.

Think of it like looking through a window. The window frame is close to you, the tree outside is further away, and the clouds are very far away. When you move your head (the "tilt"), they all shift, but the closer items shift more. That's parallax! We do the same thing with code.

1.  **Create a 3D World (`transform-style: preserve-3d`)**: We first tell a container element (our main `div`) that its children should exist in a 3D space, not be flattened onto the screen. This is the most important step.

2.  **Place Things at Different Depths (`transform: translateZ(...)`)**: We take the inner elements (the white square, the text) and push them "forward" towards the viewer using `translateZ()`.
    * `translateZ(0px)` is the baseline (the background).
    * `translateZ(60px)` pushes the white square 60px closer to you.
    * `translateZ(120px)` pushes the text even closer.

3.  **Activate the Magic (Tilt.js)**: The Tilt.js library tracks the mouse position over the main container and automatically applies the `rotateX` and `rotateY` transforms. Because we created a 3D world, all the children inside react to this tilt according to their depth, creating the smooth parallax effect.

[![image.png](https://i.postimg.cc/8CM7W29j/image.png)](https://postimg.cc/PLffnRtj)
*A look at the simple HTML structure.*

---

## 💻 Code Breakdown

Here are the key pieces of code that make it all work.

### 1. The HTML (`index.html`)

The structure is a parent container with several children inside that will become our layers.

```html
<div class="your-element" data-tilt>

    <div class="box-background"></div>

    <div class="floating-square"></div>
    
    <h3 class="floating-text">Parallax</h3>

</div>

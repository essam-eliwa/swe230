'use strict';
let isDrawing = false;
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// Define an array of colors
const colors = ['Black','Gray','White','Red', 'Green', 'Cyan','Blue','Aliceblue',
 'Yellow', 'Orange', 'Purple'];

// Get the select element by its ID
const colorSelect = document.getElementById('color-select');

// Loop through the colors array and create an option element for each color
for (let i = 0; i < colors.length; i++) {
    const colorOption = document.createElement('option');
    colorOption.value = colors[i].toLowerCase();
    colorOption.text = colors[i];
    colorSelect.add(colorOption);
}

//set initial fill style
c.fillStyle = colors[0];

//drawing function
function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}

colorSelect.addEventListener('change',(event) => {
    c.fillStyle = colorSelect.value;
    document.querySelector('#selected-color').style.background = colorSelect.value;

}
    );

canvas.addEventListener("mousemove", (event) =>
  draw(event.offsetX, event.offsetY)
);
canvas.addEventListener("mousedown", () => {(isDrawing = true);console.log(isDrawing);});
canvas.addEventListener("mouseup", () => (isDrawing = false));

document
  .querySelector("a")
  .addEventListener(
    "click",
    (event) => (event.target.href = canvas.toDataURL())
  );

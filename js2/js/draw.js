'use strict';
let isDrawing = false;
let color = 'cyan';
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const select = document.querySelector("select");
c.fillStyle = color;

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}

select.addEventListener('change',(event) => {(c.fillStyle = select.value);}
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

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let selectedShape = null;

canvas.addEventListener("click", function (event) {
  if (selectedShape) {
    const mouseX = event.clientX - canvas.getBoundingClientRect().left;
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;

    ctx.fillStyle = "blue"; // Color of the shape
    switch (selectedShape) {
      case "rectangle":
        ctx.fillRect(mouseX, mouseY, 50, 50); // Draw a rectangle
        break;
      case "circle":
        ctx.beginPath();
        ctx.arc(mouseX + 25, mouseY + 25, 25, 0, Math.PI * 2); // Draw a circle
        ctx.fill();
        break;
      case "triangle":
        ctx.beginPath();
        ctx.moveTo(mouseX + 25, mouseY);
        ctx.lineTo(mouseX, mouseY + 50);
        ctx.lineTo(mouseX + 50, mouseY + 50);
        ctx.closePath();
        ctx.fill(); // Draw a triangle
        break;
    }
  }
});

document.querySelectorAll(".shape").forEach((shape) => {
  shape.addEventListener("click", function () {
    selectedShape = this.id;
  });
});

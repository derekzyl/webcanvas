import "./style.css";
// function rect(canvas: CanvasRect) {

//   canvas.fillRect()

// }

interface color {
  red: number;
  green: number;
  blue: number;
  opacity?: number;
}
interface rectShape {
  x: number;
  y: number;
  width: number;
  height: number;
}

function draw() {
  const canvas = document.querySelector<HTMLCanvasElement>("#app");

  if (canvas?.getContext) {
    const context = canvas?.getContext("2d");

    function fill_rect(color: color, shape: rectShape, child?: any) {
      const cool_color = `rgb(${color.red},${color.green},${color.blue})`;
      context!.fillStyle = cool_color;
      context!.fillRect(shape.x, shape.y, shape.width, shape.height);
    }
    function clear_rect(shape: rectShape) {
      context!.clearRect(shape.x, shape.y, shape.width, shape.height);
    }
    function stroke_rect(color: color, shape: rectShape) {
      const cool_color = `rgb(${color.red},${color.green},${color.blue})`;
      context!.strokeStyle = cool_color;
      context!.strokeRect(shape.x, shape.y, shape.width, shape.height);
    }
    fill_rect(
      { red: 255, green: 255, blue: 0 },
      { x: 50, y: 50, width: 100, height: 100 }
    );
    clear_rect({ x: 60, y: 60, width: 80, height: 80 });
    context?.beginPath();
    fill_rect(
      { red: 255, green: 0, blue: 100 },
      { x: 120, y: 120, width: 100, height: 100 }
    );

    context?.beginPath();
    context?.moveTo(250, 300);
    context?.lineTo(300, 350);
    context?.lineTo(250, 350);
    context?.lineTo(250, 300);
    context?.fill();
  } else {
    canvas!.innerHTML! = /*html*/ `
  <div>oops unsupported</div>  
    `;
  }
}
draw();

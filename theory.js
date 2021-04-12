const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//         // R E C T A N G L E S //

// // fillRect()
// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(200, 20, 150, 100);
// // strokeRect()
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect(100, 200, 150, 100);
// // clearRect()
// ctx.clearRect(25, 25, 130, 80);

//         // T E X T S //

// //fillText();
// ctx.fillStyle = "purple"
// ctx.font = "30px Arial";
// ctx.fillText('Hello World', 400, 50);
// //fillText();
// ctx.lineWidth = "1";
// ctx.strokeStyle = "purple"
// ctx.font = "60px Arial";
// ctx.strokeText('Hello World', 400, 150);


        // P A T H S //

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 150);
// // ctx.lineTo(50, 50);
// ctx.closePath();
// ctx.fillStyle = 'green';
// ctx.strokeStyle = 'green';
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

const centerX = canvas.width / 2 ;
const centerY = canvas.height / 2;

// //Arc (circles)
// //POKEBALL
// ctx.beginPath();
// ctx.arc(centerX, centerY, 200, 0, Math.PI, true);
// ctx.lineTo(centerX - 50, centerY);
// ctx.arc(centerX, centerY, 50, Math.PI, 2 * Math.PI, false);
// ctx.lineTo(centerX + 200, centerY);
// ctx.fillStyle = 'red';
// ctx.fill();
// ctx.strokeStyle = 'black';
// ctx.lineWidth = "5";
// ctx.stroke();
// ctx.arc(centerX, centerY, 200, 0, Math.PI, false);
// ctx.lineTo(centerX - 50, centerY);
// ctx.arc(centerX, centerY, 50, Math.PI, 2 * Math.PI, true);
// ctx.lineTo(centerX + 200, centerY);
// ctx.stroke();
// ctx.closePath();

                  // Animation //

const circle = {
  x: 200,
  y: 200,
  size: 30,
  dx: 5,
  dy: 3,
}

function drawCircle(X, Y)
{
  circle.x = X;
  circle.y = Y;
  ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
ctx.fillStyle = 'teal';
  ctx.fill();
  ctx.closePath();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the entire canvas
}

// function update()
// {
//   clearCanvas();
//   drawCircle();
//   if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
//     circle.dx *= -1;
//   }
//   if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
//     circle.dy *= -1;
//   }

//   circle.x += circle.dx;
//   circle.y += circle.dy;
//   // console.log('asd');
//   requestAnimationFrame(update);
// }



let is_drawing = false;
function start(e)
{
  is_drawing = true;
  let mX = e.clientX - canvas.offsetLeft;
  let mY = e.clientY - canvas.offsetTop;
  ctx.moveTo(mX, mY);
}
function draw(e)
{
  
  if (is_drawing) {

    let mX = e.clientX - canvas.offsetLeft;
    let mY = e.clientY - canvas.offsetTop;
    // ctx.beginPath();
    ctx.lineTo(mX, mY);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = "5";
    ctx.stroke();
    // ctx.closePath();
    // drawCircle(mX,mY);
  }
}

function stop(e)
{
  is_drawing = false;
}

// update();


document.addEventListener('mousedown', start, false);
document.addEventListener('mousemove', draw, false);
document.addEventListener('mouseup', stop, false);





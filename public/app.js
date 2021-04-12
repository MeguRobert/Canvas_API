const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
init();


const circle = {
  x: 200,
  y: 200,
  size: 2,
  dx: 5,
  dy: 3,
}

function drawCircle(X, Y)
{
  circle.x = X;
  circle.y = Y;
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
  ctx.fillStyle = 'coral';
  ctx.fill();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the entire canvas
}

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
    ctx.lineTo(mX, mY);
    // drawCircle(mX, mY);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = "1";
    ctx.stroke();
  }
}

function stop(e)
{
  is_drawing = false;
}

document.addEventListener('mousedown', start, false);
document.addEventListener('mousemove', draw, false);
document.addEventListener('mouseup', stop, false);

window.addEventListener('resize', init, false); //responsivitiy



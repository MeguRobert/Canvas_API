const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
init();

let size = 10;
let isdrawing = false;
let color = 'black';

function fill(color) {
  ctx.fillStyle = color;
  ctx.fill();
}

function setSize(newsize) {
  size = newsize;
}
function setColor(newcolor) {
  color = newcolor;
}
function stroke(c)
{
  color = c;
  ctx.strokeStyle = color;
  ctx.stroke();
}

function line(X, Y)
{
  ctx.lineCap = 'round';
  ctx.lineWidth = size;
  ctx.lineTo(X, Y);
}
function circle(X, Y)
{
  ctx.moveTo(X, Y);
  ctx.arc(X, Y, size, 0, Math.PI * 2);
}

function start(e) {
  isdrawing = true;
  ctx.beginPath();
  draw(e);
}
function stop(e) {
  isdrawing = false;
}
function draw(e)
{
  if (isdrawing)
  {
    drawing(e.clientX, e.clientY);
  }
}

function drawing(x,y)
{
    setSize(10);
    line(x,y);
    stroke(color);
}


document.addEventListener('mousedown', start, false); //click
document.addEventListener('mousemove', draw, false);  //
document.addEventListener('mouseup', stop, false);

window.addEventListener('resize', init, false); //responsivitiy



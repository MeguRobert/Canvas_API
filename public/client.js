var socket;

function setup() {
  socket = io.connect('http://localhost:3999');
  socket.on('mouse', newDrawing);
}
setup();



function clientDrawing(e)
{
  var data = {
    x: e.clientX,
    y: e.clientY,
    clientisdrawing: isdrawing,
    clientcolor: color
  }
  socket.emit('mouse', data);  //send to server
}
function newDrawing(data)
{
  if (data.clientisdrawing) {
      setColor(data.color);
      drawing(data.x, data.y);
  }
  else
  {
    ctx.beginPath();
  }
}
document.addEventListener('mousemove', clientDrawing, false);
document.addEventListener('mousedown', start , false);
document.addEventListener('mouseup', stop, false);

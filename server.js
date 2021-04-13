//load modules
const express = require('express');
const app = express();
const port = 3999; //running
const server = app.listen(port);
const socket = require('socket.io');//conector
const io = socket(server); //connect with server

console.log("My server is running ");

io.sockets.on('connection', newConnection);
function newConnection(socket) {
  console.log('new connection: ' + socket.id);
  socket.on('mouse', mouseMsg); //if get a message, trigger the function

  function mouseMsg(data)
  {
    //send response for clients
    socket.broadcast.emit('mouse', data); // DOES NOT comes back to the client who sent it
    //io.sockets.emit('mouse', data);     //the data comes back to the client who sent it
    console.log(data);
  }
}

//serve static files
app.use(express.static('public'));
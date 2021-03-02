const app = require("./app");
const socket = require('socket.io');
const cors = require('cors');

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = 5555;



const server = app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

const io = socket(server, {
  cors: {
    origin: 'http://localhost:3000'
  }
});

io.on('connection', (socket) => {
  console.log('there is a new connection');
  console.log('socket id', socket.id);

  socket.on('disconnect', () => {
    console.log('this socket disconnected')
  })
  socket.on('new-message', (data) => {
    console.log('data: ', data)
    // send that message to all the other clients
    io.emit('message', data)
  })
})
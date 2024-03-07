import { Server } from "socket.io";

const io = new Server(3000, { cors: { origin: '*' } });


io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('chat_message', (msg) => {
    console.log('message: ' + msg);
    socket.broadcast.emit('chat_message', msg);
  });
});


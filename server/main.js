import { Server } from "socket.io";

const io = new Server(3000, { cors: { origin: '*' } });

let message_count = 0;

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('chat_message', (msg) => {
    console.log('message: ' + msg);
    let parsed_msg = JSON.parse(msg);
    message_count++;
    socket.broadcast.emit('chat_message', JSON.stringify({"message":parsed_msg.message,"message_index":message_count,"name":parsed_msg.name}));
  });
});


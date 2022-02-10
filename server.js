const io = require('socket.io')(3000);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
const mongoose = require('mongoose')
const mongooDB = 'mongodb+srv://message_app:qwerty098@cluster0.5nzoj.mongodb.net/message-app?retryWrites=true&w=majority'
mongoose.connect(mongoDB).then(()=>{
    console.log('connected')
})
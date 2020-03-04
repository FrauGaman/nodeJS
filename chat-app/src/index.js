const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3001;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));
// let count = 0;

//server (emit) -> client (recieve) - countUpdated
//server (emit) -> server (recieve) - increment

io.on('connection', (socket) => {
    console.log('new WebSocket Connection');

    // socket.emit('countUpdated', count);
    //
    // socket.on('increment', () => {
    //     count++;
    //     //emits event to a single connection
    //     // socket.emit('countUpdated', count);
    //
    //     //emits event to each connection
    //     io.emit('countUpdated', count);
    // })

    socket.emit('message', 'Welcome!');
    socket.broadcast.emit('message', 'A new user has joined');

    socket.on('sendMessage', message => {
        console.log(message);
        io.emit('message', message);
    });

    socket.on('disconnect', () => {
       io.emit('message', 'User has left');
    })


});

server.listen(port, () => console.log(`Server is up on port ${port}`));

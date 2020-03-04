const socket = io();

// socket.on('countUpdated', (count) => {
//     console.log('Count has been updated', count);
// });
//
// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('Clicked');
//     socket.emit('increment')
// });

const messageForm = document.querySelector('#message-form');

socket.on('message', (message) => {
    console.log(message);
});

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    socket.emit('sendMessage', e.target.elements.message.value);
});

document.querySelector('#send-location').addEventListener('click', () => {

});
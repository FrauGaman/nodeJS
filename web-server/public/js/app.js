console.log('Client side JS file is loaded');

// fetch('http://puzzle.mead.io/puzzle').then((res) => {
//    res.json().then((data) => {
//        console.log(data)
//    })
// });

// fetch('http://localhost:3000/weather?address=Boston')
// .then((res) => {
//     res.json()
//         .then(data => {
//             if (data.error) {
//                 console.log(data.error);
//             } else {
//                 console.log(data)
//             }
//         })
// });

const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// messageOne.textContent = 'From JS';

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch(`http://localhost:3000/weather?address=${searchElement.value}`)
        .then((res) => {
            res.json()
                .then(data => {
                    if (data.error) {
                        messageOne.textContent = data.error;
                    } else {
                        messageOne.textContent = data.location;
                        messageTwo.textContent = `Temperature: ${data.forecast.temperature}, PrecipProbability: ${data.forecast.precipProbability}`;
                    }
                })
        });
});
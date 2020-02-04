const request = require('request');

const url = 'https://api.darksky.net/forecast/3f0b3a15989f2ffab4cc663760d9db2e/37.8267,-122.4233';
request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data)
});
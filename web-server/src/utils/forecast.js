const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/3f0b3a15989f2ffab4cc663760d9db2e/${latitude}, ${longitude}`;
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service', undefined);
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            // console.log(body.daily.data[0].summary);
            callback(undefined, `${body.daily.data[0].summary}. It's currently ${body.currently.temperature} degrees out. This high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
};

module.exports = forecast;

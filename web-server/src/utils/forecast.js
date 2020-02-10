const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/3f0b3a15989f2ffab4cc663760d9db2e/${latitude}, ${longitude}`;
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service', undefined);
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, {
                temperature: body.currently.temperature,
                precipProbability: body.currently.precipProbability,
            })
        }
    })
};

module.exports = forecast;

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// geocode('Boston', (error, data) => {
//     console.log('Error ', error);
//     console.log('Data ', data);
// });
//
// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);
// });

const address =  process.argv[2];
if (!address) {
    console.log('Please, provide a message!');
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error);
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        });
    });
}

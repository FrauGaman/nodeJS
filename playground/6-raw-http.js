const https = require('https');
const url = `https://api.darksky.net/forecast/3f0b3a15989f2ffab4cc663760d9db2e/40,-75`;

const request  = https.request(url, (response) => {
    let data = '';

   response.on('data', (chunk) => {
       data = data + chunk.toString();
   });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);

    });
});

request.on('error', () => {
    console.log('An error', error);
});

request.end();
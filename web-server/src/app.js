const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('../src/utils/geocode');
const forecast = require('../src/utils/forecast');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();
const port = process.env.PORT || 3000;

//define path for express config
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');


//setup handlebars engine and views location (default: views -> templates in our case)
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

//setup static directory to serve
app.use(express.static(publicDirectory));

app.get('', (req, res) => {
   res.render('index', {
       title: 'Weather',
       name: 'Margarita Gaman'
   })
});

app.get('/about', (req, res) => {
   res.render('about', {
       title: 'About me',
       name: 'Margarita Gaman'
   })
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is some helpful text',
        name: 'Margarita Gaman'
    })
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({
                error,
            })
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({
                    error,
                })
            }

            res.send({
                location,
                forecast: forecastData,
                address: req.query.address,
            });
        });
    });
});

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query);
    res.send({
        products: []
    })
});

app.get('/help/*', (req, res) => {
    res.render('NotFound', {
        title: '404',
        errorMessage: 'Help article not found',
        name: 'Margarita Gaman'
    })
});

app.get('*', (req, res) => {
    res.render('NotFound', {
        title: '404',
        errorMessage: 'Page not found',
        name: 'Margarita Gaman'
    })
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});

const path = require('path');
const express = require('express');
const hbs = require('hbs');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();

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
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
});

app.get('/help/*', (req, res) => {
    res.render('NotFoundHelp', {
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

app.listen(3000, () => {
    console.log('Server is up on port 3000')
});
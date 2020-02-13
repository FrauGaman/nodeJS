require('../src/db/mongoose');
const User = require('../src/models/user');

//5e43cccf1d57763a5a43d18b

User.findByIdAndUpdate('5e43cccf1d57763a5a43d18b', {age: 1})
    .then(user => {
        console.log(user);
        return User.countDocuments({ age: 1 })
    })
    .then(result => {
        console.log(result);
    })
    .catch(e => {
        console.log(e);
    });
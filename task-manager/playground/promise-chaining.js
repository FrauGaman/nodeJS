require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5e43cccf1d57763a5a43d18b', {age: 1})
//     .then(user => {
//         console.log(user);
//         return User.countDocuments({ age: 1 })
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(e => {
//         console.log(e);
//     });

const updateAgeAndCount = async (id, newAge) => {
    await User.findByIdAndUpdate(id, { age: newAge });
    const count = await User.countDocuments({ age: newAge });
    return count;
};

updateAgeAndCount('5e43cccf1d57763a5a43d18b', 5)
    .then(count => {
        console.log(count);
    })
    .catch(e => {
        console.log(e);
    });

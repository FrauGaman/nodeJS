require('mongoose');
const Task = require('../src/models/task');

Task.deleteOne({ _id: '5e44d683beacbb351eae7a04' })
.then(tasks => {
    console.log(tasks);
    // return Task.countDocuments({ completed: false })
})
// .then(result => {
//     console.log(result);
// })
// .catch(e => {
//     console.log(e);
// });
require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5e44d50c5dbd7033efaed364')
//     .then(task => {
//         console.log(task);
//         return Task.countDocuments({ completed: false })
//     })
//     .then(result => console.log(result))
//     .catch(e => console.log(e));

const deleteTaskAndCount = async (id, completed) => {
    await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed });
    return count;
};

deleteTaskAndCount('5e43da89339eb94041465fa7', false)
    .then(res => console.log(res))
    .catch(e => console.log(e));

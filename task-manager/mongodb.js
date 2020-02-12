const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect database');
    }

    const db = client.db(databaseName);

    //Create data
    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 30
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //
    //     console.log(result.ops);
    // });
    //
    // db.collection('users').insertMany([
    //     {
    //     name: 'Jen',
    //     age: 28
    // }, {
    //     name: 'Gunther',
    //     age: 27
    // }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }
    //
    //     console.log(result.ops)
    // });
    //
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Task 1',
    //         completed: true,
    //     },
    //     {
    //         description: 'Task 2',
    //         completed: true,
    //     },
    //     {
    //         description: 'Task 3',
    //         completed: false,
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }
    //
    //     console.log(result.ops);
    // })

    // Read data
    // db.collection('users').findOne({ _id: new ObjectID('5e4370af116a3f1d9a43ce1c') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }
    //
    //     console.log(user)
    // });
    //
    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // });
    //
    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // });
    //
    // db.collection('tasks').findOne(({ _id: new ObjectID('5e4369f7fd041c1a0e76e0d5') }), (error, task) => {
    //     console.log(task)
    // });
    //
    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // });

    //Update data
    // db.collection('users').updateOne({
    //     _id: new ObjectID('5e4370af116a3f1d9a43ce1c')
    // }, {
    //     // $set: {
    //     //     name: 'Mike'
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // })
    //     .then((res) => {console.log(res)})
    //     .catch((error) => {
    //     console.log(error);
    // });
    //
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // })
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })

    //Delete data
    // db.collection('tasks').deleteOne({
    //     _id: new ObjectID('5e4369f7fd041c1a0e76e0d5')
    // })
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });
    //
    // db.collection('users').deleteMany({
    //     age: 27
    // })
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })


});
const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3001;

//____________________________

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disable')
//     } else {
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!');
// });


//____________________________
//how to upload the file
//cb - callback
// const multer = require('multer');
// const upload = multer({
//    dest: 'images',
//     limits: {
//         fileSize: 1000000 //1Mb
//     },
//     fileFilter(req, file, cb) {
//        // if (!file.originalname.endsWith('.pdf')) {
//        //     return cb(new Error('Please upload PDF'))
//        // }
//
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload Word document'))
//         }
//
//         //accept the upload
//         cb(undefined, true);
//
//        // cb(new Error('File must be a PDF'));
//        // cb(undefined, true);
//        // cb(undefined, false);
//     }
// });

// not beautiful error
// app.post('/upload', upload.single('upload'), (req, res) => {
//    res.send()
// });

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// };

//beautiful error
// app.post('/upload', upload.single('upload'), (req, res) => {
//    res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// });

//____________________________

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// without middleware: new request -> run route handler
//
// with middleware: new request -> do something -> run route handler

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

//hash password example
// const bcrypt = require('bcryptjs');
//
// const myFunction = async() => {
//     const password = 'Red12345!';
//
//     //create hash
//     const hashedPassword = await bcrypt.hash(password, 8);
//
//     console.log(password);
//     console.log(hashedPassword);
//
//     //match new hash of our password and hash that saved in database
//     const isMatch = await bcrypt.compare('Red12345!', hashedPassword);
//     console.log(isMatch);
// };
//
// myFunction();

//jwt example
// const jwt = require('jsonwebtoken');
// const myFunction = async () => {
//     //return auth token
//     const token = jwt.sign({ _id: 'abc13' }, 'thisissomekey', { expiresIn: '7days' });
//     console.log(token);
//
//     const data = jwt.verify(token, 'thisissomekey');
//     console.log(data);
// };
//
// myFunction();

//what is doing userSchema.methods.toJSON (from models)
// const pet = {
//     name: 'Cat'
// };
//
// pet.toJSON = function() {
//     return {};
// };
//
// console.log(JSON.stringify(pet));

//add relationships between models
// const Task = require('./models/task');
// const User = require('./models/user');
// const main = async () => {
//     //relationships Task -> User
//     // const task = await Task.findById('5e588a8f29b06a14341a11af');
//     // await task.populate('owner').execPopulate();
//     // console.log(task.owner);
//
    //relationships User -> Task
    // const user = await User.findById('5e588a8329b06a14341a11ad');
    // await user.populate('tasks').execPopulate();
    // console.log(user.tasks);
// };
//
// main();

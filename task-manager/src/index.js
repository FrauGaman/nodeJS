const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3001;

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

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//
// without middleware: new request -> run route handler
//
// with middleware: new request -> do something -> run route handler

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
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

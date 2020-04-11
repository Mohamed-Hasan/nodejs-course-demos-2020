const express = require('express');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/bloggingApplication'

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) return console.log("sucessfully connected to db")
    console.log(err)
})

const app = express();

// /users/   ==> /
// /users/123 ==> /123

//  a request

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))
// app.use
app.use((req, res, next) => {
    console.log(`${new Date()} - ${req.method} - ${req.url}`)
    // end response
    // call next()
    // throw new Error("error happened")
    // next(new Error("error happened"))
    next()
})

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})


app.listen(PORT, (err) => {
    if (!err) return console.log(`started server on port ${PORT}`)
})

// practice during lecture
// create new folder
// npm init
// create project architecture
// create entry point 'index.js'
// install express & mongoose
// create express app and listen to requests
// create user router & posts router and attach all restful apis as explained '5 routes'
// create mongoose connection
// register builtin express middleware that parses request body  express.json()
// register an application level middleware that logs all incoming request "method, url, date time"
// create model for each resourec 'user, post'
// implement crud operations inside routes
// do not forget to join between user and posts models from posts model only
// when fecthing all posts or one post, populate author(s)
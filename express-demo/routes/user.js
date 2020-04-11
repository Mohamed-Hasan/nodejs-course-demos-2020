const express = require('express');
const UserModel = require('../models/user');

const router = express.Router();

router.use((req, res, next) => {
    console.log(`${new Date()} - ${req.method} - ${req.url}`)
    // end response
    // call next()
    next()
})

router.get('/', (req, res, next) => {
    // debugger;
    // res.send("getting users")
    UserModel.find({}, (err, users) => {
        if (!err) return res.json(users)
        res.json({
            code: 'DATABASE_ERROR'
        })
    })
})

// router.get('/', (req, res, next) => {
//     res.send('in the second route handler')
// })

router.get("/:id", (req, res) => {
    const id = req.params.id
    res.send(`listing user with id = ${id} and query string params = ${JSON.stringify(req.query)}`)
})

router.post('/', (req, res) => {
    console.log(req.body)
    const userData = req.body;
    const user = new UserModel(userData)
    const fullName = user.getFullName()
    console.log(fullName);
    user.save((err, user) => {
        if (!err) return res.json(user);
        res.json({
            code: 'DATABASE_ERROR'
        })
    })
    // res.send("creating a user")
})

router.patch('/:id', (req, res) => {
    res.send(`editing a user with id = ${req.params.id}`)
})

router.delete('/:userId', (req, res) => {
    res.send(`deleting a user with id = ${req.params.userId}`)
})


module.exports = router;
const express = require('express')
const PostModel = require('../models/post')

const router = express.Router()

router.get('/', (req, res) => {
    debugger;
    res.send("listing all post")
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    PostModel.findById(id).populate('author').exec((err, post) => {
        res.json(post)
    })
    // res.send(`listing post with id = ${id} and query string params = ${JSON.stringify(req.query)}`)
})

router.post('/', (req, res) => {
    const postData = req.body
    const post = new PostModel(postData)
    post.save((err, post) => {
        res.json(post)
    })
    // res.send("creating a post")
})

router.patch('/:id', (req, res) => {
    res.send(`editing a post with id = ${req.params.id}`)
})

router.delete('/:postId', (req, res) => {
    res.send(`deleting a post with id = ${req.params.userId}`)
})


module.exports = router;



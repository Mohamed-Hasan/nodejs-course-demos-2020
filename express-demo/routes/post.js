const express = require('express')
const PostModel = require('../models/post')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("listing all post")
})

router.get("/:id", async (req, res, next) => {
    const id = req.params.id
    try {
        const post = await PostModel.findById(id).populate('author')
        res.json(post)
    } catch (err) {
        next("error happened")
    }
    // res.send(`listing post with id = ${id} and query string params = ${JSON.stringify(req.query)}`)
})

router.post('/', async (req, res, next) => {
    const postData = req.body
    const post = new PostModel(postData)
    const postDoc = await post.save()
    // res.send("creating a post")
})

router.patch('/:id', (req, res) => {
    res.send(`editing a post with id = ${req.params.id}`)
})

router.delete('/:postId', (req, res) => {
    res.send(`deleting a post with id = ${req.params.userId}`)
})


module.exports = router;




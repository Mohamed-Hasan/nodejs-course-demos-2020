const mongoose = require('mongoose');


const postsSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})


const PostModel = mongoose.model("post", postsSchema)

module.exports = PostModel;
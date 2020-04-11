const mongoose = require('mongoose');
const PostModel = require('./post')

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, minlength: 4, maxlength: 15 },
    lastName: { type: String, required: true, minlength: 4, maxlength: 15 },
    email: { type: String, required: true, unique: true, match: /.+@.+\.+/ },
    dob: Date,
    // posts: [{ type: mongoose.Schema.Types.ObjectId }]
})

userSchema.methods.getFullName = function () {
    return this.firstName + ' ' + this.lastName
}

userSchema.statics.getUsersByFullName = function (fullName, cb) {
    const [firstName, lastName] = fullName.split(" ");
    this.find({ firstName: firstName, lastName: lastName }, cb)
}

// userSchema.pre()
userSchema.post('remove', function (user, next) {
    PostModel.deleteMany({ author: user._id }, (err) => {
        next()
    })
})

const UserModel = mongoose.model('user', userSchema)


UserModel.getUsersByFullName('mohamed hassan', (err, users) => {
    console.log(users);
})

module.exports = UserModel;
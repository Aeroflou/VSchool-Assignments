const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema ({
    //user posting the comment
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    //the actual comment
    content: {
        type: String,
        required: true
    },
    //the issue that was commented on
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)
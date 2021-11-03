const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voteSchema = new Schema ({
    upDownVotes: {
        //true: upvote, false: downvote
        type: Boolean,
        required: true
    },
    //the issue that was voted upon
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    },
    //user that voted
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Vote", voteSchema)
const mongoose = require("mongoose")
Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: String,
    living: {
        type: Boolean,
        required: true
    },
    bountyPrice: {
        type: Number,
        required: true
    },
    type: String
})

module.exports = mongoose.model("Bounty", bountySchema)
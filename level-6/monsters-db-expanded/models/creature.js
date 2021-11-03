const mongoose = require('mongoose')
const Schema = mongoose.Schema

const creatureSchema = new Schema ({
    species: {
        type: String,
        required: true
    },
    isHostile: {
        type: Boolean,
        required: true
    },
    shortDesc: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Creature", creatureSchema)
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    store: {
        type: String,
        required: true
    },
    itemTotal: {
        type: Number,
        required: true
    },
    lastShipmentRecievedDate: String,
    lastShipmentSentDate: String
})

module.exports = mongoose.model("Inventory", inventorySchema)
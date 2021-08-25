const express = require("express")
const app = express()
const mongoose = require("mongoose")



// Middleware
app.use("/", express.json())

// Mongoose Connect
mongoose.connect("mongodb://localhost:27017/bountiesdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Succesfully connected to the Databse")   
)

// Routes
app.use("/bounties", require("./routes/bountyRouter"))

app.listen("7000", () => {
    console.log("The bounty list has been initialized on server 7000...")
})
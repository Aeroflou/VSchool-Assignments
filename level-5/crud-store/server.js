const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/crud-store-db",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    (() => console.log("Connected to database"))
)

app.use("/inventories", require("./routes/inventoryRouter"))

app.use("/", express.json())
/*app.use("/", (err,req,res,next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})*/

app.listen("9000", () => {
    console.log("Server started on port 9000")
})
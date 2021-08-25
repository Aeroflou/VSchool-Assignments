const express = require("express")
const app = express()
const {uuid: v4} = require("uuid")

app.use("/", express.json())
app.use("/interceptions", require("./routes/interceptionsRouter"))

app.get("/interceptions", (req, res) => {
    res.send(req.body)
})

app.listen(9000, () => {
    console.log("Server... Something... I Dunno 9000?")
})
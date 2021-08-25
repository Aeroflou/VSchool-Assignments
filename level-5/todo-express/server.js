const express = require("express")
const app = express()

app.use("/", express.json())
app.use("/todos", require("./routes/todoRouter"))

app.listen(9000, () => {
    console.log("Server. 9000. Ya Know By Now")
})
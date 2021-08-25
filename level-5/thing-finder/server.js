const express = require("express")
const app = express()

app.use("/", express.json())
app.use("/inventory", require("./routes/inventoryRouter"))

app.listen(8000, () => {
    console.log("The server has opened on port 8000")
})
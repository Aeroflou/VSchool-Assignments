const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

//DB Connect
mongoose.connect("mongodb://localhost:27017/creaturesdbplus", 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false 
    },
    () => console.log("Connected to the DB")
)

//Routes
app.use("/auth", require('./routes/authRouter'))
app.use("/api", expressJwt({
    secret: process.env.SECRET, 
    algorithms: ["HS256"]
}))
app.use("/api/creatures", require('./routes/creatureRouter'))

//Error Handler
app.use((err,req,res,next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

//Server Start
app.listen(9000, () => console.log("There are yet more discoveries to be made on port 9000"))
const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

//DB Connect
mongoose.connect("mongodb://localhost:27017/rockthevote", 
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
app.use("/api/issues", require('./routes/issueRouter'))
app.use("/api/issues/comment", require('./routes/commentsRouter'))
app.use("/api/issues/vote", require('./routes/votesRouter'))

//Error Handler
app.use((err,req,res,next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

//Server Start
app.listen(9000, () => console.log("The voting has begun on port 9000"))
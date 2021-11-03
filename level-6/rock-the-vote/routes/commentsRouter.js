const express = require('express')
const commentsRouter = express.Router()
const Comment = require('../models/comment')

//Get ALL Comments... But Why?
/*
commentsRouter.get("/", (req,res,next) => {
    Comment.find((err,comments) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(comments)
    })
})
*/

//Get Comments By Post
commentsRouter.get("/:issueId", (req,res,next) => {
    Comment.find({issue: req.params.issueId}, (err,comments) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(comments)
    })
})

//Post Comment
commentsRouter.post("/:issueId", (req,res,next) => {
    req.body.user = req.user._id
    req.body.issue = req.params.issueId
    const newComment = new Comment(req.body)
    newComment.save((err,savedComment) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        res.status(201).send(savedComment)
    })
})

module.exports = commentsRouter
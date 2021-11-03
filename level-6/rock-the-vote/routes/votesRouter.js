const express = require('express')
const votesRouter = express.Router()
const Vote = require('../models/vote')

votesRouter.post("/:issueId", (req,res,next) => {
    req.body.user = req.user._id
    req.body.issue = req.params.issueId
    Vote.findOne({issue: req.params.issueId, user: req.user._id}, (err, vote) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(vote){
            if (vote.upDownVotes === req.body.upDownVotes){
                Vote.findOneAndDelete({ issue: req.params.issueId, user: req.user._id}, (err,deletedVote) => {
                    if (err){
                        res.status(500)
                        return next(err)
                    }
                    res.status(200).send(deletedVote)
                })
            } else {
                Vote.findOneAndUpdate({ issue: req.params.issueId, user: req.user._id}, req.body, { new: true }, (err, updatedVote) => {
                    if(err){
                        res.status(500)
                        return next(err)
                    }
                    res.status(202).send(updatedVote)
                })
            }
        } else {
            const newVote = new Vote(req.body)
            newVote.save((err,savedVote) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                res.status(201).send(savedVote)
            })
        }
    })
})

votesRouter.get("/:issueId", (req,res,next) => {
    Vote.find({issue: req.params.issueId}, (err,votes) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(votes)
    })
})

module.exports = votesRouter
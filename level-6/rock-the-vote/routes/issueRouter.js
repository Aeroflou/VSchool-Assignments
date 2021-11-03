const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue')

//Get All
issueRouter.get("/", (req,res,next) => {
  Issue.find((err,issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

//Get by User
issueRouter.get("/user", (req,res,next) => {
    Issue.find({user: req.user._id},(err,issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//Post New Issue
issueRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedIssue)
    })
})

//Update Issue
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate({ _id: req.params.issueId, user: req.user._id}, req.body, { new: true },(err, updatedIssue) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(201).send(updatedIssue)
        }
    )
})

//Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete({ _id: req.params.issueId, user: req.user._id},(err, deletedIssue) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(200).send(`Successfully deleted ${deletedIssue.title}`)
        }
    )
})

module.exports = issueRouter
/*
    const sentIssues = issues.map(issue => {
      let tempIssue = {...issue}
      Comment.find({issue: issue._id},(err,comments) => {
        if(err){
          res.status(500)
          return next(err)
        }
        tempIssue._doc = {...tempIssue._doc, comments}
        Vote.find({issue: issue._id},(err,votes) => {
          if(err){
            res.status(500)
            return next(err)
          }
          tempIssue._doc = {...tempIssue._doc, votes}
        })
      })
      return tempIssue
    })
*/
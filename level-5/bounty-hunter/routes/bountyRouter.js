const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounty")


bountyRouter.route("/")
    .get((req,res,next) => {
        Bounty.find((err, bounties) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })
    .post((req,res,next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
        })
        return res.status(201).send(`${newBounty.firstName} ${newBounty.lastName} has been added to the bounty list, wanted ${newBounty.living ? "Alive" : "Dead"}.`)
    })

bountyRouter.route("/:bountyId")
    .put((req,res,next) => {
        Bounty.findOneAndUpdate(
            {_id: req.params.bountyId},
            req.body,
            {new: true},
            (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`${updatedBounty.firstName} has had their bounty updated...`)
        })
    })
    .delete((req,res,next) => {
        Bounty.findOneAndDelete({_id: req.params.bountyId},(err, deletedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`${deletedBounty.firstName} has been killed, captured, or spared...`)
        })
    })

module.exports = bountyRouter
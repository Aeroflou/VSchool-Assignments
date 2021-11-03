const express = require('express')
const creatureRouter = express.Router()
const Creature = require('../models/creature')

//Get All
creatureRouter.get("/", (req,res,next) => {
  Creature.find((err,creatures) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(creatures)
  })
})

//Get One
creatureRouter.get("/:creatureId", (req,res,next) => {
    Creature.find({_id: req.params.creatureId},(err,issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//Post New Creature
creatureRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newCreature = new Creature(req.body)
    newCreature.save((err, savedCreature) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedCreature)
    })
})

//Update Creature
creatureRouter.put("/:creatureId", (req, res, next) => {
    Creature.findOneAndUpdate({ _id: req.params.creatureId, user: req.user._id}, req.body, { new: true },(err, updatedCreature) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(201).send(updatedCreature)
        }
    )
})

//Delete Creature
creatureRouter.delete("/:creatureId", (req, res, next) => {
    Creature.findOneAndDelete({ _id: req.params.creatureId, user: req.user._id},(err, deletedCreature) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(200).send(`Successfully deleted ${deletedCreature.title}`)
        }
    )
})

module.exports = creatureRouter
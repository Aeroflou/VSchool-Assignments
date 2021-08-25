const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory")

inventoryRouter.route("/")
    .get((req,res,next) => {
       Inventory.find((err, inventories) => {
           if(err){
               res.status(500)
               return next(err)
           }
           res.status(200).send(inventories)
       }) 
    })
    .post((req,res,next) => {
        const newInventory = new Inventory(req.body)
        newInventory.save((err, savedInventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
        })
        return res.status(201).send("Added Inventory!")
    })
inventoryRouter.route("/:inventoryId")
    .get((req,res,next) => {
        Inventory.find({_id: req.params.inventoryId}, (err, inventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(200).send(inventories)
        })
    })
    .put((req,res,next) =>{       
        Inventory.findOneAndUpdate(
            {_id: req.params.inventoryId},
            req.body,
            {new: true},
            (err, updatedInventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(202).send("Inventory has been updated!")
        })
    })
    .delete((req,res,next) => {
        Inventory.findOneAndDelete({_id: req.params.inventoryId},(err, deletedInventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send("Inventory has been deleted!")
        })
    })

const express = require("express")
const interceptionsRouter = express.Router()
const {v4: uuid} = require("uuid")

const cat = {
    name: "Billy",
    breed: "Tabby",
    age: 35
}

interceptionsRouter.get("/", (req, res, next) => {
    req.body = cat
    req.body.randomUuidOrSomethingIdkIMeanIfYouTakeTheTimeToLookAtHowMeaninglessThingsAreInTheLongRunThenYouRealiseThatTheSmallThingsDontMakeADifferenceAndThatInTheEndWeShouldStopOverthinkingThingsAndJustEnjoyLifeOrOhWaitThisIsAnObjectItemName_id = uuid()
    next()
})

module.exports = interceptionsRouter
import React from "react"
import Friend from "./Friend"
import friends from "./friendList"

function FriendsPets(){
    const friendPets = friends.map(friendThing => <Friend key={friendThing.id} info={friendThing}/>)
    //const vacationList = vacationSpots.map(spot => <Spot key={spot.id} info={spot}/>)
    return(
        <div>
            {friendPets}
        </div>
    )
}

export default FriendsPets
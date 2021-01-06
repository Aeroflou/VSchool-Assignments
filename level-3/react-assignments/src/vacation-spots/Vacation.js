import React from "react"
import Spot from "./Spot"
import vacationSpots from "./vacationSpots"

function Vacation(){
    const vacationList = vacationSpots.map(spot => <Spot key={spot.id} info={spot}/>)
    return(
        <div>
            {vacationList}
        </div>
    )
}

export default Vacation
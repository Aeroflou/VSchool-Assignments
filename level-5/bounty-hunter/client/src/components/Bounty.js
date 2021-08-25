import React, {useState} from "react"
import AddBountyForm from "./AddBountyForm"

function Bounty(props){
    const [editButton, setEditButton] = useState(false) 

    return(
        <div className="bounty">
            { !editButton ?
                <>
                    <h3>{props.bountyInfo.firstName} {props.bountyInfo.lastName}</h3>
                    <p>The {props.bountyInfo.type} is wanted {props.bountyInfo.living ? "Alive" : "Dead"}</p>
                    <p>Payout: {props.bountyInfo.bountyPrice}</p>
                    <button className="editBtn" onClick={() => setEditButton(editButton ? false : true)}>Edit</button>
                    <button className="delBtn" onClick={() => props.deleteBounty(props.bountyInfo._id)}>Delete</button>
                </>
                :
                <>
                    <AddBountyForm 
                        _id={props.bountyInfo._id}
                        buttonText="Submit Edit"
                        submit={props.editBounty}
                    />
                    <button className="editBtn" onClick={() => setEditButton(editButton ? false : true)}>Stop Editing</button>
                </>
            }
            <br />
        </div>
    )
}

export default Bounty
                        /*firstName={props.bountyInfo.firstName} 
                        lastName={props.bountyInfo.lastName} 
                        living={props.bountyInfo.living} 
                        price={props.bountyInfo.price} 
                        type={props.bountyInfo.type} */
                        //<button onClick={setEditButton(editButton ? false : true)}>Stop Editing</button>
import React, {useState, useEffect} from "react"
import axios from "axios"

import Bounty from "./components/Bounty"
import AddBountyForm from "./components/AddBountyForm"

function App() {
  const [bounties, setBounties] = useState([])
  const [addButton, setAddButton] = useState(false)

  const getBounties = () => {
    axios.get("/bounties")
      .then(res => {
        console.log(res.data)
        setBounties(res.data)
      })
      .catch(err => console.log(err))
  }

  const addBounty = (newBounty) => {
    axios.post("/bounties", newBounty)
      .then(res => {
        const tempBount = res.body
        setBounties(prevBounties => [...prevBounties, tempBount])
      })
      .catch(err => console.log(err))
  } 

  const deleteBounty = (bountyId) => {
    axios.delete(`/bounties/${bountyId}`)
      .then(res => setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId)))
      .catch(err => console.log(err))
  }

  const editBounty = ( editedBounty, bountyId) => {
    axios.put(`/bounties/${bountyId}`, editedBounty)
      .then(res => setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.body)))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [bounties])

  return (
    <div>
      {!addButton ?
        <button className="editBtn" onClick={() => setAddButton(prevButton => !prevButton)}>Add New Bounty</button>
        :
        <>
          <AddBountyForm submit={addBounty} buttonText="Add Bounty"/>
          <button className="editBtn" onClick={() => setAddButton(prevButton => !prevButton)}>Exit</button>
        </>
      } 
      <hr/>
      {bounties.map(bounty => <Bounty bountyInfo={bounty} key={bounty._id} deleteBounty={deleteBounty} editBounty={editBounty}/>)}
    </div>
  )
}

/*
  const [addButton, setAddButton] = useState(false)

      {!addButton ?
        <button onClick={() => setAddButton(prevButton => !prevButton)}>Add New Bounty</button>
        :
        <>
          <AddBountyForm submit={addBounty} buttonText="Add Bounty"/>
          <button onClick={() => setAddButton(prevButton => !prevButton)}>Exit</button>
        </>
      } 
*/
export default App
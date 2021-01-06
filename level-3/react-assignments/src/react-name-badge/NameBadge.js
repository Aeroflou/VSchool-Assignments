import React, {Component} from "react"
import Badge from "./Badge"

class NameBadge extends Component{
    constructor(){
        super()
        this.state = {
            fName: "",
            lName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            description: "",
            badgeObjects:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.validateForm = this.validateForm.bind(this)
    }
    validateForm(){
        let score = 0
        if(this.state.fName.length >= 3){
            score++
        }
        if(this.state.lName.length >= 3){
            score++
        }
        if(this.state.email.length >= 3){
            score++
        }
        if(this.state.placeOfBirth.length >= 3){
            score++
        }
        if(this.state.phone.length >= 3){
            score++
        }
        if(this.state.favoriteFood.length >= 3){
            score++
        }
        if(this.state.description.length >= 3){
            score++
        }
        if(score === 7){
            return true
        } else {
            return false
        }
    }
    handleSubmit(event){
        event.preventDefault()
        if(this.validateForm()){
            this.setState(prevState => {
                const newObject = {
                    fName: prevState.fName,
                    lName: prevState.lName,
                    email: prevState.email,
                    placeOfBirth: prevState.placeOfBirth,
                    phone: prevState.phone,
                    favoriteFood: prevState.favoriteFood,
                    description: prevState.description
                }
                
                console.log(newObject)
                const newObjects = prevState.badgeObjects
                newObjects.push(newObject)
                return({
                    fName: "",
                    lName: "",
                    email: "",
                    placeOfBirth: "",
                    phone: "",
                    favoriteFood: "",
                    description: "",
                    badgeObjects: newObjects
                })
            })
        }
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    render(){
        let badgeList = this.state.badgeObjects.map((info, index) => <Badge key={index} info={info}/>)
        return(
            <div>
                <form style={{display:"grid", gridTemplateRows:"8", gridTemplateColumns:"2", border:"5px solid black", height:300, width:750}} onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="fName" 
                        placeholder="First Name" 
                        value={this.state.fName} 
                        onChange={this.handleChange} 
                        style={{gridRow:"1/2", gridColumn:"1/2"}}
                    />

                    <input 
                        type="text" 
                        name="lName" 
                        placeholder="Last Name" 
                        value={this.state.lName} 
                        onChange={this.handleChange} 
                        style={{gridRow:"1/2", gridColumn:"2/3"}}
                    />

                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email Address" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        style={{gridRow:"2/3", gridColumn:"1/2"}}
                    />

                    <select 
                        type="text" 
                        name="placeOfBirth" 
                        placeholder="Place of Birth" 
                        value={this.state.placeOfBirth} 
                        onChange={this.handleChange} 
                        style={{gridRow:"2/3", gridColumn:"2/3"}}
                    >
                        <option value="n/a">(Select Your Location)</option>
                        <option value="Australia">Australia</option>
                        <option value="Earth">Earth</option>
                        <option value="Mars">Mars</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Neptune">Neptune</option>
                    </select>

                    <input 
                        type="number" 
                        name="phone" 
                        placeholder="Phone Number" 
                        value={this.state.phone} 
                        onChange={this.handleChange} 
                        style={{gridRow:"3/4", gridColumn:"1/2"}}
                    />

                    <select 
                        type="text" 
                        name="favoriteFood" 
                        placeholder="Favorite Food" 
                        value={this.state.favoriteFood} 
                        onChange={this.handleChange} 
                        style={{gridRow:"3/4", gridColumn:"2/3"}}
                    >
                        <option value="n/a">(Select A Food)</option>
                        <option value="Fetucini Alfredo">Fetucini Alfredo</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Potato">Potato</option>
                        <option value="Macaroni and Cheese">Macaroni and Cheese</option>
                        <option value="Souls of the Innocent">Souls of the Innocent</option>
                    </select>

                    <textarea 
                        name="description" 
                        placeholder="Description" 
                        value={this.state.description} 
                        onChange={this.handleChange} 
                        style={{gridRow:"4/8", gridColumn:"1/3"}}
                    />

                    <button style={{gridRow:"8/9", gridColumn:"1/3"}}>Submit</button>
                </form>
                <br/>
                <div>{badgeList}</div>
            </div>
        )
    }
}


//<input type="text" name="placeOfBirth" placeholder="Place of Birth" onChange={this.handleChange}/>
export default NameBadge
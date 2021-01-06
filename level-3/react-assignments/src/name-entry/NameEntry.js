import React, {Component} from "react"

class NameEntry extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            names: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.setState(prevState => {
            const newNames = prevState.names
            newNames.push(prevState.name)
            return({
                names: newNames
            })
        })
    }
    render(){
        let namesList = this.state.names.map((name, index) => <li key={index}>{name}</li>)
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Name Entry</h1>
                <input type="text" name="name" placeholder="Full Name" onChange={this.handleChange}/>
                <button>Submit</button>
                <h2>{this.state.name}</h2>
                <ol>{namesList}</ol>
            </form>
        )
    }
}

export default NameEntry
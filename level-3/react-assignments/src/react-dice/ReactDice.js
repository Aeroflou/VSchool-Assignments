import React, {Component} from "react"
import Die from "./Die"

class ReactDice extends Component{
    constructor(){
        super()
        this.state = {
            numbers: [0,0,0,0,0]
        }
        this.reRoll = this.reRoll.bind(this)
    }
    reRoll(){
        this.setState(prevState => {
            return({
                numbers: [Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1)]
            })
        })
    }
    render(){
        let dice = this.state.numbers.map(num => <Die number={num}/>)
        let totalNum = 0
        return(
            <div style={{display: "grid", gridTemplateColumns: "repeat(2,1fr)", backgroundColor: "slategray"}}>
                {dice}
                <button onClick={this.reRoll}>Re Roll The Dice</button>
            </div>
        )
    }
}

export default ReactDice
import React, {Component} from "react"
import Square from "./Square"

class DjReact extends Component {
    constructor(){
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.changeBlack = this.changeBlack.bind(this)
        this.halfBlack = this.halfBlack.bind(this)
        this.changeBottomBlue = this.changeBottomBlue.bind(this)
        this.changeBottomBlu = this.changeBottomBlu.bind(this)
        this.whiteOut = this.whiteOut.bind(this)
        this.orangeChecker = this.orangeChecker.bind(this)
        this.redTop = this.redTop.bind(this)
        this.yellowLeftBottom = this.yellowLeftBottom.bind(this)
    }
    //add sounds
    changeBlack(){
        this.setState(prevState => {
            return({
                position: [[1,1],[1,2],[2,1],[2,2]],
                colors: ["black", "black", "black", "black"],
                key: [0,1,2,3]
            })
        })
    }
    halfBlack(){
        this.setState(prevState => {
            return({
                colors: [prevState.colors[0], prevState.colors[1], "black", "black"]
            })
        })
    }
    changeBottomBlue(){
        this.setState(prevState => {
            return({
                colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
            })
        })
    }
    changeBottomBlu(){
        this.setState(prevState => {
            return({
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
            })
        })
    }
    whiteOut(){
        this.setState(prevState => {
            return({
                colors: ["white", "white", "white", "white"]
            })
        })
    }
    orangeChecker(){
        this.setState(prevState => {
            return({
                colors: ["black", "orange", "orange", "black"]
            })
        })
    }
    redTop(){
        this.setState(prevState => {
            return({
                colors: ["red", "red", prevState.colors[2], prevState.colors[3]]
            })
        })
    }
    yellowLeftBottom(){
        this.setState(prevState => {
            return({
                colors: [prevState.colors[0], prevState.colors[1], "yellow", prevState.colors[3]]
            })
        })
    }
    render(){
        let squares = this.state.colors.map(color => <Square color={color}/>)
        return(
            <div style={{display: "grid", gridTemplateColumns: "repeat(2,1fr)", backgroundColor: "darkgray"}}>
               {squares}
               <button onClick={this.changeBlack}>Black Out!</button>
               <button onClick={this.halfBlack}>Half It!</button>
               <button onClick={this.changeBottomBlue}>Blue!</button>
               <button onClick={this.changeBottomBlu}>Blue Pt2!</button>
               <button onClick={this.whiteOut}>WhiteOut!</button>
               <button onClick={this.orangeChecker}>Checker!</button>
               <button onClick={this.redTop}>Red!</button>
               <button onClick={this.yellowLeftBottom}>Shy Yellow!</button>
            </div>
        )
    }
}

export default DjReact
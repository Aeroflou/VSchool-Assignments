import React, {Component} from "react"

class RandomColor extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            color: ""
        }
        this.colorSwitch = this.colorSwitch.bind(this)
    }
    
    componentDidMount(){
        this.setState({loading: true})
        let thing = ""
        fetch(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(response => response.json())
            /*.then(data => {
                this.setState({
                    loading: false,
                    color: data
                })
            })
            console.log(this.state.color)*/
            .then(data => {
                thing = data
            })
        this.setState({
            loading: false,
            color: thing
        })
    }
    colorSwitch(){
        this.setState({loading: true})
        fetch(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    color: data
                })
            })
    }
    render() {
        const text = this.state.loading ? "Loading..." : ""
        return (
            <div style={{backgroundColor: `#${this.state.color.colors[0].hex}`}}>
                <h1>{text}</h1>
                <button onClick={this.colorSwitch}>Change Color</button>
            </div>
        )
    }
}

export default RandomColor
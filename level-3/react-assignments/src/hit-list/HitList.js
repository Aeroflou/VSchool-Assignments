import React, {Component} from "react"
import Target from "./Target"

class HitList extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            hitList: []
        }
    }
    
    componentDidMount(){
        this.setState({loading: true})
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    hitList: data
                })
            })
    }
    render() {
        const text = this.state.loading ? "Loading..." : ""
        const targets = this.state.hitList.map((target, index) => <Target key={index} info={target}/>)

        return (
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", backgroundColor:"darkred"}}>
                <h1 style={{gridColumn:"1/3", backgroundColor:"black", color:"white"}}>Don Corleone's Hit List</h1>
                <h1>{text}</h1>
                {targets}
            </div>
        )
    }
}

export default HitList
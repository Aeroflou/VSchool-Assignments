import React, {useContext} from "react"
import {DumbContext} from "../context"

function Home(){
    const {dumbNumber, countUp} = useContext(DumbContext)
    return(
        <div>
            <hr />
            <h1>Home Page</h1>
            <h3>Welcome to the home page of my website!</h3>
            <p>Idk what else to put here so have a cat.</p>
            <img style={{height:"150px", width: "200px"}} src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg" alt="words or something"/>
            <hr />
            <h3>Counter For Fun</h3>
            <p>{dumbNumber}</p>
            <button onClick={countUp()}>Button!</button>
        </div>
    )
}

export default Home
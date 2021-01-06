import React from "react"
import BlogPost from "./BlogPost"
import blogs from "./blogs"

function BlogList(){
    const blogPosts = blogs.map(blog => <BlogPost key={blog.id} info={blog} />)
    return(
        <div style={{padding: "30px 0px 15px 0px"}}>
            {blogPosts}
            <div style={{height: "50px", width: "180px", backgroundColor: "#0085A1", textAlign: "center", padding: "10px 25px", color: "white"}}>
                <p>OLDER POSTS -></p>
            </div>    
            <hr/>
        </div>
    )
}

export default BlogList
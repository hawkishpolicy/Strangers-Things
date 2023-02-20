import React, {useState, useEffect} from "react";
import { Navbar, Footer, PostsLists, Login } from "./";
import { getSrcInfo } from "../API-Adapter"

const Main = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () =>{
        const allPosts = await getSrcInfo();
        setPosts(allPosts);
    }

    useEffect(()=>{
        getPosts();
    }, [])

    console.log(posts)

    return(
        <div id="main">
            <Navbar />
            <Login/>
            <PostsLists posts = {posts}/>
            <Footer />
        </div>
    )
}

export default Main
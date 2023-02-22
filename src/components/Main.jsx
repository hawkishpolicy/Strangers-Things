import React, {useState, useEffect} from "react";
import { Navbar, Footer, PostsLists } from "./";
import { getSrcInfo } from "../API-Adapter"

const Main = () => {
    const [posts, setPosts] = useState([]);
    //const [loggedIn, setLoggedIn] = useState(false)

    const getPosts = async () =>{
        const allPosts = await getSrcInfo();
        setPosts(allPosts);
    }

    useEffect(()=>{
        getPosts();
    }, [])

    return(
        <div id="main">
            
            <Navbar  />
            <PostsLists posts = {posts}/>
            <Footer />
        
        </div>
    )
}

//loggedIn={loggedIn} setLoggedIn={setLoggedIn}

export default Main
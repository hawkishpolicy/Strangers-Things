import React, {useState, useEffect} from "react";
import { Navbar, Footer, PostsLists } from "./";
import { getSrcInfo, deletePost } from "../API-Adapter"


const Main = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () =>{
        const allPosts = await getSrcInfo();
        setPosts(allPosts);
    }

    // const deletePostfromList = async(id) => {
    //     let currentPosts = posts

    //     try{
    //         await deletePost (id)
    //         currentPosts.splice(idx, 1)
    //         setPosts(currentPosts)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    useEffect(()=>{
        getPosts();
    }, [])

    return(
        <div id="main">
            
            <Navbar  />
            <PostsLists posts = {posts} setPosts = {setPosts} />
            <Footer />
        
        </div>
    )
}

//loggedIn={loggedIn} setLoggedIn={setLoggedIn}

export default Main
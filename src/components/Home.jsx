import React, {useState, useEffect} from "react";
import { Navbar, Footer, PostsLists } from "./";
import { getUserPosts } from "../API-Adapter";


const Home =() => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () =>{
        const allPosts = await getUserPosts();
        console.log(allPosts)
        setPosts(allPosts);
    }

    useEffect(()=>{
        getPosts();
    }, [])




    return (
        <div id="homePage">
            <Navbar />
            <h1 className="welcomeUser">Welcome User!</h1>
            {/* <PostsLists posts = {posts}/> */}
            <Footer />

        </div>
        )
}


export default Home
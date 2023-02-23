import React, {useState, useEffect} from "react";
import { Navbar, Footer, PostsLists, PostForm } from "./";
import { getUserPosts } from "../API-Adapter";


const Home =() => {

    const [posts, setPosts] = useState([]);



    const getPosts = async () =>{
        const allPosts = await getUserPosts();
        console.log(allPosts)
        setPosts(allPosts.data.posts);
    }

    useEffect(()=>{
        getPosts();
    }, [])




    return (
        <div id="homePage">
            <Navbar />
            <h1 className="welcomeUser">Welcome User!</h1>
            <PostsLists posts = {posts} setPosts = {setPosts}/>
            <Footer />

        </div>
        )
}


export default Home
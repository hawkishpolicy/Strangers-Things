import React, {useState, useEffect} from "react";
import { Navbar, Footer, PostsLists} from "./";
import { getUserPosts } from "../API-Adapter";


const Home =() => {

    const [posts, setPosts] = useState([]);
    const [searchString, setSearchString] = useState("");

    const getPosts = async () =>{
        const allPosts = await getUserPosts();
        setPosts(allPosts.data.posts);
    }

    useEffect(()=>{
        getPosts();
    }, [])
        

    return (
        <div id="homePage">
            <Navbar searchString = {searchString} setSearchString = {setSearchString}/>
            <h1 id="welcomeUser">Welcome User!</h1>
            <PostsLists posts={posts} setPosts={setPosts} searchString = {searchString}/>
            <Footer />

        </div>
        )
}


export default Home
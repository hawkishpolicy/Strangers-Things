import React, {useState, useEffect} from "react";
import { Navbar, Footer, PostsLists } from "./";
import { getSrcInfo, deletePost } from "../API-Adapter"


const Main = () => {
    const [posts, setPosts] = useState([]);
    const [searchString, setSearchString] = useState("");

    const getPosts = async () =>{
        const allPosts = await getSrcInfo();
        setPosts(allPosts);
    }

    useEffect(()=>{
        getPosts();
    }, [])

    return(
        <div id="main">
            
            <Navbar  searchString = {searchString} setSearchString = {setSearchString} posts={posts}/>
            <PostsLists posts = {posts} setPosts = {setPosts} searchString = {searchString} />
            <Footer />
        
        </div>
    )
}


export default Main
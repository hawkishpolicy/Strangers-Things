import React, {useState, useEffect} from "react";
import { Navbar, Footer, PostsLists } from "./";
import { getSrcInfo} from "../API-Adapter"


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
            
            <Navbar setSearchString = {setSearchString}/>
            <h1 id="welcomeUser">Welcome Stranger!</h1>
            <PostsLists posts = {posts} setPosts = {setPosts} searchString = {searchString} />
            <Footer />
        
        </div>
    )
}


export default Main
import React, {useState, useEffect} from "react";
import { Navbar, Footer, PostsLists, PostForm } from "./";
import { getUserPosts, deletePost } from "../API-Adapter";


const Home =() => {

    const [posts, setPosts] = useState([]);
    const [searchString, setSearchString] = useState("");




    const getPosts = async () =>{
        const allPosts = await getUserPosts();
        console.log(allPosts)
        setPosts(allPosts.data.posts);
    }

    useEffect(()=>{
        getPosts();
    }, [])
        
    // const deletePostFromList = async(id) => {
    //     let currentPosts = [...posts]

    //     try{
    //         await deletePost (id)
    //         currentPosts.splice(posts.idx, 1)
    //         setPosts(currentPosts)

    //         window.location.reload(true);
    //         // I looked up how to force a page reload in react. this works but is it what we want?
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


    return (
        <div id="homePage">
            <Navbar searchString = {searchString} setSearchString = {setSearchString}/>
            <h1 className="welcomeUser">Welcome User!</h1>
            <PostsLists posts={posts} setPosts={setPosts} searchString = {searchString}/>
            <Footer />

        </div>
        )
}


export default Home
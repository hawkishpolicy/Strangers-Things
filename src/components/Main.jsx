import React from "react";
import { Navbar, Footer, Posts } from "./";
import { getSrcInfo } from "../API-Adapter"

const Main = () => {
    // const getPosts = async () => {
    //     try{
    //     const postInfo = await getSrcInfo()
    //     console.log(postInfo)
    //     return postInfo
    //     }catch(error){
    //         console.error(error)
    //     }
    // }
    return(
        <div id="main">
            <Navbar />
            <Posts />
            <Footer />
        </div>
    )
}

export default Main
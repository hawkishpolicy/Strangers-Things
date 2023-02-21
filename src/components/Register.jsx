import React, { useState, useEffect } from "react";
import { postUserInfo } from "../API-Adapter";
import { Link } from "react-router-dom"

const Register = () => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[response, setResponse] = useState(""); //holds the api's response  


   async function sendUserInfo(username, password){
       try{
        const result = await postUserInfo(username, password);
        setResponse(result);    //giving it to state so we can sent it to local storage?

        setUsername('');
        setPassword('');

       } catch(error){
        console.log(error);
       }
    }
    
    useEffect(() =>{
        localStorage.setItem("token", response.token); 
    }, [response])



    return(
        <div id="registerPage">
        
            <form id="registerCard" 
                onSubmit = {(event) => {
                event.preventDefault();
                sendUserInfo(username, password);

            }}>

                <input
                    id={"userNameInput"}
                    type={"text"}
                    placeholder={"User Name"}
                    value = {username}
                    required
                    onChange={(event)=>{
                        setUsername(event.target.value);
                    }}
                    ></input>

                    <input
                    id={"userPassword"}
                    type={"password"}
                    placeholder={"Password"}
                    min={"8"}
                    required
                    ></input>

                    <input id={"confirmPassword"}
                    type={"password"}
                    placeholder={"Confirm Password"}
                    min={"8"}
                    required
                    value = {password}
                    onChange={(event)=>{
                        setPassword(event.target.value)
                    }}
                    ></input>

                    <Link to={`/login`}><button id={"loginButton"} type="submit">Enter</button></Link>
            </form>

        </div>
    )
}


export default Register
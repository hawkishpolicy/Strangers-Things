import React from "react";

const Register = () => {

    const userNameInput = document.getElementById('userNameInput')
    const userPassword = document.getElementById('userPassword')
    const confirmPassword = document.getElementById('confirmPassword')

    function fetchUserInfo(){
        console.log(userNameInput, userPassword)
        const userInfo = fetch('https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                username: userNameInput,
                password: userPassword
                }
            })
        }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
    }
    
    return(
        <div id="registerPage">
        
        <form id="registerCard">
        <input
            id={"userNameInput"}
            type={"text"}
            placeholder={"User Name"}
            required
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
            ></input>
            <button type="submit" id="registerEnter" onClick={() => userPassword === confirmPassword ?
                fetchUserInfo() : alert("Passwords don't match") }
            >Enter</button>
            </form>

        </div>
    )
}


export default Register
import React from "react";
// import Login from "./Login";
// import Home from "./Home";

import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "./AppProvider";

const Navbar = (props) => {
  const navigate = useNavigate();
  const {loggedIn, setLoggedIn} = useAppContext() 

  const Logout = () => {
    setLoggedIn(false);
    window.localStorage.removeItem("userToken");
    navigate("/"); //this maybe goes in the onclick func below??
  }

  return (
    <div id="navbar">
    <div>
      <form>
      <input 
      id={"searchBar"}
      type={'text'}
      placeholder={"Search Here"}></input>
    <button>Enter</button>
    </form>
    </div>
    <div id="navBar">
      
      {/* <Link id={"postsLink"} to={'/PostsLists'}>Posts</Link> */}
      {loggedIn ? 
      <>
        <Link id={"homeLink"} to={'/Home'}>Home</Link> 
        <button id={"logoutLink"} onClick= {Logout} >Log Out</button> 
      </>
      : <Link id={"loginLink"} to={`/login`}>Login</Link> 
      }
    </div>
    </div>
  );
};

export default Navbar;``
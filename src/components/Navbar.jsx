import React from "react";
// import Login from "./Login";
// import Home from "./Home";

import { Link } from "react-router-dom";

const Navbar = (props) => {
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
      <Link id={"homeLink"} to={'/Home'}>Home</Link>
      {/* <Link id={"postsLink"} to={'/PostsLists'}>Posts</Link> */}
      {props.loggedIn ? <Link id={"logoutLink"}>Log Out</Link> : 
        <Link id={"loginLink"} to={`/login`}>Login</Link> 
      }
    </div>
    </div>
  );
};

export default Navbar;
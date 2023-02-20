import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">

    <input 
    id={"searchBar"}
    type={'text'}
    placeholder={"Search Here"}>

    </input>
    <button>Enter</button>
      <Link id={"loginButton"} to={`/login`}>
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Navbar;
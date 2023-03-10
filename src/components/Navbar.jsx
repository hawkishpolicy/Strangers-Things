import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "./AppProvider";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useAppContext();
  const setSearchString = props.setSearchString;
  

  const Logout = () => {
    setLoggedIn(false);
    window.localStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <div id="navbar">
      <div>
        <form>
          <input
            id={"searchBarInput"}
            type={"text"}
            placeholder={"Search Here"}
          ></input>

          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              setSearchString(document.getElementById("searchBarInput").value);
              document.getElementById("searchBarInput").value = "";
            }}
            id="searchBarButton"
          >
            Enter
          </button>

          <button
            onClick={() => {
              setSearchString("");
            }}
            id="searchBarButton"
          >
            RESET
          </button>

        </form>
      </div>

      <div id="navBar">
        <Link id={"allPostsLink"} to={"/"}>
          All Posts
        </Link>

        {loggedIn ? (
          <>
            <Link id={"homeLink"} to={"/home"}>
              Home
            </Link>
            <Link id={"postFormLink"} to={"/CreatePost"}>
              Create Post
            </Link>
            <Link id={"messageViewLink"} to={"/messages"}>
              Sent Messages
            </Link>
            <button id={"logoutLink"} onClick={Logout}>
              Log Out
            </button>
          </>
        ) : (
          <Link id={"loginLink"} to={`/login`}>
            Login
          </Link>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;

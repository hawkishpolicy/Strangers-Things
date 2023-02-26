import React, { useState } from "react";
import { postUserInfo } from "../API-Adapter";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function sendUserInfo(username, password) {
    try {
      await postUserInfo(username, password);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <h1 id="registerTitle">Register Please!</h1>
      <div id="registerPage">
        <form
          id="registerCard"
          onSubmit={(event) => {
            event.preventDefault();
            sendUserInfo(username, password);
            navigate("/login");
          }}
        >
          <input
            id={"userNameInput"}
            type={"text"}
            placeholder={"User Name"}
            value={username}
            required
            onChange={(event) => {
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

          <input
            id={"confirmPassword"}
            type={"password"}
            placeholder={"Confirm Password"}
            min={"8"}
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>

          <button id={"cardButton"} type="submit">
            Enter
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;

import React from "react";
import ReactDOM from "react-dom/client";
import {
  Main,
  PostsLists,
  Login,
  Register,
  PasswordReset,
  Home,
} from "./components";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppProvider, { AppContext } from "./components/AppProvider";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/passwordReset" element={<PasswordReset />} />
      <Route path="/PostsLists" element={<PostsLists />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/postlists" element={<PostsLists />} /> */}
    </>
  )
);

root.render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);

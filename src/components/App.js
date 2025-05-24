import React, { useState } from "react";
import "./../styles/App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Playground from "./Playground";
import Login from "./Login";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <BrowserRouter>
        {loggedIn === true ? (
          <p>Logged in, Now you can enter Playground</p>
        ) : (
          <p>You are not authenticated, Please login first</p>
        )}
        <ul>
          <li>
            <Link to={"/playground"}>Playground</Link>
            <br />
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>

        <Routes>
          <Route
            path="/playground"
            element={
              <Playground loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            }
          ></Route>
          <Route
            path="/login"
            element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

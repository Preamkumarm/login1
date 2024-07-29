import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Pages/Login";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [user, setuser] = useState([
    {
      username: "Pream",
      password: "12345",
    },
    {
      username:"john",
      password:"12345"    
    }
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login user={user} setuser={setuser} />}></Route>
        <Route path="/signup" element={<Signup user={user} setuser={setuser} />}></Route>
        <Route path="/landing" element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <div>
    <App />
  </div>
);

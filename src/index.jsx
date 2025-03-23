import React, { useState, useEffect } from "react";
import "./App.css";
import {BrowserRouter as Router,Routes,Route,Navigate,} from "react-router-dom";
import Login from "./components/Form/Login.jsx";
import SignUp from "./components/Form/Register.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./App.jsx";
import { auth } from "./components/firebase.jsx";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <div className="App">
            <Routes>
              <Route
                path="/"
                element={user ? <Navigate to="/profile" /> : <Login />}
              />
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
            <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
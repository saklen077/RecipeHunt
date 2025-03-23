import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          fullName: fname,
        });
      }
      console.log("User Registered Successfully!!");
      window.location.href = "/profile";
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
   <div className="auth-wrapper bg-blue-100  flex justify-center items-center min-h-screen">
    <div className="auth-inner">
    <form onSubmit={handleRegister}>
     <h3 className="font-bold text-lg md:text-start text-center">
            Signup Page
    </h3>

      <div className="mb-3">
        <label>Full name:</label>
        <input
          type="text"
          className="form-control w-80 px-3 py-1 border rounded-md outline-none"
          placeholder="Enter your Full name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Email address:</label>
        <input
          type="email"
          className="form-control w-80 px-3 py-1 border rounded-md outline-none"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Password:</label>
        <input
          type="password"
          className="form-control w-80 px-3 py-1 border rounded-md outline-none"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      
      
      <div className="text-xl flex justify-around mt-5">
            <button type="submit" className="bg-lime-700 text-white px-3 py-1 rounded-md hover:bg-lime-900 duration-300 cursor-pointer">Signup</button>
            <p>Have account?{" "}
              <Link to="/" className="underline text-blue-500 cursor-pointer">Login</Link>{" "}
            </p>
          </div>
    </form>
    </div>
   </div>
  );
}
export default Register;

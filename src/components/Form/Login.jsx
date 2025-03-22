import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
      toast.success("User logged in Successfully", {
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
    <div className="auth-wrapper bg-blue-100 flex justify-center items-center min-h-screen">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg md:text-start text-center">
            Login Page
          </h3>

          <div className="mb-3">
            <label>Email:</label>
            <input
              type="email"
              className="form-control w-80 px-3 py-1 border rounded-md outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password:</label>
            <input
              type="password"
              className="form-control w-80 px-3 py-1 border rounded-md outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-around mt-4">
            <button
              className="bg-lime-700 text-white px-3 py-1 rounded-md hover:bg-lime-900 duration-300 cursor-pointer"
              type="submit"
            >
              Login
            </button>
            <p>
              Not registered?{" "}
              <Link
                to="/register"
                className="underline text-blue-500 cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

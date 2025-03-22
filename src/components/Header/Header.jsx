import React from "react";
import { auth } from "../firebase";
import { toast } from "react-toastify";
const Header = () => {
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully!");
      toast.success("User logged out Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <header className="bg-black text-white flex justify-between items-center max-sm:p-4 p-5 shadow-lg">
      <div className="flex items-center">
        <h1 className="text-2xl max-sm:text-xl font-bold">RecipeHunt</h1>
      </div>
      <div>
        <button
          className="bg-red-700 text-white px-3 py-1 rounded-md hover:bg-red-900 duration-300 cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
};
export default Header;

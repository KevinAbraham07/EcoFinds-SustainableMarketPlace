import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
function Page() {
  const navigate = useNavigate();

  const handleSignClick = () => {
    navigate("/signup"); // navigate to /login route
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mt-5 flex w-[869px] h-[70px]">
          <div className="we w-[163px] h-[70px] flex items-center justify-center">
            <h2 className="new ">Login</h2>
          </div>
          <div className="bg-white w-[163px] h-[70px] flex items-center justify-center border border-gray-300">
            <button
              onClick={handleSignClick}
              className="new w-[163px] h-[70px]"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="w-[869px] h-[630px] bg-gray-50 border border-gray-200 mt-4 p-6 rounded-lg shadow pt-auto">
          <form className="flex flex-col gap-4">
            <h1 className="new"> Email</h1>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-2 rounded"
            />
            <h1 className="new">Password</h1>
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 p-2 rounded"
            />
            <button
              type="submit"
              className="bg-[#38611f] text-white py-2 rounded "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;

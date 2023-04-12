import React from "react";
import { Facebook } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login__Container h-screen bg-white flex items-center justify-center">
      <div className="hidden md:relative md:flex md:w-[250px]">
        <img
          src="/img/logo-banner1.png"
          alt="First Banner"
          className="w-[220px] h-[460px] bg-[black] rounded-[20px] p-1"
        />
        <img
          src="/img/logo-banner.png"
          alt="Second Banner"
          className="w-[220px] h-[460px] bg-[black] rounded-[20px] p-1 absolute left-16 bottom-[-15px]"
        />
      </div>
      <div className="h-[460px] w-[300px] md:ml-[60px]">
        <div className="border border-gray-200 p-6">
          <div className="text-center text-4xl mb-9 font-serif">ZeddicGram</div>
          <input
            type="text"
            placeholder="Phone number, Username, or Email"
            className="w-full p-3 border mb-2 bg-gray-200 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border mb-2 bg-gray-200 text-sm"
          />
          <button
            type="button"
            className="w-full text-center p-1 bg-blue-400 text-white rounded-lg mt-3 hover:bg-blue-300"
          >
            Log in
          </button>
          <div className="flex items-center justify-center mt-3">
            <div className="w-[100px] h-0.5 bg-gray-400 mr-2"></div>
            <span>OR</span>
            <div className="w-[100px] h-0.5 bg-gray-400 ml-2"></div>
          </div>
          <div className="">
            <p className="text-blue-500 text-sm flex items-center justify-center cursor-pointer">
              <Facebook /> Login with Facebook
            </p>
            <p className="text-center text-blue-500 text-sm mt-2 cursor-pointer">
              Forgot Password?
            </p>
          </div>
          <div></div>
        </div>
        <div className="flex justify-center items-center mt-1 border p-3 text-sm">
          <span>Don't have an account? </span>
          <span className="text-blue-400 ml-1">
            <Link to="/register"> Sign Up</Link>
          </span>
        </div>
        <p className="text-sm text-center text-black mt-1">Get the app.</p>
        <div className="flex items-center justify-center mt-2 gap-1">
          <img src="/img/Google-logo.png" alt="Google" className="w-24" />
          <img
            src="/img/Microsoft-logo.png"
            alt="Microsoft Logo"
            className="w-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

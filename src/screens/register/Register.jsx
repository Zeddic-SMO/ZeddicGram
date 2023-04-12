import { Facebook } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-full mt-12 mb-12">
      <div className="w-[320px]">
        <div className="border border-gray-200 p-6">
          <div className="text-center text-4xl mb-5 font-serif">ZeddicGram</div>
          <p className="text-center mb-2">
            Sign Up to see photos and videos from your friends.
          </p>
          <p className="bg-blue-500 text-sm flex items-center justify-center cursor-pointer rounded-lg text-white p-1 mt-1">
            <Facebook /> Login with Facebook
          </p>
          <div className="flex items-center justify-center mt-2 mb-2">
            <div className="w-[100px] h-0.5 bg-gray-400 mr-2"></div>
            <span>OR</span>
            <div className="w-[100px] h-0.5 bg-gray-400 ml-2"></div>
          </div>
          <input
            type="text"
            placeholder="Mobile Number or Email"
            className="w-full p-3 border mb-2 bg-gray-200 text-sm"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border mb-2 bg-gray-200 text-sm"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border mb-2 bg-gray-200 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border mb-2 bg-gray-200 text-sm"
          />
          <p className="text-center text-[13px] mt-2">
            People who use our service may have uploaded your contact
            information to Instagram.
            <span className="text-blue-700 cursor-pointer">Learn More</span>
          </p>
          <p className="text-center text-[13px] mt-2">
            By signing up, you agree to our{" "}
            <span className="text-blue-700 cursor-pointer">
              Terms, Privacy Policy
            </span>{" "}
            and <span className="text-blue-700 cursor-pointer"> Policy</span>
          </p>
          <button
            type="button"
            className="w-full text-center p-1 bg-blue-400 text-white rounded-lg mt-3 hover:bg-blue-300"
          >
            Sign Up
          </button>
          <div></div>
        </div>
        <div className="flex justify-center items-center mt-1 border p-3 text-sm">
          <span>Have an account? </span>
          <span className="text-blue-400 ml-1">
            <Link to="/login"> Log in</Link>
          </span>
        </div>
        <p className="text-sm text-center text-black mt-3 mb-3">Get the app.</p>
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

export default Register;

import React from "react";
import Suggestion from "../suggestion/Suggestion";

const RightSide = () => {
  return (
    <div className="hidden mt-10 md:inline-block md:w-2/6 md:px-3">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-3">
          <img
            src="/img/user.png"
            alt=""
            className="w-12 h-12 rounded-full inline-block"
          />
          <p>
            <span className="">zeddic-smo</span> <br />
            <span className="text-sm text-gray-400">Samuel Msonter Ortil</span>
          </p>
        </div>
        <div>
          <span className="text-blue-600 cursor-pointer">Switch</span>
        </div>
      </div>

      <p className="flex justify-between my-5 font-bold">
        <span className="text-gray-400">Suggested for you</span>
        <span>See All</span>
      </p>

      <Suggestion />
      <Suggestion />
      <Suggestion />
      <Suggestion />
      <Suggestion />

      <div className="text-gray-400 mt-8 text-sm">
        <p className="my-3">
          About . Help . Press . API . Jobs . Privacy . Terms . Locations .
          Language . Meta Verified
        </p>
        <p>
          &copy; 2023 INSTAGRAM -{" "}
          <span className="font-bold text-blue-500">SAMUEL M. O.</span>
        </p>
      </div>
    </div>
  );
};

export default RightSide;

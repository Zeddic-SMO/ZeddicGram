import React from "react";

const Suggestion = () => {
  return (
    <div className="flex justify-between w-full my-2">
      <div className="flex items-center gap-3">
        <img
          src="/img/follow.jpg"
          alt=""
          className="w-7 h-7 rounded-full inline-block"
        />
        <p>
          <span className="font-bold">T.I.P</span> <br />
          <span className="text-sm text-gray-400">Follows you</span>
        </p>
      </div>
      <div>
        <span className="text-blue-600 cursor-pointer">Follow</span>
      </div>
    </div>
  );
};

export default Suggestion;

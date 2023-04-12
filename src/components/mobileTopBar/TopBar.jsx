import { FavoriteBorder, SearchOutlined } from "@mui/icons-material";
import React from "react";

const TopBar = () => {
  return (
    <div className="lg:hidden flex justify-between border-b-[1px] py-5 items-center sticky top-0 mb-3 mx-auto z-40 bg-black">
      <div className="text-xl font-serif">ZeddicGram</div>
      <div className="w-[50%] md:w-3/5 bg-gray-600 px-2 rounded-md flex items-center">
        <SearchOutlined
          fontSize="small"
          className="cursor-pointer hover:text-blue-400"
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none p-1 md:p-2"
        />
      </div>
      <div className="">
        <FavoriteBorder fontSize="large" />
      </div>
    </div>
  );
};

export default TopBar;

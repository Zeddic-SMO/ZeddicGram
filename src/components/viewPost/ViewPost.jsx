import React, { useContext } from "react";
import Feed from "../feed/Feed";
import { Cancel } from "@mui/icons-material";
import { GlobalProvider } from "../../context/GlobalContext";

const ViewPost = () => {
  const { setViewPost } = useContext(GlobalProvider);
  return (
    <div className="z-50 fixed top-0 w-full h-full bg-[rgba(0,0,0,0.77)] flex justify-center items-center">
      <div className="w-[90%] md:w-[50%] text-white bg-black p-10 rounded-lg relative overflow-y-auto h-[550px] border-2 border-gray-400">
        <Cancel
          className="fixed right-5 top-5 cursor-pointer hover:text-red-900"
          fontSize="large"
          onClick={() => {
            setViewPost(false);
          }}
        />
        <Feed />
      </div>
    </div>
  );
};

export default ViewPost;

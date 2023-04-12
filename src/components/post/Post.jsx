import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const Post = () => {
  return (
    <div className="group w-[265px] h-[265px] mt-5 overflow-hidden relative">
      <img src="/img/api.png" alt="Post" className="w-[100%] h-[100%]" />
      <div className="invisible group-hover:visible flex  gap-7 text-white absolute bg-[rgba(0,0,0,0.5)] h-[100%] top-0 w-[100%]  justify-center items-center">
        <FavoriteIcon className="cursor-pointer" />
        <ChatBubbleIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Post;

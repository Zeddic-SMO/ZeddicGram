import React from "react";
import {
  BookmarkBorder,
  FavoriteBorder,
  MarkChatRead,
  MoreHoriz,
  Telegram,
} from "@mui/icons-material";

const Feed = ({ ViewPost }) => {
  const handleView = () => {
    ViewPost();
  };

  return (
    <div className="w-full md:w-[80%] mx-auto my-5 shadow-md border-b-[1px] pb-3 border-gray-400">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img
            src="/img/follow.jpg"
            alt="story feeed"
            className="w-10 h-10 rounded-full p-1 border-2 border-solid border-orange-600"
          />
          <div>
            <p className="font-bold">
              portraitbyadike
              <span className="text-gray-400"> . 1d</span>
            </p>
            <p className="text-sm text-gray-400">Conor Price. Bens .Spinin</p>
          </div>
        </div>
        <div>
          <MoreHoriz />
        </div>
      </div>
      <div>
        <img
          src="/img/api.png"
          alt="Feed"
          className="max-h-[450px] my-2 rounded-md"
        />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 my-3">
            <FavoriteBorder sx={{ fontSize: 28 }} className="cursor-pointer" />
            <MarkChatRead sx={{ fontSize: 28 }} className="cursor-pointer" />
            <Telegram sx={{ fontSize: 30 }} className="cursor-pointer" />
          </div>
          <div>
            <BookmarkBorder sx={{ fontSize: 30 }} className="cursor-pointer" />
          </div>
        </div>
        <p className="my-3 cursor-pointer" onClick={ViewPost && handleView}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          similique iusto fuga repellat beatae laboriosam neque ad quaerat dicta
          maiores?
        </p>
        <p>
          <input
            type="text"
            placeholder="Add Comment"
            className="w-4/5 bg-transparent my-2 p-2 outline-none"
          />
          <button type="button" className="w-1/5 text-blue-500 cursor-pointer">
            {" "}
            Post
          </button>
        </p>
        <p>14 likes</p>
      </div>
    </div>
  );
};

export default Feed;

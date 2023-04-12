import React, { useContext } from "react";
import Feed from "../feed/Feed";
import TopBar from "../mobileTopBar/TopBar";
import Story from "../story/Story";
import { GlobalProvider } from "../../context/GlobalContext";

const Feeds = () => {
  const { ViewPost } = useContext(GlobalProvider);
  return (
    <div className="md:ml-[20%] md:pt-10 md:w-3/6 px-5">
      <TopBar />

      <div className="flex">
        <Story />
        <Story />
        <Story />
      </div>

      <div className="flex flex-col justify-center">
        <Feed ViewPost={ViewPost} />
        <Feed ViewPost={ViewPost} />
        <Feed ViewPost={ViewPost} />
      </div>
    </div>
  );
};

export default Feeds;

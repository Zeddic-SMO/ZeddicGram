import { Link } from "react-router-dom";
import {
  Home,
  Search,
  Explore,
  GroupWork,
  Telegram,
  FavoriteBorder,
  AddBox,
  Menu,
} from "@mui/icons-material";
import { useContext } from "react";
import { GlobalProvider } from "../../context/GlobalContext";

const LeftSide = () => {
  const { setCreatePost, setSearcBox } = useContext(GlobalProvider);
  return (
    <div className="w-full fixed bottom-0 z-40 bg-black border-t-2 border-gray-600 pt-2 md:top-0 md:left-0  md:p-10 md:w-1/5 md:border-r-[1px] md:border-gray-600 md:border-t-0">
      <div className="flex justify-between gap-3 px-1 md:flex-col">
        <Link to="/">
          <div className="leftSide_icon_container md:hover:bg-gray-500 p-2 rounded-2xl cursor-pointer">
            <Home fontSize="large" />
            <span className="hidden lg:inline-block ml-4">Home</span>
          </div>
        </Link>

        <div
          className="leftSide_icon_container hidden md:inline-block  md:hover:bg-gray-500 p-2 rounded-2xl cursor-pointer"
          onClick={() => {
            setSearcBox(true);
          }}
        >
          <Search fontSize="large" />
          <span className="hidden lg:inline-block ml-4">Search</span>
        </div>

        <div className="leftSide_icon_container  md:hover:bg-gray-500 p-2 rounded-2xl cursor-pointer">
          <Explore fontSize="large" />
          <span className="hidden lg:inline-block ml-4">Explore</span>
        </div>

        <div className="leftSide_icon_container  md:hover:bg-gray-500 p-2 rounded-2xl cursor-pointer">
          <GroupWork fontSize="large" />
          <span className="hidden lg:inline-block ml-4">Reels</span>
        </div>

        <div className="leftSide_icon_container  md:hover:bg-gray-500 p-2 rounded-2xl cursor-pointer">
          <Telegram fontSize="large" />
          <span className="hidden lg:inline-block ml-4">Message</span>
        </div>

        <div className="leftSide_icon_container hidden md:inline-block  md:hover:bg-gray-500 p-2 rounded-2xl cursor-pointer">
          <FavoriteBorder fontSize="large" />
          <span className="hidden lg:inline-block ml-4">Notification</span>
        </div>

        <div
          className="leftSide_icon_container  md:hover:bg-gray-500 p-2 rounded-2xl cursor-pointer"
          onClick={() => {
            setCreatePost(true);
          }}
        >
          <AddBox fontSize="large" />
          <span className="hidden lg:inline-block ml-4">Create</span>
        </div>

        <Link to="/profile">
          <div className="leftSide_icon_container  md:hover:bg-gray-500 p-2 rounded-2xl cursor-pointer">
            <img
              src="/img/user.png"
              alt=""
              className="w-8 h-8 rounded-full inline-block"
            />
            <span className="hidden lg:inline-block ml-4">Profile</span>
          </div>
        </Link>

        <div className="leftSide_icon_container hidden md:inline-block  md:hover:bg-gray-500 p-2 rounded-2xl cursor-pointer">
          <Menu />
          <span className="hidden lg:inline-block ml-4">More</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;

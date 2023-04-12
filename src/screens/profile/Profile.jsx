import React from "react";
import LeftSide from "../../components/leftSide/LeftSide";
import {
  FilterVintage,
  FolderShared,
  TurnedInNot,
  Widgets,
} from "@mui/icons-material";
import Post from "../../components/post/Post";

const Profile = () => {
  return (
    <div className="text-white">
      <LeftSide />
      <div className="bg-black md:p-10 md:ml-[20%] md:min-h-screen">
        {/* Desktop Top Profile Bar */}
        <div className="hidden md:flex md:gap-16 items-center md:px-20">
          <img
            src="/img/user.png"
            alt="Profile pic"
            className="w-36 h-36 rounded-full"
          />
          <div>
            <p className="text-lg flex gap-6 items-center">
              <span>Zeddic_smo</span>
              <span className="text-sm py-1 px-3 bg-slate-100 text-gray-900 rounded-lg cursor-pointer">
                Edit profile
              </span>
              <span className="cursor-pointer">
                <FilterVintage />
              </span>
            </p>

            <p className="py-3 flex gap-6">
              <span>1 post</span>
              <span>46 followers</span>
              <span>35 followings</span>
            </p>
            <p className="text-sm font-bold">Samuel M. O.</p>
            <p className="text-sm font-bold">
              Frontend Engineer | ReactJs | Tailwind CSS | Bootstrap
            </p>
          </div>
        </div>

        {/* Mobile Top Profile Bar */}
        <div className="md:hidden px-5 pt-5">
          <div className="flex gap-10 items-center">
            <img
              src="/img/user.png"
              alt="Profile pic"
              className="w-20 h-20 rounded-full"
            />
            <div className="w-[50%]">
              <p className="flex gap-10">
                <span>Zeddic-smo</span>
                <span className="cursor-pointer">
                  <FilterVintage />
                </span>
              </p>
              <p className="bg-gray-200 text-black text-center mt-3 rounded-md cursor-pointer">
                Edit Profile
              </p>
            </div>
          </div>
          <div className="mt-5 text-[12px]">
            <p>Samuel M. O.</p>
            <p>Frontend Engineer | ReactJs | Tailwind CSS | Bootstrap</p>
          </div>
        </div>
        {/* End of Mobile */}

        <hr className="border-gray-600 border-1 w-full mt-10" />

        <p className="flex justify-center gap-10 md:gap-28 text-sm">
          <span className="border-t-2 border-gray-200 px-2 py-3 cursor-pointer">
            <Widgets sx={{ fontSize: 18 }} /> POSTS
          </span>
          <span className="px-2 py-3 cursor-pointer text-gray-400">
            <TurnedInNot sx={{ fontSize: 18 }} /> SAVED
          </span>
          <span className="px-2 py-3 cursor-pointer text-gray-400">
            <FolderShared sx={{ fontSize: 18 }} /> TAGGED
          </span>
        </p>

        <div className="flex flex-wrap gap-5 justify-center">
          <Post />
          <Post />
          <Post />
        </div>

        <div className="mt-10 text-[12px] text-gray-500">
          <p className="hidden md:flex justify-center gap-6">
            <span>Meta</span>
            <span>About</span>
            <span>Jobs</span>
            <span>Help</span>
            <span>API</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Top Accounts</span>
            <span>Locations</span>
            <span>Instagram Lite</span>
            <span> Contact Uploading & Non-Users</span>
            <span>Meta Verified</span>
          </p>
          <p className="flex justify-center pb-24 md:pb-0 text-gray-100">
            &copy; {new Date().getFullYear()} - Instagram || Designed By Samuel
            M. O.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

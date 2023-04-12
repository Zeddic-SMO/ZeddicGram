import { Cancel } from "@mui/icons-material";
import React, { useContext } from "react";
import { GlobalProvider } from "../../context/GlobalContext";

const Create = () => {
  const { setCreatePost } = useContext(GlobalProvider);
  return (
    <div className="z-50 fixed top-0 w-full h-full bg-[rgba(0,0,0,0.77)] flex justify-center items-center">
      <div className="md:w-[40%] text-white bg-black p-10 rounded-lg relative border-2 border-gray-400">
        <Cancel
          fontSize="large"
          className="fixed right-5 top-5 cursor-pointer hover:text-red-900"
          onClick={() => {
            setCreatePost(false);
          }}
        />

        <label htmlFor="caption">Write a caption:</label>
        <textarea
          name=""
          id="caption"
          cols="10"
          rows="5"
          className="w-full bg-gray-200 text-black rounded-md"
        ></textarea>
        <input type="file" />
        <div className="flex justify-end">
          <button
            type="submit"
            className="block mt-5 py-1 px-5 bg-blue-600 rounded-md text-center hover:bg-blue-300 hover:text-black"
          >
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;

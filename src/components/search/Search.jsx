import { Cancel, SearchOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { GlobalProvider } from "../../context/GlobalContext";

const Search = () => {
  const { setSearcBox } = useContext(GlobalProvider);
  return (
    <div className="z-50 fixed top-0 w-full h-full bg-[rgba(0,0,0,0.77)] flex justify-center items-center">
      <div className="mx-5 px-5 w-full md:w-[45%] h-[500px] relative flex justify-center items-center text-white">
        <Cancel
          className="fixed right-5 top-5 cursor-pointer hover:text-red-900"
          fontSize="large"
          onClick={() => {
            setSearcBox(false);
          }}
        />

        <div className="w-full flex border-2 bg-gray-700 border-gray-400 rounded-2xl justify-between items-center px-3">
          <input
            type="text"
            placeholder="Search for a user"
            className="p-5 bg-transparent  text-lg text-gray-100 outline-none w-4/5"
          />
          <SearchOutlined fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Search;

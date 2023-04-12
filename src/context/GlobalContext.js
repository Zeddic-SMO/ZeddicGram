import { createContext, useState } from "react";

export const GlobalProvider = createContext();

const GlobalContext = ({ children }) => {
  const [createPost, setCreatePost] = useState(false);
  const [viewPost, setViewPost] = useState(false);
  const [searchBox, setSearcBox] = useState(false);
  // View Post
  const ViewPost = () => {
    setViewPost(true);
  };

  const store = {
    createPost,
    setCreatePost,
    viewPost,
    ViewPost,
    setViewPost,
    searchBox,
    setSearcBox,
  };

  return (
    <GlobalProvider.Provider value={store}>{children}</GlobalProvider.Provider>
  );
};

export default GlobalContext;

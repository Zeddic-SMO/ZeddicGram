import { useContext } from "react";
import "./App.css";
import Create from "./components/create/Create";
import AppRoutes from "./routes";
import { GlobalProvider } from "./context/GlobalContext";
import ViewPost from "./components/viewPost/ViewPost";
import Search from "./components/search/Search";

function App() {
  const { createPost, viewPost, searchBox } = useContext(GlobalProvider);

  return (
    <div className="App">
      {createPost && <Create />}
      {viewPost && <ViewPost />}
      {searchBox && <Search />}
      <AppRoutes />
    </div>
  );
}

export default App;

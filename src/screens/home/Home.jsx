import LeftSide from "../../components/leftSide/LeftSide";
import Feeds from "../../components/feeds/Feeds";
import RightSide from "../../components/rightSide/RightSide";

const Home = () => {
  return (
    <>
      <div className="bg-black text-white relative min-h-screen h-full md:flex">
        <LeftSide />
        <Feeds />
        <RightSide />
      </div>
    </>
  );
};

export default Home;

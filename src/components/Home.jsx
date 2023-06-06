import Movie from "./Movie/Movie";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Movie></Movie>
    </div>
  );
};

export default Home;

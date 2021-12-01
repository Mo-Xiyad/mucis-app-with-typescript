import React from "react";
import Search from "../search/Search";
import Songs from "../songs/Songs";
import "./home.css";

const Home = () => {
  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center">
        <div className="mainName">
          <h1 className="d-inline">PøP</h1>
          <span>Search</span>
        </div>
      </div>
      <div>
        <Search />
      </div>
      <Songs />
    </div>
  );
};
export default Home;

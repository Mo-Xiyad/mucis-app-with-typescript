import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { IAlbums } from "../../types/albums";
import Search from "../search/Search";
import Songs from "../songs/Songs";
import "./home.css";

const Home = () => {
  const [albumData, setAlbumData] = useState<IAlbums[]>([]);

  const dayOne = async () => {
    try {
      const response = await fetch(`https://adventofcode.com/2021/day/1/input`);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dayOne();
  });

  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center">
        <div className="mainName">
          <h1 className="d-inline">PøP</h1>
          <span>Search</span>
        </div>
      </div>
      <div>
        <Search setAlbumData={setAlbumData} />
      </div>
      <Row>
        {albumData && albumData.map((data, i) => <Songs key={i} data={data} />)}
      </Row>
    </div>
  );
};
export default Home;

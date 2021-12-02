import { useState } from "react";
import { Row } from "react-bootstrap";
import { IAlbumData } from "../../types/albums";
import Search from "../search/Search";
import Songs from "../songs/Songs";
import "./home.css";

const Home = () => {
  // const [albumData, setAlbumData] = useState<IAlbums>([]); // works the same since we are assigning IAlbumData to a variable called IAlbums
  const [albumData, setAlbumData] = useState<IAlbumData[]>([]);

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

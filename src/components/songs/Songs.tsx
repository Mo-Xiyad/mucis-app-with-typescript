import React from "react";
import { Image } from "react-bootstrap";
import "./songs.css";
interface SearchComponentProps {
  data: any;
}

const Songs = ({ data }: SearchComponentProps) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-1 mb-2">
      <div className="card pt-2 rp-card">
        <a href="./Album.html" className="card-link">
          <Image
            className="recent-ply-card-img"
            src={data.album.cover}
            alt="Card image cap"
          />
        </a>
        <div className="card-body card-text-paragraph">
          <h6 className="pb-0 mb-1">{data.title_short}</h6>
          <p className="pb-0 mb-1">{data.album.title}</p>
          <small>{data.artist.name}</small>
        </div>
      </div>
    </div>
  );
};
export default Songs;

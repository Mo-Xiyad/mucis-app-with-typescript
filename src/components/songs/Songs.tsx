import React from "react";
import { Image } from "react-bootstrap";
import "./songs.css";

const Songs = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-1 mb-2">
        <a href="#" className="card-link"></a>
        <div className="card pt-2 rp-card">
          <a href="./Album.html" className="card-link">
            <Image
              className="recent-ply-card-img"
              src="https://images-na.ssl-images-amazon.com/images/I/71WVq7VqUkL._AC_SX522_.jpg"
              alt="Card image cap"
            />
            <div className="card-body card-text-paragraph">
              <p className="pb-0 mb-1">Queen</p>
              <small>Bohemian Rhapsody</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Songs;

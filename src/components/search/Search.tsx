import React from "react";
import { Button, Form } from "react-bootstrap";
import "./search-bar.css";
import { useEffect, useState } from "react";
import { IAlbumData } from "../../types/albums";

interface SearchComponentProps {
  setAlbumData: React.Dispatch<React.SetStateAction<IAlbumData[]>>;
}

const Search = ({ setAlbumData }: SearchComponentProps) => {
  const [query, setQuery] = useState("Iron maiden");

  const performSearch = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      if (response.ok) {
        // let { data }: { data: IAlbums } = await response.json(); // this works well as well but without the [] since we are exporting in a different way
        let { data }: { data: IAlbumData[] } = await response.json();
        // data here is going to give everything that comes from the API,
        // however you will only be able to access the fields you have mentions in your interface
        // EX: console.log(data[0].type);
        setAlbumData(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    performSearch();
  }, [query]);

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <Form.Control
              type="text"
              className="search_input d-inline"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
            />
            <Button
              className="search_icon d-inline"
              // onClick={() => dispatch(searchResultsAction(query))}
            >
              <i className="fas fa-search" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

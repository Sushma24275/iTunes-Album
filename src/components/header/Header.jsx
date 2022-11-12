import "./header.scss";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import logo from "../../assets/icons8-phonograph-96.png";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

//this is header component with seach and filters
function Header({ setSearchVal, searchVal, setCategoryVal }) {
  const [categoryNames, setCategoryNames] = useState([]);
  const albums = useSelector((state) => state.albums.allAlbums);
  const favouriteAlbums = useSelector((state) => state.albums.favouriteAlbums);

  useEffect(() => {
    const categoryNamesValues = albums.map((item) => {
      return item.category.attributes.label;
    });
    setCategoryNames([...new Set(categoryNamesValues)]);
  }, [categoryNames]);

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  const handleClearBtn = () => {
    setSearchVal("");
  };

  return (
    <div className="container">
      <h1 className="title">MyTunes</h1>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="input-wrap">
        <BsSearch />
        <label for="product-search" id="input-label">
          Product Search
        </label>
        <input
          onChange={handleInput}
          value={searchVal}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search an album"
        />
        <div onClick={handleClearBtn}>
          <AiOutlineClose />
        </div>
      </div>
      <div className="categories-container">
        {categoryNames.length > 0 && (
          <Autocomplete
            multiple
            id="tags-outlined"
            options={categoryNames}
            getOptionLabel={(categoryNames) => categoryNames}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Categories"
                placeholder="Categories"
              />
            )}
            onChange={(e, value) => setCategoryVal(value)}
          />
        )}
      </div>
      <Link className="favoutires--container" to="/favourites">
        <BsHeartFill />
        {favouriteAlbums.length > 0 && <span>{favouriteAlbums.length}</span>}

        <p>Favourites</p>
      </Link>
    </div>
  );
}

export default Header;

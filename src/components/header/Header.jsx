import "./header.scss";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

function Header({ setSearchVal, searchVal, setCategoryVal }) {
  const [categoryNames, setCategoryNames] = useState([]);
  const albums = useSelector((state) => state.albums.allAlbums);
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
    <div class="headerContainer">
      <div className="container">
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
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import "./Favourites.scss";
import { Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";

function Favourites() {
  const favouriteAlbums = useSelector((state) => state.albums.favouriteAlbums);
  return (
    <div className="favourites__wrapper">
      <Link to="/" className="back_button">
        <IoArrowBackCircleSharp fill="white" />
        <h2>Favourites</h2>
      </Link>

      <div className="favourites__albums">
        {favouriteAlbums.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;

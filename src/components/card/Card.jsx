import React, { useState } from "react";
import styles from "./Card.module.css";
import { BsSuitHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addFavouriteAlbums,
  removeFavouriteAlbums,
} from "../../slice/AlbumSlice";
import { toast } from "react-toastify";

function Card({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const OnCickOfSingleAlbum = () => {
    navigate(`${item.id.attributes["im:id"]}`);
  };
  const [isFavourited, setIsFavourited] = useState(false);

  const addToFavourite = async (e, item) => {
    e.stopPropagation();
    setIsFavourited((prev) => !prev);
    if (!isFavourited) {
      dispatch(addFavouriteAlbums(item));

      toast(`${item["im:name"].label} is added to favourites 😃😃`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch(removeFavouriteAlbums(item));

      toast(`${item["im:name"].label} is removed from favourites 😞😞`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div class={styles.card} onClick={OnCickOfSingleAlbum}>
      <div class={styles.cover}>
        <img src={item["im:image"][2].label} alt="cover" />

        <span class={styles.categoryLabel}>
          {item.category.attributes.label}
        </span>
      </div>
      <div class={styles.cardContent}>
        <div class={styles.cardContentLeft}>
          <h4>{item["im:name"].label}</h4>

          <p>{item["im:artist"].label}</p>
        </div>
        <div
          class={styles.cardContentRight}
          onClick={(e) => addToFavourite(e, item)}
        >
          <BsSuitHeart color={isFavourited ? `red` : ``} />
        </div>
      </div>
    </div>
  );
}

export default Card;

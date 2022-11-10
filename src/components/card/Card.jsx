import React from "react";
import styles from "./Card.module.css";
import { BsSuitHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Card({ item }) {
  const navigate = useNavigate();
  const OnCickOfSingleAlbum = () => {
    navigate(`${item.id.attributes["im:id"]}`);
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
        <div class={styles.cardContentRight}>
          <BsSuitHeart />
        </div>
      </div>
    </div>
  );
}

export default Card;

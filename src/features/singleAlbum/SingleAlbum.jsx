import React from "react";
import styles from "./SingleAlbum.module.css";
import { BsSuitHeart } from "react-icons/bs";

function SingleAlbum({ item }) {
  return (
    <div class={styles.card}>
      <div class={styles.cover}>
        <img src={item["im:image"][2].label} alt="cover" />
        {/* <div class="play-icon">
          <i class="fa fa-play"></i>
        </div> */}
        <span class={styles.categoryLabel}>
          {item.category.attributes.label}
        </span>
      </div>
      <div class={styles.cardContent}>
        <div class={styles.cardContentLeft}>
          <h4>{item["im:name"].label}</h4>
          {/* <a href={item["im:artist"].attributes.href}>
          {item["im:artist"].label}
        </a> */}
          {/* <a href="#"> */}
          <p>{item["im:artist"].label}</p>

          {/* </a> */}
        </div>
        <div class={styles.cardContentRight}>
          <BsSuitHeart />
        </div>
      </div>
    </div>
  );
}

export default SingleAlbum;

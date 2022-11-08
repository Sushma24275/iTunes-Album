import React, { useEffect, useState } from "react";
import SingleAlbum from "../singleAlbum/SingleAlbum";
import styles from "./Album.module.css";
import { getAlbums } from "./albumAPI";

const Album = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbumsData = async () => {
      const albumdata = await getAlbums();
      console.log("hello", albumdata);
      setAlbums(albumdata.entry);
    };
    getAlbumsData();
  }, []);

  return (
    <div class={styles.albumContainer}>
      {albums && albums.map((item) => <SingleAlbum item={item} />)}
      <br />
    </div>
  );
};

export default Album;

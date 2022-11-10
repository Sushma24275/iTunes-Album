import React, { useEffect, useState } from "react";
import { Card } from "../../components";
import styles from "./Home.module.css";
import { getAlbums } from "./albumAPI";

const Home = () => {
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
      {albums && albums.map((item) => <Card item={item} />)}
      <br />
    </div>
  );
};

export default Home;

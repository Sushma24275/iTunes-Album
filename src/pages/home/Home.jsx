import React, { useEffect, useState } from "react";
import { Card } from "../../components";
import styles from "./Home.module.css";
import { getAlbums } from "./albumAPI";
import { useDispatch } from "react-redux";
import { addAlbums } from "../../slice/AlbumSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbumsData = async () => {
      const albumdata = await getAlbums();
      setAlbums(albumdata.entry);
      dispatch(addAlbums(albumdata.entry));
    };
    getAlbumsData();
  }, []);

  return (
    <div className={styles.albumContainer}>
      {albums && albums.map((item) => <Card item={item} />)}
      <br />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { Card, Header } from "../../components";
import styles from "./Home.module.css";
import { getAlbums } from "./albumAPI";
import { useDispatch } from "react-redux";
import { addAlbums } from "../../slice/AlbumSlice";
import { useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums.allAlbums);
  const [searchVal, setSearchVal] = useState("");
  const [searchedAlbums, setSearchedAlbums] = useState([]);
  useEffect(() => {
    const getAlbumsData = async () => {
      const albumdata = await getAlbums();
      dispatch(addAlbums(albumdata.entry));
    };
    getAlbumsData();
  }, []);

  useEffect(() => {
    const searchedItems = albums.filter((item) => {
      return item["im:name"].label
        .toLowerCase()
        .includes(searchVal.toLowerCase());
    });
    setSearchedAlbums(searchedItems);
  }, [searchVal]);

  return (
    <>
      <Header searchVal={searchVal} setSearchVal={setSearchVal} />
      <div className={styles.albumContainer}>
        {searchVal ? (
          searchedAlbums.length > 0 ? (
            searchedAlbums.map((item) => <Card item={item} />)
          ) : (
            <p>sorry</p>
          )
        ) : (
          albums && albums.map((item) => <Card item={item} />)
        )}
        <br />
      </div>
    </>
  );
};

export default Home;

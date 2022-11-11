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
  const [categoryVal, setCategoryVal] = useState([]);
  const [categoryAlbums, setCategoryAlbums] = useState([]);

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

  useEffect(() => {
    if (searchedAlbums.length > 0) {
      const categoryItems = searchedAlbums.filter((item) => {
        return categoryVal.includes(item.category.attributes.label);
      });
      setCategoryAlbums(categoryItems);
    } else {
      const categoryItems = albums.filter((item) => {
        return categoryVal.includes(item.category.attributes.label);
      });
      setCategoryAlbums(categoryItems);
    }
  }, [categoryVal]);

  const testing = () => {
    let ans;
    if (searchedAlbums.length > 0) {
      if (categoryAlbums.length > 0) {
        ans = categoryAlbums.map((item) => <Card item={item} />);
      } else {
        ans = searchedAlbums.map((item) => <Card item={item} />);
      }
    } else if (categoryAlbums.length > 0) {
      ans = categoryAlbums.map((item) => <Card item={item} />);
    } else {
      ans = albums.map((item) => <Card item={item} />);
    }
    return ans;
  };

  return (
    <>
      <Header
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        setCategoryVal={setCategoryVal}
      />
      <div className={styles.albumContainer}>{testing()}</div>
    </>
  );
};

export default Home;

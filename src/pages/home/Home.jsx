import React, { useEffect, useState } from "react";
import { Card, Header } from "../../components";
import "./Home.scss";
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

  //run useEffect when the component renders
  useEffect(() => {
    const getAlbumsData = async () => {
      const albumdata = await getAlbums();
      dispatch(addAlbums(albumdata.entry));
    };
    getAlbumsData();
  }, []);

  //run useEffect when the component gets the dependency( when an album is searched)
  useEffect(() => {
    const searchedItems = albums.filter((item) => {
      return item["im:name"].label
        .toLowerCase()
        .includes(searchVal.toLowerCase());
    });
    setSearchedAlbums(searchedItems);
  }, [searchVal]);

  //run useEffect when category is filtered
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

  //display albums based on the search/filter/no-filter
  const displayAlbums = () => {
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
      <div className="albumContainer">{displayAlbums()}</div>
    </>
  );
};

export default Home;

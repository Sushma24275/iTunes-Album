import React, { useEffect, useState } from "react";
import { getAlbums } from "../home/albumAPI";
import "./SingleAlbum.scss";

function SingleAlbum() {
  const [albums, setAlbums] = useState([]);
  const [selectedSong, setSelectedSong] = useState([]);

  useEffect(() => {
    const getAlbumsData = async () => {
      const albumdata = await getAlbums();
      console.log("hello----->>>>", albumdata.entry);
      setAlbums(albumdata.entry);
    };
    getAlbumsData();
  }, []);

  useEffect(() => {
    if (albums) {
      let selectedSongDetails = albums.filter(
        (item) =>
          item.id.attributes["im:id"] === window.location.pathname.slice("1")
      );
      console.log("selectedSongDetails", selectedSongDetails);
      setSelectedSong(selectedSongDetails);
    }
  }, [albums]);

  return (
    <h1>
      {selectedSong && (
        <div className={"album_wrapper"}>
          <div className={"album_wrapper__header"}>
            <img src={selectedSong[0]?.["im:image"][2].label} alt="cover" />
          </div>
          <div className={"album_wrapper__description"}>
            <img src={selectedSong[0]?.["im:image"][2].label} alt="cover" />
            <div className={"album_wrapper__description--text"}>
              <h5>{selectedSong[0]?.["im:name"].label}</h5>
              <h6>
                <span>Artist </span>
                <span className="colon">:</span>
                {selectedSong[0]?.["im:artist"].label}
              </h6>
              <h6>
                <span>Category </span>

                {selectedSong[0]?.category.attributes.label}
              </h6>

              <h6>
                <span>Price </span>
                <span className="colon">:</span>
                {selectedSong[0]?.["im:price"].label}
              </h6>
              <h6>
                <span>Songs </span>
                <span className="colon">:</span>
                {selectedSong[0]?.["im:itemCount"].label}
              </h6>
            </div>
          </div>
          <div className={"album_wrapper__footer"}>
            <h6>Release Date: {selectedSong[0]?.["im:releaseDate"].label}</h6>
            <h6>
              <span>iTune Link </span>
              <span className="colon">:</span>
              <a href={selectedSong[0]?.link.attributes.href}>
                {selectedSong[0]?.link.attributes.href}
              </a>
            </h6>
            <h6>{selectedSong[0]?.rights.label}</h6>
          </div>
        </div>
      )}
    </h1>
  );
}

export default SingleAlbum;

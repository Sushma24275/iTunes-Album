import axios from "axios";

export const getAlbums = async () => {
  //to fetch the data from the json structure
  const response = await axios
    .get(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
    .then((res) => res.data);

  return response.feed;
};

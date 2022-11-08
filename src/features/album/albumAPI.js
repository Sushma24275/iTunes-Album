import axios from "axios";

export const getAlbums = async () => {
  const response = await axios
    .get(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
    .then((res) => res.data);

  return response.feed;
};

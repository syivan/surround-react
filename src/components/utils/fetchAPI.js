import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "5",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YT_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

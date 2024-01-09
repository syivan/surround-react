import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com/";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "40",
  },
  headers: {
    //"X-RapidAPI-Key": "9f6204e562mshaf3737f86e5fb9cp13ca08jsnab12cce41ea3",
    "X-RapidAPI-Key": process.env.REACT_APP_YT_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}${url}`, options);
  return data;
};

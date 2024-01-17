import axios from "axios";
// api_key: process.env.REACT_APP_API_KEY,

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "7877c72cbc92fd16ac30cd42d78d352d",
    language: "es-ES",
  },
});

export default movieDB;
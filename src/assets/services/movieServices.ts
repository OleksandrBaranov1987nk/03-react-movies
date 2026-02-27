import axios from "axios";
import type { Movie } from "../Types/movie";

interface MovieResponse {
  results: Movie[];
}


const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = "https://api.themoviedb.org/search/movie";

export async function fetchMovies(query: string): Promise<Movie[]> {
  const res = await axios.get<MovieResponse>(BASE_URL, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },

    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return res.data.results;
}

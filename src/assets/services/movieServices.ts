import axios from "axios";
import type { Movie } from "../Types/movie";

interface MovieResponse {
  results: Movie[];
}

const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export async function fetchMovies(query: string): Promise<Movie[]> {
  if (!API_TOKEN) {
    throw new Error(
      "VITE_TMDB_TOKEN is missing. Add it to .env and Vercel env vars.",
    );
  }

  const res = await axios.get<MovieResponse>(BASE_URL, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  return res.data.results;
}

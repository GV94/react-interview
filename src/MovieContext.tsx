import React from "react";
import { Movie } from "./types";
export const MovieContext = React.createContext<{ movies: Movie[] }>({
  movies: [],
});

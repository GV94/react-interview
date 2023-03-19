import { FC, useContext } from "react";
import { MovieContext } from "./MovieContext";

export const MovieList: FC = () => {
  const ctx = useContext(MovieContext);
  return (
    <div>
      {ctx.movies?.map((movie) => (
        <li key={movie.id}>
          {movie.year}: {movie.title}
        </li>
      ))}
    </div>
  );
};

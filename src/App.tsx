import { useEffect, useReducer, useRef } from "react";
import "./App.css";
import { MovieContext } from "./MovieContext";
import { MovieList } from "./MovieList";
import { Movie, SearchResult, SearchResultListItem } from "./types";

const useMovieSearch = (): [
  (query?: string) => Promise<void>,
  { movies: Movie[] }
] => {
  const [state, dispatch] = useReducer(
    (
      state: { movies: Movie[] },
      action: { type: "SET_MOVIES"; payload: Movie[] }
    ) => {
      switch (action.type) {
        case "SET_MOVIES":
          return { movies: action.payload };
        default:
          return state;
      }
    },
    { movies: [] }
  );
  const search = async (query?: string) => {
    if (!query) return;
    const response = await fetch(
      `http://www.omdbapi.com/?s=${query}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = (await response.json()) as SearchResult;
    dispatch({
      type: "SET_MOVIES",
      payload: data.Search.map(
        (mov: SearchResultListItem): Movie => ({
          id: mov.imdbID,
          title: mov.Title,
          year: mov.Year,
        })
      ),
    });
  };

  return [search, state];
};

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, state] = useMovieSearch();

  useEffect(() => {
    console.log(inputRef.current?.value);
  });
  return (
    <div className="App">
      <h1>OMDB Search 📽🍿</h1>
      <h4>Refer to the instructions in the readme</h4>
      <input ref={inputRef} />
      <button onClick={async () => await search(inputRef.current?.value)}>
        Search
      </button>
      <MovieContext.Provider value={{ movies: state.movies }}>
        <MovieList />
      </MovieContext.Provider>
    </div>
  );
}

export default App;

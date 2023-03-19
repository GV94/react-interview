export type SearchResultListItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
export type SearchResult = {
  Search: SearchResultListItem[];
};

export type Movie = {
  id: string;
  title: string;
  year: string;
};

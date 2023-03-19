# React + TS Interview 💻🎤

**Problem Statement:**
Create a simple movie search application using React that allows users to search for movies and display the results in a list. The application should use the Open Movie Database (OMDb) API to fetch movie data. The application should be implemented by following the steps below.

## Step 1: State

Create a simple search box that allows users to enter a movie title. When the user types into the search box, update the component's state to reflect the current search query.

## Step 2: Data fetching

Use the [OMDB api](https://www.omdbapi.com/) to search for movies based on the search query typed into the search box from [step 1](#step-1-state). Log the retrived list to the console.

## Step 3: Props

Create a `MovieList` component that takes a list of movies as props and displays them in a grid. Each movie should display its title, year, plot, and imdb-rating. Pass the list of movies fetched from the API in [step 2](#step-2-data-fetching) as props to the `MovieList` component.

## Step 4: Context

Create a `MovieContext` to store the current list of movies. Use the useContext hook to access the context in the `MovieList` component.

## Step 5: Reducers

Create a reducer to update the `MovieContext` from [step 4](#step-4-context) with new search results.

## Step 6: Refs

Use a ref to keep track of the value of the search box, instead of state, while maintaining the current functionality of the application.

## Step 7: Hooks

Create a hook called `useMovieSearch` out of the movie search functionality. It should fulfill the following criteria:

- It should take no input
- It should return a function that lets you trigger a new search based on the current search query
- It should return a variable that holds the latest search results

## Step 8: useEffects

Use the useEffect hook to fetch the list of movies when the search query changes.

## Bonus:

- Implement pagination
- Use React Router to create a separate `MovieDetail` route, where the details of a single movie should be displayed.
- Use a "loader component" to indicate when data is being fetched from the API.
- Use your favorite external library, like [materialize]() or [styled components]() to style the application.

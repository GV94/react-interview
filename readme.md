# React + TS Interview 💻🎤

**Problem Statement:**
Create a simple movie search application using React that allows users to search for movies and display the results in a list. The application should use the Open Movie Database (OMDb) API to fetch movie data. The application should be implemented by following the steps below.

You are free to google as much as you like, treat the test like a day at work, not an exam. AI applications like chatGPT or github co-pilot should however not be used.

## Step 1: State

Create a simple search box that allows users to enter a movie title. When the user types into the search box, update the component's state to reflect the current search query.

## Step 2: Data fetching

Add a button next to the search box that says "Search". Use the [OMDB api](https://www.omdbapi.com/) to search for movies based on the search query typed into the search box from [step 1](#step-1-state), when the user presses this button. Log the retrived list to the console.

- An API-key has been provided for you. You can access it by referencing `import.meta.env.VITE_OMDB_API_KEY`.

## Step 3: Props

Create a `MovieList` component that takes a list of movies as props and displays them in a grid using css grid. Each movie should display its title, year, and poster image. Pass the list of movies fetched from the API in [step 2](#step-2-data-fetching) as props to the `MovieList` component.

## Step 4: Hooks

Create a hook called `useMovieSearch` out of the movie search functionality. It should fulfill the following criteria:

- It should take no input
- It should return a function that lets you trigger a new search based on the current search query
- It should return a variable that holds the latest search results

## Step 5: useEffects

Use the useEffect hook to fetch the list of movies when the search query changes.

## Step 6: Map, filter, sort, and reduce

- Use `map` to capitalize the title of all movies in the list
- Use `filter` to only show movies released after the year 2000.
- Use `reduce` to determine the most frequently used word in all the movie titles returned from your query. Display the result (word and frequency) in the `MovieList` component.
- Use `sort` to sort the results by release date, from most recent to oldest

Use the query `star wars` to verify your results

## Step 7: Context

Create a `MovieContext` to store the current list of movies. Use the useContext hook to access the context in the `MovieList` component.

## Step 8: Reducers

Create a reducer to update the `MovieContext` from [step 8](#step-8-context) with new search results. The reducer should be part the hook from [step 4](#step-4-hooks)

## Step 9: Refs

Use a ref to keep track of the value of the search box, instead of state.

## Bonus:

- Use React Router to create a separate `MovieDetail` route, where the details of a single movie should be fetched and displayed

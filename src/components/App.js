import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import { GoogleLogin } from "@react-oauth/google";

class App extends React.Component {
  state = {
    movies: [
      {
        id: 0,
        title: "Inception",
        year: 2010,
        director: "Christopher Nolan",
        genre: ["Action", "Sci-Fi", "Thriller"],
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        plot: "A thief who enters the dreams of others to steal secrets from their subconscious gets a chance to redeem himself by planting an idea into the mind of a CEO.",
        rating: 8.8,
      },
      {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        director: "Frank Darabont",
        genre: ["Drama"],
        actors: ["Tim Robbins", "Morgan Freeman"],
        plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        rating: 9.3,
      },
      {
        id: 2,
        title: "The Godfather",
        year: 1972,
        director: "Francis Ford Coppola",
        genre: ["Crime", "Drama"],
        actors: ["Marlon Brando", "Al Pacino", "James Caan"],
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        rating: 9.2,
      },
      {
        id: 3,
        title: "Pulp Fiction",
        year: 1994,
        director: "Quentin Tarantino",
        genre: ["Crime", "Drama"],
        actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        rating: 8.9,
      },
    ],
    searchQuery: "",
  };

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({ movies: newMovieList }));
  };

  searchMovie = (event) => {
    console.log(event.target.value);
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((m) => {
      return (
        m.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !==
        -1
      );
    });
    return (
      <>
        <div className="container">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          <div className="row">
            <div className="col-lg-12">
              <SearchBar searchProp={this.searchMovie} />
            </div>
          </div>
          <MovieList movies={filteredMovies} deleteProp={this.deleteMovie} />
        </div>
      </>
    );
  }
}

export default App;

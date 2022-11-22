import "./app.css";

import AppInfo from "../app-info/App-info";
import SearchPanel from "../search-panel/Search-panel";
import AppFilter from "../app-filter/App-filter";
import MovieList from "../movie-list/Movie-list";
import MoviesAddForm from "../movies-add-form/Movies-add-form";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// import Dars from "../../dars-mashqlari/Dars";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          name: "Empire of Osman",
          views: 811,
          favourite: false,
          like: false,
          id: 1,
        },
        {
          name: "Ertugrul",
          views: 705,
          favourite: false,
          like: false,
          id: 2,
        },
        {
          name: "Umar ibn Xattob",
          views: 1059,
          favourite: false,
          like: false,
          id: 3,
        },
      ],
    };
  }

  onToggleProp = (id, prop) => {
    this.setState(({ movies }) => {
      const newMovies = movies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, [prop]: !movie[prop] };
        }
        return movie;
      });
      return {
        movies: newMovies,
      };
    });
  };

  onDelete = (id) => {
    this.setState(({ movies }) => ({
      movies: movies.filter((c) => c.id !== id),
    }));
  };

  addMovie = (movie) => {
    const newMovie = {
      name: movie.name,
      views: movie.views,
      favourite: false,
      like: false,
      id: uuidv4(),
    };
    this.setState(({ movies }) => ({
      movies: [...movies, newMovie],
    }));
  };

  render() {
    const { movies } = this.state;
    const allMoviesCount = movies.length;
    const favouriteMoviesCount = movies.filter((c) => c.favourite).length;

    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo
            allMoviesCount={allMoviesCount}
            favouriteMoviesCount={favouriteMoviesCount}
          />
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList
            movies={movies}
            onDelete={this.onDelete}
            onToggleProp={this.onToggleProp}
          />
          <MoviesAddForm addMovie={this.addMovie} />
        </div>
      </div>
    );
  }
}

export default App;

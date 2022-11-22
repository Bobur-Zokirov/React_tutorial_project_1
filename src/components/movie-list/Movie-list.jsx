import { Component } from "react";
import MovieListItem from "../movie-list-item/Movie-list-item";
import "./movie-list.css";

class MovieList extends Component {

 render() {
  const { movies, onDelete, onToggleProp } = this.props;
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieListItem 
          key={movie.id} 
          name={movie.name} 
          views={movie.views} 
          favourite={movie.favourite}
          like={movie.like}
          onDelete={() => onDelete(movie.id)}
          onToggleProp={(e) => onToggleProp(movie.id, e.currentTarget.getAttribute('data-toggle'))}
        />
      ))}
    </ul>
  )
 }
}

export default MovieList
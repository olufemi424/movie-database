import React, { Component } from "react";
import Movie from "./Movie";
import Spinner from "../layouts/Spinner";

class MovieList extends Component {
  render() {
    let movieResults;
    const { movies, category, path } = this.props;
    if (movies) {
      movieResults = movies.map(movie => {
        return (
          <div key={movie.id} className="col-md-3 col-lg-2">
            <Movie movie={movie} path={path} />
          </div>
        );
      });
    } else {
      return <Spinner />;
    }
    return (
      <React.Fragment>
        <div className="category__title">
          <h2>{category}</h2>
        </div>
        <div className="category__card text-center">
          <div className="card__outer">{movieResults}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieList;

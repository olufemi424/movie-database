import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import Spinner from "../layouts/Spinner";

class MovieList extends Component {
  render() {
    let movieResults;
    const { movies, category, path, link } = this.props;
    if (movies) {
      movieResults = movies.map(movie => {
        return (
          <div key={movie.id}>
            <Movie movie={movie} path={path} />
          </div>
        );
      });
    } else {
      return <Spinner />;
    }
    return (
      <Fragment>
        <div>
          <h2 className="category__title">
            {" "}
            <Link to={link ? link : "/"}>{category}</Link>
          </h2>
        </div>
        <div className="category__card">
          <div className="card__outer">{movieResults}</div>
        </div>
      </Fragment>
    );
  }
}

export default MovieList;

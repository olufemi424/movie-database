import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

const Movie = ({ movie }) => {
  return (
    <Link to={`/${movie.id}`}>
      <Overdrive id={`${movie.id}`}>
        <div className="card mb-4 p-2 bg-dark">
          <img
            className="card-img-top img-fluid"
            src={`${POSTER_PATH}${movie.poster_path}`}
            alt="back drop path"
          />
          <h5 className="card-title p-3 text-light">
            {movie.title
              ? movie.title.substring(0, 10)
              : movie.name.substring(0, 10)}
          </h5>
        </div>
      </Overdrive>
    </Link>
  );
};

export default Movie;

// //check for proptypes
Movie.propTypes = {
  movie: PropTypes.shape({
    // title: PropTypes.string.isRequired
  }).isRequired,
  desc: PropTypes.string
};

Movie.defaultProps = {
  desc: "Description not available"
};

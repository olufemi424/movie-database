import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const POSTER_PATH = "https://image.tmdb.org/t/p/w200";

const Movie = ({ movie }) => {
  return (
    <div>
      {/* <h3>{movie.title}</h3> */}
      <Link to={`${movie.id}`}>
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt="back drop path" />
      </Link>
    </div>
  );
};

export default Movie;

// //check for proptypes
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired,
  desc: PropTypes.string
};

Movie.defaultProps = {
  desc: "Description not available"
};

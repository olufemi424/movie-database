import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import Overdrive from "react-overdrive";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

const Movie = props => {
  const { movie, path } = props;
  let route;
  if (movie.media_type) {
    route = movie.media_type;
  } else if (path === "tv") {
    route = "tv";
  } else {
    route = "movie";
  }

  return (
    <Link to={`${route}/${movie.id}`}>
      <Overdrive id={`${movie.id}`}>
        <div className="card">
          <img
            className="card__image"
            src={`${POSTER_PATH}${movie.poster_path}`}
            alt="back drop path"
          />
        </div>
      </Overdrive>
    </Link>
  );
};

export default withRouter(Movie);

// //check for proptypes
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  desc: PropTypes.string
};

Movie.defaultProps = {
  desc: "Description not available"
};

import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import Overdrive from "react-overdrive";
import defaultBackdrop from "../../img/backdrop.png";
import StarRatings from "react-star-ratings";

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
    <Link to={`/${route}/${movie.id}`}>
      <Overdrive id={`${movie.id}`}>
        <div className="card">
          <img
            className="card__image"
            src={
              movie.poster_path
                ? POSTER_PATH + movie.poster_path
                : defaultBackdrop
            }
            alt="back drop path"
          />
          <h6 className="flex__item-title">
            {movie.title
              ? movie.title.substring(0, 20)
              : movie.name.substring(0, 20)}{" "}
          </h6>
          <div style={{ width: 100, margin: "0 auto" }}>
            <StarRatings
              rating={movie.vote_average ? movie.vote_average / 2 : 5}
              starRatedColor="#FF982C"
              numberOfStars={5}
              starDimension="15px"
              starSpacing="3px"
              name="rating"
            />
          </div>
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

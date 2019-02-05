import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieDetails } from "../store/actions/movieActions";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import StarRatings from "react-star-ratings";
import errorPosterPath from "../img/posterpath.png";
import Spinner from "./layouts/Spinner";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieDetails extends Component {
  componentDidMount() {
    const { id } = this.props.movieId;
    //call action
    this.props.getMovieDetails(id);
  }

  render() {
    const { movieDetails } = this.props;

    if (movieDetails === undefined || Object.keys(movieDetails).length === 0) {
      return <Spinner />;
    } else {
      return (
        <MovieWrapper
          backdrop={`${
            movieDetails.backdrop_path
              ? BACKDROP_PATH + movieDetails.poster_path
              : errorPosterPath
          }`}
        >
          <MovieInfo>
            <Overdrive id={`${movieDetails.id}`}>
              <img
                src={
                  movieDetails.poster_path
                    ? POSTER_PATH + movieDetails.poster_path
                    : errorPosterPath
                }
                alt="Poster"
              />
            </Overdrive>
            <div className="info">
              <h2 className="mb-3">
                {movieDetails.title ? movieDetails.title : "Not Available"}
              </h2>
              <StarRatings
                rating={
                  movieDetails.vote_average ? movieDetails.vote_average : 5
                }
                starRatedColor="#FF982C"
                numberOfStars={10}
                starDimension="25px"
                starSpacing="3px"
                name="rating"
              />
              <h3 className="mt-4">
                {movieDetails.release_date
                  ? movieDetails.release_date
                  : "Not Available"}
              </h3>
              <p>{movieDetails.overview}</p>
            </div>
          </MovieInfo>
        </MovieWrapper>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movieDetails: state.movies.movie,
    movieId: ownProps.match.params
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieDetails: id => dispatch(getMovieDetails(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 55vh;
  width: 100%;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: center;
`;

const MovieInfo = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  color: #f4f4f4;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  grid-template-columns: repeat(2, 2fr);

  > .info {
    margin-left: 30px;
  }

  .ratingContainer {
    display: inline-block;
  }
  .rating {
    background-color: #ff982c;
    padding: 10px;
  }
  img {
    position: relative;
    top: -6rem;
    border-radius: 3px;
  }

  .rating {
    width: ;
  }
`;

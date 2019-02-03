import React, { Component } from "react";
import { connect } from "react-redux";
import { movieDetails } from "../store/actions/movieActions";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import StarRatings from "react-star-ratings";
import errorPosterPath from "../img/posterpath.png";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieDetail extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;
    //call action
    this.props.movieDetails(id);

    // const nwmmv = this.props.movie.movies.results.filter(mv => {
    //   return mv.id == 450465;
    // });
    // this.setState({
    //   movie: nwmmv[0]
    // });
  };

  render() {
    const { movie } = this.props.movie;
    return (
      <MovieWrapper
        backdrop={`${
          movie.backdrop_path
            ? BACKDROP_PATH + movie.poster_path
            : errorPosterPath
        }`}
      >
        <MovieInfo>
          <Overdrive id={`${movie.id}`}>
            <img
              src={
                movie.poster_path
                  ? POSTER_PATH + movie.poster_path
                  : errorPosterPath
              }
              alt="Poster"
            />
          </Overdrive>
          <div className="info">
            <h2 className="mb-3">
              {movie.title ? movie.title : movie.name || "Not Available"}
            </h2>
            <StarRatings
              rating={movie.vote_average ? movie.vote_average : 5}
              starRatedColor="#FF982C"
              numberOfStars={10}
              starDimension="25px"
              starSpacing="3px"
              name="rating"
            />
            <h3 className="mt-4">
              {movie.release_date ? movie.release_date : "Not Available"}
            </h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movies
});

const mapDispatchToProps = dispatch => {
  return {
    movieDetails: id => dispatch(movieDetails(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: center;
`;

const MovieInfo = styled.div`
  background: white;
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
    border-radius: 50%;
  }

  img {
    position: relative;
    top: -6rem;
  }

  .rating {
    width: ;
  }
`;

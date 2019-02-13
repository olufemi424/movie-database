import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "./Movie";

//TODO: SEARCH REASULTS HAVE THEIR OWN STORE STATE
class MovieResult extends Component {
  render() {
    const { movieSearchResult } = this.props.movies;
    let movieResults;
    if (movieSearchResult.results) {
      movieResults = movieSearchResult.results.map(movie => {
        return (
          <div key={movie.id} className="col-md-3">
            <Movie movie={movie} path={movie.media_type} />
          </div>
        );
      });
    } else {
      return <div className="text-light py-5">No Movie Found</div>;
    }
    return <div className="row">{movieResults}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MovieResult);

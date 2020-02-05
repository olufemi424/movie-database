import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import MovieList from "../movieComponents/MovieList";
import MovieInfo from "../movieComponents/MovieInfo";

class MovieDetails extends Component {
  render() {
    const { recommendations } = this.props;

    let path = this.props.match.path.replace(/\//g, "");

    return (
      <Fragment>
        <Route path={`/${path}/:id`} component={MovieInfo} />
        <div className="movie__details--container">
          <MovieList
            path={path}
            category="You might also like"
            link="popular"
            movies={recommendations.results}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  movieIdPath: ownProps.match,
  recommendations: state.movies.recommendations
});

export default connect(mapStateToProps)(MovieDetails);

import React, { Component } from "react";
import styled from "styled-components";
import Search from "./Search";
import SearchResult from "./MovieList";
import { connect } from "react-redux";
import { getMovies } from "../store/actions/movieActions";
// import Carousel from "./Carousel";

class MovieDb extends Component {
  state = {
    movies: [],
    page: 1,
    keyword: ""
  };

  componentDidMount = () => {
    this._isMounted = true;
    this.props.getMovies();
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  //next page
  next = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1
    });
    this.getMovies(this.state);
  };

  // prev page
  prev = () => {
    const { page } = this.state;
    this.setState({
      page: page - 1
    });
    this.getMovies(this.state);
  };

  render() {
    const { movies } = this.props.movies;
    return (
      <React.Fragment>
        {/* <Carousel movies={this.state.movies} /> */}
        <div className="container">
          <Search movieSearch={this.movieSearch} />
          <SearchResult movies={movies.results} />
          <PageNav>
            {this.state.page !== 1 && (
              <button onClick={this.prev} className="prev-btn ml-5">
                Prev
              </button>
            )}
            <button onClick={this.next} className="next-btn mr-5">
              Next
            </button>
          </PageNav>
        </div>
      </React.Fragment>
    );
  }
}

export const PageNav = styled.div`
  button {
    text-transform: uppercase;
    font-size: 19px;
    padding: 12px;
    margin-right: 10px;
    background-color: #353a3f;
    color: #f4f4f4;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }
`;

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => {
  return {
    getMovies: () => dispatch(getMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDb);

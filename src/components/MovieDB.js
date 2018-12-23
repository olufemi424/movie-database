import React, { Component } from "react";
import styled from "styled-components";
import Search from "./Search";
import MoviesResult from "./MoviesResult";

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "56cbdfc579474a601e5ee545721a625f";

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.movieSearch = this.movieSearch.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  state = {
    movies: [],
    page: 1,
    keyword: ""
  };
  _isMounted = false;

  componentDidMount = () => {
    this._isMounted = true;
    this.getMovies();
  };

  componentDidUpdate = () => {
    this.getMovies();
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  //get movies
  getMovies = async () => {
    try {
      const res = await fetch(
        `${baseURL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${
          this.state.page
        }`
      );
      const movies = await res.json();
      if (this._isMounted) {
        this.setState({
          keyword: "",
          movies: movies.results
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //update value of state
  updateInputValue = val => {
    console.log(val);
    this.setState({
      keyword: val
    });
  };

  //get movie with search keyword
  movieSearch = () => {
    if (this.state.keyword === "") {
      alert("Pls enter a movie name!");
    } else {
      let url = "".concat(
        baseURL,
        "search/movie?api_key=",
        `${API_KEY}&language=en-US`,
        "&query=",
        this.state.keyword
      );
      fetch(url)
        .then(result => result.json())
        .then(data => {
          this.setState({
            movies: data.results
          });
        });
    }
  };

  //next page
  next = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1
    });
    this.getMovies();
  };

  // prev page
  prev = () => {
    const { page } = this.state;
    this.setState({
      page: page - 1
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Search
            movieSearch={this.movieSearch}
            handleChange={this.updateInputValue}
          />
          <MoviesResult
            movies={this.state.movies}
            moviesResult={this.getMovies}
          />
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

export default MoviesList;

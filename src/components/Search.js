import React, { Component } from "react";
import styled from "styled-components";
import SearchResults from "./SearchResults";

class Search extends Component {
  state = {
    movies: []
  };

  handleChange = e => {
    this.props.handleChange(e.target.value);
  };

  movieSearch = e => {
    e.preventDefault();
    this.props.movieSearch();
  };

  render() {
    return (
      <SearchStyle>
        <section>
          <form>
            <button onClick={this.movieSearch}>Search</button>
            <input
              type="text"
              className="input"
              id="addInput"
              placeholder="Enter Movie Name.."
              value={this.value}
              onChange={this.handleChange}
            />
          </form>
        </section>
        <SearchResults movies={this.state.movies} />
      </SearchStyle>
    );
  }
}

export default Search;

export const SearchStyle = styled.div`
  input {
    font-size: 19px;
    padding: 12px;
    margin-top: 15px;
    outline: none;
    width: 70%;
    border: 0;
    border-radius: 5px;
  }
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
  }

  button:hover {
    background-color: #4c5054;
  }

  @media (max-width: 600px) {
    input {
      width: auto;
    }
  }
`;

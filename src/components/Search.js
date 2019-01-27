import React, { Component } from "react";
import styled from "styled-components";

class Search extends Component {
  state = {
    keyword: ""
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  movieSearch = e => {
    e.preventDefault();
    this.props.movieSearch(this.state.keyword);
  };

  render() {
    return (
      <SearchStyle>
        <section>
          <form onSubmit={this.movieSearch}>
            <input
              type="text"
              className="input"
              id="keyword"
              placeholder="Enter Movie Name.."
              onChange={this.handleChange}
            />
            <button>Search</button>
          </form>
        </section>
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
    margin-left: 10px;
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

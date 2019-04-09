import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { movieSearch } from "../../store/actions/movieActions";

class Search extends Component {
  state = {
    keyword: ""
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  searchMovie = e => {
    e.preventDefault();
    this.props.movieSearch(this.state.keyword);
    this.props.history.push(`/search/${this.state.keyword}`);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.searchMovie} className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search For Movies"
            onChange={this.handleChange}
            required
          />
          <button className="search__button">
            <i className="fas fa-search search__icon" />
          </button>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  movieSearch
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Search));

// import { NextButton, PrevButton } from "./movieActionsButton/NextButton";

// handleNextClick = () => {
//   let cur = this.props.movies.movies.page;
//   let nextpage = cur + 1;
//   this.setState({ page: nextpage });
//   this.props.getMovies(nextpage);
// };

// handlePrevClick = () => {
//   let cur = this.props.movies.movies.page;
//   let nextpage = cur - 1;
//   this.setState({ page: nextpage });
//   this.props.getMovies(nextpage);
// };

// {this.state.page > 1 && <PrevButton onClick={this.handlePrevClick} />}
// <NextButton onClick={this.handleNextClick} />

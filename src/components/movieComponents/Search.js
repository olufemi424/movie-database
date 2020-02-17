import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { movieSearch } from "../../store/actions/movieActions";

const Search = props => {
	let [searchTerm, setSearchTerm] = useState("");

	const handleChange = e => {
		setSearchTerm(e.target.value);
	};

	const searchMovie = e => {
		console.log(searchTerm);
		e.preventDefault();
		props.movieSearch(searchTerm);
		props.history.push(`/search/${searchTerm}`);
		setSearchTerm("");
	};

	return (
		<React.Fragment>
			<form onSubmit={searchMovie} className="search">
				<input
					type="text"
					className="search__input"
					placeholder="Search For Movies"
					onChange={handleChange}
					required
				/>
				<button className="search__button">
					<i className="fas fa-search search__icon" />
				</button>
			</form>
		</React.Fragment>
	);
};

const mapDispatchToProps = {
	movieSearch
};

export default connect(null, mapDispatchToProps)(withRouter(Search));

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

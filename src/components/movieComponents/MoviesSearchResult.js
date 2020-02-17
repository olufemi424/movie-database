import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieGrid from "./MovieGrid";
import { movieSearch } from "../../store/actions/movieActions";

//TODO: SEARCH REASULTS HAVE THEIR OWN STORE STATE
const MovieResult = props => {
	const searchTerm = props.match.params.keyword;
	const { movies } = props;

	useEffect(() => {
		props.movieSearch(searchTerm);
	}, [searchTerm]);

	return (
		<div>
			<MovieGrid movies={movies} component="Search Results" />
		</div>
	);
};

const mapStateToProps = state => ({
	movies: state.movies.movieSearchResult
});

export default connect(mapStateToProps, { movieSearch })(MovieResult);

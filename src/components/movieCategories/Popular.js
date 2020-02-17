import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPopularMovies } from "../../store/actions/movieActions";

import MovieGrid from "../movieComponents/MovieGrid";

const Popular = ({ getPopularMovies, movies }) => {
	useEffect(() => {
		getPopularMovies();
	}, []);
	return (
		<div>
			<MovieGrid movies={movies} component="Popular" path="movie" />
		</div>
	);
};

const mapStateToProps = state => ({
	movies: state.movies.popularMovies
});

export default connect(mapStateToProps, { getPopularMovies })(Popular);

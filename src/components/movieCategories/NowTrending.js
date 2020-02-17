import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTrendingMovies } from "../../store/actions/movieActions";

import MovieGrid from "../movieComponents/MovieGrid";

const NowTrending = ({ getTrendingMovies, movies }) => {
	useEffect(() => {
		getTrendingMovies();
	}, []);

	return (
		<div>
			<MovieGrid movies={movies} component="Now Trending" path="movie" />
		</div>
	);
};

const mapStateToProps = state => ({
	movies: state.movies.trendingMovies
});

export default connect(mapStateToProps, { getTrendingMovies })(NowTrending);

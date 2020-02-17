import React, { useEffect } from "react";
import { connect } from "react-redux";
import { discoverMoviesAction } from "../../store/actions/movieActions";

import MovieGrid from "../movieComponents/MovieGrid";

const NowPlaying = ({ discoverMoviesAction, discoverMovies }) => {
	useEffect(() => {
		discoverMoviesAction();
	}, []);

	return (
		<div>
			<MovieGrid movies={discoverMovies} component="Now Playing" path="movie" />
		</div>
	);
};

const mapStateToProps = state => ({
	discoverMovies: state.movies.discoverMovies
});

const mapDispatchToProps = {
	discoverMoviesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);

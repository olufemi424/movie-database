import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPopularTvShows } from "../../store/actions/movieActions";

import MovieGrid from "../movieComponents/MovieGrid";

const TvShows = ({ getPopularTvShows, movies }) => {
	useEffect(() => {
		getPopularTvShows();
	}, []);
	return (
		<div>
			<MovieGrid movies={movies} component="Shows" path="tv" />
		</div>
	);
};

const mapStateToProps = state => ({
	movies: state.movies.popularSeries
});

export default connect(mapStateToProps, { getPopularTvShows })(TvShows);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieList from "./movieComponents/MovieList";
import Carousel from "./Carousel/Carousel";

import {
	getPopularTvShows,
	discoverMoviesAction,
	getTrendingMovies,
	getPopularMovies,
	getTopRatedTvShows,
	getRecommendationMovies
} from "../store/actions/movieActions";

// import Carousel from "./movieComponents/Carousel";

const Movo = props => {
	useEffect(() => {
		props.getPopularTvShows();
		props.discoverMoviesAction();
		props.getTrendingMovies();
		props.getPopularMovies();
		props.getTopRatedTvShows();
		props.getRecommendationMovies();
	}, []);

	return (
		<React.Fragment>
			{/* <Carousel movies={movies} /> */}

			<div className="categories">
				{/* <Carousel></Carousel> */}
				<MovieList
					path="movie"
					category="Now Playing"
					link="nowplaying"
					movies={props.discoverMovies.results}
				/>
				<MovieList
					path="movie"
					category="Now Trending"
					link="nowtrending"
					movies={props.trendingMovies.results}
				/>
				<MovieList
					path="movie"
					category="Popular"
					link="popular"
					movies={props.popularMovies.results}
				/>
				<MovieList
					path="tv"
					link="shows"
					category="Shows"
					movies={props.popularSeries.results}
				/>
				<MovieList
					path="tv"
					category="Top Rated Shows"
					link="topshows"
					movies={props.topRatedSeries.results}
				/>
			</div>
		</React.Fragment>
	);
};

const mapStateToProps = state => ({
	discoverMovies: state.movies.discoverMovies,
	popularMovies: state.movies.popularMovies,
	trendingMovies: state.movies.trendingMovies,
	popularSeries: state.movies.popularSeries,
	topRatedSeries: state.movies.topRatedSeries
});

const mapDispatchToProps = {
	getPopularTvShows,
	discoverMoviesAction,
	getTrendingMovies,
	getPopularMovies,
	getTopRatedTvShows,
	getRecommendationMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(Movo);

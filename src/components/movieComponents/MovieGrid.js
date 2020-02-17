import React from "react";
import Movie from "../movieComponents/Movie";

const MovieGrid = props => {
	const { results } = props.movies;
	const { path } = props;
	let movieResults;
	if (results) {
		movieResults = results.map(movie => {
			return (
				<div key={movie.id} className="flex__item">
					<Movie movie={movie} path={path} />
				</div>
			);
		});
	}

	return (
		<div className="flex">
			<h2 className="flex__heading">{props.component}</h2>
			<div className="flex__box">{movieResults}</div>
		</div>
	);
};

export default MovieGrid;

import React from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import Spinner from "../layouts/Spinner";

const MovieList = props => {
	let movieResults;
	const { movies, category, path, link } = props;
	if (movies) {
		movieResults = movies.map(movie => {
			return (
				<div key={movie.id}>
					<Movie movie={movie} path={path} />
				</div>
			);
		});
	} else {
		return <Spinner />;
	}
	return (
		<>
			<div>
				<h2 className="category__title">
					{" "}
					<Link to={link ? link : "/"}>{category}</Link>
				</h2>
			</div>
			<div className="category__card">
				<div className="card__outer">{movieResults}</div>
			</div>
		</>
	);
};

export default MovieList;

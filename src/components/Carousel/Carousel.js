import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTrendingMovies } from "../../store/actions/movieActions";

const Carousel = ({ trendingMovies, getTrendingMovies }) => {
	let [counter, setCounter] = useState(10);
	let [size] = useState(190);
	let [style, setStyle] = useState({
		transform: `translateX(${-size * counter}px)`,
		transition: "transform 400ms ease-in-out"
	});

	useEffect(() => {
		getTrendingMovies();
		transitionBackToStartEnd();
		// if (trendingMovies.results) {
		// 	console.log(trendingMovies.results[counter]);
		// }
	}, []);

	const transitionBackToStartEnd = () => {};

	const insertId = i => {
		if (i === 0) {
			return "lastClone";
		} else if (i === trendingMovies.results.length - 1) {
			return "firstClone";
		} else {
			return "";
		}
	};

	const prevClick = () => {
		if (counter <= 0) return;
		setCounter(counter - 1);
	};

	const nextClick = () => {
		if (counter >= trendingMovies.results.length - 1 * counter) return;
		setCounter(counter + 1);
	};

	const movieEml = trendingMovies.results
		? trendingMovies.results.map((movie, i) => {
				return (
					<img
						width={size}
						key={movie.id}
						src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
						alt={`${movie.title}`}
						id={`${insertId(i)}`}
					></img>
				);
		  })
		: "";

	return (
		<div style={{ color: "white" }}>
			Carousel here
			<div className="carousel-container">
				<div
					className="carousel-slide"
					style={{
						transform: `translateX(${-size * counter}px)`,
						transition: "transform 400ms ease-in-out"
					}}
				>
					{movieEml}
				</div>
			</div>
			<div>
				<div onClick={prevClick} id="prevBtn">
					Prev
				</div>
				<div onClick={nextClick} id="nextBtn">
					Next
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	trendingMovies: state.movies.trendingMovies
});

export default connect(mapStateToProps, { getTrendingMovies })(Carousel);

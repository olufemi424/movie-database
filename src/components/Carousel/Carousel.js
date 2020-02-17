import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTrendingMovies } from "../../store/actions/movieActions";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";

const Container = styled.div`
	text-align: center;
	position: relative;
	overflow: hidden;
	width: 100%;
	margin: auto;
	height: 700px;
	color: #fff;
	overflow: hidden;
`;

const GradientOverlay = styled.div`
	height: 400px;
	width: 100%;
	background-image: linear-gradient(
		180deg,
		transparent 0%,
		transparent 35%,
		#4d000000 50%,
		#000 100%
	);
	position: absolute;
	bottom: 0;
`;

const CarouselTitle = styled.h2`
	color: #fff;
	position: absolute;
	bottom: 30px;
	left: 50px;
	padding: 10px;
	font-size: 60px;
	z-index: 999;
`;

const Children = styled.div`
	// width: 100%;
	// position: relative;
	// height: 100%;
`;

const Arrow = styled.div`
	text-shadow: 1px 1px 1px #fff;
	z-index: 100;
	line-height: 800px;
	text-align: center;
	position: absolute;
	top: 0;
	width: 10%;
	font-size: 3em;
	cursor: pointer;
	user-select: none;
	${props =>
		props.right
			? css`
					left: 90%;
			  `
			: css`
					left: 0%;
			  `}
`;

const CarouselUI = ({ position, handleClick, children }) => (
	<Container>
		<Children>
			{children}
			<Arrow onClick={handleClick} data-position={position - 1}>
				{"<"}
			</Arrow>
			<Arrow right onClick={handleClick} data-position={position + 1}>
				{">"}
			</Arrow>
		</Children>
	</Container>
);

const CarouselContainer = ({ trendingMovies, getTrendingMovies }) => {
	const Carousel = makeCarousel(CarouselUI);
	useEffect(() => {
		getTrendingMovies();
	}, []);

	const movieEml = trendingMovies.results
		? trendingMovies.results.map((movie, i) => {
				return (
					<Slide right key={movie.id}>
						<CarouselTitle>{movie.title}</CarouselTitle>
						<img
							src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
							alt={`${movie.title}`}
						></img>
						<GradientOverlay />
					</Slide>
				);
		  })
		: "";

	return (
		<Carousel defaultWait={5000} maxTurns={50}>
			{movieEml}
		</Carousel>
	);
};

const mapStateToProps = state => ({
	trendingMovies: state.movies.trendingMovies
});

export default connect(mapStateToProps, { getTrendingMovies })(
	CarouselContainer
);

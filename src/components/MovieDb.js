import React, { Component } from "react";

// import Carousel from "./movieComponents/Carousel";

import NowPlaying from "./movieCategories/NowPlaying";
import NowTrending from "./movieCategories/NowTrending";
import Popular from "./movieCategories/Popular";
import TvShows from "./movieCategories/TvShows";
import TopRatedShows from "./movieCategories/TopRatedShows";

class MovieDb extends Component {

  render() {
    return (
      <React.Fragment>
        {/* <Carousel movies={movies} /> */}
        <div className="categories">
          <NowPlaying />
          <NowTrending />
          <Popular />
          <TvShows />
          <TopRatedShows />
        </div>
      </React.Fragment>
    );
  }
}


export default MovieDb;


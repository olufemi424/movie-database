import React from "react";
import "./css/App.css";
import MovieDb from "./components/MovieDb";
import MovieDetail from "./components/MovieDetail";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MovieDb} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;

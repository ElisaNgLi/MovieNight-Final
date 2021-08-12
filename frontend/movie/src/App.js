import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./components/Style/Header";
import Footer from "./components/Style/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Terms from "./components/Terms/Terms";
import Registration from "./components/Registration/Registration";
import Login from "./components/Registration/Login";
import ForgotPassword from "./components/Registration/ForgotPassword";
import Home from "./components/Home/HomePage";
import Account from "./components/Account/Account";
import ResetPassword from "./components/Account/ResetPassword";
import MovieListing from "./components/Listing/MovieList";
import TvList from "./components/Listing/TvList";
import MovieDetails from "./components/Details/MovieDetails";
import TvDetails from "./components/Details/TvDetails";
import Search from "./components/Home/SearchResult";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/myaccount">
            {localStorage.getItem("userLogin") === "true" ? (
              <Account />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/resetpassword">
            {localStorage.getItem("userLogin") === "true" ? (
              <ResetPassword />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/movies">
            <MovieListing />
          </Route>
          <Route exact path="/tv">
            <TvList />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/tv/:id">
            <TvDetails />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

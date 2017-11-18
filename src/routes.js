"use strict";

var React = require("react");
var Router = require("react-router");

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
      <DefaultRoute handler={require('./components/homePage')} />
      <Route name="players" handler={require('./components/players/playersPage')} />
      <Route name="contact" handler={require('./components/contact/contactPage')} />
      <Route name="addPlayer" path="addPlayer" handler={require('./components/players/managePlayersPage')} />
      <Route name="managePlayer" path="addPlayer/:id" handler={require('./components/players/managePlayersPage')} />
      <NotFoundRoute handler={require('./components/notFoundPage')} />
      <Redirect from="about-us" to="about" />
  </Route>
);

module.exports = routes;
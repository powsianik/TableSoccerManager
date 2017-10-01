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
      <NotFoundRoute handler={require('./components/notFoundPage')} />
      <Redirect from="about-us" to="about" />
  </Route>
);

module.exports = routes;
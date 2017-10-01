"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
   render: function() {
       return (
           <div className="jumbotron">
               <h1>Table Soccer Manager</h1>
               <p>
                   "Ze wszystkich nieważnych rzeczy futbol jest zdecydowanie najważniejszą"
               </p>
               <Link to="contact" className="btn btn-primary btn-lg">Dowiedz się więcej</Link>
           </div>
       );
   }
});

module.exports = Home;
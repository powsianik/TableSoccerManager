"use strict";

var React = require('react');

var Home = React.createClass({
   render: function() {
       return (
           <div className="jumbotron">
               <h1>Table Soccer Manager</h1>
               <p>
                   "Ze wszystkich nieważnych rzeczy futbol jest zdecydowanie najważniejszą"
               </p>
           </div>
       );
   }
});

module.exports = Home;
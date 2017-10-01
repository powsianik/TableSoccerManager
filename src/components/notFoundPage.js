"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Strona nie została znaleziona</h1>
                <p>Przykro mi, ale istnieje duże prawdopodobieństwo, że strona na którą próbujesz wejść nie istnieje.</p>
                <p><Link to="app">Wróć do strony głównej</Link></p>
            </div>
        );
    }
});

module.exports = NotFoundPage;
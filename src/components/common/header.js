"use strict";

var React = require("react");
var Router = require("react-router");
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-left">
                        <img src="/images/brand.jpg"/>
                    </a>
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="players">Gracze</Link></li>
                        <li><Link to="contact">Kontakt</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
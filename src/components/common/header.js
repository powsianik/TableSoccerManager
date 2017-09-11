"use strict";

var React = require("react");

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-left">
                        <img src="/images/brand.jpg"/>
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#players">Gracze</a></li>
                        <li><a href="/#contact">Kontakt</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
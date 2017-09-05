"use strict";

var React = require('react');

var Contact = React.createClass({
   render: function() {
       return (
            <div>
                <h1>Kontakt:</h1>
                <p>Autor: Przemysław Owsianik</p>
                <p>Tu wpisz swoją wiadomość:</p>
            </div>
       );
   }
});

module.exports = Contact;
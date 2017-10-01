"use strict";

var React = require('react');

var Contact = React.createClass({
    statics: {
        willTransitionTo: function (transition, params, query, callback) {
            if(!confirm('Na pewno chcesz zawracać głowę autorowi tej aplikacji?')){
                transition.contact();
            }else{
                callback();
            }
        },

        willTransitionFrom: function (transition, component) {
            if(!confirm('Na pewno chcesz opóścić tę stronę??')){
                transition.contact();
            }
        }
    },

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
$ = jQuery = require('jquery');
var React = require('react');
var HomePage = require('./components/homePage');
var ContactPage = require('./components/contact/contactPage');

(function(win) {
    "use strict";
    var App = React.createClass({
        render: function () {
            var Child;

            switch (this.props.route) {
                case 'contact':
                    Child = ContactPage;
                    break;
                default:
                    Child = HomePage;
            }

            return (
                <div>
                    <Child/>
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route}/>, document.getElementById('app'));
    }

    win.addEventListener('hashchange', render);
    render();
})(window);
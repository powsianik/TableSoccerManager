"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PlayersList = React.createClass({
    propTypes: {
        players: React.PropTypes.array.isRequired
    },

    render: function () {
        var createPlayerRow = function (player) {
            return (
                <tr key={player.id}>
                    <td><Link to="managePlayer" params={{id: player.id}}>{player.id}</Link></td>
                    <td>{player.firstName}</td>
                    <td>{player.lastName}</td>
                </tr>);
        };

        return (
            <div>
                <table className="table">
                    <thead>
                    <th>Id</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    </thead>
                    <tbody>
                        {this.props.players.map(createPlayerRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = PlayersList;
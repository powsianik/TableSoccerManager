"use strict";

var React = require('react');

var PlayersList = React.createClass({
    propTypes: {
        players: React.PropTypes.array.isRequired
    },

    render: function () {
        var createPlayerRow = function (player) {
            return (
                <tr key={player.id}>
                    <td><a href={"/#players/" + player.id}>{player.id}</a></td>
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
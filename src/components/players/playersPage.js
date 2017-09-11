"use strict";

var React = require('react');
var PlayerApi = require('../../api/playerApi');

var Players = React.createClass({
    getInitialState: function () {
        return {
            players: []
        };
    },

    componentWillMount: function () {
        this.setState({players: PlayerApi.getAllPlayers()});
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
                <h1>Gracze:</h1>

                <table className="table">
                    <thead>
                        <th>Id</th>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                    </thead>
                    <tbody>
                        {this.state.players.map(createPlayerRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Players;

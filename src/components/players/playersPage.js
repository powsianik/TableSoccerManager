"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PlayerStore = require('../../stores/playerStore');
var PlayersList = require('../players/playersList');

var PlayersPage = React.createClass({
    getInitialState: function () {
        return {
            players: PlayerStore.getAllPlayers()
        };
    },

    render: function () {
        return (
            <div>
                <h1>Gracze:</h1>
                <Link to="addPlayer" className="btn btn-default btn-sm">Dodaj nowego gracza</Link>
                <PlayersList players={this.state.players} />
            </div>
        );
    }
});

module.exports = PlayersPage;

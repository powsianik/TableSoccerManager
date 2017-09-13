"use strict";

var React = require('react');
var PlayerApi = require('../../api/playerApi');
var PlayersList = require('../players/playersList');

var PlayersPage = React.createClass({
    getInitialState: function () {
        return {
            players: []
        };
    },

    componentDidMount: function () {
        if(this.isMounted()) {
            this.setState({players: PlayerApi.getAllPlayers()});
        }
    },

    render: function () {
        return (
            <div>
                <h1>Gracze:</h1>
                <PlayersList players={this.state.players} />
            </div>
        );
    }
});

module.exports = PlayersPage;

"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var PlayerApi = require("../api/playerApi");
var ActionTypes = require('../constants/actionTypes');

var PlayerActions = {
    createPlayer: function(player){
            var newPlayer = PlayerApi.savePlayer(player);

            Dispatcher.dispatch({
                action: ActionTypes.CREATE_PLAYER,
                player: newPlayer
            });
        },

    updatePlayer: function(player){
        var updatedPlayer = PlayerApi.savePlayer(player);

        Dispatcher.dispatch({
            action: ActionTypes.UPDATE_PLAYER,
            player: updatedPlayer
        });
    },

    deletePlayer: function(playerId){
        PlayerApi.removePlayer(playerId);

        Dispatcher.dispatch({
            action: ActionTypes.DELETE_PLAYER,
            playerId: playerId
        });
    }
};

module.exports = PlayerActions;
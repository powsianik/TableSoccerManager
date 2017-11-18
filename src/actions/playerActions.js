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
        }
};

module.exports = PlayerActions;
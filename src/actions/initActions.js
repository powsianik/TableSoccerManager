"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var PlayerApi = require("../api/playerApi");
var ActionTypes = require('../constants/actionTypes');

var InitActions = {
    initApp: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initData: {
                players: PlayerApi.getAllPlayers()
            }
        });
    }
};

module.exports = InitActions;
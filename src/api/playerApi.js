"use strict";
// It's mock of api while I don't set database up.

var players = require("./playerData").players;
var _ = require("lodash");

var _generateId = function(player){
    return player.firstName.toLowerCase() + '-' + player.lastName.toLowerCase();
};

var _clone = function(item){
    return JSON.parse(JSON.stringify(item));
};

var PlayerApi = {
    getAllPlayers: function () {
        return _clone(players);
    },

    getPlayerById: function (id) {
        var player = _.find(players, {id: id});
        return _clone(player);
    },

    savePlayer: function (player){
        if(player.id){
            var existingIndexOfPlayer = _.indexOf(players, _.find(players, {id: player.id}));
            players.splice(existingIndexOfPlayer, 1, player);
        }
        else{
            player.id = _generateId(player);
            players.push(player);
        }

        return _clone(player);
    },

    removePlayer: function (id) {
        _.remove(players, {id: id});
    }
};

module.exports = PlayerApi;
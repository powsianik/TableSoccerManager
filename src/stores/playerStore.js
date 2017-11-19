"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assing = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _players = [];

var PlayerStore = assing({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getAllPlayers: function () {
        return _players;
    },

    getPlayerById: function (id) {
        return _.find(_players, {id: id});
    }
});

Dispatcher.register(function (action) {
    switch(action.actionType){
        case ActionTypes.CREATE_PLAYER:
            _players.push(action.player);
            PlayerStore.emitChange();
            break;
        case ActionTypes.UPDATE_PLAYER:
            var existingPlayer = _.find(_players, {id: action.player.id});
            var playerIndex = _.indexOf(_players, existingPlayer);
            _players.splice(playerIndex, 1, action.player);
            PlayerStore.emitChange();
            break;
        case ActionTypes.DELETE_PLAYER:
            _.remove(_players, function(player){
                return action.playerId === player.id;
            });
            PlayerStore.emitChange();
            break;
        case ActionTypes.INITIALIZE:
            _players = action.initData.players;
            PlayerStore.emitChange();
            break;
        default:
            break;
    }
});

module.exports = PlayerStore;
"use strict";

var React = require("react");
var Router = require('react-router');
var Toastr = require('toastr');
var PlayerForm = require('./playerForm');
var PlayerStore = require('../../stores/playerStore');
var PlayerActions = require('../../actions/playerActions');
var PlayerApi = require('../../api/playerApi');


Toastr.options = {
    toastClass: 'alert',
    iconClasses: {
        success: 'alert-success'
    }
};

var ManagePlayersPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component){
            if(component.state.dirty && !confirm('Leave without saving?')){
                transition.abort();
            }
        }
    },

    getInitialState: function(){
      return {
          player: { id: '', firstName: '', lastName: ''},
          errors: {},
          dirty: false
      };
    },

    componentWillMount: function(){
        var playerId = this.props.params.id;    //from the url path.

        if(playerId){
            this.setState({player: PlayerApi.getPlayerById(playerId)});
        }
    },

    setPlayerState: function(event){
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.player[field] = value;

        return this.setState({player: this.state.player});
    },

    playerFormIsValid: function(){
        var formIsValid = true;
        this.state.errors = {};

        if(this.state.player.firstName.length < 3){
            this.state.errors.firstName = 'First name must be at least 3 characters';
            formIsValid = false;
        }

        if(this.state.player.lastName.length < 3){
            this.state.errors.lastName = 'Last name must be at least 3 characters';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    savePlayer: function(event){
        event.preventDefault();

        if(!this.playerFormIsValid()){
            return;
        }

        if(this.state.player.id) {
            return;
        }else{
            PlayerActions.createPlayer(this.state.player);
        }

        this.setState({dirty: false});
        Toastr.success('Player saved');
        this.transitionTo('players');
    },

    render: function(){
        return (
            <PlayerForm
                player={this.state.player}
                onChange={this.setPlayerState}
                onSave={this.savePlayer}
                errors={this.state.errors} />
        );
    }
});

module.exports = ManagePlayersPage;

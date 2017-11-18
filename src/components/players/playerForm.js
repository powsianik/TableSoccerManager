"use strict";

var React = require("react");
var TextInput = require("../common/textInput");

var PlayerForm = React.createClass({
    propTypes: {
        player: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

   render: function(){
       return (
           <form onSubmit={this.props.onSubmit}>
               <TextInput
                    name="firstName"
                    label="Imię"
                    value={this.props.player.firstName}
                    onChange={this.props.onChange}
                    errors={this.props.errors.firstName} />

               <TextInput
                   name="lastName"
                   label="Nazwisko"
                   value={this.props.player.lastName}
                   onChange={this.props.onChange}
                   errors={this.props.errors.lastName} />

               <input type="submit" value="Zapisz" className="btn btn-default" onClick={this.props.onSave} />
           </form>
       );
   }
});

module.exports = PlayerForm;
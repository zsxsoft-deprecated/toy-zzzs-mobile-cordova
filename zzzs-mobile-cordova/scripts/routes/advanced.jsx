/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let Router = require('react-router');
let config = require('../config');
let utils = require('../utils');

let {
    TextField,
    RaisedButton
} = mui;
let Navigation = Router.Navigation;

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Information = React.createClass({
    getInitialState() {
        return {
            stdOut: ""
        };
    },
    
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    ajaxThenOutput(url) {
        utils.getJsonAsync(config.server + url, function(err, result) {
            if (err !== null) {
                return;
            }
            let stdOut = "";
            if (result instanceof Array) {
                stdOut = result.join("\n");
            } else if (result instanceof Object) {
                stdOut = JSON.stringify(result);
            } else {
                stdOut = result.toString();
            }
            this.setState({
                stdOut: stdOut
            });
        }.bind(this));
    },

    read10Stdout() {
        this.ajaxThenOutput("stdout/10");
    },

    readStdout() {
        this.ajaxThenOutput("stdout/");
    },

    updateRobot() {
        this.ajaxThenOutput("robot");
    },


    render() {

        let text = this.state.stdOut;
        return (
            <div style={{}}>
            <div style={{padding: "5px"}}>
            <RaisedButton label="Read 10 STDOUT" secondary={true} style={{float: "left", width: "49%"}} onClick={this.read10Stdout}/>
            <RaisedButton label="Read ALL STDOUT" secondary={true} style={{float: "right", width: "50%"}} onClick={this.readStdout}/>
            </div>
            <div style={{padding: "5px", top: "10px", position: "relative"}}>
               <RaisedButton label="Robot Update" secondary={true} style={{width: "100%"}} onClick={this.updateRobot}/>
            </div>
            <div style={{marginLeft: "10px", top: "20px", position: "relative"}}>
               <TextField value={text} multiLine={true} />
            </div>
            </div>
        );
    },


});

module.exports = Information;

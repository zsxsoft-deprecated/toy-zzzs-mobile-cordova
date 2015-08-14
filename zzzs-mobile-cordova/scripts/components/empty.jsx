/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let Router = require('react-router');

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Empty = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render() {
        return <div/>;
    }
});

module.exports = Empty;

/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let MenuItem = mui.MenuItem;
let LeftNav = mui.LeftNav;
let AppBar = mui.AppBar;
let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },


  render() {

    let containerStyle = {
       textAlign: "center"
    };

    let standardActions = [
      { text: 'Okay' }
    ];

    let menuItems = [
        { route: '', text: '自招动态' },
        { route: 'customization', text: '报考指南' },
        { route: 'components', text: '高校政策' },
        { route: 'advanced', text: '高级工具' }
    ];

    return (
      <div style={containerStyle}>
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
        <AppBar title="自主招生" onLeftIconButtonTouchTap={this._toggleLeftMenu}/>

        <Dialog
          title="Super Secret Password"
          actions={standardActions}
          ref="superSecretPasswordDialog">
          1-2-3-4-5
        </Dialog>

        <h1>material-ui</h1>
        <h2>example project</h2>

        <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />

      </div>
    );
  },

    _toggleLeftMenu() {
        this.refs.leftNav.toggle();
    },
    _handleTouchTap() {
        this.refs.superSecretPasswordDialog.show();
    }

});

module.exports = Main;

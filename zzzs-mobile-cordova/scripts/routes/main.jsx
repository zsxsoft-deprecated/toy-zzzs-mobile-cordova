/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let Router = require('react-router');
let { Route, RouteHandler, Link } = Router; 
let {LeftNav, AppBar, MenuItem, IconMenu, IconButton, SvgIcon} = mui;

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let menuItems = [{
    route: '/information/\?url=gkxx%2Fzzzs%2F',
    text: '自招动态'
}, {
    route: '/information/\?url=gkxx%2Fzzzs%2Fbkzn%2F',
    text: '报考指南'
}, {
    route: '/information/\?url=gkxx%2Fzzzs%2Fgxzc%2F',
    text: '高校政策'
}, {
    route: 'advanced',
    text: '高级工具'
},  {
    type: MenuItem.Types.SUBHEADER, 
    text: '操作'
}/*, {
    click: () => {
        history.go(-1);
    }, 
    text: '返回'
}*/, {
    click: () => {
        location.reload();
    }, 
    text: '刷新'
}, {
    click: () => {
        alert(location.hash);
    }, 
    text: '浏览器'
}];

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

    
    _getSelectedIndex() {
        let currentItem;
        for (let i = menuItems.length - 1; i >= 0; i--) {
            currentItem = menuItems[i];
            if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
        }
    },
    
    _onLeftNavChange(e, key, payload) {
        //this.context.router.replaceWith('/empty');
        if (payload.click) {
            payload.click.call(this);
        } else {
            this.context.router.transitionTo(payload.route);
        }
        
    },

    render() {


        return (
            <div>
              <LeftNav ref="leftNav" docked={false} menuItems={menuItems} selectedIndex={this._getSelectedIndex()} onChange={this._onLeftNavChange}/>
              <AppBar title="自主招生" onLeftIconButtonTouchTap={this._toggleLeftMenu} />
              <RouteHandler />
 
            </div>
        );
    },

    _toggleLeftMenu() {
        this.refs.leftNav.toggle();
    },

});
Main.contextTypes = {
  router: React.PropTypes.func
};
module.exports = Main;

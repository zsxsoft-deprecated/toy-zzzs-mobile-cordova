/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let Router = require('react-router');
let config = require('../config');
let utils = require('../utils');

let {
    Avatar,
    List, 
    ListItem,
    IconMenu, 
    MenuItem,
    FlatButton,
    SvgIcon, 
    IconButton
} = mui;
let Navigation = Router.Navigation;
let Link = Router.Link;

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let route = "";
let Information = React.createClass({
    mixins: [Navigation],
    getInitialState() {
        return {
            pList: []
        };
    },

    componentDidMount(paramObject) {
        let self = this;
        paramObject = paramObject || this.props;
        let param = paramObject.params.param;
        param = param || "";
        route = unescape(param.replace("url=", ""));
        utils.getJsonAsync(config.server + "list/" + route, function(err, result) {
            if (err !== null) {
                return;
            }
            this.setState({
                pList: result
            });
        }.bind(this));
    },

    componentWillReceiveProps() {
        this.componentDidMount.apply(this, arguments); // Array.from在WebView 44上不被支持
    },

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    _openArticle(id) {
        this.transitionTo("/article/" + id);
    },

    _openOffical(url) {

    },

    _toNextPage() {
        let pList = this.state.pList || [];
        route = route.replace(/(\?|\&)id=\d+/, "");
        let nextPage = "/information/\?url=" + encodeURIComponent(route + (route == "" ? "\?" :"\&") + "id=" + (pList.length == 0 ? "" : pList[pList.length - 1].id));
        console.log(nextPage);
        this.transitionTo(nextPage);
    },

    render() {
        let iconButtonElement = (
          <IconButton
            touch={true}
            tooltip="more"
            tooltipPosition="bottom-left">
            <SvgIcon color={Colors.grey400} >
               <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" data-reactid=".0.$=12:0.0.0.1:1.1.1:a.0.0.1:4.0.0.1.$1.0.0.1:2:$=10:0.0"></path>
            </SvgIcon>
          </IconButton>
            );

        let pList = this.state.pList || [];
        
        return (
            <div {...this.props}>
            <List>
            {pList.map((card) => {
                return (
                <ListItem
                onClick={this._openArticle.bind(this, card.id)}
                leftAvatar={<Avatar>{card.source.replace(/来源(：|:)/, "").substr(0, 1)}</Avatar>}
                primaryText={card.title.substr(0, 12) + '...'}
                secondaryText={<p>
                  <span style={{color: Colors.darkBlack}}>{card.source.replace(/来源(：|:)/, "")} / {card.time}</span><br />
                    {card.intro.substr(0, 20)}
                </p>} secondaryTextLines={2} />
                ) 
            })}
            </List>
            <FlatButton onClick={this._toNextPage}>
            下一页
            </FlatButton>
            </div>
        ); // 就不做无限下拉了
    },


});

module.exports = Information;

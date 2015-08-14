/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let Router = require('react-router');
let config = require('../config');
let utils = require('../utils');

let {
    Avatar,
    Card,
    CardActions,
    CardExpandable,
    CardHeader,
    CardMedia,
    CardText,
    CardTitle,
    FlatButton
} = mui;
let Navigation = Router.Navigation;

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

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
        let route = unescape(param.replace("url=", ""));
        if (route != "") {
            route = "?category=" + route;
        }
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
        this.componentDidMount.apply(this, Array.from(arguments));
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

    render() {

        let pList = this.state.pList || [];
        return (
            <div>
            {pList.map((card) => {
                return (
                    <Card>
                        <CardHeader title={card.title.substr(0, 15) + "..."}
                                    subtitle={card.time}
                                    avatar={<Avatar>{card.source.replace(/来源(：|:)/, "").substr(0, 1)}</Avatar>}
                                    showExpandableButton={true}>
                        </CardHeader>
                        <CardText expandable={true}>
                            {card.intro}
                        </CardText>
                        <CardActions expandable={true}>
                          <FlatButton label="打开文章" onClick={this._openArticle.bind(this, card.id)}/>
                          <FlatButton label="去官网" onClick={this._openOffical.bind(this, card.url)}/>
                        </CardActions>
                    </Card>
                )
            })}
            </div>
        );
    },


});

module.exports = Information;

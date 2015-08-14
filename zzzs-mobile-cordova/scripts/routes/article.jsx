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
            pArticle: {

            }
        };
    },

    componentDidMount() {
        var self = this;
        utils.getJsonAsync(config.server + "article/" + this.props.params.id, function(err, result) {
            if (err !== null) {
                return;
            }
            result.subtitle = result.source + " / " + result.time;
            this.setState({
                pArticle: result
            });
        }.bind(this));
    },

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },


    _openOffical(url) {

    },

    render() {

        let article = this.state.pArticle || {};
        if (!('id' in article)) {
            return <Card/>;
        }
        return (
            <Card>
                <CardTitle title={article.title} subtitle={article.subtitle}/>
                <CardText dangerouslySetInnerHTML={{__html: article.content}} />
                <CardActions>
                  <FlatButton label="去官网" onClick={this._openOffical.bind(this, article.url)} />
                </CardActions>
            </Card>
        );
    },


});

module.exports = Information;

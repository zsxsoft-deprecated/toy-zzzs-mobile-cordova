let React = require('react');
let Router = require('react-router');
let Route = Router.Route;
let Redirect = Router.Redirect;
let DefaultRoute = Router.DefaultRoute;

// Here we define all our material-ui ReactComponents.
let Main = require('./components/main.jsx');
let Information = require('./components/information.jsx');
let Article = require('./components/article.jsx');
let Empty = require('./components/empty.jsx');
let AppRoutes = (
    <Route name="root" path="/" handler={Main}>
        <Route path="/information/" handler={Information} />
	    <Route name="information" path="/information/:param" handler={Information} />
	    <Route name="article" path="/article/:id" handler={Article} />
        <Route name="empty" handler={Empty} />
	    <DefaultRoute handler={Information} />
  	</Route>
);

module.exports = AppRoutes;

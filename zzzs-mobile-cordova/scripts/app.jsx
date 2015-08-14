(function () {
  "use strict";
  let React = require('react');
  let Router = require('react-router');
  
  let AppRoutes = require('./routes.jsx');
  let injectTapEventPlugin = require('react-tap-event-plugin');
  let Main = require('./components/main.jsx');

  document.addEventListener('deviceready', onDeviceReady.bind(this), false);

  function onDeviceReady() {
      document.addEventListener('pause', onPause.bind(this), false);
      document.addEventListener('resume', onResume.bind(this), false);
  };

  function onPause() {
      // TODO: 此应用程序已挂起。在此处保存应用程序状态。
  };

  function onResume() {
      // TODO: 此应用程序已重新激活。在此处还原应用程序状态。
  };
  
  //Needed for React Developer Tools
  window.React = React;

  injectTapEventPlugin();

    //React.render(<Main />, document.body);
  Router
    // Runs the router, similiar to the Router.run method. You can think of it as an
    // initializer/constructor method.
    .create({
        routes: AppRoutes,
        scrollBehavior: Router.ScrollToTopBehavior
    })
    // This is our callback function, whenever the url changes it will be called again.
    // Handler: The ReactComponent class that will be rendered
    .run(function (Handler) {
        React.render(<Handler/>, document.body);
    });

})();

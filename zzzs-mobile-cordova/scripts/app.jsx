(function () {
  "use strict";
  let React = require('react/addons');
  let injectTapEventPlugin = require('react-tap-event-plugin');
  let Main = require('./components/main.jsx'); // Our custom react component
      

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

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  // Render the main app react component into the document body.
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  React.render(<Main />, document.body);

})();

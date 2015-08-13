/// <reference path="typings/tsd.d.ts" />

import injectTapEventPlugin from 'react-tap-event-plugin';
import main = require('./components/main');
let Main = main.ReactClass;
export function Start () {

  //import Main from './components/main.jsx';
  
  //Needed for React Developer Tools
  window["React"] = React;
  injectTapEventPlugin();
  
  // Render the main app react component into the document body.
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  React.render(<Main />, document.body);
};
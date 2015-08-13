/** In this file, we create a React component which incorporates components provided by material-ui */
/// <reference path="../typings/tsd.d.ts" />
import mui from 'material-ui';

let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

export class ReactClass extends React.Component<any, any> {

	constructor() {
	super();
	}

	childContextTypes = {
		muiTheme: React.PropTypes.object
	};

	getChildContext() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	};

	componentWillMount() {
		ThemeManager.setPalette({
			accent1Color: Colors.deepOrange500
		});
	};

	render() {

		let containerStyle = {
			textAlign: 'center',
			paddingTop: '200px'
		};

		let standardActions = [
			{ text: 'Okay' }
		];

		return (
			<div style={containerStyle}>
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
	};



	_handleTouchTap() {
	}
};

//export default Main = React.createClass(mainClass);



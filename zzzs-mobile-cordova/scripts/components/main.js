var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** In this file, we create a React component which incorporates components provided by material-ui */
/// <reference path="../typings/tsd.d.ts" />
var material_ui_1 = require('material-ui');
var RaisedButton = material_ui_1.default.RaisedButton;
var Dialog = material_ui_1.default.Dialog;
var ThemeManager = new material_ui_1.default.Styles.ThemeManager();
var Colors = material_ui_1.default.Styles.Colors;
var ReactClass = (function (_super) {
    __extends(ReactClass, _super);
    function ReactClass() {
        _super.call(this);
        this.childContextTypes = {
            muiTheme: React.PropTypes.object
        };
    }
    ReactClass.prototype.getChildContext = function () {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    };
    ;
    ReactClass.prototype.componentWillMount = function () {
        ThemeManager.setPalette({
            accent1Color: Colors.deepOrange500
        });
    };
    ;
    ReactClass.prototype.render = function () {
        var containerStyle = {
            textAlign: 'center',
            paddingTop: '200px'
        };
        var standardActions = [
            { text: 'Okay' }
        ];
        return (React.createElement("div", {"style": containerStyle}, React.createElement(Dialog, {"title": "Super Secret Password", "actions": standardActions, "ref": "superSecretPasswordDialog"}, "1-2-3-4-5"), React.createElement("h1", null, "material-ui"), React.createElement("h2", null, "example project"), React.createElement(RaisedButton, {"label": "Super Secret Password", "primary": true, "onTouchTap": this._handleTouchTap})));
    };
    ;
    ReactClass.prototype._handleTouchTap = function () {
    };
    return ReactClass;
})(React.Component);
exports.ReactClass = ReactClass;
;
//export default Main = React.createClass(mainClass);
//# sourceMappingURL=main.js.map
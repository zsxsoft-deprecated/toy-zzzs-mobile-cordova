declare module Mui {
    interface mui {
        AppBar: any;
        AppCanvas: any;

        Checkbox: any;
        Dialog: any;
        DropDownIcon: any;
        DropDownMenu: any;
        EnhancedButton: any;
        FlatButton: any;
        FloatingActionButton: any;
        IconButton: any;
        Icon: any;
        Input: any;
        LeftNav: any;
        MenuItem: any;
        Menu: any;
        Mixins: {
            Classable: any;
            ClickAwayable: any;
            WindowListenable: any;
        };
        PaperButton: any;
        Paper: any;
        RadioButton: any;
        RaisedButton: any;
        Ripple: any;
        Styles: any
        TableHeader: any;
        TableRow: any;
        TableRowItem: any;
        Toggle: any;
        Toast: any;
        Toolbar: any;
        ToolbarGroup: any;
        Utils: {
            CssEvent: any;
            Dom: any;
            Events: any;
            KeyCode: any;
            KeyLine: any;
        };
    }
}

declare module 'material-ui' {
    var exports: Mui.mui;
    export default exports;
}
/// <reference path="typings/tsd.d.ts" />
var zzzsmobilecordova;
(function (zzzsmobilecordova) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
        }
        function onPause() {
        }
        function onResume() {
        }
    })(Application = zzzsmobilecordova.Application || (zzzsmobilecordova.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(zzzsmobilecordova || (zzzsmobilecordova = {}));
//# sourceMappingURL=appBundle.js.map
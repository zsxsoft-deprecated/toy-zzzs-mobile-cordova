/// <reference path="typings/tsd.d.ts" />

module zzzsmobilecordova {
    "use strict";
    export module Application {
        export function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        function onDeviceReady() {
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
        }
        function onPause() {
        }
        function onResume() {
        }

    }

    window.onload = function () {
        Application.initialize();
    }
}

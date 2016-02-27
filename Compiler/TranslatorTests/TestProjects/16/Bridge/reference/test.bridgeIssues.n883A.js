﻿(function (globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N883A.Control', {
        statics: {
            config: {
                init: function () {
                    this.test = Bridge.get(Test.BridgeIssues.N883A.Globals).myVar || 0;
                }
            }
        }
    });
    
    Bridge.define('Test.BridgeIssues.N883A.Globals', {
        statics: {
            myVar: 0,
            myTextBox: null
        }
    });
    
    Bridge.define('Test.BridgeIssues.N883A.Button', {
        inherits: [Test.BridgeIssues.N883A.Control]
    });
    
    Bridge.define('Test.BridgeIssues.N883A.TextBox', {
        inherits: [Test.BridgeIssues.N883A.Control]
    });
    
    
    
    Bridge.init();
})(this);

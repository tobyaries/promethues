'use strict';

(function (win) {
    
    var baseUrl = document.getElementById('main').getAttribute('data-baseurl');
 
    var config = {
        baseUrl: baseUrl,           
        paths: {                    
            director: 'bower_components/director/build/director',
            zepto: 'bower_components/zepto/zepto',
            underscore: 'bower_components/underscore/underscore',
            text: 'bower_components/text/text'
        },
        shim: {
            underscore: {
                exports: '_'
            },
            zepto: {
                exports: '$'
            },
            director: {
                exports: 'Router'
            }
        }
    };

    require.config(config);

    require(['zepto', 'router', 'underscore'], function($, router, _){
        win.appView = $('#container');
        win.$ = $;
        win._ = _;
        router.init();
    });


})(window);

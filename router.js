define(['director', 'underscore'], function (Router, _) {

    var baseUrl = document.getElementById('main').getAttribute('data-baseurl');

    var routes = {
        'module1': baseUrl + 'module1/controller1.js',
        'module2': baseUrl + 'module2/controller2.js'
    };

    var currentController = null;

    var routeHandler = function (config)     {
        return function () {
            var url = config;
            var params = arguments;
            require([url], function (controller) {
                if(currentController && currentController !== controller){
                    currentController.onRouteChange && currentController.onRouteChange();
                }
                currentController = controller;
                controller.apply(null, params);
            });
        }
    };

    for (var key in routes) {
        routes[key] = routeHandler(routes[key]);
    }
    // console.log(routes);

    return Router(routes);
});
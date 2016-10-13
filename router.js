define(['director', 'underscore'], function (Router, _) {

    var routes = {
        'module1': 'module1/controller1.js',
        'module2/:name': 'module2/controller2.js'
    };

    var currentController = null;

    var routeHandler = function (config) {
        return function () {
            var url = config;
            var params = arguments;
            debugger;
            require([url], function (controller) {
                debugger;
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
    console.log(routes);

    return Router(routes);
});
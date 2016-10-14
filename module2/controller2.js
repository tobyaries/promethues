'use strict';

define(['text!module2/tpl.html'], function (tpl) {

    var controller = function () {
       	var template = _.template(tpl);
        appView.html(template({name: 'yoyo'}));
    };
    return controller;
});
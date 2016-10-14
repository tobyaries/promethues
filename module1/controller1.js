'use strict';

define(['text!module1/tpl.html'], function (tpl) {

    var controller = function () {
		var template = _.template(tpl);
        appView.html(template({name: 'kenko'}));
    };
    return controller;
});
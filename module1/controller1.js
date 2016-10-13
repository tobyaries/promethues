define(['text!module1/tpl.html'], function (tpl) {

    var controller = function () {
        appView.html(_.template(tpl, {name: 'kenko'}));
    };
    return controller;
});
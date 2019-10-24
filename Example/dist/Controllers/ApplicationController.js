"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var makeTopNavLinks = function (homeChildren) {
    var topMenuLinks = [];
    homeChildren.filter(function (child) { return child.umbNaviHide === false; }).forEach(function (child) {
        topMenuLinks.push({
            name: child.name,
            url: child._url
        });
    });
    return topMenuLinks;
};
exports.makeTopNavLinks = makeTopNavLinks;
//# sourceMappingURL=ApplicationController.js.map
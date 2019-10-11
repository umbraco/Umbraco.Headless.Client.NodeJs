"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EndpointSource;
(function (EndpointSource) {
    EndpointSource[EndpointSource["CDN"] = 0] = "CDN";
    EndpointSource[EndpointSource["Media"] = 1] = "Media";
    EndpointSource[EndpointSource["ContentManagement"] = 2] = "ContentManagement";
})(EndpointSource = exports.EndpointSource || (exports.EndpointSource = {}));
var Endpoint = /** @class */ (function () {
    function Endpoint(source, path, urlParams, method, options) {
        var _this = this;
        this.source = source;
        this.path = path;
        this.urlParams = urlParams;
        this.method = method;
        this.options = options;
        this.getPath = function () {
            var keys = Object.keys(_this.urlParams);
            if (keys.length === 0) {
                return _this.path;
            }
            var path = _this.path;
            keys.forEach(function (key) {
                var value = _this.urlParams[key];
                var regEx = new RegExp("{" + key + "}");
                path = path.replace(regEx, value);
            });
            return path;
        };
    }
    return Endpoint;
}());
exports.Endpoint = Endpoint;
//# sourceMappingURL=Endpoint.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endpoints_1 = require("./Endpoints");
var CDNClient = /** @class */ (function () {
    function CDNClient(client) {
        var _this = this;
        this.client = client;
        this.makeRequest = function (endpoint, data) {
            return _this.client.makeRequest(endpoint, data);
        };
        this.root = function () {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.root());
        };
        this.byId = function (id, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.byId(id, options));
        };
        this.byUrl = function (url, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.byUrl(url, options));
        };
        this.children = function (id, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.children(id, options));
        };
        this.ancestors = function (id) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.ancestors(id));
        };
        this.descendants = function (id, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.descendants(id, options));
        };
    }
    return CDNClient;
}());
exports.CDNClient = CDNClient;
//# sourceMappingURL=CDNClient.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endpoints_1 = require("../Endpoints");
/**
 * CDNClient is used to fetch content related objects from Umbraco headless
 */
var CDNClient = /** @class */ (function () {
    function CDNClient(client) {
        var _this = this;
        this.client = client;
        this.makeRequest = function (endpoint, data) {
            return _this.client.makeRequest(endpoint, data);
        };
        /**
         * Fetch root content
         */
        this.root = function () {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.root());
        };
        /**
         * Fetch Content by id
         */
        this.byId = function (id, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.byId(id, options));
        };
        /**
         * Fetch Content by url
         */
        this.byUrl = function (url, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.byUrl(url, options));
        };
        /**
         * Fetch Content children
         */
        this.children = function (id, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.children(id, options));
        };
        /**
         * Fetch Content ancestors
         */
        this.ancestors = function (id) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.ancestors(id));
        };
        /**
         * Fetch Content descendants
         */
        this.descendants = function (id, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.descendants(id, options));
        };
    }
    return CDNClient;
}());
exports.CDNClient = CDNClient;
//# sourceMappingURL=CDNClient.js.map
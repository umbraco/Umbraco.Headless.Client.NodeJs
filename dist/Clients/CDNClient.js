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
         * @param options Request options
         */
        this.root = function (options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.root(options));
        };
        /**
         * Fetch Content by id
         * @param id GUID part of an Umbraco UDI
         * @param options Request options
         */
        this.byId = function (id, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.byId(id, options));
        };
        /**
         * Fetch Content by url
         * @param url URL to search for
         * @param options Request options
         */
        this.byUrl = function (url, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.byUrl(url, options));
        };
        /**
         * Fetch Content children
         * @param id GUID part of an Umbraco UDI
         * @param options Request options
         */
        this.children = function (id, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.children(id, options));
        };
        /**
         * Fetch Content ancestors
         * @param id GUID part of an Umbraco UDI
         * @param options Request options
         */
        this.ancestors = function (id, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.ancestors(id, options));
        };
        /**
         * Fetch Content descendants
         * @param id GUID part of an Umbraco UDI
         * @param options Request options
         */
        this.descendants = function (id, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.descendants(id, options));
        };
        /**
         * Fetch content with content type
         * TODO: Fix add missing types all around this call
         * @param contentType Content type needed to be displayed
         * @param options Request options
         */
        this.byContentType = function (contentType, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.byContentType(contentType, options));
        };
        /**
         * Search for content containing term
         * TODO: Fix add missing types all around this call
         * @param term Term to search for
         * @param options Request options
         */
        this.search = function (term, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.cdn.search(term, options));
        };
    }
    return CDNClient;
}());
exports.CDNClient = CDNClient;
//# sourceMappingURL=CDNClient.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endpoints_1 = require("../Endpoints");
/**
 * Client to fetch media related objects form Umbraco headless
 */
var MediaClient = /** @class */ (function () {
    function MediaClient(client) {
        var _this = this;
        this.client = client;
        this.makeRequest = function (endpoint, data) {
            return _this.client.makeRequest(endpoint, data);
        };
        /**
         * Fetch root media
         */
        this.root = function () {
            return _this.makeRequest(Endpoints_1.Endpoints.media.root());
        };
        /**
         * Fetch media by id
         */
        this.byId = function (id) {
            return _this.makeRequest(Endpoints_1.Endpoints.media.byId(id));
        };
        /**
         * Fetch media children
         */
        this.children = function (id, options) {
            return _this.makeRequest(Endpoints_1.Endpoints.media.children(id, options));
        };
    }
    return MediaClient;
}());
exports.MediaClient = MediaClient;
//# sourceMappingURL=MediaClient.js.map
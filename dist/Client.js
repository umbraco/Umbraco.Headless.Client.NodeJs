"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clients_1 = require("./Clients");
var ApiRequest_1 = require("./ApiRequest");
/**
 * Headless Client for managing API calls to the Umbraco Headless API
 */
var Client = /** @class */ (function () {
    function Client(options) {
        var _this = this;
        this.options = options;
        this._apiKey = null;
        /**
         * Get CDN Client for fetching content related objects
         */
        this.cdn = new Clients_1.CDNClient(this);
        /**
         * Get Media Client for fetching media related objects
         */
        this.media = new Clients_1.MediaClient(this);
        /**
         * Get Manager Client for managing content on Umbraco headless
         */
        this.manager = new Clients_1.ManagerClient(this);
        /**
         * Makes request from and [Endpoint]
         */
        this.makeRequest = function (endpoint, data) {
            return new ApiRequest_1.ApiRequest(_this, endpoint, data);
        };
        /**
         * Sets the API to be used.
         * @param apikey API Key
         */
        this.setAPIKey = function (apikey) {
            _this._apiKey = apikey;
        };
        this.getAPIKey = function () { return _this._apiKey; };
    }
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=Client.js.map
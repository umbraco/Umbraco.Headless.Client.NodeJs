"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clients_1 = require("./Clients");
var ApiRequest_1 = require("./ApiRequest");
var Client = /** @class */ (function () {
    function Client(options) {
        var _this = this;
        this.options = options;
        this._baseUrl = null;
        this.cdn = new Clients_1.CDNClient(this);
        this.media = new Clients_1.MediaClient(this);
        this.manager = new Clients_1.ManagerClient(this);
        /**
         * Makes request from and [Endpoint]
         */
        this.makeRequest = function (endpoint, data) {
            return new ApiRequest_1.ApiRequest(_this, endpoint, data);
        };
        this.makeUrl = function () {
        };
    }
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=Client.js.map
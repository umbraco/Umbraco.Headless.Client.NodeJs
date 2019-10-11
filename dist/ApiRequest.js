"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endpoint_1 = require("./Endpoint");
var node_fetch_1 = require("node-fetch");
var HOSTNAME = 's1.umbraco.io';
var ApiRequest = /** @class */ (function () {
    function ApiRequest(client, endpoint, data) {
        var _this = this;
        this.client = client;
        this.endpoint = endpoint;
        this.data = data;
        this.promise = function () {
            var projectAlias = _this.client.options.projectAlias;
            var url = "https://" + projectAlias + "." + HOSTNAME;
            switch (_this.endpoint.source) {
                case Endpoint_1.EndpointSource.CDN:
                    url += "/cdn";
            }
            url += _this.endpoint.getPath();
            var requestInit = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json+hal;v=2',
                    'umb-project-alias': projectAlias,
                    'Accept-Language': _this.client.options.language
                }
            };
            var method = _this.endpoint.method.toLowerCase();
            if ((method === "post" || method === 'put') && !!_this.data) {
                requestInit.body = JSON.stringify(_this.data);
            }
            return node_fetch_1.default(url, requestInit)
                .then(function (res) { return res.json(); });
        };
    }
    return ApiRequest;
}());
exports.ApiRequest = ApiRequest;
//# sourceMappingURL=ApiRequest.js.map
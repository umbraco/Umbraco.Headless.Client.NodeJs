"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CDNClient_1 = require("./CDNClient");
var MediaClient_1 = require("./MediaClient");
var DeliveryClient = /** @class */ (function () {
    function DeliveryClient(client) {
        this.client = client;
        this.content = new CDNClient_1.CDNClient(this.client);
        this.media = new MediaClient_1.MediaClient(this.client);
    }
    return DeliveryClient;
}());
exports.DeliveryClient = DeliveryClient;
//# sourceMappingURL=DeliveryClient.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContentClient_1 = require("./ContentClient");
var MediaClient_1 = require("./MediaClient");
var DeliveryClient = /** @class */ (function () {
    function DeliveryClient(client) {
        this.client = client;
        this.content = new ContentClient_1.ContentClient(this.client);
        this.media = new MediaClient_1.MediaClient(this.client);
    }
    return DeliveryClient;
}());
exports.DeliveryClient = DeliveryClient;
//# sourceMappingURL=DeliveryClient.js.map
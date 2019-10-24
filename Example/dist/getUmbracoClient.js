"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var headless_sdk_1 = require("@umbraco/headless-sdk");
var headlessClient = null;
exports.getUmbracoClient = function () {
    if (!headlessClient) {
        headlessClient = new headless_sdk_1.Client({
            projectAlias: 'headless-house-of-code',
            language: 'en-US'
        });
        headlessClient.setAPIKey("czt7Xiu4WdXlLqBlFtop");
        // debugger
    }
    return headlessClient;
};
//# sourceMappingURL=getUmbracoClient.js.map
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var APIRequestError = /** @class */ (function (_super) {
    __extends(APIRequestError, _super);
    function APIRequestError(message, response, jsonData) {
        var _this = _super.call(this, message) || this;
        _this.response = response;
        _this.jsonData = jsonData;
        _this.name = "APIRequestError";
        return _this;
    }
    return APIRequestError;
}(Error));
exports.APIRequestError = APIRequestError;
//# sourceMappingURL=APIRequestError.js.map
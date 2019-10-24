"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var getUmbracoClient_1 = require("../getUmbracoClient");
var ApplicationController_1 = require("./ApplicationController");
var client = getUmbracoClient_1.getUmbracoClient();
exports.index = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var homeData, home, homeChildren, topMenuLinks, pageContent, children, products, cols;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.cdn.root().promise()];
            case 1:
                homeData = _a.sent();
                home = homeData._embedded.content.find(function (c) { return c.contentTypeAlias === 'home'; });
                return [4 /*yield*/, client.cdn.children(home._id).promise()];
            case 2:
                homeChildren = _a.sent();
                topMenuLinks = ApplicationController_1.makeTopNavLinks(homeChildren._embedded.content);
                return [4 /*yield*/, client.cdn.byUrl(req.path).promise()];
            case 3:
                pageContent = _a.sent();
                return [4 /*yield*/, client.cdn.children(pageContent._id).promise()];
            case 4:
                children = _a.sent();
                products = children._embedded.content.map(function (item) { return ({
                    name: item.productName,
                    price: item.price,
                    url: item._url,
                    category: item.category,
                    photo: item.photos,
                    description: item.description
                }); });
                cols = function (index) {
                    return index % 2 === 0 ? [5, 7] : [7, 5];
                };
                res.render('product/index.html.ejs', {
                    name: home.sitename,
                    topMenuLinks: topMenuLinks,
                    address: home.footerAddress,
                    footerHeader: home.footerHeader,
                    footerCTA: {
                        url: home.footerCTALink._url,
                        title: home.footerCTACaption
                    },
                    products: products,
                    cols: cols
                });
                return [2 /*return*/];
        }
    });
}); };
exports.show = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var homeData, home, homeChildren, topMenuLinks, productContent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.cdn.root().promise()];
            case 1:
                homeData = _a.sent();
                home = homeData._embedded.content.find(function (c) { return c.contentTypeAlias === 'home'; });
                return [4 /*yield*/, client.cdn.children(home._id).promise()];
            case 2:
                homeChildren = _a.sent();
                topMenuLinks = ApplicationController_1.makeTopNavLinks(homeChildren._embedded.content);
                return [4 /*yield*/, client.cdn.byUrl(req.path).promise()];
            case 3:
                productContent = _a.sent();
                productContent.photos.umbracoFile.src;
                res.render('product/show.html.ejs', {
                    name: home.sitename,
                    topMenuLinks: topMenuLinks,
                    address: home.footerAddress,
                    footerHeader: home.footerHeader,
                    footerCTA: {
                        url: home.footerCTALink._url,
                        title: home.footerCTACaption
                    },
                    product: productContent
                });
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=ProductController.js.map
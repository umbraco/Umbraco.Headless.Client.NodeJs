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
    var rootContent, home, children, footerCTA, topMenuLinks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.delivery.content.root()];
            case 1:
                rootContent = _a.sent();
                home = rootContent.find(function (c) { return c.contentTypeAlias === "home"; });
                return [4 /*yield*/, client.delivery.content.children(home._id)];
            case 2:
                children = _a.sent();
                console.log({ children: children });
                footerCTA = {
                    url: home.footerCTALink._url,
                    title: home.footerCTACaption
                };
                topMenuLinks = ApplicationController_1.makeTopNavLinks(children.items);
                res.render("home/index.html.ejs", {
                    name: home.sitename,
                    address: home.footerAddress,
                    footerHeader: home.footerHeader,
                    footerCTA: footerCTA,
                    topMenuLinks: topMenuLinks,
                    body: home.bodyText,
                    heroTitle: home.heroHeader,
                    heroBody: home.heroDescription,
                    heroImage: home.heroBackgroundImage.umbracoFile.src
                });
                return [2 /*return*/];
        }
    });
}); };
exports.blog = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, rootData, data, home, _b, children, blogPostsResp, topMenuLinks, contentElement, blogPosts, footerCTA, siteName, title, pageTitle;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, Promise.all([
                    client.delivery.content.root(),
                    client.delivery.content.byUrl("/home/blog")
                ])];
            case 1:
                _a = _c.sent(), rootData = _a[0], data = _a[1];
                home = rootData.find(function (c) { return c.contentTypeAlias === "home"; });
                return [4 /*yield*/, Promise.all([
                        client.delivery.content.children(home._id),
                        client.delivery.content.children(data._id)
                    ])];
            case 2:
                _b = _c.sent(), children = _b[0], blogPostsResp = _b[1];
                topMenuLinks = ApplicationController_1.makeTopNavLinks(children.items);
                contentElement = rootData[0];
                blogPosts = blogPostsResp;
                footerCTA = {
                    url: contentElement.footerCTALink._url,
                    title: contentElement.footerCTACaption
                };
                siteName = contentElement.sitename;
                title = data.pageTitle;
                pageTitle = siteName + " - " + title;
                console.log(data);
                res.render('home/blog.html.ejs', {
                    name: pageTitle,
                    address: contentElement.footerAddress,
                    footerHeader: contentElement.footerHeader,
                    footerCTA: footerCTA,
                    topMenuLinks: topMenuLinks,
                    blogPosts: blogPosts
                });
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=HomeController.js.map
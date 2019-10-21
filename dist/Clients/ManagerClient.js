"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endpoints_1 = require("../Endpoints");
var ManagerClient = /** @class */ (function () {
    function ManagerClient(client) {
        var _this = this;
        this.client = client;
        this.makeRequest = function (endpoint, data) {
            return _this.client.makeRequest(endpoint, data);
        };
    }
    Object.defineProperty(ManagerClient.prototype, "content", {
        get: function () {
            var _this = this;
            return {
                root: function () { return _this.makeRequest(Endpoints_1.Endpoints.management.content.root()); },
                byId: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.content.byId(id)); },
                children: function (id, options) { return _this.makeRequest(Endpoints_1.Endpoints.management.content.children(id, options)); },
                create: function (body) { return _this.makeRequest(Endpoints_1.Endpoints.management.content.create(), body); },
                publish: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.content.publish(id)); },
                unPublish: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.content.unPublish(id)); },
                update: function (id, body) { return _this.makeRequest(Endpoints_1.Endpoints.management.content.update(id), body); },
                delete: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.content.delete(id)); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "contentType", {
        get: function () {
            var _this = this;
            return {
                all: function () { return _this.makeRequest(Endpoints_1.Endpoints.management.contentType.all()); },
                byAlias: function (alias) { return _this.makeRequest(Endpoints_1.Endpoints.management.contentType.byAlias(alias)); },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "media", {
        get: function () {
            var _this = this;
            return {
                root: function () { return _this.makeRequest(Endpoints_1.Endpoints.management.media.root()); },
                byId: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.media.byId(id)); },
                children: function (id, options) { return _this.makeRequest(Endpoints_1.Endpoints.management.media.children(id, options)); },
                create: function (data) { return _this.makeRequest(Endpoints_1.Endpoints.management.media.create(), data); },
                update: function (id, data) { return _this.makeRequest(Endpoints_1.Endpoints.management.media.update(id), data); },
                delete: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.media.delete(id)); },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "mediaType", {
        get: function () {
            var _this = this;
            return {
                all: function () { return _this.makeRequest(Endpoints_1.Endpoints.management.mediaType.all()); },
                byAlias: function (alias) { return _this.makeRequest(Endpoints_1.Endpoints.management.mediaType.byAlias(alias)); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "language", {
        get: function () {
            var _this = this;
            return {
                all: function () { return _this.makeRequest(Endpoints_1.Endpoints.management.language.all()); },
                byISOCode: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.language.byISOCode(id)); },
                create: function (data) { return _this.makeRequest(Endpoints_1.Endpoints.management.language.create(), data); },
                update: function (id, data) { return _this.makeRequest(Endpoints_1.Endpoints.management.language.update(id), data); },
                delete: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.language.delete(id)); },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "relation", {
        get: function () {
            var _this = this;
            return {
                byId: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.relation.byId(id)); },
                byAlias: function (alias) { return _this.makeRequest(Endpoints_1.Endpoints.management.relation.byAlias(alias)); },
                byChild: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.relation.byChild(id)); },
                byParent: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.relation.byParent(id)); },
                create: function (data) { return _this.makeRequest(Endpoints_1.Endpoints.management.relation.create(), data); },
                delete: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.relation.delete(id)); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "relationType", {
        get: function () {
            var _this = this;
            return {
                byAlias: function (alias) { return _this.makeRequest(Endpoints_1.Endpoints.management.relationType.byAlias(alias)); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "member", {
        get: function () {
            var _this = this;
            return {
                byUsername: function (username) { return _this.makeRequest(Endpoints_1.Endpoints.management.member.byUsername(username)); },
                create: function (data) { return _this.makeRequest(Endpoints_1.Endpoints.management.member.create(), data); },
                update: function (username, data) { return _this.makeRequest(Endpoints_1.Endpoints.management.member.update(username), data); },
                addGroup: function (username, group) { return _this.makeRequest(Endpoints_1.Endpoints.management.member.addGroup(username, group)); },
                removeGroup: function (username, group) { return _this.makeRequest(Endpoints_1.Endpoints.management.member.removeGroup(username, group)); },
                delete: function (username) { return _this.makeRequest(Endpoints_1.Endpoints.management.member.delete(username)); },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "memberGroup", {
        get: function () {
            var _this = this;
            return {
                byName: function (name, data) { return _this.makeRequest(Endpoints_1.Endpoints.management.memberGroup.byName(name), data); },
                create: function (data) { return _this.makeRequest(Endpoints_1.Endpoints.management.memberGroup.create(), data); },
                delete: function (name) { return _this.makeRequest(Endpoints_1.Endpoints.management.memberGroup.delete(name)); },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "memberType", {
        get: function () {
            var _this = this;
            return {
                all: function () { return _this.makeRequest(Endpoints_1.Endpoints.management.memberType.all()); },
                byAlias: function (alias) { return _this.makeRequest(Endpoints_1.Endpoints.management.memberType.byAlias(alias)); }
            };
        },
        enumerable: true,
        configurable: true
    });
    return ManagerClient;
}());
exports.ManagerClient = ManagerClient;
//# sourceMappingURL=ManagerClient.js.map
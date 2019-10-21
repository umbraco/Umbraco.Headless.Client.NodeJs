"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endpoint_1 = require("./Endpoint");
exports.Endpoints = {
    cdn: {
        root: function () { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.CDN, '/content', {}, 'get'); },
        byId: function (id, options) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.CDN, '/content/{id}', { id: id }, 'get', options); },
        byUrl: function (url, options) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.CDN, '/content/url?url={url}', { url: url }, 'get', options); },
        children: function (id, options) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.CDN, '/content/{id}/children', { id: id }, 'get', options); },
        ancestors: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.CDN, '/content/{id}/ancestors', { id: id }, 'get'); },
        descendants: function (id, options) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.CDN, '/content/{id}/descendants', { id: id }, 'get', options); }
    },
    media: {
        root: function () { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.CDN, "/media", {}, 'get'); },
        byId: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.CDN, '/media/{id}', { id: id }, 'get'); },
        children: function (id, options) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.CDN, '/media/{id}/children', { id: id }, 'get', options); },
    },
    management: {
        content: {
            root: function () { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, "/content", {}, 'get'); },
            byId: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/content/{id}', { id: id }, 'get'); },
            children: function (id, options) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/content/{id}/children', { id: id }, 'get', options); },
            create: function () { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/content', {}, 'post'); },
            publish: function (id) {
                return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/content/{id}/publish', { id: id }, 'put');
            },
            unPublish: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/content/{id}/unpublish', { id: id }, 'put'); },
            update: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/content/{id}', { id: id }, 'put'); },
            delete: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/content/{id}', { id: id }, 'delete'); },
        },
        contentType: {
            all: function () { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/content/type', {}, 'get'); },
            byAlias: function (alias) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/content/type/{alias}', { alias: alias }, 'get'); },
        },
        media: {
            root: function () { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/media', {}, 'get'); },
            byId: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/media/{id}', { id: id }, 'get'); },
            children: function (id, options) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/media/{id}/children', { id: id }, 'get', options); },
            create: function () { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/media', {}, 'post', { usingMultipart: true }); },
            update: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/media/{id}', { id: id }, 'put'); },
            delete: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/media/{id}', { id: id }, 'delete'); },
        },
        mediaType: {
            all: function () { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/media/type', {}, 'get'); },
            byAlias: function (alias) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/media/type/{alias}', { alias: alias }, 'get'); },
        },
        language: {
            all: function () { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/language', {}, 'get'); },
            byISOCode: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/language/{id}', { id: id }, 'get'); },
            create: function () { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/language', {}, 'post'); },
            update: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/language/{id}', { id: id }, 'put'); },
            delete: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/language/{id}', { id: id }, 'delete'); },
        },
        relation: {
            byId: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/relation/{id}', { id: id }, 'get'); },
            byParent: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/relation/parent/{id}', { id: id }, 'get'); },
            byChild: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/relation/child/{id}', { id: id }, 'get'); },
            byAlias: function (alias) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/relation/{alias}', { alias: alias }, 'get'); },
            create: function () { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/relation', {}, 'post'); },
            delete: function (id) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/relation/{id}', { id: id }, 'delete'); },
        },
        relationType: {
            byAlias: function (alias) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/relation/type/{alias}', { alias: alias }, 'get'); }
        },
        member: {
            byUsername: function (username) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/member/{username}', { username: username }, 'get'); },
            create: function () { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/member', {}, 'post'); },
            update: function (username) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/member/{username}', { username: username }, 'put'); },
            addGroup: function (username, group) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/member/{username}/groups/{group}', { username: username, group: group }, 'put'); },
            removeGroup: function (username, group) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/member/{username}/groups/{group}', { username: username, group: group }, 'delete'); },
            delete: function (username) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/member/{username}', { username: username }, 'delete'); },
        },
        memberGroup: {
            byName: function (name) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/member/group/{name}', { name: name }, 'post'); },
            create: function () { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/member/group', {}, 'post'); },
            delete: function (name) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/member/group/{name}', { name: name }, 'delete'); },
        },
        memberType: {
            all: function () { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/member/type', {}, 'get'); },
            byAlias: function (alias) { return new Endpoint_1.Endpoint(Endpoint_1.EndpointSource.ContentManagement, '/member/type/{alias}', { alias: alias }, 'get'); }
        }
    }
};
//# sourceMappingURL=Endpoints.js.map
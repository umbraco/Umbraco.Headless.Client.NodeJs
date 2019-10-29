"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endpoints_1 = require("../Endpoints");
/**
 * {ManagerClient} is being used to manage content from Umbraco headless application
 */
var ManagerClient = /** @class */ (function () {
    function ManagerClient(client) {
        var _this = this;
        this.client = client;
        this.makeRequest = function (endpoint, data) {
            return _this.client.makeRequest(endpoint, data);
        };
    }
    Object.defineProperty(ManagerClient.prototype, "content", {
        /**
         * Content API
         */
        get: function () {
            var _this = this;
            return {
                /**
                 * Gets all published content at the root of the tree
                 */
                root: function () { return _this.makeRequest(Endpoints_1.Endpoints.management.content.root()); },
                /**
                 * Gets a single published content by its id
                 * @param id GUID part of an Umbraco UDI
                 */
                byId: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.content.byId(id)); },
                /**
                 * Get all children of a content object
                 * @param id GUID part of an Umbraco UDI
                 * @param options Request options if with page
                 */
                children: function (id, options) { return _this.makeRequest(Endpoints_1.Endpoints.management.content.children(id, options)); },
                /**
                 * Create a content object
                 * @param body Data which needs to be used for creating Content
                 */
                create: function (body) { return _this.makeRequest(Endpoints_1.Endpoints.management.content.create(), body); },
                /**
                 * Publish a content object
                 * @param id GUID part of an Umbraco UDI
                 * @param options Request options
                 */
                publish: function (id, options) { return _this.makeRequest(Endpoints_1.Endpoints.management.content.publish(id, options)); },
                /**
                 * Un-publish a content object
                 * @param id GUID part of an Umbraco UDI
                 * @param options Request options
                 */
                unPublish: function (id, options) { return _this.makeRequest(Endpoints_1.Endpoints.management.content.unPublish(id, options)); },
                /**
                 * Update a content object
                 * @param id GUID part of an Umbraco UDI
                 * @param body Data which needs to be used for updating content
                 */
                update: function (id, body) { return _this.makeRequest(Endpoints_1.Endpoints.management.content.update(id), body); },
                /**
                 * Delete a content object
                 * @param id GUID part of an Umbraco UDI
                 */
                delete: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.content.delete(id)); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "contentType", {
        /**
         * ContentType API
         */
        get: function () {
            var _this = this;
            return {
                /**
                 * Fetch all content types
                 */
                all: function () { return _this.makeRequest(Endpoints_1.Endpoints.management.contentType.all()); },
                /**
                 * Find content type by alias
                 * @param alias Alias for the content type
                 */
                byAlias: function (alias) { return _this.makeRequest(Endpoints_1.Endpoints.management.contentType.byAlias(alias)); },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "media", {
        //TODO: Needs a interface for body
        /**
         * Media API
         */
        get: function () {
            var _this = this;
            return {
                /**
                 * Fetch all media objects
                 */
                root: function () { return _this.makeRequest(Endpoints_1.Endpoints.management.media.root()); },
                /**
                 * Find media object by id
                 * @param id GUID part of an Umbraco UDI
                 */
                byId: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.media.byId(id)); },
                /**
                 * Fetch all children for content object
                 * @param id GUID part of an Umbraco UDI
                 * @param options Request options if with page
                 */
                children: function (id, options) { return _this.makeRequest(Endpoints_1.Endpoints.management.media.children(id, options)); },
                /**
                 * Create a media object
                 * @param data Data for creating media object
                 */
                create: function (data) { return _this.makeRequest(Endpoints_1.Endpoints.management.media.create(), data); },
                /**
                 * Update media object
                 * @param id GUID part of an Umbraco UDI
                 * @param data Data for updating media object
                 */
                update: function (id, data) { return _this.makeRequest(Endpoints_1.Endpoints.management.media.update(id), data); },
                /**
                 * Delete media object
                 * @param id GUID part of an Umbraco UDI
                 */
                delete: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.media.delete(id)); },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "mediaType", {
        /**
         * Media API
         */
        get: function () {
            var _this = this;
            return {
                /**
                 * Fetch all media types
                 */
                all: function () { return _this.makeRequest(Endpoints_1.Endpoints.management.mediaType.all()); },
                /**
                 * Find media type by alias
                 * @param alias Alias of the media type querying for
                 */
                byAlias: function (alias) { return _this.makeRequest(Endpoints_1.Endpoints.management.mediaType.byAlias(alias)); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "language", {
        /**
         * Language API
         */
        get: function () {
            var _this = this;
            return {
                /**
                 * Fetch all languages
                 */
                all: function () { return _this.makeRequest(Endpoints_1.Endpoints.management.language.all()); },
                /**
                 * Find language by ISO code
                 * @param id ISO Code for the language (e.g. en-US)
                 */
                byISOCode: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.language.byISOCode(id)); },
                /**
                 * Create a language
                 * @param data Data for creating language object
                 */
                create: function (data) { return _this.makeRequest(Endpoints_1.Endpoints.management.language.create(), data); },
                /**
                 * Update a language
                 * @param id ISO Code for the language (e.g. en-US)
                 * @param data Data for updating language object
                 */
                update: function (id, data) { return _this.makeRequest(Endpoints_1.Endpoints.management.language.update(id), data); },
                /**
                 * Delete a language
                 * @param id ISO Code for the language (e.g. en-US)
                 */
                delete: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.language.delete(id)); },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "relation", {
        /**
         * Relation API
         */
        get: function () {
            var _this = this;
            return {
                /**
                 * Find relation by id
                 * @param id GUID part of an Umbraco UDI
                 */
                byId: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.relation.byId(id)); },
                /**
                 * Find relation by alias
                 * @param alias Alias of the relation querying for
                 */
                byAlias: function (alias) { return _this.makeRequest(Endpoints_1.Endpoints.management.relation.byAlias(alias)); },
                /**
                 * Fetch child for relation with id
                 * @param id GUID part of an Umbraco UDI
                 */
                byChild: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.relation.byChild(id)); },
                /**
                 * Fetch parent for relation with id
                 * @param id GUID part of an Umbraco UDI
                 */
                byParent: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.relation.byParent(id)); },
                /**
                 * Create a relation
                 * @param data Data for creating relation object
                 */
                create: function (data) { return _this.makeRequest(Endpoints_1.Endpoints.management.relation.create(), data); },
                /**
                 * Delete relation with id
                 * @param id GUID part of an Umbraco UDI
                 */
                delete: function (id) { return _this.makeRequest(Endpoints_1.Endpoints.management.relation.delete(id)); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "relationType", {
        /**
         * RelationType API
         */
        get: function () {
            var _this = this;
            return {
                /**
                 * Fetch relation type by alias
                 * @param alias Alias for the relation type queryed for
                 */
                byAlias: function (alias) { return _this.makeRequest(Endpoints_1.Endpoints.management.relationType.byAlias(alias)); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "member", {
        /**
         * Member API
         */
        get: function () {
            var _this = this;
            return {
                /**
                 * Find member by username
                 * @param username Username for the user querying for
                 */
                byUsername: function (username) { return _this.makeRequest(Endpoints_1.Endpoints.management.member.byUsername(username)); },
                /**
                 * Create a new member
                 * @param data Data for creating a new member
                 */
                create: function (data) { return _this.makeRequest(Endpoints_1.Endpoints.management.member.create(), data); },
                /**
                 * Update user by username
                 * @param username Username for the user to be updated
                 * @param data Data for the user to be updated
                 */
                update: function (username, data) { return _this.makeRequest(Endpoints_1.Endpoints.management.member.update(username), data); },
                /**
                 * Add group to user
                 * @param username Username on the user who gets the group added
                 * @param group Group name of the group which the user needs to be added to
                 */
                addGroup: function (username, group) { return _this.makeRequest(Endpoints_1.Endpoints.management.member.addGroup(username, group)); },
                /**
                 * Remove group from user
                 * @param username Username on the user who need to get a group removed
                 * @param group Group name of the group which need to be removed.
                 */
                removeGroup: function (username, group) { return _this.makeRequest(Endpoints_1.Endpoints.management.member.removeGroup(username, group)); },
                /**
                 * Delete a user
                 * @param username Username for the user that needs to be deleted
                 */
                delete: function (username) { return _this.makeRequest(Endpoints_1.Endpoints.management.member.delete(username)); },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "memberGroup", {
        /**
         * MemberGroup API
         */
        get: function () {
            var _this = this;
            return {
                /**
                 * Fetch member group by name
                 * @param name The name of the group
                 */
                byName: function (name) { return _this.makeRequest(Endpoints_1.Endpoints.management.memberGroup.byName(name)); },
                /**
                 * Create a member group
                 * @param data Data for creating a member group
                 */
                create: function (data) { return _this.makeRequest(Endpoints_1.Endpoints.management.memberGroup.create(), data); },
                /**
                 * Delete member group
                 * @param name Name of the member group to be removed
                 */
                delete: function (name) { return _this.makeRequest(Endpoints_1.Endpoints.management.memberGroup.delete(name)); },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerClient.prototype, "memberType", {
        /**
         * MemberType API
         */
        get: function () {
            var _this = this;
            return {
                /**
                 * Fetch all member types
                 */
                all: function () { return _this.makeRequest(Endpoints_1.Endpoints.management.memberType.all()); },
                /**
                 * Find by alias
                 * @param alias Alias for the member type to be found.
                 */
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
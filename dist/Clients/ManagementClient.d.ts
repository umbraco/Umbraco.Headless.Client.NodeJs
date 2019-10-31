import { Client } from "../Client";
import { ContentCreateMemberType, ContentLanguageType, ContentManagerMediaType, ContentMemberCreateGroupType, ContentMemberGroupType, ContentMemberType, ContentMemberTypeType, ContentResponseElement, ContentTypeBase, CreateContentBody, CreateContentLanguageType } from "../Responses/index";
/**
 * {ManagerClient} is being used to manage content from Umbraco headless application
 */
export declare class ManagementClient {
    private readonly client;
    constructor(client: Client);
    private makeRequest;
    /**
     * Content API
     */
    readonly content: {
        /**
         * Gets all published content at the root of the tree
         */
        root: <R extends ContentResponseElement>() => Promise<R[]>;
        /**
         * Gets a single published content by its id
         * @param id GUID part of an Umbraco UDI
         */
        byId: <R extends ContentResponseElement>(id: string | number) => Promise<R>;
        /**
         * Get all children of a content object
         * @param id GUID part of an Umbraco UDI
         * @param options Request options if with page
         */
        children: <R extends ContentResponseElement>(id: string | number, options?: import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/RequestOptions/PageOptions").PageOptions | undefined) => Promise<import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/Responses/PagedResponse").PagedResponse<ContentResponseElement>>;
        /**
         * Create a content object
         * @param body Data which needs to be used for creating Content
         */
        create: <R extends ContentResponseElement>(body: CreateContentBody) => Promise<R>;
        /**
         * Publish a content object
         * @param id GUID part of an Umbraco UDI
         * @param options Request options
         */
        publish: <R extends ContentResponseElement>(id: string, options?: import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/RequestOptions/CultureOptions").CultureOptions | undefined) => Promise<R>;
        /**
         * Un-publish a content object
         * @param id GUID part of an Umbraco UDI
         * @param options Request options
         */
        unPublish: <R extends ContentResponseElement>(id: string, options?: import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/RequestOptions/CultureOptions").CultureOptions | undefined) => Promise<R>;
        /**
         * Update a content object
         * @param id GUID part of an Umbraco UDI
         * @param body Data which needs to be used for updating content
         */
        update: <R extends ContentResponseElement>(id: string | number, body: Partial<R>) => Promise<R>;
        /**
         * Delete a content object
         * @param id GUID part of an Umbraco UDI
         */
        delete: (id: string | number) => Promise<any>;
    };
    /**
     * ContentType API
     */
    readonly contentType: {
        /**
         * Fetch all content types
         */
        all: <R extends ContentTypeBase>() => Promise<R[]>;
        /**
         * Find content type by alias
         * @param alias Alias for the content type
         */
        byAlias: (alias: string) => Promise<ContentTypeBase>;
    };
    /**
     * Media API
     */
    readonly media: {
        /**
         * Fetch all media objects
         */
        root: <R extends ContentManagerMediaType>() => Promise<R[]>;
        /**
         * Find media object by id
         * @param id GUID part of an Umbraco UDI
         */
        byId: <R extends ContentManagerMediaType>(id: string | number) => Promise<R>;
        /**
         * Fetch all children for content object
         * @param id GUID part of an Umbraco UDI
         * @param options Request options if with page
         */
        children: <R extends ContentManagerMediaType>(id: string | number, options?: import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/RequestOptions/PageOptions").PageOptions | undefined) => Promise<import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/Responses/PagedResponse").PagedResponse<R>>;
        /**
         * Create a media object
         * @param data Data for creating media object
         */
        create: (data: any) => Promise<any>;
        /**
         * Update media object
         * @param id GUID part of an Umbraco UDI
         * @param data Data for updating media object
         */
        update: (id: string | number, data: any) => Promise<any>;
        /**
         * Delete media object
         * @param id GUID part of an Umbraco UDI
         */
        delete: (id: string | number) => Promise<any>;
    };
    /**
     * Media API
     */
    readonly mediaType: {
        /**
         * Fetch all media types
         */
        all: () => Promise<import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/Responses/ContentManagerMediaType").MediaTypeContentManagerRoot>;
        /**
         * Find media type by alias
         * @param alias Alias of the media type querying for
         */
        byAlias: (alias: string) => Promise<import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/Responses/ContentManagerMediaType").MediaTypeContentManager>;
    };
    /**
     * Language API
     */
    readonly language: {
        /**
         * Fetch all languages
         */
        all: <R extends ContentLanguageType>() => Promise<R[]>;
        /**
         * Find language by ISO code
         * @param id ISO Code for the language (e.g. en-US)
         */
        byISOCode: <R extends ContentLanguageType>(id: string) => Promise<R>;
        /**
         * Create a language
         * @param data Data for creating language object
         */
        create: <R extends ContentLanguageType>(data: CreateContentLanguageType) => Promise<R>;
        /**
         * Update a language
         * @param id ISO Code for the language (e.g. en-US)
         * @param data Data for updating language object
         */
        update: <R extends ContentLanguageType>(id: string, data: CreateContentLanguageType) => Promise<R>;
        /**
         * Delete a language
         * @param id ISO Code for the language (e.g. en-US)
         */
        delete: <R extends ContentLanguageType>(id: string) => Promise<R>;
    };
    /**
     * Relation API
     */
    readonly relation: {
        /**
         * Find relation by id
         * @param id GUID part of an Umbraco UDI
         */
        byId: (id: string) => Promise<import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/Responses/ContentRelationType").ContentRelationType>;
        /**
         * Find relation by alias
         * @param alias Alias of the relation querying for
         */
        byAlias: (alias: string) => Promise<import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/Responses/ContentRelationType").ContentRelationType[]>;
        /**
         * Fetch child for relation with id
         * @param id GUID part of an Umbraco UDI
         */
        byChild: (id: string) => Promise<import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/Responses/ContentRelationType").ContentRelationType[]>;
        /**
         * Fetch parent for relation with id
         * @param id GUID part of an Umbraco UDI
         */
        byParent: (id: string) => Promise<import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/Responses/ContentRelationType").ContentRelationType[]>;
        /**
         * Create a relation
         * @param data Data for creating relation object
         */
        create: (data: any) => Promise<import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/Responses/ContentRelationType").ContentRelationType>;
        /**
         * Delete relation with id
         * @param id GUID part of an Umbraco UDI
         */
        delete: (id: string) => Promise<import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/Responses/ContentRelationType").ContentRelationType>;
    };
    /**
     * RelationType API
     */
    readonly relationType: {
        /**
         * Fetch relation type by alias
         * @param alias Alias for the relation type queryed for
         */
        byAlias: (alias: string) => Promise<import("../../../../../../../Users/askilada/code/Umbraco/headless-js-sdk/src/Responses/ContentRelationType").ContentRelationTypeType>;
    };
    /**
     * Member API
     */
    readonly member: {
        /**
         * Find member by username
         * @param username Username for the user querying for
         */
        byUsername: <R extends ContentMemberType>(username: string) => Promise<R>;
        /**
         * Create a new member
         * @param data Data for creating a new member
         */
        create: <R extends ContentMemberType>(data: ContentCreateMemberType) => Promise<R>;
        /**
         * Update user by username
         * @param username Username for the user to be updated
         * @param data Data for the user to be updated
         */
        update: <R extends ContentMemberType>(username: string, data: ContentCreateMemberType) => Promise<R>;
        /**
         * Add group to user
         * @param username Username on the user who gets the group added
         * @param group Group name of the group which the user needs to be added to
         */
        addGroup: (username: string, group: string) => Promise<any>;
        /**
         * Remove group from user
         * @param username Username on the user who need to get a group removed
         * @param group Group name of the group which need to be removed.
         */
        removeGroup: (username: string, group: string) => Promise<any>;
        /**
         * Delete a user
         * @param username Username for the user that needs to be deleted
         */
        delete: (username: string) => Promise<any>;
    };
    /**
     * MemberGroup API
     */
    readonly memberGroup: {
        /**
         * Fetch member group by name
         * @param name The name of the group
         */
        byName: (name: string) => Promise<ContentMemberGroupType>;
        /**
         * Create a member group
         * @param data Data for creating a member group
         */
        create: (data: ContentMemberCreateGroupType) => Promise<ContentMemberGroupType>;
        /**
         * Delete member group
         * @param name Name of the member group to be removed
         */
        delete: (name: string) => Promise<ContentMemberGroupType>;
    };
    /**
     * MemberType API
     */
    readonly memberType: {
        /**
         * Fetch all member types
         */
        all: <R extends ContentMemberTypeType>() => Promise<R[]>;
        /**
         * Find by alias
         * @param alias Alias for the member type to be found.
         */
        byAlias: <R extends ContentMemberTypeType>(alias: string) => Promise<R>;
    };
}

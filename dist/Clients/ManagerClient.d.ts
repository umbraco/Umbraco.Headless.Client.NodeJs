import { Client } from "../Client";
import { ContentCreateMemberType, ContentLanguageType, ContentManagerMediaType, ContentMemberCreateGroupType, ContentMemberType, ContentMemberTypeType, ContentResponseElement, ContentTypeBase, CreateContentBody, CreateContentLanguageType } from "../Responses/index";
/**
 * {ManagerClient} is being used to manage content from Umbraco headless application
 */
export declare class ManagerClient {
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
        root: <R extends ContentResponseElement>() => Promise<any>;
        /**
         * Gets a single published content by its id
         * @param id GUID part of an Umbraco UDI
         */
        byId: <R_1 extends ContentResponseElement>(id: string | number) => Promise<any>;
        /**
         * Get all children of a content object
         * @param id GUID part of an Umbraco UDI
         * @param options Request options if with page
         */
        children: <R_2 extends ContentResponseElement>(id: string | number, options?: import("../RequestOptions").PageOptions | undefined) => Promise<any>;
        /**
         * Create a content object
         * @param body Data which needs to be used for creating Content
         */
        create: <R_3 extends ContentResponseElement>(body: CreateContentBody) => Promise<any>;
        /**
         * Publish a content object
         * @param id GUID part of an Umbraco UDI
         * @param options Request options
         */
        publish: <R_4 extends ContentResponseElement>(id: string, options?: import("../RequestOptions").CultureOptions | undefined) => Promise<any>;
        /**
         * Un-publish a content object
         * @param id GUID part of an Umbraco UDI
         * @param options Request options
         */
        unPublish: <R_5 extends ContentResponseElement>(id: string, options?: import("../RequestOptions").CultureOptions | undefined) => Promise<any>;
        /**
         * Update a content object
         * @param id GUID part of an Umbraco UDI
         * @param body Data which needs to be used for updating content
         */
        update: <R_6 extends ContentResponseElement>(id: string | number, body: Partial<R_6>) => Promise<any>;
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
        all: <R extends ContentTypeBase>() => Promise<any>;
        /**
         * Find content type by alias
         * @param alias Alias for the content type
         */
        byAlias: (alias: string) => Promise<any>;
    };
    /**
     * Media API
     */
    readonly media: {
        /**
         * Fetch all media objects
         */
        root: <R extends ContentManagerMediaType>() => Promise<any>;
        /**
         * Find media object by id
         * @param id GUID part of an Umbraco UDI
         */
        byId: <R_1 extends ContentManagerMediaType>(id: string | number) => Promise<any>;
        /**
         * Fetch all children for content object
         * @param id GUID part of an Umbraco UDI
         * @param options Request options if with page
         */
        children: <R_2 extends ContentManagerMediaType>(id: string | number, options?: import("../RequestOptions").PageOptions | undefined) => Promise<any>;
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
        all: () => Promise<any>;
        /**
         * Find media type by alias
         * @param alias Alias of the media type querying for
         */
        byAlias: (alias: string) => Promise<any>;
    };
    /**
     * Language API
     */
    readonly language: {
        /**
         * Fetch all languages
         */
        all: <R extends ContentLanguageType>() => Promise<any>;
        /**
         * Find language by ISO code
         * @param id ISO Code for the language (e.g. en-US)
         */
        byISOCode: <R_1 extends ContentLanguageType>(id: string) => Promise<any>;
        /**
         * Create a language
         * @param data Data for creating language object
         */
        create: <R_2 extends ContentLanguageType>(data: CreateContentLanguageType) => Promise<any>;
        /**
         * Update a language
         * @param id ISO Code for the language (e.g. en-US)
         * @param data Data for updating language object
         */
        update: <R_3 extends ContentLanguageType>(id: string, data: CreateContentLanguageType) => Promise<any>;
        /**
         * Delete a language
         * @param id ISO Code for the language (e.g. en-US)
         */
        delete: <R_4 extends ContentLanguageType>(id: string) => Promise<any>;
    };
    /**
     * Relation API
     */
    readonly relation: {
        /**
         * Find relation by id
         * @param id GUID part of an Umbraco UDI
         */
        byId: (id: string) => Promise<any>;
        /**
         * Find relation by alias
         * @param alias Alias of the relation querying for
         */
        byAlias: (alias: string) => Promise<any>;
        /**
         * Fetch child for relation with id
         * @param id GUID part of an Umbraco UDI
         */
        byChild: (id: string) => Promise<any>;
        /**
         * Fetch parent for relation with id
         * @param id GUID part of an Umbraco UDI
         */
        byParent: (id: string) => Promise<any>;
        /**
         * Create a relation
         * @param data Data for creating relation object
         */
        create: (data: any) => Promise<any>;
        /**
         * Delete relation with id
         * @param id GUID part of an Umbraco UDI
         */
        delete: (id: string) => Promise<any>;
    };
    /**
     * RelationType API
     */
    readonly relationType: {
        /**
         * Fetch relation type by alias
         * @param alias Alias for the relation type queryed for
         */
        byAlias: (alias: string) => Promise<any>;
    };
    /**
     * Member API
     */
    readonly member: {
        /**
         * Find member by username
         * @param username Username for the user querying for
         */
        byUsername: <R extends ContentMemberType>(username: string) => Promise<any>;
        /**
         * Create a new member
         * @param data Data for creating a new member
         */
        create: <R_1 extends ContentMemberType>(data: ContentCreateMemberType) => Promise<any>;
        /**
         * Update user by username
         * @param username Username for the user to be updated
         * @param data Data for the user to be updated
         */
        update: <R_2 extends ContentMemberType>(username: string, data: ContentCreateMemberType) => Promise<any>;
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
        byName: (name: string) => Promise<any>;
        /**
         * Create a member group
         * @param data Data for creating a member group
         */
        create: (data: ContentMemberCreateGroupType) => Promise<any>;
        /**
         * Delete member group
         * @param name Name of the member group to be removed
         */
        delete: (name: string) => Promise<any>;
    };
    /**
     * MemberType API
     */
    readonly memberType: {
        /**
         * Fetch all member types
         */
        all: <R extends ContentMemberTypeType>() => Promise<any>;
        /**
         * Find by alias
         * @param alias Alias for the member type to be found.
         */
        byAlias: <R_1 extends ContentMemberTypeType>(alias: string) => Promise<any>;
    };
}

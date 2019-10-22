import { Client } from "../Client";
import { PageOptions } from "../RequestOptions";
import { ContentCreateMemberType, ContentLanguageType, ContentManagerMediaType, ContentMemberCreateGroupType, ContentMemberGroupType, ContentMemberType, ContentMemberTypeType, ContentMemberTypeTypeGroup, ContentResponseElement, ContentTypeBase, CreateContentBody, CreateContentLanguageType, MediaTypeContentManagerRoot } from "../Responses";
import { ApiRequest } from "../ApiRequest";
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
        root: <R extends ContentResponseElement>() => ApiRequest<import("..").ApiResponse<import("../Responses").RootContentResponse<R>, any>>;
        /**
         * Gets a single published content by its id
         * @param id GUID part of an Umbraco UDI
         */
        byId: <R_1 extends ContentResponseElement>(id: string | number) => ApiRequest<R_1>;
        /**
         * Get all children of a content object
         * @param id GUID part of an Umbraco UDI
         * @param options Request options if with page
         */
        children: <R_2 extends ContentResponseElement>(id: string | number, options?: PageOptions) => ApiRequest<import("..").ApiResponse<import("../Responses").RootContentResponse<ContentResponseElement>, any>>;
        /**
         * Create a content object
         * @param body Data which needs to be used for creating Content
         */
        create: <R_3 extends ContentResponseElement>(body: CreateContentBody) => ApiRequest<R_3>;
        /**
         * Publish a content object
         * @param id GUID part of an Umbraco UDI
         */
        publish: <R_4 extends ContentResponseElement>(id: string) => ApiRequest<R_4>;
        /**
         * Un-publish a content object
         * @param id GUID part of an Umbraco UDI
         */
        unPublish: <R_5 extends ContentResponseElement>(id: string) => ApiRequest<R_5>;
        /**
         * Update a content object
         * @param id GUID part of an Umbraco UDI
         * @param body Data which needs to be used for updating content
         */
        update: <R_6 extends ContentResponseElement>(id: string | number, body: Partial<R_6>) => ApiRequest<R_6>;
        /**
         * Delete a content object
         * @param id GUID part of an Umbraco UDI
         */
        delete: (id: string | number) => ApiRequest<any>;
    };
    /**
     * ContentType API
     */
    readonly contentType: {
        /**
         * Fetch all content types
         */
        all: <R extends ContentTypeBase>() => ApiRequest<import("..").ApiResponse<import("../Responses").ContentTypeBaseResponse<R>, any>>;
        /**
         * Find content type by alias
         * @param alias Alias for the content type
         */
        byAlias: (alias: string) => ApiRequest<ContentTypeBase>;
    };
    /**
     * Media API
     */
    readonly media: {
        /**
         * Fetch all media objects
         */
        root: <R extends ContentManagerMediaType>() => ApiRequest<import("..").ApiResponse<import("../Responses").ContentManagerMediaTypeBase<R>, any>>;
        /**
         * Find media object by id
         * @param id GUID part of an Umbraco UDI
         */
        byId: <R_1 extends ContentManagerMediaType>(id: string | number) => ApiRequest<R_1>;
        /**
         * Fetch all children for content object
         * @param id GUID part of an Umbraco UDI
         * @param options Request options if with page
         */
        children: <R_2 extends ContentManagerMediaType>(id: string | number, options?: PageOptions) => ApiRequest<import("..").ApiResponse<import("../Responses").ContentManagerMediaTypeBase<R_2>, any>>;
        /**
         * Create a media object
         * @param data Data for creating media object
         */
        create: (data: any) => ApiRequest<any>;
        /**
         * Update media object
         * @param id GUID part of an Umbraco UDI
         * @param data Data for updating media object
         */
        update: (id: string | number, data: any) => ApiRequest<any>;
        /**
         * Delete media object
         * @param id GUID part of an Umbraco UDI
         */
        delete: (id: string | number) => ApiRequest<any>;
    };
    /**
     * MediaType API
     */
    readonly mediaType: {
        /**
         * Fetch all media types
         */
        all: () => ApiRequest<MediaTypeContentManagerRoot>;
        /**
         * Find media type by alias
         * @param alias Alias of the media type querying for
         */
        byAlias: (alias: string) => ApiRequest<import("../Responses").MediaTypeContentManager>;
    };
    /**
     * Language API
     */
    readonly language: {
        /**
         * Fetch all languages
         */
        all: <R extends ContentLanguageType>() => ApiRequest<import("..").ApiResponse<import("../Responses").ContentLanguageRootType<R>, any>>;
        /**
         * Find language by ISO code
         * @param id ISO Code for the language (e.g. en-US)
         */
        byISOCode: <R_1 extends ContentLanguageType>(id: string) => ApiRequest<R_1>;
        /**
         * Create a language
         * @param data Data for creating language object
         */
        create: <R_2 extends ContentLanguageType>(data: CreateContentLanguageType) => ApiRequest<R_2>;
        /**
         * Update a language
         * @param id ISO Code for the language (e.g. en-US)
         * @param data Data for updating language object
         */
        update: <R_3 extends ContentLanguageType>(id: string, data: CreateContentLanguageType) => ApiRequest<R_3>;
        /**
         * Delete a language
         * @param id ISO Code for the language (e.g. en-US)
         */
        delete: <R_4 extends ContentLanguageType>(id: string) => ApiRequest<R_4>;
    };
    /**
     * Relation API
     */
    readonly relation: {
        /**
         * Find relation by id
         * @param id GUID part of an Umbraco UDI
         */
        byId: (id: string) => ApiRequest<import("../Responses").ContentRelationType>;
        /**
         * Find relation by alias
         * @param alias Alias of the relation querying for
         */
        byAlias: (alias: string) => ApiRequest<import("../Responses").ContentRelationRootType<import("../Responses").ContentRelationType>>;
        /**
         * Fetch child for relation with id
         * @param id GUID part of an Umbraco UDI
         */
        byChild: (id: string) => ApiRequest<import("../Responses").ContentRelationRootType<import("../Responses").ContentRelationType>>;
        /**
         * Fetch parent for relation with id
         * @param id GUID part of an Umbraco UDI
         */
        byParent: (id: string) => ApiRequest<import("../Responses").ContentRelationRootType<import("../Responses").ContentRelationType>>;
        /**
         * Create a relation
         * @param data Data for creating relation object
         */
        create: (data: any) => ApiRequest<import("../Responses").ContentRelationType>;
        /**
         * Delete relation with id
         * @param id GUID part of an Umbraco UDI
         */
        delete: (id: string) => ApiRequest<import("../Responses").ContentRelationType>;
    };
    /**
     * RelationType API
     */
    readonly relationType: {
        /**
         * Fetch relation type by alias
         * @param alias Alias for the relation type queryed for
         */
        byAlias: (alias: string) => ApiRequest<import("../Responses").ContentRelationTypeType>;
    };
    /**
     * Member API
     */
    readonly member: {
        /**
         * Find member by username
         * @param username Username for the user querying for
         */
        byUsername: <R extends ContentMemberType>(username: string) => ApiRequest<R>;
        /**
         * Create a new member
         * @param data Data for creating a new member
         */
        create: <R_1 extends ContentMemberType>(data: ContentCreateMemberType) => ApiRequest<R_1>;
        /**
         * Update user by username
         * @param username Username for the user to be updated
         * @param data Data for the user to be updated
         */
        update: <R_2 extends ContentMemberType>(username: string, data: ContentCreateMemberType) => ApiRequest<R_2>;
        /**
         * Add group to user
         * @param username Username on the user who gets the group added
         * @param group Group name of the group which the user needs to be added to
         */
        addGroup: (username: string, group: string) => ApiRequest<any>;
        /**
         * Remove group from user
         * @param username Username on the user who need to get a group removed
         * @param group Group name of the group which need to be removed.
         */
        removeGroup: (username: string, group: string) => ApiRequest<any>;
        /**
         * Delete a user
         * @param username Username for the user that needs to be deleted
         */
        delete: (username: string) => ApiRequest<any>;
    };
    /**
     * MemberGroup API
     */
    readonly memberGroup: {
        /**
         * Fetch member group by name
         * @param name The name of the group
         */
        byName: (name: string) => ApiRequest<ContentMemberGroupType>;
        /**
         * Create a member group
         * @param data Data for creating a member group
         */
        create: (data: ContentMemberCreateGroupType) => ApiRequest<ContentMemberGroupType>;
        /**
         * Delete member group
         * @param name Name of the member group to be removed
         */
        delete: (name: string) => ApiRequest<ContentMemberGroupType>;
    };
    /**
     * MemberType API
     */
    readonly memberType: {
        /**
         * Fetch all member types
         */
        all: <R extends ContentMemberTypeType>() => ApiRequest<ContentMemberTypeTypeGroup<R>>;
        /**
         * Find by alias
         * @param alias Alias for the member type to be found.
         */
        byAlias: <R_1 extends ContentMemberTypeType>(alias: string) => ApiRequest<R_1>;
    };
}

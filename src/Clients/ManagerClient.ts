import {Client} from "../Client";
import {Endpoint} from "../Endpoint";
import {Endpoints} from "../Endpoints";
import {
    APIContentChildrenOptions,
    APIContentPublishOptions,
    APIContentUnPublishOptions, APIMediaChildrenOptions,
} from "../RequestOptions";
import {
    ContentCreateMemberType,
    ContentLanguageType,
    ContentManagerMediaType,
    ContentMemberCreateGroupType,
    ContentMemberGroupType,
    ContentMemberType, ContentMemberTypeType,
    ContentResponseElement,
    ContentTypeBase,
    CreateContentBody,
    CreateContentLanguageType,
} from "../Responses";


/**
 * {ManagerClient} is being used to manage content from Umbraco headless application
 */
export class ManagerClient {

    constructor(
        private readonly client: Client
    ) {

    }

    private makeRequest = <R>(endpoint: Endpoint<R>, data?: any) => {
        return this.client.makeRequest(endpoint, data)
    }


    /**
     * Content API
     */
    get content() {
        return {
            /**
             * Gets all published content at the root of the tree
             */
            root: <R extends ContentResponseElement>() => this.makeRequest(Endpoints.management.content.root<R>()),

            /**
             * Gets a single published content by its id
             * @param id GUID part of an Umbraco UDI
             */
            byId: <R extends ContentResponseElement>(id: string|number) => this.makeRequest(Endpoints.management.content.byId<R>(id)),

            /**
             * Get all children of a content object
             * @param id GUID part of an Umbraco UDI
             * @param options Request options if with page
             */
            children: <R extends ContentResponseElement>(id: string|number, options?: APIContentChildrenOptions) => this.makeRequest(Endpoints.management.content.children(id, options)),

            /**
             * Create a content object
             * @param body Data which needs to be used for creating Content
             */
            create: <R extends ContentResponseElement>(body: CreateContentBody) => this.makeRequest(Endpoints.management.content.create<R>(), body),

            /**
             * Publish a content object
             * @param id GUID part of an Umbraco UDI
             * @param options Request options
             */
            publish: <R extends ContentResponseElement>(id: string, options?: APIContentPublishOptions) => this.makeRequest(Endpoints.management.content.publish<R>(id, options) as Endpoint<R, APIContentPublishOptions>),

            /**
             * Un-publish a content object
             * @param id GUID part of an Umbraco UDI
             * @param options Request options
             */
            unPublish: <R extends ContentResponseElement>(id: string, options?: APIContentUnPublishOptions) => this.makeRequest(Endpoints.management.content.unPublish<R>(id, options)),

            /**
             * Update a content object
             * @param id GUID part of an Umbraco UDI
             * @param body Data which needs to be used for updating content
             */
            update: <R extends ContentResponseElement>(id: string|number, body: Partial<R>) => this.makeRequest(Endpoints.management.content.update<R>(id), body),

            /**
             * Delete a content object
             * @param id GUID part of an Umbraco UDI
             */
            delete: (id: string|number) => this.makeRequest(Endpoints.management.content.delete(id))
        }
    }

    /**
     * ContentType API
     */
    get contentType() {
        return {
            /**
             * Fetch all content types
             */
            all: <R extends ContentTypeBase>() => this.makeRequest(Endpoints.management.contentType.all<R>()),

            /**
             * Find content type by alias
             * @param alias Alias for the content type
             */
            byAlias: (alias: string) => this.makeRequest(Endpoints.management.contentType.byAlias(alias)),
        }
    }

    //TODO: Needs a interface for body
    /**
     * Media API
     */
    get media() {
        return {
            /**
             * Fetch all media objects
             */
            root: <R extends ContentManagerMediaType>() => this.makeRequest(Endpoints.management.media.root<R>()),

            /**
             * Find media object by id
             * @param id GUID part of an Umbraco UDI
             */
            byId: <R extends ContentManagerMediaType>(id: string|number) => this.makeRequest(Endpoints.management.media.byId<R>(id)),

            /**
             * Fetch all children for content object
             * @param id GUID part of an Umbraco UDI
             * @param options Request options if with page
             */
            children: <R extends ContentManagerMediaType>(id: string|number, options?: APIMediaChildrenOptions) => this.makeRequest(Endpoints.management.media.children<R>(id, options)),

            /**
             * Create a media object
             * @param data Data for creating media object
             */
            create: (data: any) => this.makeRequest(Endpoints.management.media.create(), data),

            /**
             * Update media object
             * @param id GUID part of an Umbraco UDI
             * @param data Data for updating media object
             */
            update: (id: string|number, data: any) => this.makeRequest(Endpoints.management.media.update(id), data),

            /**
             * Delete media object
             * @param id GUID part of an Umbraco UDI
             */
            delete: (id: string|number) => this.makeRequest(Endpoints.management.media.delete(id)),
        }
    }

    /**
     * MediaType API
     */
    get mediaType() {
        return {
            /**
             * Fetch all media types
             */
            all: () => this.makeRequest(Endpoints.management.mediaType.all()),

            /**
             * Find media type by alias
             * @param alias Alias of the media type querying for
             */
            byAlias: (alias: string) => this.makeRequest(Endpoints.management.mediaType.byAlias(alias))
        }
    }

    /**
     * Language API
     */
    get language() {
        return {
            /**
             * Fetch all languages
             */
            all: <R extends ContentLanguageType>() => this.makeRequest(Endpoints.management.language.all<R>()),

            /**
             * Find language by ISO code
             * @param id ISO Code for the language (e.g. en-US)
             */
            byISOCode: <R extends ContentLanguageType>(id: string) => this.makeRequest(Endpoints.management.language.byISOCode<R>(id)),

            /**
             * Create a language
             * @param data Data for creating language object
             */
            create: <R extends ContentLanguageType>(data: CreateContentLanguageType) => this.makeRequest(Endpoints.management.language.create<R>(), data),

            /**
             * Update a language
             * @param id ISO Code for the language (e.g. en-US)
             * @param data Data for updating language object
             */
            update: <R extends ContentLanguageType>(id: string, data: CreateContentLanguageType) => this.makeRequest(Endpoints.management.language.update<R>(id), data),

            /**
             * Delete a language
             * @param id ISO Code for the language (e.g. en-US)
             */
            delete: <R extends ContentLanguageType>(id: string) => this.makeRequest(Endpoints.management.language.delete<R>(id)),

        }
    }

    /**
     * Relation API
     */
    get relation() {
        return {
            /**
             * Find relation by id
             * @param id GUID part of an Umbraco UDI
             */
            byId: (id: string) => this.makeRequest(Endpoints.management.relation.byId(id)),

            /**
             * Find relation by alias
             * @param alias Alias of the relation querying for
             */
            byAlias: (alias: string) => this.makeRequest(Endpoints.management.relation.byAlias(alias)),

            /**
             * Fetch child for relation with id
             * @param id GUID part of an Umbraco UDI
             */
            byChild: (id: string) => this.makeRequest(Endpoints.management.relation.byChild(id)),

            /**
             * Fetch parent for relation with id
             * @param id GUID part of an Umbraco UDI
             */
            byParent: (id: string) => this.makeRequest(Endpoints.management.relation.byParent(id)),

            /**
             * Create a relation
             * @param data Data for creating relation object
             */
            create: (data: any) => this.makeRequest(Endpoints.management.relation.create(), data),

            /**
             * Delete relation with id
             * @param id GUID part of an Umbraco UDI
             */
            delete: (id: string) => this.makeRequest(Endpoints.management.relation.delete(id))
        }
    }

    /**
     * RelationType API
     */
    get relationType() {
        return {
            /**
             * Fetch relation type by alias
             * @param alias Alias for the relation type queryed for
             */
            byAlias: (alias: string) => this.makeRequest(Endpoints.management.relationType.byAlias(alias))
        }
    }


    /**
     * Member API
     */
    get member() {
        return {
            /**
             * Find member by username
             * @param username Username for the user querying for
             */
            byUsername: <R extends ContentMemberType>(username: string) => this.makeRequest(Endpoints.management.member.byUsername<R>(username)),

            /**
             * Create a new member
             * @param data Data for creating a new member
             */
            create: <R extends ContentMemberType>(data: ContentCreateMemberType) => this.makeRequest(Endpoints.management.member.create<R>(), data),

            /**
             * Update user by username
             * @param username Username for the user to be updated
             * @param data Data for the user to be updated
             */
            update: <R extends ContentMemberType>(username: string, data: ContentCreateMemberType) => this.makeRequest(Endpoints.management.member.update<R>(username), data),

            /**
             * Add group to user
             * @param username Username on the user who gets the group added
             * @param group Group name of the group which the user needs to be added to
             */
            addGroup: (username: string, group: string) => this.makeRequest(Endpoints.management.member.addGroup(username, group)),

            /**
             * Remove group from user
             * @param username Username on the user who need to get a group removed
             * @param group Group name of the group which need to be removed.
             */
            removeGroup: (username: string, group: string) => this.makeRequest(Endpoints.management.member.removeGroup(username, group)),

            /**
             * Delete a user
             * @param username Username for the user that needs to be deleted
             */
            delete: (username: string) => this.makeRequest(Endpoints.management.member.delete(username)),
        }
    }

    /**
     * MemberGroup API
     */
    get memberGroup() {
        return {
            /**
             * Fetch member group by name
             * @param name The name of the group
             */
            byName: (name: string) => this.makeRequest<ContentMemberGroupType>(Endpoints.management.memberGroup.byName(name)),

            /**
             * Create a member group
             * @param data Data for creating a member group
             */
            create: (data: ContentMemberCreateGroupType) => this.makeRequest(Endpoints.management.memberGroup.create(), data),

            /**
             * Delete member group
             * @param name Name of the member group to be removed
             */
            delete: (name: string) => this.makeRequest(Endpoints.management.memberGroup.delete(name)),
        }
    }

    /**
     * MemberType API
     */
    get memberType() {
        return {
            /**
             * Fetch all member types
             */
            all: <R extends ContentMemberTypeType>() => this.makeRequest(Endpoints.management.memberType.all<R>()),

            /**
             * Find by alias
             * @param alias Alias for the member type to be found.
             */
            byAlias: <R extends ContentMemberTypeType>(alias: string) => this.makeRequest(Endpoints.management.memberType.byAlias<R>(alias))
        }
    }



}

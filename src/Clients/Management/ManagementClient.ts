import { Client } from '../../Client'
import { ContentManagementClient } from './ContentManagementClient'
import { Endpoint } from '../../Endpoint'
import { Endpoints } from '../../Endpoints'
import {
  APIMediaChildrenOptions
} from '../../RequestOptions'
import {
  ContentCreateMemberType,
  ContentLanguageType,
  ContentManagerMediaType,
  ContentMemberCreateGroupType,
  ContentMemberGroupType,
  ContentMemberType, ContentMemberTypeType,
  ContentTypeBase,
  CreateContentLanguageType
} from '../../Responses'

/**
 * ManagementClient is used to access the Content Management API.
 * @public
 */
export class ManagementClient {
  /**
   * @internal
   */
  constructor (
    private readonly client: Client
  ) {

  }

  private readonly makeRequest = async <R>(endpoint: Endpoint<R>, data?: any) => {
    return this.client.makeRequest(endpoint, data)
  }

  public readonly content = new ContentManagementClient(this.client)

  /**
   * ContentType API
   */
  get contentType () {
    return {
      /**
       * Fetch all content types
       */
      all: async<R extends ContentTypeBase>() => this.makeRequest(Endpoints.management.contentType.all<R>()),

      /**
       * Find content type by alias
       * @param alias Alias for the content type
       */
      byAlias: async (alias: string) => this.makeRequest(Endpoints.management.contentType.byAlias(alias))
    }
  }

  // TODO: Needs a interface for body
  /**
   * Media API
   */
  get media () {
    return {
      /**
       * Fetch all media objects
       */
      root: async<R extends ContentManagerMediaType>() => this.makeRequest(Endpoints.management.media.root<R>()),

      /**
       * Find media object by id
       * @param id GUID part of an Umbraco UDI
       */
      byId: async<R extends ContentManagerMediaType>(id: string) => this.makeRequest(Endpoints.management.media.byId<R>(id)),

      /**
       * Fetch all children for content object
       * @param id GUID part of an Umbraco UDI
       * @param options Request options if with page
       */
      children: async<R extends ContentManagerMediaType>(id: string, options?: APIMediaChildrenOptions) => this.makeRequest(Endpoints.management.media.children<R>(id, options)),

      /**
       * Create a media object
       * @param data Data for creating media object
       */
      create: async (data: any) => this.makeRequest(Endpoints.management.media.create(), data),

      /**
       * Update media object
       * @param id GUID part of an Umbraco UDI
       * @param data Data for updating media object
       */
      update: async (id: string, data: any) => this.makeRequest(Endpoints.management.media.update(id), data),

      /**
       * Delete media object
       * @param id GUID part of an Umbraco UDI
       */
      delete: async (id: string) => this.makeRequest(Endpoints.management.media.delete(id))
    }
  }

  /**
   * Media API
   */
  get mediaType () {
    return {
      /**
       * Fetch all media types
       */
      all: async () => this.makeRequest(Endpoints.management.mediaType.all()),

      /**
       * Find media type by alias
       * @param alias Alias of the media type querying for
       */
      byAlias: async (alias: string) => this.makeRequest(Endpoints.management.mediaType.byAlias(alias))
    }
  }

  /**
   * Language API
   */
  get language () {
    return {
      /**
       * Fetch all languages
       */
      all: async<R extends ContentLanguageType>() => this.makeRequest(Endpoints.management.language.all<R>()),

      /**
       * Find language by ISO code
       * @param id ISO Code for the language (e.g. en-US)
       */
      byISOCode: async<R extends ContentLanguageType>(id: string) => this.makeRequest(Endpoints.management.language.byISOCode<R>(id)),

      /**
       * Create a language
       * @param data Data for creating language object
       */
      create: async<R extends ContentLanguageType>(data: CreateContentLanguageType) => this.makeRequest(Endpoints.management.language.create<R>(), data),

      /**
       * Update a language
       * @param id ISO Code for the language (e.g. en-US)
       * @param data Data for updating language object
       */
      update: async<R extends ContentLanguageType>(id: string, data: CreateContentLanguageType) => this.makeRequest(Endpoints.management.language.update<R>(id), data),

      /**
       * Delete a language
       * @param id ISO Code for the language (e.g. en-US)
       */
      delete: async<R extends ContentLanguageType>(id: string) => this.makeRequest(Endpoints.management.language.delete<R>(id))

    }
  }

  /**
   * Relation API
   */
  get relation () {
    return {
      /**
       * Find relation by id
       * @param id GUID part of an Umbraco UDI
       */
      byId: async (id: string) => this.makeRequest(Endpoints.management.relation.byId(id)),

      /**
       * Find relation by alias
       * @param alias Alias of the relation querying for
       */
      byAlias: async (alias: string) => this.makeRequest(Endpoints.management.relation.byAlias(alias)),

      /**
       * Fetch child for relation with id
       * @param id GUID part of an Umbraco UDI
       */
      byChild: async (id: string) => this.makeRequest(Endpoints.management.relation.byChild(id)),

      /**
       * Fetch parent for relation with id
       * @param id GUID part of an Umbraco UDI
       */
      byParent: async (id: string) => this.makeRequest(Endpoints.management.relation.byParent(id)),

      /**
       * Create a relation
       * @param data Data for creating relation object
       */
      create: async (data: any) => this.makeRequest(Endpoints.management.relation.create(), data),

      /**
       * Delete relation with id
       * @param id GUID part of an Umbraco UDI
       */
      delete: async (id: string) => this.makeRequest(Endpoints.management.relation.delete(id))
    }
  }

  /**
   * RelationType API
   */
  get relationType () {
    return {
      /**
       * Fetch relation type by alias
       * @param alias Alias for the relation type queryed for
       */
      byAlias: async (alias: string) => this.makeRequest(Endpoints.management.relationType.byAlias(alias))
    }
  }

  /**
   * Member API
   */
  get member () {
    return {
      /**
       * Find member by username
       * @param username Username for the user querying for
       */
      byUsername: async<R extends ContentMemberType>(username: string) => this.makeRequest(Endpoints.management.member.byUsername<R>(username)),

      /**
       * Create a new member
       * @param data Data for creating a new member
       */
      create: async<R extends ContentMemberType>(data: ContentCreateMemberType) => this.makeRequest(Endpoints.management.member.create<R>(), data),

      /**
       * Update user by username
       * @param username Username for the user to be updated
       * @param data Data for the user to be updated
       */
      update: async<R extends ContentMemberType>(username: string, data: ContentCreateMemberType) => this.makeRequest(Endpoints.management.member.update<R>(username), data),

      /**
       * Add group to user
       * @param username Username on the user who gets the group added
       * @param group Group name of the group which the user needs to be added to
       */
      addGroup: async (username: string, group: string) => this.makeRequest(Endpoints.management.member.addGroup(username, group)),

      /**
       * Remove group from user
       * @param username Username on the user who need to get a group removed
       * @param group Group name of the group which need to be removed.
       */
      removeGroup: async (username: string, group: string) => this.makeRequest(Endpoints.management.member.removeGroup(username, group)),

      /**
       * Delete a user
       * @param username Username for the user that needs to be deleted
       */
      delete: async (username: string) => this.makeRequest(Endpoints.management.member.delete(username))
    }
  }

  /**
   * MemberGroup API
   */
  get memberGroup () {
    return {
      /**
       * Fetch member group by name
       * @param name The name of the group
       */
      byName: async (name: string) => this.makeRequest<ContentMemberGroupType>(Endpoints.management.memberGroup.byName(name)),

      /**
       * Create a member group
       * @param data Data for creating a member group
       */
      create: async (data: ContentMemberCreateGroupType) => this.makeRequest(Endpoints.management.memberGroup.create(), data),

      /**
       * Delete member group
       * @param name Name of the member group to be removed
       */
      delete: async (name: string) => this.makeRequest(Endpoints.management.memberGroup.delete(name))
    }
  }

  /**
   * MemberType API
   */
  get memberType () {
    return {
      /**
       * Fetch all member types
       */
      all: async<R extends ContentMemberTypeType>() => this.makeRequest(Endpoints.management.memberType.all<R>()),

      /**
       * Find by alias
       * @param alias Alias for the member type to be found.
       */
      byAlias: async<R extends ContentMemberTypeType>(alias: string) => this.makeRequest(Endpoints.management.memberType.byAlias<R>(alias))
    }
  }

  /**
   * Forms API
   */
  get forms () {
    return {
      /**
       * Fetch all forms
       */
      all: async () => this.makeRequest(Endpoints.management.forms.all()),

      /**
       * Get form by id
       */
      byId: async (id: string) => this.makeRequest(Endpoints.management.forms.byId(id)),

      /**
       * Submit a new form entry
       */
      submitEntry: async (formId: string, data: object) => this.makeRequest(Endpoints.management.forms.submitEntry(formId), data)
    }
  }
}

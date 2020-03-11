import { Client } from '../../Client'
import { ContentManagementClient } from './ContentManagementClient'
import { MediaManagementClient } from './MediaManagementClient'
import { MemberManagementClient } from './MemberManagementClient'
import { Endpoint } from '../../Endpoint'
import { Endpoints } from '../../Endpoints'
import {
  ContentLanguageType,
  ContentMemberCreateGroupType,
  ContentMemberGroupType,
  ContentMemberTypeType,
  ContentTypeBase,
  CreateContentLanguageType
} from '../../Responses'

/**
 * ManagementClient is used to access the Content Management API.
 * @public
 *
 * @example
 * The {@link ManagementClient} must be accessed through {@link Client}.
 *
 * ```typescript
 * import { Client } from '@umbraco/headless-client'
 *
 * const client = new Client({
 *  projectAlias: '<your-project-alias>',
 *  apiKey: '<your-api-key>',
 *  language: '<iso-code>',
 * })
 *
 * const managementClient = client.management
 * ```
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

  /**
   * The Content client for the Content Management API.
   * See {@link ContentManagementClient}
   */
  public readonly content = new ContentManagementClient(this.client)

  /**
   * The Media client for the Media Management API.
   * See {@link MediaManagementClient}
   */
  public readonly media = new MediaManagementClient(this.client)

  /**
   * The Member client for the Member Management API.
   * See {@link MemberManagementClient}
   */
  public readonly member = new MemberManagementClient(this.client)

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

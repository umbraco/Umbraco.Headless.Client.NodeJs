import FormData from 'form-data'

import { Client } from '../../Client'
import { PagedResponse, ContentManagementMember, ContentManagementMemberRequest } from '../../Responses'
import { Endpoint } from '../../Endpoint'
import { Endpoints } from '../../Endpoints'
import { APIMediaChildrenOptions } from '../../RequestOptions'

/**
 * MemberManagementClient is used to access the Member part of the Content Management API.
 * @public
 *
 * @example
 * The {@link MemberManagementClient} must be accessed through {@link Client}.
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
 * const memberClient = client.management.member
 * ```
 */
export class MemberManagementClient {
  /**
   * @internal
   */
  constructor (
    private readonly client: Client
  ) {
  }

  private readonly makeRequest = async <T>(endpoint: Endpoint<T>, data?: any) => {
    return this.client.makeRequest(endpoint, data)
  }

  /**
   * Find member by username
   * @param username -  Username for the user querying for
   */
  async byUsername<R extends ContentManagementMember>(username: string) {
    return this.makeRequest(Endpoints.management.member.byUsername<R>(username))
  }

  /**
   * Create a new member
   * @param data -  Data for creating a new member
   */
  async create<R extends ContentManagementMember>(data: ContentManagementMemberRequest | FormData) {
    return this.makeRequest(Endpoints.management.member.create<R>(), data)
  }

  /**
   * Update user by username
   * @param username -  Username for the user to be updated
   * @param data -  Data for the user to be updated
   */
  async update<R extends ContentManagementMember>(username: string, data: ContentManagementMemberRequest | FormData) {
    return this.makeRequest(Endpoints.management.member.update<R>(username), data)
  }

  /**
   * Add group to user
   * @param username -  Username on the user who gets the group added
   * @param group -  Group name of the group which the user needs to be added to
   */
  async addGroup(username: string, group: string) {
    this.makeRequest(Endpoints.management.member.addGroup(username, group))
  }

  /**
   * Remove group from user
   * @param username -  Username on the user who need to get a group removed
   * @param group -  Group name of the group which need to be removed.
   */
  async removeGroup(username: string, group: string) {
    return this.makeRequest(Endpoints.management.member.removeGroup(username, group))
  }

  /**
   * Delete a user
   * @param username -  Username for the user that needs to be deleted
   */
  async delete(username: string) {
    return this.makeRequest(Endpoints.management.member.delete(username))
  }
}

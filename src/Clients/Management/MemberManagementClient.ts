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
   * Find member by username.
   * @param username -  Username for the user querying for.
   */
  async byUsername<R extends ContentManagementMember>(username: string) {
    try {
      return await this.makeRequest(Endpoints.management.member.byUsername<R>(username))
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }
      throw err
    }
  }

  /**
   * Create a new member.
   * @param data -  Data for creating a new member.
   */
  async create<R extends ContentManagementMember>(data: ContentManagementMemberRequest | FormData) {
    return this.makeRequest(Endpoints.management.member.create<R>(), data)
  }

  /**
   * Update user by username.
   * @param username -  Username for the user to be updated.
   * @param data -  Data for the user to be updated.
   */
  async update<R extends ContentManagementMember>(username: string, data: ContentManagementMemberRequest | FormData) {
    try {
      return await this.makeRequest(Endpoints.management.member.update<R>(username), data)
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }
      throw err
    }
  }

  /**
   * Add member to group.
   * @deprecated Use {@link MemberManagementClient#addToGroup()} instead.
   * @param username -  Username of the member.
   * @param group - Name of the group the member should be added to.
   */
  async addGroup(username: string, group: string) {
    this.addToGroup(username, group)
  }

  /**
   * Add member to group.
   * @param username -  Username of the member.
   * @param group - Name of the group the member should be added to.
   */
  async addToGroup(username: string, groupName: string) {
    try {
      await this.makeRequest(Endpoints.management.member.addGroup(username, groupName))
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }
      throw err
    }
  }

  /**
   * Remove member from group.
   * @deprecated Use {@link MemberManagementClient#removeFromGroup()} instead.
   * @param username -  Username of th member.
   * @param group - Name of the group the member should be removed from.
   */
  async removeGroup(username: string, group: string) {
    this.removeFromGroup(username, group)
  }

  /**
   * Remove member from group.
   * @param username -  Username of th member.
   * @param group - Name of the group the member should be removed from.
   */
  async removeFromGroup(username: string, groupName: string) {
    try {
      await this.makeRequest(Endpoints.management.member.removeGroup(username, groupName))
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }
      throw err
    }
  }

  /**
   * Delete a user.
   * @param username -  Username for the user that needs to be deleted.
   */
  async delete(username: string) {
    try {
      return await this.makeRequest(Endpoints.management.member.delete(username))
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }
      throw err
    }
  }
}

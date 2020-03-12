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
   * Find member by membername.
   * @param username - Username for the member querying for.
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
   * @param data - Data for creating a new member.
   */
  async create<R extends ContentManagementMember>(data: ContentManagementMemberRequest | FormData) {
    return this.makeRequest(Endpoints.management.member.create<R>(), data)
  }

  /**
   * Update member by username.
   * @param username - Username for the member to be updated.
   * @param data - Data for the member to be updated.
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
   * @param username - Username of the member.
   * @param group - Name of the group the member should be added to.
   */
  async addGroup(username: string, group: string) {
    this.addToGroup(username, group)
  }

  /**
   * Add member to group.
   * @param username - Username of the member.
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
   * @param username - Username of the member.
   * @param group - Name of the group the member should be removed from.
   */
  async removeGroup(username: string, group: string) {
    this.removeFromGroup(username, group)
  }

  /**
   * Remove member from group.
   * @param username - Username of the member.
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
   * Delete a member.
   * @param username - Username for the member that needs to be deleted.
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

  /**
   * Change a members password.
   * @param username - Username for the member.
   * @param currentPassword - The current password.
   * @param newPassword - The new password.
   */
  async changePassword(username: string, currentPassword: string, newPassword: string) {
    try {
      return await this.makeRequest(Endpoints.management.member.changePassword(username), { currentPassword, newPassword })
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }
      throw err
    }
  }
}

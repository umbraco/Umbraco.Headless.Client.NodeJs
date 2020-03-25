import FormData from 'form-data'

import { Client } from '../../Client'
import { ContentManagementMember, ContentManagementMemberRequest, MemberResetPasswordToken } from '../../Responses'
import { Endpoint } from '../../Endpoint'
import { Endpoints } from '../../Endpoints'

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
   * @returns a `Promise` that resolves to a {@link ContentManagementMember} if found, otherwise `undefined`.
   */
  async byUsername<R extends ContentManagementMember> (username: string) {
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
   * @returns a `Promise` that resolves to the newly created {@link ContentManagementMember}.
   */
  async create<R extends ContentManagementMember> (data: ContentManagementMemberRequest | FormData) {
    return this.makeRequest(Endpoints.management.member.create<R>(), data)
  }

  /**
   * Update member by username.
   * @param username - Username for the member to be updated.
   * @param data - Data for the member to be updated.
   * @returns a `Promise` that resolves to a {@link ContentManagementMember} of the updated Member item if found, otherwise `undefined`.
   */
  async update<R extends ContentManagementMember> (username: string, data: ContentManagementMemberRequest | FormData) {
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
   * @deprecated Use {@link MemberManagementClient.addToGroup | addToGroup()} instead.
   * @param username - Username of the member.
   * @param group - Name of the group the member should be added to.
   */
  async addGroup (username: string, group: string) {
    await this.addToGroup(username, group)
  }

  /**
   * Add member to group.
   * @param username - Username of the member.
   * @param group - Name of the group the member should be added to.
   */
  async addToGroup (username: string, groupName: string) {
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
   * @deprecated Use {@link MemberManagementClient.removeFromGroup | removeFromGroup()} instead.
   * @param username - Username of the member.
   * @param group - Name of the group the member should be removed from.
   */
  async removeGroup (username: string, group: string) {
    await this.removeFromGroup(username, group)
  }

  /**
   * Remove member from group.
   * @param username - Username of the member.
   * @param group - Name of the group the member should be removed from.
   */
  async removeFromGroup (username: string, groupName: string) {
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
  async delete (username: string) {
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
   * @returns a `Promise` that resolves to a {@link ContentManagementMember} if found and password is updated, otherwise `undefined`.
   */
  async changePassword (username: string, currentPassword: string, newPassword: string) {
    try {
      return await this.makeRequest(Endpoints.management.member.changePassword(username), { currentPassword, newPassword })
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }
      throw err
    }
  }

  /**
   * Create a reset tokon that can be used to reset the members password.
   * @param username - Username for the member.
   * @returns a `Promise` that resolves to a {@link MemberResetPasswordToken} if found, otherwise `undefined`.
   */
  async createResetPasswordToken<R extends MemberResetPasswordToken> (username: string) {
    try {
      return await this.makeRequest(Endpoints.management.member.createResetPasswordToken<R>(username))
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }
      throw err
    }
  }

  /**
   * Resets the members password using a reset token obtained via. {@link MemberManagementClient.createResetPasswordToken | createResetPasswordToken()}.
   * @param username - Username for the member.
   * @param token - The password reset token.
   * @param newPassword - The new password.
   * @returns a `Promise` that resolves to a {@link ContentManagementMember} if found and password is updated, otherwise `undefined`.
   */
  async resetPassword<R extends ContentManagementMember> (username: string, token: string, newPassword: string) {
    try {
      return await this.makeRequest(Endpoints.management.member.resetPassword<R>(username), { token, newPassword })
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }
      throw err
    }
  }
}

import { Client } from '../Client'
import { ApiRequest } from '../ApiRequest'
import { Endpoints } from '../Endpoints'
import { OAUthResponse } from '../Responses'

/**
 * AuthenticationClient is used to authenticate members and Backoffice users.
 * @public
 *
 * @example
 * The {@link AuthenticationClient} must be accessed through {@link Client}.
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
 * const authClient = client.authentication
 * ```
 */
export class AuthenticationClient {
  /**
   * @internal
   */
  constructor (
    private readonly client: Client
  ) {

  }

  /**
   * Authenticate a member using username and password.
   * @param username - The members username.
   * @param password - The members password.
   * @returns a Promise resolving to a {@link OAUthResponse}
   */
  async authenticateMember (username: string, password: string) {
    const data = new URLSearchParams()
    data.append('grant_type', 'password')
    data.append('username', username)
    data.append('password', password)

    const options = { projectAlias: this.client.options.projectAlias }

    return new ApiRequest<OAUthResponse>(options, Endpoints.authentication.member(), data).promise()
  }

  /**
   * Authenticate a Backoffice user using username and password.
   * @param username - The users username.
   * @param password - The users password.
   * @returns a Promise resolving to a {@link OAUthResponse}
   */
  async authenticateUser (username: string, password: string) {
    const data = new URLSearchParams()
    data.append('grant_type', 'password')
    data.append('username', username)
    data.append('password', password)

    const options = { projectAlias: this.client.options.projectAlias }

    return new ApiRequest<OAUthResponse>(options, Endpoints.authentication.user(), data).promise()
  }
}

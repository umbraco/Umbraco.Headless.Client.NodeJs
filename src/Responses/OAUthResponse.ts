/**
 * @public
 */
export interface OAUthResponse {
  access_token?: string
  token_type?: string
  expires_in?: number
  error?: string
  error_description?: string
}

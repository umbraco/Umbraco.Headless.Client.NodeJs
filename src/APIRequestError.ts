import { AxiosResponse } from 'axios'

/**
 * @public
 */
export class APIRequestError extends Error {
  data?: any = undefined

  /**
   * @internal
   */
  constructor (message: string, public response: AxiosResponse) {
    super(message)
    this.name = 'APIRequestError'

    if (response && response.data) {
      this.data = response.data
    }
  }
}

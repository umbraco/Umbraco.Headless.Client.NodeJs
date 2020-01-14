import { AxiosResponse } from 'axios'

/**
 * @public
 */
export class APIRequestError extends Error {
  constructor (message: string, public response: AxiosResponse, public jsonData: any) {
    super(message)
    this.name = 'APIRequestError'
  }
}

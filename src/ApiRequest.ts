import {Endpoint, EndpointSource} from "./Endpoint";
import {Client} from "./Client";
import {APIRequestError} from "./APIRequestError";
import axios, { AxiosRequestConfig } from 'axios'
import * as FormData from 'form-data'
import debug from 'debug'

const log = debug("umbraco:headless:api")

import {MultipartOptions} from "./RequestOptions/index";

export class ApiRequest<R = any> {

  constructor(
    private client: Client,
    public endpoint: Endpoint,
    public data?: any
  ) {}

  public promise = async (): Promise<R> => {
    const projectAlias = this.client.options.projectAlias
    const headers: any = {
      'Content-Type': 'application/json',
      'Accept': 'application/json+hal;v=2',
      'umb-project-alias': projectAlias,
      'api-version': '2.1'
    }

    if (this.client.options.language) {
      headers["Accept-Language"] = this.client.options.language
    }

    const requestInit: AxiosRequestConfig= {
      url: Endpoint.getURLAddress(this.endpoint),
      method: this.endpoint.method,
      headers: {}
    }

    if(this.endpoint.source === EndpointSource.ContentManagement) {
      if(this.client.getAPIKey() === null) {
        throw new Error("API Key is missing")
      }

      headers["api-key"] = `${this.client.getAPIKey()}`
    }


    const options = this.endpoint.options
    log("options", options)
    if(options && options.culture) {
      headers["Accept-Language"] = options.culture
    }



    const method = this.endpoint.method.toLowerCase()
    if((method === "post" || method === 'put') && !!this.data) {
      const requestOptions = this.endpoint.options
      if(typeof requestOptions !== "undefined") {
        if((requestOptions as MultipartOptions).usingMultipart) {
          if(this.data.prototype === FormData.prototype) {
            headers["Content-Type"] = `multipart/form-data; boundary=${this.data.getBoundary()}`
            requestInit.data = this.data
          } else {
            throw new Error("Expected a FormData as body")
          }
        }
      }

      if(!requestInit.data) {
        requestInit.data = JSON.stringify(this.data)
      }
    }
    requestInit.headers = headers

    log("Request init")
    log(requestInit)

    try {
      const response = await axios(requestInit)
      return response.data as R
    } catch (err) {
      throw new APIRequestError(err.statusText, err.response, err.response.data)
    }
  }
}

import {Endpoint, EndpointSource} from "./Endpoint";
import {Client} from "./Client";
import fetch, {RequestInit} from "node-fetch";
import {APIRequestError} from "./APIRequestError";
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

    const requestInit: RequestInit = {
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



    const url = Endpoint.getURLAddress(this.endpoint)


    const method = this.endpoint.method.toLowerCase()
    if((method === "post" || method === 'put') && !!this.data) {
      const requestOptions = this.endpoint.options
      if(typeof requestOptions !== "undefined") {
        if((requestOptions as MultipartOptions).usingMultipart) {
          if(this.data.prototype === FormData.prototype) {
            headers["Content-Type"] = `multipart/form-data; boundary=${this.data.getBoundary()}`
            requestInit.body = this.data
          } else {
            throw new Error("Expected a FormData as body")
          }
        }
      }

      if(!requestInit.body) {
        requestInit.body = JSON.stringify(this.data)
      }
    }
    requestInit.headers = headers

    requestInit.method = method
    log("Request init")
    log(requestInit)
    const response = await fetch(url, requestInit)
    const jsonResponse = response.size > 0 ? await response.json() : {}

    if(!response.ok) {
      console.log(requestInit)
      throw new APIRequestError(response.statusText, response, jsonResponse)
    }


    return jsonResponse as R
  }
}

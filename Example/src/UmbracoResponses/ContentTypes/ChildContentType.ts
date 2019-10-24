import {ContentResponseElement} from "@umbraco/headless-sdk";

export interface ChildContentType extends ContentResponseElement {
    umbNaviHide: boolean
    name: string
    sortOrder: number
    _url: string
}

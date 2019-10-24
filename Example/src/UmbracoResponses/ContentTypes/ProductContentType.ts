import {ImageMediaType} from "../MediaTypes";
import {FeatureContentType} from "./FeatureContentType";
import {ContentResponseElement} from "@umbraco/headless-sdk";

export interface ProductContentType extends ContentResponseElement {
    contentTypeAlias: 'product'
    name: string
    parentId: string
    sortOrder: number
    productName: string
    price: number
    category: string[]
    description: string
    sku: string
    photos: ImageMediaType
    features: FeatureContentType[]
    bodyText: string
}

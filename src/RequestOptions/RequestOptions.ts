import {HyperlinksOption} from "./HyperlinksOption";
import {ContentTypeOptions} from "./ContentTypeOptions";
import {DepthOptions} from "./DepthOptions";
import {PageOptions} from "./PageOptions";
import {CultureOptions} from "./CultureOptions";


export type CDNContentRootOptions = HyperlinksOption & ContentTypeOptions & CultureOptions
export type CDNContentByIdOptions = HyperlinksOption & DepthOptions  & CultureOptions
export type CDNContentByURLOptions = HyperlinksOption & DepthOptions  & CultureOptions
export type CDNContentAncestorsOptions = HyperlinksOption & ContentTypeOptions  & CultureOptions
export type CDNContentChildrenOptions = HyperlinksOption & ContentTypeOptions & PageOptions  & CultureOptions
export type CDNContentDescendantsOptions = HyperlinksOption & ContentTypeOptions & PageOptions  & CultureOptions
export type CDNContentByContentTypeOptions = HyperlinksOption & PageOptions  & CultureOptions
export type CDNContentSearchOptions = HyperlinksOption & PageOptions  & CultureOptions

export type CDNMediaChildrenOptions = PageOptions

export type APIContentChildrenOptions = PageOptions
export type APIContentPublishOptions = CultureOptions
export type APIContentUnPublishOptions = CultureOptions

export type APIMediaChildrenOptions = PageOptions

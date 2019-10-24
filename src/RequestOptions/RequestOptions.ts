import {HyperlinksOption} from "./HyperlinksOption";
import {ContentTypeOptions} from "./ContentTypeOptions";
import {DepthOptions} from "./DepthOptions";
import {PageOptions} from "./PageOptions";
import {CultureOptions} from "./CultureOptions";


export type CDNContentRootOptions = HyperlinksOption & ContentTypeOptions
export type CDNContentByIdOptions = HyperlinksOption & DepthOptions
export type CDNContentByURLOptions = HyperlinksOption & DepthOptions
export type CDNContentAncestorsOptions = HyperlinksOption & ContentTypeOptions
export type CDNContentChildrenOptions = HyperlinksOption & ContentTypeOptions & PageOptions
export type CDNContentDescendantsOptions = HyperlinksOption & ContentTypeOptions & PageOptions
export type CDNContentByContentTypeOptions = HyperlinksOption & PageOptions
export type CDNContentSearchOptions = HyperlinksOption & PageOptions

export type CDNMediaChildrenOptions = PageOptions

export type APIContentChildrenOptions = PageOptions
export type APIContentPublishOptions = CultureOptions
export type APIContentUnPublishOptions = CultureOptions

export type APIMediaChildrenOptions = PageOptions

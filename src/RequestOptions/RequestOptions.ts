import { HyperlinksOption } from './HyperlinksOption'
import { ContentTypeOptions } from './ContentTypeOptions'
import { DepthOptions } from './DepthOptions'
import { PageOptions } from './PageOptions'
import { CultureOptions } from './CultureOptions'

/**
 * Content Delivery Root Options.
 * @public
 *
 * @remarks
 * See {@link HyperlinksOption}, {@link ContentTypeOptions} and {@link CultureOptions} for more details.
 */
export type ContentDeliveryRootOptions = HyperlinksOption & ContentTypeOptions & CultureOptions
/**
 * Content Delivery By Id Options.
 * @public
 *
 * @remarks
 * See {@link HyperlinksOption}, {@link DepthOptions} and {@link CultureOptions} for more details.
 */
export type ContentDeliveryByIdOptions = HyperlinksOption & DepthOptions & CultureOptions
/**
 * Content Delivery By Url Options.
 * @public
 *
 * @remarks
 * See {@link HyperlinksOption}, {@link DepthOptions} and {@link CultureOptions} for more details.
 */
export type ContentDeliveryByUrlOptions = HyperlinksOption & DepthOptions & CultureOptions
/**
 * Content Delivery Ancestors Options.
 * @public
 *
 * @remarks
 * See {@link HyperlinksOption}, {@link ContentTypeOptions} and {@link CultureOptions} for more details.
 */
export type ContentDeliveryAncestorsOptions = HyperlinksOption & ContentTypeOptions & CultureOptions
/**
 * Content Delivery Children Options.
 * @public
 *
 * @remarks
 * See {@link HyperlinksOption}, {@link ContentTypeOptions}, {@link PageOptions} and {@link CultureOptions} for more details.
 */
export type ContentDeliveryChildrenOptions = HyperlinksOption & ContentTypeOptions & PageOptions & CultureOptions
/**
 * Content Delivery Descendants Options.
 * @public
 *
 * @remarks
 * See {@link HyperlinksOption}, {@link ContentTypeOptions}, {@link PageOptions} and {@link CultureOptions} for more details.
 */
export type ContentDeliveryDescendantsOptions = HyperlinksOption & ContentTypeOptions & PageOptions & CultureOptions
/**
 * Content Delivery By Content Type Options.
 * @public
 *
 * @remarks
 * See {@link HyperlinksOption}, {@link PageOptions} and {@link CultureOptions} for more details.
 */
export type ContentDeliveryByContentTypeOptions = HyperlinksOption & PageOptions & CultureOptions
/**
 * Content Delivery Filter Options.
 * @public
 *
 * @remarks
 * See {@link HyperlinksOption}, {@link PageOptions} and {@link CultureOptions} for more details.
 */
export type ContentDeliveryFilterOptions = HyperlinksOption & PageOptions & CultureOptions
/**
 * Content Delivery Search Options.
 * @public
 *
 * @remarks
 * See {@link HyperlinksOption}, {@link PageOptions} and {@link CultureOptions} for more details.
 */
export type ContentDeliverySearchOptions = HyperlinksOption & PageOptions & CultureOptions

/**
 * Content Delivery Redirect Options.
 * @public
 *
 * @remarks
 * See {@link HyperlinksOption}, {@link PageOptions} and {@link CultureOptions} for more details.
 */
export type ContentDeliveryRedirectOptions = HyperlinksOption & PageOptions & CultureOptions
/**
 * Media Delivery Children Options
 * @public
 *
 * @remarks
 * See {@link PageOptions} for more details.
 */
export type MediaDeliveryChildrenOptions = PageOptions

/**
 * Content Management Children Options
 * @public
 *
 * @remarks
 * See {@link PageOptions} for more details.
 */
export type APIContentChildrenOptions = PageOptions
/**
 * See {@link CultureOptions} for more details.
 * @public
 */
export type APIContentPublishOptions = CultureOptions
/**
 * Content Management Unpublish Options
 * @public
 *
 * @remarks
 * See {@link CultureOptions} for more details.
 */
export type APIContentUnpublishOptions = CultureOptions

/**
 * Media Management Children Options
 * @public
 *
 * @remarks
 * See {@link PageOptions} for more details.
 */
export type APIMediaChildrenOptions = PageOptions

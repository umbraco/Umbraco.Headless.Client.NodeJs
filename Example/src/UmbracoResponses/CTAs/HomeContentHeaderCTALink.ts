import {CTALink} from "@umbraco/headless-sdk";

export interface HomeContentHeaderCTALink extends CTALink {
    contentTypeAlias: 'products'
    name: string
    parentId: string
    sortOrder: number
    seoMetaDescription: string
    keywords: string[]
    umbNaviHide: boolean
    pageTitle: string
    bodyText: string
    defaultCurrency: string
    featuredProducts: any
}

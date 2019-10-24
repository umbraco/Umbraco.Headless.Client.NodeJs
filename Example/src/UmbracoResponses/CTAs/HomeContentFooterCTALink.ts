import {CTALink} from "@umbraco/headless-sdk";


export interface HomeContentFooterCTALink extends CTALink {
    contentTypeAlias: 'blog'
    name: string
    parentId: string
    sortOrder: number
    pageTitle: string
    bodyText: string
    seoMetaDescription: string
    keywords: string[]
    umbNavHide: boolean
    howManyPostsShouldBeShown: number
    disqusShortname: string
}

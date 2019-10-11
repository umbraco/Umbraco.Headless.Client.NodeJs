import {Client} from "../Client";
import {ContentResponseElement, CTALink, MediaType} from "../Responses";

const client = new Client({
    projectAlias: 'headless-house-of-code',
    language: 'en-US'
})


interface HomeContentHeaderCTALink extends CTALink {
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

interface HomeContentFooterCTALink extends CTALink {
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

interface ImageMediaType extends MediaType {
    mediaTypeAlias: 'Image'
    name: string
    parentId: string
    sortOrder: number
    umbracoFile: {
        src: string
        focalPoint: {
            left: number
            top: number
        },
        crops: any
    }
    umbracoWidth: number
    umbracoHeight: number
    umbracoBytes: number
    umbracoExtension: string


}

interface HomeContentType extends ContentResponseElement {
    contentType: 'home'
    name: string
    sortOrder: number
    heroHeader: string
    heroDescription: string
    heroCTACaption: string
    heroCTALink: HomeContentHeaderCTALink
    bodyText: string
    footerHeader: string
    footerDescription: string
    footerCTACaption: string
    footerCTALink: HomeContentFooterCTALink
    heroBackgroundImage: ImageMediaType
    font: string
    colorTheme: string
    sitename: string
    logo: any

}

import {Client} from "../Client";
import {ContentResponseElement, Content, Media} from "../Responses/index";

const client = new Client({
    projectAlias: 'headless-house-of-code',
    language: 'en-US'
})


interface HomeContentHeaderContent extends Content {
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

interface HomeContentFooterContent extends Content {
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

interface ImageMedia extends Media {
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

interface HomeContent extends ContentResponseElement {
    contentType: 'home'
    name: string
    sortOrder: number
    heroHeader: string
    heroDescription: string
    heroCTACaption: string
    heroCTALink: HomeContentHeaderContent
    bodyText: string
    footerHeader: string
    footerDescription: string
    footerCTACaption: string
    footerCTALink: HomeContentFooterContent
    heroBackgroundImage: ImageMedia
    font: string
    colorTheme: string
    sitename: string
    logo: any

}

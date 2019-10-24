import {ContentResponseElement} from "@umbraco/headless-sdk";
import {HomeContentFooterCTALink, HomeContentHeaderCTALink} from "../CTAs";
import {ImageMediaType} from "../MediaTypes";


export interface HomeContentType extends ContentResponseElement {
    contentType: 'home'
    contentTypeAlias: 'home'
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
    footerAddress: string
}

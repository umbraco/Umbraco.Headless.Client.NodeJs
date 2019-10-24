import {Request, Response} from "express";
import {ChildContentType, HomeContentType, ProductContentType} from "../UmbracoResponses/ContentTypes";
import {getUmbracoClient} from "../getUmbracoClient";
import {makeTopNavLinks} from "./ApplicationController";


const client = getUmbracoClient()

export const index = async (req: Request, res: Response) => {
    const homeData = await client.cdn.root<HomeContentType>().promise()
    const home = homeData._embedded.content.find(c => c.contentTypeAlias === 'home')
    const homeChildren = await client.cdn.children<ChildContentType>(home._id).promise()

    const topMenuLinks = makeTopNavLinks(homeChildren._embedded.content)

    const pageContent = await client.cdn.byUrl(req.path).promise()
    const children = await client.cdn.children<ProductContentType>(pageContent._id).promise()

    const products = children._embedded.content.map(item => ({
        name: item.productName,
        price: item.price,
        url: item._url,
        category: item.category,
        photo: item.photos,
        description: item.description
    }))

    const cols = (index: number) => {
        return index % 2 === 0 ? [5,7] : [7,5]
    }


    res.render('product/index.html.ejs', {
        name: home.sitename,
        topMenuLinks: topMenuLinks,
        address: home.footerAddress,
        footerHeader: home.footerHeader,
        footerCTA: {
            url: home.footerCTALink._url,
            title: home.footerCTACaption
        },
        products: products,
        cols
    })

}



export const show = async (req: Request, res: Response) => {
    const homeData = await client.cdn.root<HomeContentType>().promise()
    const home = homeData._embedded.content.find(c => c.contentTypeAlias === 'home')

    const homeChildren = await client.cdn.children<ChildContentType>(home._id).promise()
    const topMenuLinks = makeTopNavLinks(homeChildren._embedded.content)


    const productContent = await client.cdn.byUrl<ProductContentType>(req.path).promise()
    productContent.photos.umbracoFile.src

    res.render('product/show.html.ejs', {
        name: home.sitename,
        topMenuLinks: topMenuLinks,
        address: home.footerAddress,
        footerHeader: home.footerHeader,
        footerCTA: {
            url: home.footerCTALink._url,
            title: home.footerCTACaption
        },
        product: productContent
    })


}

import {Request, Response} from "express";
import {ChildContentType, HomeContentType, ProductContentType} from "../UmbracoResponses/ContentTypes";
import {getUmbracoClient} from "../getUmbracoClient";
import {makeTopNavLinks} from "./ApplicationController";


const client = getUmbracoClient()

export const index = async (req: Request, res: Response) => {
    const homeData = await client.delivery.content.root<HomeContentType>()
    const home = homeData.find(c => c.contentTypeAlias === 'home')
    const homeChildren = await client.delivery.content.children<ChildContentType>(home._id)
    
    const topMenuLinks = makeTopNavLinks(homeChildren.items)

    const pageContent = await client.delivery.content.byUrl(req.path)
    const children = await client.delivery.content.children<ProductContentType>(pageContent._id)

    const products = children.items.map(item => ({
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
    const homeData = await client.delivery.content.root<HomeContentType>()
    const home = homeData.find(c => c.contentTypeAlias === 'home')

    const homeChildren = await client.delivery.content.children<ChildContentType>(home._id)
    const topMenuLinks = makeTopNavLinks(homeChildren.items)


    const productContent = await client.delivery.content.byUrl<ProductContentType>(req.path)
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

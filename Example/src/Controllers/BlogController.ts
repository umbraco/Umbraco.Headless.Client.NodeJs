import {Request, Response} from "express";
import {BlogContentType, ChildContentType, HomeContentType} from "../UmbracoResponses/ContentTypes";
import {BlogPostContentType} from "../UmbracoResponses/ContentTypes/BlogPostContentType";
import {getUmbracoClient} from "../getUmbracoClient";
import {makeTopNavLinks} from "./ApplicationController";


const client = getUmbracoClient()

export const index = async (req: Request, res: Response) => {

    const [rootData, data] = await Promise.all([
        client.delivery.content.root<HomeContentType>(),
        client.delivery.content.byUrl<BlogContentType>("/home/blog")
    ])

    const home = rootData.find(c => c.contentTypeAlias === "home")

    const [children, blogPostsResp] = await Promise.all([
        client.delivery.content.children<ChildContentType>(home._id),
        client.delivery.content.children<BlogPostContentType>(data._id)

    ])

    const topMenuLinks = makeTopNavLinks(children.items)
    const contentElement = rootData[0];

    const blogPosts = blogPostsResp.items

    const footerCTA = {
        url: contentElement.footerCTALink._url,
        title: contentElement.footerCTACaption
    }

    const siteName = contentElement.sitename
    const title = data.pageTitle
    const pageTitle = `${siteName} - ${title}`
    console.log(data)

    res.render('home/blog.html.ejs', {
        name: pageTitle,
        address: contentElement.footerAddress,
        footerHeader: contentElement.footerHeader,
        footerCTA,
        topMenuLinks,
        blogPosts
    })

}



export const show = async (req: Request, res: Response) => {
    const rootData = await client.delivery.content.root<HomeContentType>()
    const home = rootData.find(c => c.contentTypeAlias === "home")

    const [children, blogPostData] = await Promise.all([
        client.delivery.content.children<ChildContentType>(home._id),
        client.delivery.content.byUrl<BlogPostContentType>(req.path)
    ])

    debugger

    const topMenuLinks = makeTopNavLinks(children.items)

    const footerCTA = {
        url: home.footerCTALink._url,
        title: home.footerCTACaption
    }

    res.render('blog/view.html.ejs', {
        name: blogPostData.pageTitle,
        topMenuLinks,
        footerCTA,
        address: home.footerAddress,
        footerHeader: home.footerHeader,
        blogPost: blogPostData
    })

}

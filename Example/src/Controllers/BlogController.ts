import {Request, Response} from "express";
import {BlogContentType, ChildContentType, HomeContentType} from "../UmbracoResponses/ContentTypes";
import {BlogPostContentType} from "../UmbracoResponses/ContentTypes/BlogPostContentType";
import {getUmbracoClient} from "../getUmbracoClient";
import {makeTopNavLinks} from "./ApplicationController";


const client = getUmbracoClient()

export const index = async (req: Request, res: Response) => {

    const [rootData, data] = await Promise.all([
        client.cdn.root<HomeContentType>().promise(),
        client.cdn.byUrl<BlogContentType>("/home/blog").promise()
    ])

    const home = rootData._embedded.content.find(c => c.contentTypeAlias === "home")

    const [children, blogPostsResp] = await Promise.all([
        client.cdn.children<ChildContentType>(home._id).promise(),
        client.cdn.children<BlogPostContentType>(data._id).promise()

    ])

    const topMenuLinks = makeTopNavLinks(children._embedded.content)
    const contentElement = rootData._embedded.content[0];

    const blogPosts = blogPostsResp._embedded.content

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
    const rootData = await client.cdn.root<HomeContentType>().promise()
    const home = rootData._embedded.content.find(c => c.contentTypeAlias === "home")

    const [children, blogPostData] = await Promise.all([
        client.cdn.children<ChildContentType>(home._id).promise(),
        client.cdn.byUrl<BlogPostContentType>(req.path).promise()
    ])

    const topMenuLinks = makeTopNavLinks(children._embedded.content)

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

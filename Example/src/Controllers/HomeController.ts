import {Request, Response} from "express";
import {getUmbracoClient} from "../getUmbracoClient";
import {ChildContentType, HomeContentType} from "../UmbracoResponses";
import {BlogContentType} from "../UmbracoResponses/ContentTypes";
import {BlogPostContentType} from "../UmbracoResponses/ContentTypes/BlogPostContentType";
import {makeTopNavLinks} from "./ApplicationController";

const client = getUmbracoClient()




export const index = async (req: Request, res: Response) => {
    const rootContent = await client.delivery.content.root<HomeContentType>()
    const home = rootContent.find(c => c.contentTypeAlias === "home")
    const children = await client.delivery.content.children<ChildContentType>(home._id)

    console.log({children})

    const footerCTA = {
        url: home.footerCTALink._url,
        title: home.footerCTACaption
    }

    const topMenuLinks = makeTopNavLinks(children.items)

    res.render("home/index.html.ejs", {
        name: home.sitename,
        address: home.footerAddress,
        footerHeader: home.footerHeader,
        footerCTA,
        topMenuLinks,
        body: home.bodyText,
        heroTitle: home.heroHeader,
        heroBody: home.heroDescription,
        heroImage: home.heroBackgroundImage.umbracoFile.src
    })
}


export const blog = async (req: Request, res: Response) => {

    const [rootData, data] = await Promise.all([
        client.delivery.content.root<HomeContentType>(),
        client.delivery.content.byUrl<BlogContentType>("/home/blog")
    ])
    const home = rootData.find(c => c.contentTypeAlias === "home")

    const [children, blogPostsResp] = await Promise.all([
        client.delivery.content.children<ChildContentType>(home._id),
        client.delivery.content.children<BlogPostContentType>(data._id)
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

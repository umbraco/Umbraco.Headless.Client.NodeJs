import {Request, Response} from "express";
import {APIRequestError, ContentManagerMediaType, FormData} from '@umbraco/headless-sdk'
import {getUmbracoClient} from "../getUmbracoClient";
import {ChildContentType, HomeContentType, IContentTypeBase} from "../UmbracoResponses";
import {BlogContentType} from "../UmbracoResponses/ContentTypes";
import {BlogPostContentType} from "../UmbracoResponses/ContentTypes/BlogPostContentType";
import {makeTopNavLinks} from "./ApplicationController";
import {createReadStream} from "fs";

const client = getUmbracoClient()




export const index = async (req: Request, res: Response) => {
    const rootContent = await client.cdn.root<HomeContentType>().promise()
    const home = rootContent._embedded.content.find(c => c.contentTypeAlias === "home")
    const children = await client.cdn.children<ChildContentType>(home._id).promise()

    console.log({children})

    const footerCTA = {
        url: home.footerCTALink._url,
        title: home.footerCTACaption
    }

    const topMenuLinks = makeTopNavLinks(children._embedded.content)

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

    const rootData = await client.cdn.root<HomeContentType>().promise()
    const data = await client.cdn.byUrl<BlogContentType>("/home/blog").promise()
    const home = rootData._embedded.content.find(c => c.contentTypeAlias === "home")
    const children = await client.cdn.children<ChildContentType>(home._id).promise()

    const topMenuLinks = makeTopNavLinks(children._embedded.content)
    const contentElement = rootData._embedded.content[0];

    const blogPostsResp = await client.cdn.children<BlogPostContentType>(data._id).promise()
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


const blogPostCreate = async (req: Request, res: Response) => {
    const make = client.manager.content.create({
        contentTypeAlias: 'blogpost',
        parentId: '8007e923-e62a-4ac1-a33f-caf3052582f4',
        name: {
            $invariant: 'Demo Post'
        },
        pageTitle: {
            $invariant: "This blog post"
        },
        excerpt: {
            $invariant: "Test is a test excerpt"
        },
        bodyText: {
            $invariant: "lorem ipsim"
        },
        umbNaviHide: {
            $invariant: '0'
        }
    })

    try {
        const response = await make.promise()

        const id = response._id
        const published = await client.manager.content.publish<BlogPostContentType>(id).promise()
        const unPublish = await client.manager.content.unPublish<BlogPostContentType>(id).promise()

        res.json({response,published, unPublish})
    }
    catch (e) {
        res.status(e.response.status).json({message: e.message, json: e.jsonData})
    }
}


export const createRandomBlogPost = async (req: Request, res: Response, next) => {

    // const res1 = await client.manager.content.root<HomeContentType>().promise()



    // const formData = new FormData()
    // formData.append("content", JSON.stringify({
    //     mediaTypeAlias: "Image",
    //     name: "Lorem Ipsum",
    //     parentId: '7bfa2332-cf7f-4c97-941d-50f43f085b06',
    //     umbracoFile: {src: 'assets/demo.png'}
    // }), {contentType: 'application/json'})
    // formData.append("umbracoFile", createReadStream('/Users/askilada/Desktop/dust.png'), {
    //     contentType: 'image/png',
    //     filename: 'dust.png'
    // })





    try {
        const languages = await client.manager.member.byUsername("simon+demo@houseofcode.io").promise()

        console.log("Response", languages)
        res.json({data: languages})

    }
    catch (e) {
        res.json({data: e.jsonData})

    }




}

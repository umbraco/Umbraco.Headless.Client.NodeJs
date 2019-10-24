import {ChildContentType} from "../UmbracoResponses/ContentTypes";

const makeTopNavLinks = (homeChildren: ChildContentType[]) => {
    const topMenuLinks = []

    homeChildren.filter(child => child.umbNaviHide === false).forEach(child => {
        topMenuLinks.push({
            name: child.name,
            url: child._url
        })
    })

    return topMenuLinks
}

export {
    makeTopNavLinks
}

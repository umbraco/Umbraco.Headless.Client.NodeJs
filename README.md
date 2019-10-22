# Umbraco.Headless.Client.NodeJs
Umbraco headless NodeJs client



## Install

    yarn add @umbraco/headless-sdk
    
or

    npm install --dev @umbraco/headless-sdk
    
## Usage

Create a client, then call commands on it

```typescript

// client.ts
import {Client} from '@umbraco/headless-sdk'

const client = new Client({
    projectAlias: 'headless-house-of-code',
    language: 'en-US'
})

client.setAPIKey(`FF00FF1133FF==`)
export default client

// rootLinks.ts
async function rootLinks(client: Client) {
    const rootContent = await client.cdn.root().promise()
    const contents = rootContent._embedded.content
    
    const childPages = contents.map(child => ({
        url: child._url,
        name: child.name
    }))
    
    return childPages
}

function linkGenerator(links: {url: string, name: string}[]) {
    return links.map(link => {
        return `<a href="${link.url}">${link.name}</a>`
    })
}

async function main() {
    const rootLinks = await rootLinks(require('./client').default)
    const links = linkGenerator(rootLinks)
    console.log(links)
}

```




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

## Available clients

### CDN
```
client.cdn.root()
client.cdn.byId(id: string)
client.cdn.byUrl(url: string)
client.cdn.children(url: string)
client.cdn.ancestors(id: string)
client.cdn.descendants(id: string)
```

### Media
```
client.media.root()
client.media.byId(id: string)
client.media.children(id: string)
```

### Content Manager
#### Content
```
client.manager.content.root()
client.manager.content.byId(id: string)
client.manager.content.children(id: string)
client.manager.content.create(body: CreateContentBody)
client.manager.content.publish(id: string)
client.manager.content.unPublish(id: string)
client.manager.content.update(id: string, body: ContentResponseElement)
client.manager.content.delete(id: string)
```

#### Content Type
```
client.manager.contentType.all()
client.manager.contentType.byAlias(alias: string)
```

#### Media
```
client.manager.media.root()
client.manager.media.byId(id: string)
client.manager.media.children(id: string)
client.manager.media.create(body: any)
client.manager.media.update(id: string, body: any)
client.manager.media.delete(id: string)
```

#### Media Type
```
client.manager.mediaType.all()
client.manager.mediaType.byAlias()
```


#### Language
```
client.manager.language.all()
client.manager.language.byISOCode(isoCode: string)
client.manager.language.create(data: CreateContentLanguageType)
client.manager.language.update(isoCode: string, data: CreateContentLanguageType)
client.manager.language.delete(isoCode: string)
```

#### Relation
```
client.manager.relation.byId(id: string)
client.manager.relation.byAlias(alias: string)
client.manager.relation.byChild(id: string)
client.manager.relation.byParent(id: string)
client.manager.relation.create(data: any)
client.manager.relation.delete(id: string)
```

#### Relation Type
```
client.manager.relationType.byAlias(alias: string)
```


#### Member
```
client.manager.member.byUsername(username: string)
client.manager.member.create(data: ContentCreateMemberType)
client.manager.member.update(username: string, data: ContentCreateMemberType)
client.manager.member.addGroup(username: string, groupName: string)
client.manager.member.removeGroup(username: string, groupName: string)
client.manager.member.delete(username: string)
```

#### Member Group
```
client.manager.memberGroup.byName(name: string)
client.manager.memberGroup.create(data: ContentMemberCreateGroupType)
client.manager.memberGroup.delete(name: string)
```

#### Member Type
```
client.manager.memberType.all()
client.manager.memberType.byAlias(alias: string)
```

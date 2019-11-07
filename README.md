# Umbraco.Headless.Client.NodeJs

Umbracopeeadless NodeJs client

## Install

```bash
> npm install @umbraco/headless-client
```

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
  const rootContent = await client.delivery.content.root()

  const childPages = rootContent.map(child => ({
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

All client calls will return an instance of `ApiRequest` class.

For fetching content the promise method must be called example below:

```ts
client.delivery.content.root()
  .then(response => {
    console.log(response)
  })
```

## Content Delivery

### Content

```ts
client.delivery.content.root()
client.delivery.content.byId(id: string)
client.delivery.content.byUrl(url: string)
client.delivery.content.children(url: string)
client.delivery.content.ancestors(id: string)
client.delivery.content.descendants(id: string)

// TS Example:
import {ContentResponseElement} from '@umbraco/headless-sdk'

client.delivery.content.root<T extends ContentResponseElement>(): ApiRequest<T>
```

### Media

```ts
client.delivery.media.root()
client.delivery.media.byId(id: string)
client.delivery.media.children(id: string)
```

### Content Management

#### Content

```ts
client.management.content.root()
client.management.content.byId(id: string)
client.management.content.children(id: string)
client.management.content.create(body: CreateContentBody)
client.management.content.publish(id: string)
client.management.content.unPublish(id: string)
client.management.content.update(id: string, body: ContentResponseElement)
client.management.content.delete(id: string)
```

#### Content Type

```ts
client.management.contentType.all()
client.management.contentType.byAlias(alias: string)
```

#### Media

```ts
client.management.media.root()
client.management.media.byId(id: string)
client.management.media.children(id: string)
client.management.media.create(body: any)
client.management.media.update(id: string, body: any)
client.management.media.delete(id: string)
```

#### Media Type

```ts
client.management.mediaType.all()
client.management.mediaType.byAlias()
```

#### Language

```ts
client.management.language.all()
client.management.language.byISOCode(isoCode: string)
client.management.language.create(data: CreateContentLanguageType)
client.management.language.update(isoCode: string, data: CreateContentLanguageType)
client.management.language.delete(isoCode: string)
```

#### Relation

```ts
client.management.relation.byId(id: string)
client.management.relation.byAlias(alias: string)
client.management.relation.byChild(id: string)
client.management.relation.byParent(id: string)
client.management.relation.create(data: any)
client.management.relation.delete(id: string)
```

#### Relation Type

```ts
client.management.relationType.byAlias(alias: string)
```


#### Member

```ts
client.management.member.byUsername(username: string)
client.management.member.create(data: ContentCreateMemberType)
client.management.member.update(username: string, data: ContentCreateMemberType)
client.management.member.addGroup(username: string, groupName: string)
client.management.member.removeGroup(username: string, groupName: string)
client.management.member.delete(username: string)
```

#### Member Group

```ts
client.management.memberGroup.byName(name: string)
client.management.memberGroup.create(data: ContentMemberCreateGroupType)
client.management.memberGroup.delete(name: string)
```

#### Member Type

```ts
client.management.memberType.all()
client.management.memberType.byAlias(alias: string)
```

# intro 

    Made for
     _    _ __  __ ____  _____           _____ ____  
    | |  | |  \/  |  _ \|  __ \    /\   / ____/ __ \ 
    | |  | | \  / | |_) | |__) |  /  \ | |   | |  | |
    | |  | | |\/| |  _ <|  _  /  / /\ \| |   | |  | |
    | |__| | |  | | |_) | | \ \ / ____ | |___| |__| |
     \____/|_|  |_|____/|_|  \_/_/    \_\_____\____/ 
     
     With much love from
     _    _                               __    _____          _      
    | |  | |                             / _|  / ____|        | |     
    | |__| | ___  _   _ ___  ___    ___ | |_  | |     ___   __| | ___ 
    |  __  |/ _ \| | | / __|/ _ \  / _ \|  _| | |    / _ \ / _` |/ _ \
    | |  | | (_) | |_| \__ \  __/ | (_) | |   | |___| (_) | (_| |  __/
    |_|  |_|\___/ \__,_|___/\___|  \___/|_|    \_____\___/ \__,_|\___|

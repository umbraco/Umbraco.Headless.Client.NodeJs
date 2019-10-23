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

## ApiRequest
```typescript
export declare class ApiRequest<R = any> {
    private client;
    endpoint: Endpoint;
    data?: any;
    constructor(client: Client, endpoint: Endpoint, data?: any);
    promise: () => Promise<R>;
}

```

## Available clients

All client calls will return an instance of `ApiRequest` class.

For fetching content the promise method must be called example below:
````
client.cdn.root().promise()
    .then(response => {
        console.log(response)
        /*
        OUTPUT:
        {
          _links: {
            self: {
              href: 'https://cdn.umbraco.io/content'
            },
            ancestors: {
              href: 'https://cdn.umbraco.io/content/{id}/ancestors',
              templated: true
            },
            children: {
              href: 'https://cdn.umbraco.io/content/{id}/children{?page,pageSize}',
              templated: true
            },
            content: [
              {
                href: 'https://cdn.umbraco.io/content/{id}{?depth}',
                templated: true
              },
              {
                href: 'https://cdn.umbraco.io/content/6eb240ce-8f78-4467-ab51-68918cde2866'
              }
            ],
            descendants: {
              href: 'https://cdn.umbraco.io/content/{id}/descendants{?page,pageSize}',
              templated: true
            },
            url: {
              href: 'https://cdn.umbraco.io/content/url{?url,depth}',
              templated: true
            }
          },
          _embedded: {
            content: [
              {
                _creatorName: 'Morten Christensen',
                _url: '/home/',
                _writerName: 'House of Code',
                _hasChildren: true,
                _level: 1,
                _createDate: '2019-10-07T07:45:21.363Z',
                _id: '6eb240ce-8f78-4467-ab51-68918cde2866',
                _updateDate: '2019-10-15T06:03:16.793Z',
                _links: {
                  self: {
                    href: 'https://cdn.umbraco.io/content/6eb240ce-8f78-4467-ab51-68918cde2866'
                  },
                  heroctalink: {
                    href: 'https://cdn.umbraco.io/content/082333be-34b1-4c2d-81a6-be92640094fc',
                    title: 'Products'
                  },
                  footerctalink: {
                    href: 'https://cdn.umbraco.io/content/8007e923-e62a-4ac1-a33f-caf3052582f4',
                    title: 'Blog'
                  },
                  herobackgroundimage: {
                    href: 'https://cdn.umbraco.io/media/76966940-c9ba-4716-86ce-f3854a7f5bd6',
                    title: 'Umbraco Campari Meeting Room'
                  },
                  root: {
                    href: 'https://cdn.umbraco.io/content'
                  },
                  children: {
                    href: 'https://cdn.umbraco.io/content/6eb240ce-8f78-4467-ab51-68918cde2866/children'
                  },
                  ancestors: {
                    href: 'https://cdn.umbraco.io/content/6eb240ce-8f78-4467-ab51-68918cde2866/ancestors'
                  },
                  descendants: {
                    href: 'https://cdn.umbraco.io/content/6eb240ce-8f78-4467-ab51-68918cde2866/descendants'
                  },
                  parent: {
                    href: 'https://cdn.umbraco.io/content'
                  }
                },
                contentTypeAlias: 'home',
                name: 'Home',
                sortOrder: 4,
                heroHeader: 'Umbraco Demo',
                heroDescription: 'Moonfish, steelhead, lamprey southern flounder tadpole fish sculpin bigeye, blue-redstripe danio collared dogfish. Smalleye squaretail goldfish arowana butterflyfish pipefish wolf-herring jewel tetra, shiner; gibberfish red velvetfish. Thornyhead yellowfin pike threadsail ayu cutlassfish.',
                heroCTACaption: 'Check our products',
                heroCTALink: {
                  _creatorName: 'Morten Christensen',
                  _url: '/home/products/',
                  _writerName: 'Morten Christensen',
                  _hasChildren: true,
                  _level: 2,
                  _createDate: '2019-10-07T07:57:18.55Z',
                  _id: '082333be-34b1-4c2d-81a6-be92640094fc',
                  _updateDate: '2019-10-07T07:59:39.26Z',
                  _links: null,
                  contentTypeAlias: 'products',
                  name: 'Products',
                  parentId: '6eb240ce-8f78-4467-ab51-68918cde2866',
                  sortOrder: 0,
                  seoMetaDescription: '',
                  keywords: [],
                  umbNaviHide: false,
                  pageTitle: 'Our Gorgeous Selection',
                  bodyText: '',
                  defaultCurrency: '€',
                  featuredProducts: null
                },
                bodyText: '<p>Bacon ipsum dolor amet beef doner burgdoggen pastrami. Tenderloin ham hock pork belly frankfurter pork loin cow short loin shankle kielbasa shoulder drumstick meatball brisket short ribs. T-bone prosciutto salami doner bacon buffalo sausage cow. Ribeye rump drumstick jowl hamburger pancetta beef ribs capicola cow landjaeger. Beef corned beef t-bone strip steak spare ribs tail ground round jerky brisket. Chicken meatball meatloaf shoulder, shankle spare ribs jowl pork loin tri-tip ribeye rump.</p>\n<p>Frankfurter beef brisket t-bone, sausage ham kevin strip steak buffalo picanha leberkas biltong kielbasa filet mignon shoulder. Brisket t-bone meatloaf, biltong bacon ground round rump meatball boudin prosciutto turkey shoulder porchetta. Short ribs hamburger meatball tenderloin chicken pig pastrami spare ribs pork belly kevin. Beef ribs chicken swine picanha flank tail, meatloaf shank tenderloin ribeye shoulder frankfurter capicola tri-tip. Strip steak landjaeger tenderloin beef shankle shoulder. Boudin hamburger tongue frankfurter porchetta swine turducken landjaeger picanha short ribs pastrami. Corned beef meatball flank chicken doner venison, brisket cow swine.</p>\n<p>Tenderloin tongue shank porchetta beef, jowl shankle short ribs kevin. Beef meatball corned beef cupim ham tail chuck fatback jowl tri-tip ham hock buffalo bresaola swine. Fatback cupim pork loin venison bresaola. Jowl turkey andouille sausage, brisket kevin sirloin biltong shank boudin ham frankfurter. Filet mignon chuck ribeye fatback alcatra short loin, turducken swine sirloin.</p>',
                footerHeader: 'Umbraco Demo',
                footerDescription: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat',
                footerCTACaption: 'Read All on the Blog',
                footerCTALink: {
                  _creatorName: 'Morten Christensen',
                  _url: '/home/blog/',
                  _writerName: 'Administrator',
                  _hasChildren: true,
                  _level: 2,
                  _createDate: '2019-10-07T07:58:32.367Z',
                  _id: '8007e923-e62a-4ac1-a33f-caf3052582f4',
                  _updateDate: '2019-10-10T11:12:41.56Z',
                  _links: null,
                  contentTypeAlias: 'blog',
                  name: 'Blog',
                  parentId: '6eb240ce-8f78-4467-ab51-68918cde2866',
                  sortOrder: 0,
                  pageTitle: 'Behind The Scenes',
                  bodyText: '',
                  seoMetaDescription: '',
                  keywords: [],
                  umbNaviHide: false,
                  howManyPostsShouldBeShown: 2,
                  disqusShortname: ''
                },
                footerAddress: 'Umbraco HQ - Unicorn Square - Haubergsvej 1 - 5000 Odense C - Denmark - +45 70 26 11 62',
                heroBackgroundImage: {
                  _creatorName: 'Morten Christensen',
                  _url: 'https://media.umbraco.io/media/izujm3v0/16403439029_f500be349b_o.jpg',
                  _writerName: 'Morten Christensen',
                  _hasChildren: false,
                  _level: 2,
                  _createDate: '2019-10-04T11:49:16.973Z',
                  _id: '76966940-c9ba-4716-86ce-f3854a7f5bd6',
                  _updateDate: '2019-10-04T11:49:16.973Z',
                  _links: null,
                  mediaTypeAlias: 'Image',
                  name: 'Umbraco Campari Meeting Room',
                  parentId: '7bfa2332-cf7f-4c97-941d-50f43f085b06',
                  sortOrder: 0,
                  umbracoFile: {
                    src: '/media/izujm3v0/16403439029_f500be349b_o.jpg',
                    focalPoint: {
                      left: 0.5,
                      top: 0.5
                    },
                    crops: null
                  },
                  umbracoWidth: 1600,
                  umbracoHeight: 1067,
                  umbracoBytes: 759116,
                  umbracoExtension: 'jpg'
                },
                font: 'serif',
                colorTheme: 'earth',
                sitename: 'Umbraco Sample Site',
                logo: null
              }
            ]
          }
        }
        */
    })
````


### CDN
```
client.cdn.root()
client.cdn.byId(id: string)
client.cdn.byUrl(url: string)
client.cdn.children(url: string)
client.cdn.ancestors(id: string)
client.cdn.descendants(id: string)

// TS Example:
import {ContentResponseElement} from '@umbraco/headless-sdk'

client.cdn.root<T extends ContentResponseElement>(): ApiRequest<T>
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

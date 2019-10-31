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
````
client.delivery.content.root()
    .then(response => {
        console.log(response)
        /*
        OUTPUT:
        [
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
        */
    })
````

## Delivery

### Content
```
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
```
client.delivery.media.root()
client.delivery.media.byId(id: string)
client.delivery.media.children(id: string)
```

### Content Management
#### Content
```
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
```
client.management.contentType.all()
client.management.contentType.byAlias(alias: string)
```

#### Media
```
client.management.media.root()
client.management.media.byId(id: string)
client.management.media.children(id: string)
client.management.media.create(body: any)
client.management.media.update(id: string, body: any)
client.management.media.delete(id: string)
```

#### Media Type
```
client.management.mediaType.all()
client.management.mediaType.byAlias()
```


#### Language
```
client.management.language.all()
client.management.language.byISOCode(isoCode: string)
client.management.language.create(data: CreateContentLanguageType)
client.management.language.update(isoCode: string, data: CreateContentLanguageType)
client.management.language.delete(isoCode: string)
```

#### Relation
```
client.management.relation.byId(id: string)
client.management.relation.byAlias(alias: string)
client.management.relation.byChild(id: string)
client.management.relation.byParent(id: string)
client.management.relation.create(data: any)
client.management.relation.delete(id: string)
```

#### Relation Type
```
client.management.relationType.byAlias(alias: string)
```


#### Member
```
client.management.member.byUsername(username: string)
client.management.member.create(data: ContentCreateMemberType)
client.management.member.update(username: string, data: ContentCreateMemberType)
client.management.member.addGroup(username: string, groupName: string)
client.management.member.removeGroup(username: string, groupName: string)
client.management.member.delete(username: string)
```

#### Member Group
```
client.management.memberGroup.byName(name: string)
client.management.memberGroup.create(data: ContentMemberCreateGroupType)
client.management.memberGroup.delete(name: string)
```

#### Member Type
```
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

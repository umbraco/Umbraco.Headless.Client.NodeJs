const { Client } = require('@umbraco/headless-client')

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const client = new Client({
  projectAlias: process.env.UMBRACO__PROJECTALIAS,
  apiKey: process.env.UMBRACO__APIKEY,
})

module.exports = function (api) {
  api.loadSource(async ({ addCollection, addMetadata, getCollection }) => {

    const contentCollection = addCollection({ typeName: 'Content' })

    const rootContents = await client.delivery.content.root()
    if (rootContents.length) {
      const root = rootContents[0]
      root._url = '/'

      addMetadata('footerLinks', root.footerLinks)
      addMetadata('footerTitle', root.footerTitle)
    }

    const addItem = async function(item) {
      const name = item.contentTypeAlias[0].toUpperCase() + item.contentTypeAlias.substr(1)
      const collection = getCollection(name) || addCollection({ typeName: name })

      collection.addNode({ id: item._id, ...item })
      contentCollection.addNode({ id: item._id, ...item })

      const children = await client.delivery.content.children(item._id)
      if (children.items) {
        for (const child of children.items) {
          await addItem(child)
        }
      }
    }

    for (const item of rootContents) {
      await addItem(item)
    }

    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`
{
  allTextpage {
  	edges {
      node {
        id
        _url
      }
    }
  }
  allFrontpage {
    edges {
      node {
        id
        _url
      }
    }
  }
}
`)

    for (const { node } of data.allFrontpage.edges) {
			createPage({
				path: node._url,
				component: './src/templates/Frontpage.vue',
				context: {
          id: node.id,
          url: node._url,
				},
			})
    }

    for (const { node } of data.allTextpage.edges) {
			createPage({
				path: node._url,
				component: './src/templates/Textpage.vue',
				context: {
					id: node.id,
          url: node._url,
				},
			})
		}
  })
}

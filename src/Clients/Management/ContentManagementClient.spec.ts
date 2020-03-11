import 'mocha'
import { expect } from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import FormData from 'form-data'

import { Client } from '../../Client'
import { ContentManagementContentRequest } from '../../Responses'

const API_ROOT = 'https://api.umbraco.io/content'

describe('ContentManagementClient', function () {
  let client: Client
  let axiosMock: MockAdapter

  before(function () {
    client = new Client({ projectAlias: 'my-project', apiKey: 'my-api-key' })
    axiosMock = new MockAdapter(axios)
  })

  after(function () {
    axiosMock.restore()
  })

  afterEach(function () {
    axiosMock.reset()
  })

  describe('#root()', function () {
    it('can retrieve content', async function () {
      axiosMock.onGet(API_ROOT).reply(200, require('./__mocks__/content.root.json'))

      const result = await client.management.content.root()
      expect(result.length).to.be.eq(1)
    })
  })

  describe('#byId()', function () {
    it('can retrieve content', async function () {
      axiosMock.onGet(`${API_ROOT}/3de82763-c4bb-4bca-8f79-7b211b3ffffa`).reply(200, require('./__mocks__/content.byId.json'))

      const result = await client.management.content.byId('3de82763-c4bb-4bca-8f79-7b211b3ffffa')

      expect(result).to.not.be.undefined
      // @ts-ignore
      expect(result.name.$invariant).to.be.eq('Unicorn')
    })

    it('returns undefined when not found', async function () {
      const result = await client.management.content.byId('3de82763-c4bb-4bca-8f79-7b211b3ffffa')

      expect(result).to.be.undefined
    })
  })

  describe('#children()', function () {
    it('can retrieve content', async function () {
      axiosMock.onGet(`${API_ROOT}/8007e923-e62a-4ac1-a33f-caf3052582f4/children`).reply(200, require('./__mocks__/content.children.json'))

      const result = await client.management.content.children('8007e923-e62a-4ac1-a33f-caf3052582f4')

      expect(result).to.not.be.undefined
      // @ts-ignore
      expect(result.items.length).to.be.eq(3)
    })

    it('returns undefined when not found', async function () {
      const result = await client.management.content.byId('3de82763-c4bb-4bca-8f79-7b211b3ffffa/children')

      expect(result).to.be.undefined
    })
  })

  describe('#create()', function () {
    it('should accept a json object', async function () {
      axiosMock.onPost(API_ROOT).reply(201, require('./__mocks__/content.create.json'))

      const data: ContentManagementContentRequest = {
        name: {
          $invariant: 'Another one'
        },
        contentTypeAlias: 'blogpost',
        parentId: '8007e923-e62a-4ac1-a33f-caf3052582f4',
        sortOrder: 0,
        seoMetaDescription: {
          $invariant: ''
        },
        keywords: {
          $invariant: []
        },
        umbNaviHide: {
          $invariant: '0'
        },
        pageTitle: {
          $invariant: 'Another one'
        },
        categories: {
          $invariant: [
            'cg16',
            'codegarden',
            'umbraco'
          ]
        }
      }

      const result = await client.management.content.create(data)

      expect(result.name.$invariant).to.be.eq('Another one')
      expect(axiosMock.history.post.length).to.be.eq(1)
      expect(axiosMock.history.post[0].data).to.be.eq(JSON.stringify(data))
    })

    it('should accept FormData object', async function () {
      axiosMock.onPost(API_ROOT).reply(201, require('./__mocks__/content.create.json'))

      const data = new FormData()

      data.append('content', JSON.stringify({
        name: {
          $invariant: 'Another one'
        },
        contentTypeAlias: 'blogpost',
        parentId: '8007e923-e62a-4ac1-a33f-caf3052582f4',
        sortOrder: 0,
        seoMetaDescription: {
          $invariant: ''
        },
        keywords: {
          $invariant: []
        },
        umbNaviHide: {
          $invariant: '0'
        },
        pageTitle: {
          $invariant: 'Another one'
        },
        categories: {
          $invariant: [
            'cg16',
            'codegarden',
            'umbraco'
          ]
        }
      }))

      const result = await client.management.content.create(data)

      expect(result.name.$invariant).to.be.eq('Another one')
      expect(axiosMock.history.post.length).to.be.eq(1)
      expect(axiosMock.history.post[0].data).to.be.eq(data)
    })
  })

  describe('#publish()', function () {
    it('call publish endpoint', async function () {
      axiosMock.onPut(`${API_ROOT}/3de82763-c4bb-4bca-8f79-7b211b3ffffa/publish?culture=en-US`).reply(200, {})

      await client.management.content.publish('3de82763-c4bb-4bca-8f79-7b211b3ffffa', { culture: 'en-US' })

      expect(axiosMock.history.put.length).to.be.eq(1)
    })

    it('returns undefined when not found', async function () {
      const result = await client.management.content.publish('3de82763-c4bb-4bca-8f79-7b211b3ffffa')

      expect(result).to.be.undefined
    })
  })

  describe('#unPublish()', function () {
    it('calls unpublish endpoint', async function () {
      axiosMock.onPut(`${API_ROOT}/3de82763-c4bb-4bca-8f79-7b211b3ffffa/unpublish?culture=en-US`).reply(200, {})

      await client.management.content.unPublish('3de82763-c4bb-4bca-8f79-7b211b3ffffa', { culture: 'en-US' })

      expect(axiosMock.history.put.length).to.be.eq(1)
    })

    it('returns undefined when not found', async function () {
      const result = await client.management.content.unPublish('3de82763-c4bb-4bca-8f79-7b211b3ffffa')

      expect(result).to.be.undefined
    })
  })

  describe('#delete()', function () {
    it('calls delete endpoint', async function () {
      axiosMock.onDelete(`${API_ROOT}/3de82763-c4bb-4bca-8f79-7b211b3ffffa`).reply(200, {})

      await client.management.content.delete('3de82763-c4bb-4bca-8f79-7b211b3ffffa')

      expect(axiosMock.history.delete.length).to.be.eq(1)
    })

    it('returns undefined when not found', async function () {
      const result = await client.management.content.delete('3de82763-c4bb-4bca-8f79-7b211b3ffffa')

      expect(result).to.be.undefined
    })
  })

  describe('#update()', function () {
    it('should accept a json object', async function () {
      axiosMock.onPut(`${API_ROOT}/041067a0-74f5-4d03-92af-40c3c0aa13e7`).reply(201, require('./__mocks__/content.create.json'))

      const data: ContentManagementContentRequest = {
        name: {
          $invariant: 'Another one'
        },
        contentTypeAlias: 'blogpost',
        parentId: '8007e923-e62a-4ac1-a33f-caf3052582f4',
        sortOrder: 0,
        seoMetaDescription: {
          $invariant: ''
        },
        keywords: {
          $invariant: []
        },
        umbNaviHide: {
          $invariant: '0'
        },
        pageTitle: {
          $invariant: 'Another one'
        },
        categories: {
          $invariant: [
            'cg16',
            'codegarden',
            'umbraco'
          ]
        }
      }

      const result = await client.management.content.update('041067a0-74f5-4d03-92af-40c3c0aa13e7', data)

      expect(result).to.not.be.undefined
      // @ts-ignore
      expect(result.name.$invariant).to.be.eq('Another one')
      expect(axiosMock.history.put.length).to.be.eq(1)
      expect(axiosMock.history.put[0].data).to.be.eq(JSON.stringify(data))
    })

    it('should accept FormData object', async function () {
      axiosMock.onPut(`${API_ROOT}/041067a0-74f5-4d03-92af-40c3c0aa13e7`).reply(201, require('./__mocks__/content.create.json'))

      const data = new FormData()

      data.append('content', JSON.stringify({
        name: {
          $invariant: 'Another one'
        },
        contentTypeAlias: 'blogpost',
        parentId: '8007e923-e62a-4ac1-a33f-caf3052582f4',
        sortOrder: 0,
        seoMetaDescription: {
          $invariant: ''
        },
        keywords: {
          $invariant: []
        },
        umbNaviHide: {
          $invariant: '0'
        },
        pageTitle: {
          $invariant: 'Another one'
        },
        categories: {
          $invariant: [
            'cg16',
            'codegarden',
            'umbraco'
          ]
        }
      }))

      const result = await client.management.content.update('041067a0-74f5-4d03-92af-40c3c0aa13e7', data)

      expect(result).to.not.be.undefined
      // @ts-ignore
      expect(result.name.$invariant).to.be.eq('Another one')
      expect(axiosMock.history.put.length).to.be.eq(1)
      expect(axiosMock.history.put[0].data).to.be.eq(data)
    })

    it('returns undefined when not found', async function () {
      const data = {
        name: {
          $invariant: 'Another one'
        },
        contentTypeAlias: 'blogpost'
      }

      const result = await client.management.content.update('3de82763-c4bb-4bca-8f79-7b211b3ffffa', data)

      expect(result).to.be.undefined
    })
  })
})

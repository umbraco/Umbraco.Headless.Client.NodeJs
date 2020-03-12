import 'mocha'
import { expect } from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import FormData from 'form-data'

import { Client } from '../../Client'
import { ContentManagementMemberRequest } from '../../Responses'

const API_ROOT = 'https://api.umbraco.io/member'

describe('MemberManagementClient', function () {
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

  describe('#byUsername()', function () {
    it('can retrieve member', async function () {
      axiosMock.onGet(`${API_ROOT}/john@example.com`).reply(200, require('./__mocks__/member.byUsername.json'))

      const result = await client.management.member.byUsername('john@example.com')

      expect(result).to.not.be.undefined
      expect(result!.name).to.be.eq('John Doe')
    })

    it('returns undefined when not found', async function () {
      const result = await client.management.member.byUsername('jane')

      expect(result).to.be.undefined
    })
  })


  describe('#create()', function () {
    const data: ContentManagementMemberRequest = {
      comments: 'A Valued Club Blue Member',
      email: 'jane@example.com',
      isApproved: true,
      memberTypeAlias: 'Member',
      username: 'jane@example.com',
      name: 'Jane Doe',
    }

    it('should accept a json object', async function () {
      axiosMock.onPost(API_ROOT).reply(201, require('./__mocks__/member.create.json'))

      const result = await client.management.member.create(data)

      expect(result.name).to.be.eq('Jane Doe')
      expect(axiosMock.history.post.length).to.be.eq(1)
      expect(axiosMock.history.post[0].data).to.be.eq(JSON.stringify(data))
    })

    it('should accept FormData object', async function () {
      axiosMock.onPost(API_ROOT).reply(201, require('./__mocks__/member.create.json'))

      const formData = new FormData()

      formData.append('content', JSON.stringify(data))

      const result = await client.management.member.create(formData)

      expect(result.name).to.be.eq('Jane Doe')
      expect(axiosMock.history.post.length).to.be.eq(1)
      expect(axiosMock.history.post[0].data).to.be.eq(formData)
    })
  })

  describe('#delete()', function () {
    it('calls delete endpoint', async function () {
      axiosMock.onDelete(`${API_ROOT}/jane@example.com`).reply(200, {})

      await client.management.member.delete('jane@example.com')

      expect(axiosMock.history.delete.length).to.be.eq(1)
    })

    it('returns undefined when not found', async function () {
      const result = await client.management.member.delete('john')

      expect(result).to.be.undefined
    })
  })

  describe('#update()', function () {
    const data: ContentManagementMemberRequest = {
      comments: 'A Valued Club Blue Member',
      email: 'jane@example.com',
      isApproved: true,
      memberTypeAlias: 'Member',
      username: 'jane@example.com',
      name: 'Jane Doe',
    }

    it('should accept a json object', async function () {
      axiosMock.onPut(`${API_ROOT}/jane@example.com`).reply(201, require('./__mocks__/member.create.json'))

      const result = await client.management.member.update('jane@example.com', data)

      expect(result).to.not.be.undefined
      expect(result!.name).to.be.eq('Jane Doe')
      expect(axiosMock.history.put.length).to.be.eq(1)
      expect(axiosMock.history.put[0].data).to.be.eq(JSON.stringify(data))
    })

    it('should accept FormData object', async function () {
      axiosMock.onPut(`${API_ROOT}/jane@example.com`).reply(201, require('./__mocks__/member.create.json'))

      const formData = new FormData()

      formData.append('content', JSON.stringify(data))

      const result = await client.management.member.update('jane@example.com', formData)

      expect(result).to.not.be.undefined
      expect(result!.name).to.be.eq('Jane Doe')
      expect(axiosMock.history.put.length).to.be.eq(1)
      expect(axiosMock.history.put[0].data).to.be.eq(formData)
    })

    it('returns undefined when not found', async function () {
      const result = await client.management.member.update('john', data)

      expect(result).to.be.undefined
    })
  })


  describe('#addToGroup()', function () {
    it('calls group endpoint', async function () {
      axiosMock.onPut(`${API_ROOT}/jane@example.com/groups/Blue Club Member`).reply(200, {})

      await client.management.member.addToGroup('jane@example.com', 'Blue Club Member')

      expect(axiosMock.history.put.length).to.be.eq(1)
    })

    it('returns undefined when not found', async function () {
      const result = await client.management.member.addToGroup('john', "Club Blue Member")

      expect(result).to.be.undefined
    })
  })

  describe('#removeFromGroup()', function () {
    it('calls group endpoint', async function () {
      axiosMock.onDelete(`${API_ROOT}/jane@example.com/groups/Blue Club Member`).reply(200, {})

      await client.management.member.removeFromGroup('jane@example.com', 'Blue Club Member')

      expect(axiosMock.history.delete.length).to.be.eq(1)
    })

    it('returns undefined when not found', async function () {
      const result = await client.management.member.addToGroup('john', "Club Blue Member")

      expect(result).to.be.undefined
    })
  })
})

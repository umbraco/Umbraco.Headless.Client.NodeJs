import 'mocha'
import { expect } from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { Client } from '../Client'
import { OAUthResponse } from '../Responses'

describe('AuthenticationClient', function () {
  let client: Client
  let axiosMock: MockAdapter

  before(function () {
    client = new Client({ projectAlias: 'my-project' })
    axiosMock = new MockAdapter(axios)
  })

  after(function () {
    axiosMock.restore()
  })

  afterEach(function () {
    axiosMock.reset()
  })

  describe('#authenticateMember()', function () {
    it('calls the oauth endpoint', async function () {
      axiosMock.onPost('https://cdn.umbraco.io/member/oauth/token').reply(200, {})

      const result = await client.authentication.authenticateMember('jane@example.com', 'myPassword')
      expect(axiosMock.history.post.length).to.be.eq(1)
      expect(axiosMock.history.post[0].headers['Content-Type']).to.be.eq('application/x-www-form-urlencoded')
      expect(axiosMock.history.post[0].data).to.be.eq('grant_type=password&username=jane%40example.com&password=myPassword')
    })
  })

  describe('#authenticateUser()', function () {
    it('calls the oauth endpoint', async function () {
      axiosMock.onPost('https://api.umbraco.io/oauth/token').reply(200, {})

      const result = await client.authentication.authenticateUser('john@example.com', 'pass1234')
      expect(axiosMock.history.post.length).to.be.eq(1)
      expect(axiosMock.history.post[0].headers['Content-Type']).to.be.eq('application/x-www-form-urlencoded')
      expect(axiosMock.history.post[0].data).to.be.eq('grant_type=password&username=john%40example.com&password=pass1234')
    })
  })
})

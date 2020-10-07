import MockAdapter from 'axios-mock-adapter'
import { AxiosInstance } from 'axios'
import article from '../mock/article.json'
import articles from '../mock/articles.json'

const setupMockApi = (axios: AxiosInstance) => {
  const mock = new MockAdapter(axios)

  mock.onGet('/articles').reply(200, articles)
  mock.onGet(new RegExp('/articles/*')).reply(200, article)
}

export default setupMockApi

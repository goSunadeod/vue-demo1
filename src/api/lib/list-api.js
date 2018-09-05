import { demoApi } from '../fetch.js'

export function getAppData(params) {
  return demoApi({
    url: '/appData',
    method: 'get',
    params: { params }
  })
}

import request from '@/utils/request'

/**
 *
 * @param {*} q 搜索的关键词
 * @returns Promise
 */
export const getSuggestionAPI = (q) => {
  return request({
    url: '/v1_0/suggestion',
    params: {
      q
    }
  })
}
/**
 *
 * @param {Number} page 分页页数，非必填，不填默认值1
 * @param {Number} per_page 每一页的数据量
 * @param {String} q 搜索的关键词
 * @returns
 */
export const getResultsAPI = (/*eslint-disable-line*/ page, per_page, q) => {
  return request({
    url: '/v1_0/search',
    params: {
      page,
      per_page,
      q
    }
  })
}

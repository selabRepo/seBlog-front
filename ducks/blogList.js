import axios from 'axios'
import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'

const initialState = {
  content: [],
  pageable: null,
  totalPages: 0,
  totalElements: 0,
}

const GET_BLOG_LIST = 'blogList/GET_BLOG_LIST'
const GET_BLOG_LIST_BY_CAETGORY = 'blogList/GET_BLOG_LIST_BY_CAETGORY'

export const getBlogList = createAction(GET_BLOG_LIST, params => {
  return axios.get('/api/blogs?sort=id,desc')
})

export const getBlogListByCategory = createAction(GET_BLOG_LIST_BY_CAETGORY, params => {
  return axios.get(`/api/categories/${params.categoryID}/blogs?sort=id,desc`)
})

export default handleActions(
  {
    ...pender({
      type: GET_BLOG_LIST,
      onSuccess: (state, action) => {
        return {
          ...initialState,
          ...action.payload.data,
        }
      },
    }),
    ...pender({
      type: GET_BLOG_LIST_BY_CAETGORY,
      onSuccess: (state, action) => {
        return {
          ...initialState,
          ...action.payload.data,
        }
      },
    }),
  },
  initialState,
)

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

export const getBlogList = createAction(GET_BLOG_LIST, params => {
  return axios.get('/api/blogs')
})

export default handleActions(
  {
    ...pender({
      type: GET_BLOG_LIST,
      onSuccess: (state, action) => {
        return {
          ...state,
          ...action.payload.data,
        }
      },
    }),
  },
  initialState,
)

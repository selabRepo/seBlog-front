import axios from 'axios'
import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'

const ADD_BLOG_CONTENT = 'blog/ADD_BLOG_CONTENT'
const ADD_BLOG_CATEGORY = 'blog/ADD_BLOG_CATEGORY'
const ADD_BLOG_TITLE = 'blog/ADD_BLOG_TITLE'
const POST_BLOG = 'blog/POST_BLOG'
const INIT_STATE = 'blog/INIT_STATE'

const initialState = {
  category: null,
  content: null,
  date: null,
  title: null,
  createdBy: null,
  isSuccess: false,
  isFail: false,
}

export const addBlogTitle = createAction(ADD_BLOG_TITLE, title => {
  return {
    title,
  }
})
export const addBlogContent = createAction(ADD_BLOG_CONTENT, content => {
  return {
    content,
  }
})
export const addBlogCategory = createAction(ADD_BLOG_CATEGORY, category => {
  return {
    category,
  }
})

export const initState = createAction(INIT_STATE)

export const postBlog = createAction(POST_BLOG, blog => {
  return axios.post('/api/blogs', blog)
})

export default handleActions(
  {
    [ADD_BLOG_CONTENT]: (state, action) => {
      return {
        ...state,
        content: action.payload.content,
      }
    },
    [ADD_BLOG_CATEGORY]: (state, action) => {
      return {
        ...state,
        category: action.payload.category,
      }
    },
    [ADD_BLOG_TITLE]: (state, action) => {
      return {
        ...state,
        title: action.payload.title,
      }
    },
    [INIT_STATE]: (state, action) => {
      return initialState
    },
    ...pender({
      type: POST_BLOG,
      onSuccess: (state, action) => {
        return {
          ...state,
          ...action.payload.data,
          isSuccess: true,
        }
      },
      onError: (state, action) => {
        return {
          ...state,
          isFail: true,
        }
      },
    }),
  },
  initialState,
)

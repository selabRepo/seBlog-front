import { combineReducers } from 'redux'
import category from './category'
import blog from './blog'
import event from './event'
import blogList from './blogList'
import { penderReducer } from 'redux-pender'

export default combineReducers({
  category,
  blog,
  event,
  blogList,
  pender: penderReducer,
})

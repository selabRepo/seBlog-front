import { combineReducers } from 'redux'
import category from './category'
import blog from './blog'
import event from './event'
import { penderReducer } from 'redux-pender'

export default combineReducers({
  category,
  blog,
  event,
  pender: penderReducer,
})

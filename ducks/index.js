import { combineReducers } from 'redux';
import category from './category';
import blog from './blog'
import event from './event'

export default combineReducers({
    category,
    blog,
    event,
});

import { combineReducers } from 'redux';
import category from './category';
import blog from './blog'

export default combineReducers({
    category,
    blog,
});

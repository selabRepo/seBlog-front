/* ./stores.js */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import index from '../ducks';
const finalCreateStore = applyMiddleware(thunk)(createStore);
export default finalCreateStore(index);
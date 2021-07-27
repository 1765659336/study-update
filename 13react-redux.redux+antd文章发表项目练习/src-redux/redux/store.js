import {createStore} from 'redux';
import articleReducer from './article_reducer.js';
export default createStore(articleReducer)
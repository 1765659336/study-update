import {createStore} from 'redux';
import allReducer from './reducers/index.js';
export default createStore(allReducer)
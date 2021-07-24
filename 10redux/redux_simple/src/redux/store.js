// 引入创建store老板的方法
import {createStore} from 'redux';

// 引入reducer后厨
import countReducer from './count_reducer.js';

// 导出创建的store
export default createStore(countReducer)
import {createStore} from 'redux'

import todoApp from './reducers'

let store = createStore(todoApp);
store.subscribe(()=>console.log(store.getState()))
export default store;

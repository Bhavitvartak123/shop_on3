// STEP 1
import { legacy_createStore as createStore } from "redux";  
// STEP 2
import reducers from './reducers/combinedReducers';  


//STEP 14
const store = createStore(reducers);




//STEP 4
export default store;

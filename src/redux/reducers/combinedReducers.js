//STEP 11
import { combineReducers } from "redux";

import { productsReducer } from "./productReducer";

//STEP 12
const reducers = combineReducers({
      products: productsReducer
})

//STEP 13
export default reducers























//import all reducer for ex. "productReducer" because its "combinedReducer.js" file.
//This file use for combine process
//Create final combineReducer.
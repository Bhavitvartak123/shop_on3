//Continued with action-types.js STEP 7

import { ActionTypes } from "../constants/action-types";



//STEP 8
export const setProducts =  (products) => ({
    type: ActionTypes.SET_PRODUCTS,
    payload: products
})















//Action do chije hoti hai "Type" & "Payload"
//Paylaod me parameters pass hote hai for ex products is parameter
//Type me "action-types" me jo rhega vo aajyega ex "SET_PRODUCTS"
//"SET_PRODUCTS" iske phele import loc attach "ActionTypes."
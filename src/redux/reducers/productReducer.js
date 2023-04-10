//STEP 9
import { ActionTypes } from "../constants/action-types";


const initialState = {
    listProducts: [],
}

//STEP 10

export const productsReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            //DO SOMETHING
            return {...state, listProducts: payload};
            default:
                return state;
    }
}





















//You have create multiple reducer according to situation & features.
//Sometime we use selectors.
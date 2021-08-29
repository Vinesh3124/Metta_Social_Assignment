import {GET_FILTER_SUCCESS} from "./actionType"

const initState = {
    data: undefined
}

export const filterReducer = (state=initState, action) => {
    switch(action.type){
        case GET_FILTER_SUCCESS:{
            return{
                ...state,
                data: action.payload,
            }
        }
        default: return state
    }
}
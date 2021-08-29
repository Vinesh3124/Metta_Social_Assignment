import {GET_FILTER_SUCCESS} from "./actionType"


const getFilter = (payload) => (dispatch) =>{
    const data = filter_success(payload)
    dispatch(data)
}

const filter_success = (payload) => {
    return{
        type: GET_FILTER_SUCCESS,
        payload
    }
}

export {getFilter}
import {GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE} from "./actionType"
import axios from "axios"

const getSearch = (payload) => (dispatch) => {
    if(payload !== undefined){
        const search_req = search_request()
        dispatch(search_req)
        axios.get(`https://metta-social-assign.herokuapp.com/flights?Departure_Date=${payload.start_date}&Origin_City=${payload.origin_city}&Destination_City=${payload.dest_city}`)
        .then(resp => {
            const success_req = search_success(resp.data)
            dispatch(success_req)
        })
        .catch(err => {
            const failure_req = search_failure()
            dispatch(failure_req)
        })
    }

}

const search_request = () => {
    return{
        type: GET_SEARCH_REQUEST
    }
}

const search_success = (payload) => {
    return{
        type: GET_SEARCH_SUCCESS,
        payload
    }
}

const search_failure = () => {
    return{
        type: GET_SEARCH_FAILURE
    }
}

export {getSearch}
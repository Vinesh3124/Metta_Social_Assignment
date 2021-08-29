import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { filterReducer } from "./Filter/filterReducer";
import { SearchReducer } from "./Serach/searchReducer";

const rootReducer = combineReducers({
    search: SearchReducer,
    filter: filterReducer
});
 
export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);
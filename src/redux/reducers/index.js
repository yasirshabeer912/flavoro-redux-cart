import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { SearchReducer } from "./Search";

const rootReducer =combineReducers({
    CartReducer,
    SearchReducer
    
})

export default rootReducer 
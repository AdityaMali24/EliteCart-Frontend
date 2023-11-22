import { combineReducers } from "redux";

import productsReducer from "./Products/Reducer";
import cartReducer from "./Cart/Reducer";
import categoryReducer from "./Category/Reducer";

const rootReducer = combineReducers({
    products:productsReducer,
    cart: cartReducer,
    category: categoryReducer
})

export default rootReducer;
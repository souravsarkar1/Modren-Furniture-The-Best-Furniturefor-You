import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as productReducer } from "./ProductReducer/reducer";
import { reducer as cartReducer } from "./CartReducer/reducer";
import { reducer as wishlistReducer } from "./WishlistReducer/reducer";
import { ScrollReducer } from "./scrollReducer/Reducer";
const rootReducer = combineReducers({
  authReducer,
  productReducer,
  wishlistReducer,
  cartReducer,
  ScrollReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

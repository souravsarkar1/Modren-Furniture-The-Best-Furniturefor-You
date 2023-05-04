import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./AuthReducer/reducer";


const rootReducer = combineReducers({
 authReducer
 
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

if (window.Cypress) {
  window.store = store;
}

import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";



const rootReducer = combineReducers({
 
 
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}

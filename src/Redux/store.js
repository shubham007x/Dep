import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ reducer });
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export { store };

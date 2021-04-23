import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

import {allNotesReducer} from "./reducers/allNotes";
import thunk from "redux-thunk";
import {searchTermReducer} from "./reducers/searchTerm";

export const store = createStore(combineReducers({
    allNotes: allNotesReducer,
    searchTerm: searchTermReducer,
}), composeWithDevTools(applyMiddleware(thunk)))

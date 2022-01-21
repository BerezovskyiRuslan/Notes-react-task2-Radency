import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import notes from './reducer/notes/notes';
import category from './reducer/category/category';
import isArchive from './reducer/isArchive/isArchive';

const reducer = combineReducers({
    notes,
    category,
    isArchive
});

const state = createStore(reducer, applyMiddleware(thunk));

export default state;
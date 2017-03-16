import { combineReducers } from 'redux';
import BooksReducer from './ReducerBooks';
import ActiveBookReducer from './ReducerActiveBook';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;

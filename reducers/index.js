import { combineReducers } from 'redux';
import auth from './auth';
//import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  //  Books:BooksReducer
    auth
});

export default rootReducer;

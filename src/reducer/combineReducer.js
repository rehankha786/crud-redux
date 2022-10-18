import { combineReducers } from 'redux'
import bookreducer from "./bookReducer";
 const rootReducer=combineReducers({
    bookList : bookreducer}
    )
 export default rootReducer

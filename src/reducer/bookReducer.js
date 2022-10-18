import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "../actiontype"
let items=localStorage.getItem("booklist")!==null ? JSON.parse
(localStorage.getItem('booklist')):[]
const initialState={
    booklist:items
}
const bookreducer=(state=initialState,action)=>{
switch(action.type){
    case ADD_BOOK:
        return{
            ...state,
            booklist:[ ...state.booklist,action.payload]
              
        }
        case DELETE_BOOK:
            const list=state.booklist.filter(elem=>elem.id !== action.payload)
            return{
                ...state,
                booklist:list   
            }
            case UPDATE_BOOK:
                const obj=action.payload 
                let updateitem=state.booklist.map(item=>item.id===obj.id ? obj:item)
            return{
                ...state,
                booklist:updateitem 
            }
default:return state
}
}
export default bookreducer
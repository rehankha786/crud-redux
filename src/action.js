import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "./actiontype"
export const addBook=(data)=>{
    return{
        type: ADD_BOOK,
        payload:data
} 

}
export const deleteBook=(id)=>{
    return{
        type: DELETE_BOOK,
        payload:id
} 
}
export const updateBook=(updateobj,navigate)=>{
    navigate('/form')
    return{
        type: UPDATE_BOOK,
        payload:updateobj
} 

}
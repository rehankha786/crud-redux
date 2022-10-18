import { useEffect, useState } from "react";
import "./Form.css"
import { useDispatch,useSelector } from "react-redux";
import { addBook, deleteBook} from "../action";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
const Form = () => {
  const dispatch=useDispatch()
  const books= useSelector((state)=>state.bookList.booklist)
const [value,setValue]=useState({
  bookname:'',
  authername:'',
  year:'',
  price:''
})
const {bookname,authername,year,price}=value
const onchangeHandle =(e)=>{
  setValue({...value,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
e.preventDefault()
let obj={
  ...value,
  id:uuid()
}
dispatch(addBook(obj))
setValue({bookname:"",authername:"",year:"",price:""})
}
useEffect(()=>{
  localStorage.setItem("booklist",JSON.stringify(books))
},[books])
  return (
    <>
      <div className='container form-page'>
        <h1 className='form-heading'>
          <b>Fill the form</b>
        </h1>
        <form  onSubmit={handleSubmit}>
          <label>
            <b>BOOK NAME :</b>
          </label>
          <br />
          <input
            type='text'
            name="bookname"
            placeholder='Enter Book Name'
            className='form-input'
            id='bookname'
            autoComplete="off"
            value={bookname}
            onChange={onchangeHandle}
          />
          <br />
          <label>
            <b>AUTHER NAME :</b>
          </label>
          <br />
          <input
            type='text'
            name="authername"
            id='authername'
            placeholder='Enter Auther Name'
            className='form-input'
            autoComplete="off"
            value={authername}
            onChange={onchangeHandle}          
            />
          <br />
          <label>
            <b>PUBLISHED YEAR :</b>
          </label>
          <br />
          <input
          type='text'
          id="year"
          name="year"
            placeholder='Enter Published year'
            className='form-input'
            autoComplete="off"
            value={year}
            onChange={onchangeHandle}          
            />
          <br />
          <label>
            <b>PRICE PKR :</b>
          </label>
          <br />
          <input
          type='text'
            id="price"
            name="price"
            placeholder='Enter price here'
            className='form-input'
            autoComplete="off"
            value={price}
            onChange={onchangeHandle}          
            />
          <div className='btn-click'>
            <button id='click-btn'>
              submit
            </button>
          </div>
        </form>
        
      </div>
      <div className="table-data">
      <table className="table table table-dark  mt-4 table-book">
      {books.length <= 0? "":
      <thead>
    <tr>
      <th>Bookname</th>
      <th>authername</th>
      <th>year</th>
      <th>price</th>
      <th>Delete</th>
      <th>Edit</th>
    </tr>
  </thead>
}
      { books?.map((item) => {
        const {bookname,authername,year,price}=item
        return(
         
          <tbody>
          <tr  key={item.id}>
            <td>{bookname}</td>
            <td>{authername}</td>
            <td>{year}</td>
            <td>{price}</td>
            <td><div className="btn btn-sm btn-danger" onClick={()=>dispatch(deleteBook(item.id))}>Delete</div></td>
            <td><Link to='/editform' state={{item}}>
              <div className="btn btn-sm btn-success">Edit</div>
              </Link></td>
          </tr>
            </tbody>
              )
            })}
            </table>
            </div>
    </>
  );
};

export default Form;
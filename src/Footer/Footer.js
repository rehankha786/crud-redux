import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";
const Footer = () => {
    const books= useSelector((state)=>state.bookList.booklist)
  return (
    books.length <= 0 ? " ":
    <div className="footer">
    <footer className='container page-footer '>
      <div className='footer-copyright text-center py-3'>© 2020 Copyright:</div>
      <div className="count">
        <p>TOTAL BOOKS AVAILABLE : <b>{books.length}</b>  </p>
      </div>
    </footer>
    </div> 
  );
};

export default Footer;
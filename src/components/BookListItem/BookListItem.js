import React from 'react';
import './BookListItem.scss'

const BookListItem = ({book, onAddToCart}) => {
  const {title, author, price, coverImg} = book;
  return(
    <div className='BookListItem'>
      <div className="book-cover">
        <img src={coverImg} alt=""/>
      </div>
      <div className="book-details">
        <span className='book-title'>{title}</span>
        <div className='book-author'>{author}</div>
        <div className='book-price'>${price}</div>
        <button className='btn btn-info add-to-cart' onClick={onAddToCart}>Add to cart</button>
      </div>
    </div>
  )
};

export default BookListItem;
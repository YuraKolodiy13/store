import React, {Component} from 'react';
import BookListItem from "../BookListItem/BookListItem";
import {connect} from 'react-redux'
import withBookstoreService from '../hoc/withBookstoreService'
import {fetchBooks, bookAddedToCart} from '../../actions/index'
import compose from '../../utils/index'
import './BookList.scss'
import Loader from "../Loader/Loader";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

class BookList extends Component{

  componentDidMount(){
    this.props.fetchBooks();
  }

  render(){
    const {books, loading, error, onAddToCart} = this.props;

    if(loading){
      return <Loader/>
    }

    if(error){
      return <ErrorIndicator/>
    }

    return(
      <ul className='BookList'>
        {
          books.map((book) => {
            return(
              <li key={book.id}>
                <BookListItem book={book} onAddToCart={() => onAddToCart(book.id)}/>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = ({books, loading, error}) => {
  return {books, loading, error}
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookstoreService} = ownProps;
  return{
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddToCart: (id) => dispatch(bookAddedToCart(id))
  }
};


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)
import React, {Component} from 'react';
import axios from '../../services/axios'
import './AddBook.scss'

let bookName;

export default class AddBook extends Component{

  state = {
    book: []
  }

  value = (e) => {
    bookName = e.target.value;
    console.log(bookName);
  }


  createQuizHandler = async e => {
    e.preventDefault()

    const book = this.state.book.concat();

    const questionItem = {
      name: bookName

    };
    book.push(questionItem)


    this.setState({
      book
    })

    try {
      console.log(this.state.book)
      await axios.post('/books.json', this.state.book);

      // this.setState({
      //   book: []
      // })
    } catch (e) {
      console.log(e)
    }


  }

  render(){
    return(
      <div>
        <h1>add book</h1>
        <form className='AddBook'>
          <input type="text" onChange={(e) => this.value(e)}/>
          <input type="file" />
          <button type="submit" onClick={this.createQuizHandler}>Add book</button>
        </form>
      </div>
    )
  }
}
export default class BookstoreService{

  data = [
    {id: 1, title: 'Magic', author: 'gogol', price: 12, coverImg: 'https://www.thesecret.tv/wp-content/uploads/2015/04/the-magic-book-cover-img-250x357.png'},
    {id: 2, title: 'some', author: 'dont know', price: 43, coverImg: 'https://www.thesecret.tv/wp-content/uploads/2015/04/the-secret-daily-teachings-book-cover-img-250x357.png'},
    {id: 3, title: 'Strategy', author: 'author name', price: 22, coverImg: 'https://www.adazing.com/cover/public/img/templates/thumbs/mock-04.png'},
    {id: 4, title: 'The Akashic records', author: 'Ernesto Ortiz', price: 33, coverImg: 'https://www.journey2theheart.com/wp-content/uploads/2015/09/Book.png'},
    {id: 5, title: 'Hero', author: 'Rhonda Byme', price: 15, coverImg: 'https://www.thesecret.tv/wp-content/uploads/2015/04/hero-the-secret-book-cover-img-250x357.png'},
  ];
  getBooks(){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data)
      }, 700)
    })
  }
}
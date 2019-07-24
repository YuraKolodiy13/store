export default class BookstoreService{

  data = [
    {id: 1, title: 'viy', author: 'gogol', price: 12, coverImg: 'https://www.thesecret.tv/wp-content/uploads/2015/04/the-magic-book-cover-img-250x357.png'},
    {id: 2, title: 'some', author: 'dont know', price: 43, coverImg: 'https://www.thesecret.tv/wp-content/uploads/2015/04/the-secret-daily-teachings-book-cover-img-250x357.png'}
  ]
  getBooks(){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data)
      }, 700)
    })
  }
}
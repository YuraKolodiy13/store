import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from  'react-redux'
import {BrowserRouter as Router} from  'react-router-dom'

import App from './components/App/App'
import BookstoreService from './services/bookstore-service'
import {BookStoreSeviceProvider }  from './components/Bookstore-service-context/Bookstore-service-context'
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import store from './store';


const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookStoreSeviceProvider value={bookstoreService}>
        <Router>
          <App/>
        </Router>
      </BookStoreSeviceProvider>
    </ErrorBoundary>
  </Provider>
  , document.getElementById('root')
);


// function Calculator() {
//   this.read = function () {
//     this.a = +prompt('a', '0');
//     this.b = +prompt('b', '0');
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   }
//   this.mul = function () {
//     return this.a * this.b;
//   }
// }
// var calculator = new Calculator();
// calculator.read();
// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );

// class Calculator2 {
//   read(){
//     this.a = +prompt('a', '0');
//     this.b = +prompt('b', '0');
//   }
//   sum() {
//     return this.a + this.b;
//   }
//   mul() {
//     return this.a * this.b;
//   }
// }
// let calculator2 = new Calculator2();
// calculator2.read();
// alert( "Сумма=" + calculator2.sum() );
// alert( "Произведение=" + calculator2.mul() );

// class Accumulator {
//
//   constructor(startingValue) {
//     this.value = startingValue;
//   }
//
//   read() {
//     this.value += +prompt('value', '0')
//   }
// }
//
// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value );

// class Calculator {
//   constructor(str){
//     this.str = str;
//   }
//   calculate(str){
//     let newStr = str.split(' ');
//     if(newStr[1] === '+'){
//       return +newStr[0] + +newStr[2];
//     }
//     if(newStr[1] === '-'){
//       return newStr[0] - newStr[2];
//     }
//     if(newStr[1] === '/'){
//       return newStr[0] / newStr[2];
//     }
//     if(newStr[1] === '**' || newStr[1] === '*'){
//       return newStr[0] * newStr[2];
//     }
//   }
//   addMethod(name, func){
//     return this[name] = func;
//   }
// }
// const calc = new Calculator();
// alert( calc.calculate("3 * 7") ); // 10


// class User {
//   constructor(fullName){
//     this.fullName = fullName;
//   }
// }
//
// var vasya = new User("Василий Попкин");
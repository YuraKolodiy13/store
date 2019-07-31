import React from 'react';
import './App.scss'
import Homepage from "../pages/Homepage";
import Cartpage from "../pages/Cartpage";

import {Route, Switch} from  'react-router-dom'
import Header from "../Header/Header";
import {connect} from "react-redux";


const App = ({cartItems, orderTotal}) => {
  return (
    <main role='main' className='container'>
      <Header numItems={cartItems.map(item => item.count)} total={orderTotal || 0}/>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/cart' component={Cartpage}/>
      </Switch>
    </main>
  )
};

const mapStateToProps = ({cartItems, orderTotal}) => {
  return {cartItems, orderTotal}
};

export default connect(mapStateToProps)(App);
import React from 'react';
import './App.scss'
import Homepage from "../pages/Homepage";
import Cartpage from "../pages/Cartpage";

import {Route, Switch} from  'react-router-dom'
import Header from "../Header/Header";

const App = () => {
  return (
    <main role='main' className='container'>
      <Header numItems={5} total={200}/>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/cart' component={Cartpage}/>
      </Switch>
    </main>
  )
};

export default App;
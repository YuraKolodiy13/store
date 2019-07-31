import React from 'react';
import './Header.scss'
import {Link} from 'react-router-dom'

const Header = ({numItems, total}) => {
  return (
    <header className='Header'>
      <Link to='/'>
        <div className='logo text-dark'>Store</div>
      </Link>
      <Link to='/cart'>
        <div className='shopping-cart'>
          <i className='cart-icon fa fa-shopping-cart'>{numItems.length ? numItems.reduce((sum, item) => sum + item) : 0} items (${total})</i>
        </div>
      </Link>

    </header>
  )
}
export default Header
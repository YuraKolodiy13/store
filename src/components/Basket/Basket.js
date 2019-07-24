import React from 'react';
import './Basket.scss'
import {connect} from "react-redux";

const Basket = ({cartItems, orderTotal, onIcrease, onDecrease, onDelete}) => {
  return (
    <div className='Basket'>
      <h2>Your Order</h2>
      <table className='Table table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          cartItems.map((item, index) => {
            const {id, name, count, total} = item;
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                  <button className='btn btn-outline-danger' onClick={() => onDelete(id)}>
                    <i className='fa fa-trash-o'/>
                  </button>
                  <button className='btn btn-outline-success' onClick={() => onIcrease(id)}>
                    <i className='fa fa-plus-circle'/>
                  </button>
                  <button className='btn btn-outline-warning' onClick={() => onDecrease(id)}>
                    <i className='fa fa-minus-circle'/>
                  </button>
                </td>
              </tr>
            )
          })
        }

        </tbody>
      </table>
      <div className='total'>Total: ${orderTotal}</div>
    </div>
  )
};

const mapStateToProps = ({cartItems, orderTotal}) => {
  return {cartItems, orderTotal}
};

const mapDispatchToProps = () => {
  return {
    onIcrease: (id) => {
      console.log(`increase ${id}`)
    },
    onDecrease: (id) => {
      console.log(`onDecrease ${id}`)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);

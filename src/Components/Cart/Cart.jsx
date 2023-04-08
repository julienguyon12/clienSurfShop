import React from 'react';
import './Cart.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
  const dispatch = useDispatch();
  return (
    <div className='cart'>
      <h1>Here is your product</h1>
      {products?.map((item) => (
        <div className='item' key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className='price'>
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteIcon
            className='delete'
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>{totalPrice()}$</span>
      </div>
      <button>PROCEED TO CHECK OUT</button>
      <button className='reset' onClick={() => dispatch(resetCart())}>
        RESET CART
      </button>
    </div>
  );
};

export default Cart;

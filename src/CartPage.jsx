import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './redux/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="py-8 px-4 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-8">Your Cart</h1>
      {totalItems === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Cart Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div className="text-lg font-medium">{item.name}</div>
                  <div className="flex items-center">
                    <span className="text-lg">${item.price}</span>
                    <button
                      onClick={() => dispatch(removeFromCart(item))}
                      className="ml-4 text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t pt-4 text-lg">
              <div className="flex justify-between">
                <span>Total Items:</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Total Price:</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

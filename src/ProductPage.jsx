import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/cartSlice';

const ProductPage = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 40 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="py-8 px-4 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h3 className="text-2xl font-semibold">{product.name}</h3>
            <p className="text-lg text-gray-600 mt-2">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

import React from 'react';
import ProductPage from './ProductPage';
import CartPage from './CartPage';

const App = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <header className="bg-blue-600 text-white py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <nav>
            <a href="#cart" className="text-white ml-4 hover:text-gray-300">Cart</a>
            <a href="#products" className="text-white ml-4 hover:text-gray-300">Products</a>
          </nav>
        </div>
      </header>
      <main id="products">
        <ProductPage />
      </main>
      <main id="cart">
        <CartPage />
      </main>
    </div>
  );
};

export default App;

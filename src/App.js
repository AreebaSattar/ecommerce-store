import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const App = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    return storedCart || {};
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<ProductList cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetail cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />}
        />
        <Route
          path="/cart"
          element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </AppContainer>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';
import productsData from '../data/products.json';

const ProductList = ({ cart, addToCart, removeFromCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={`/assets/${product.image}`} alt={product.name} />
          </Link>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          {cart[product.id] ? (
            <div className="cart-controls">
              <button onClick={() => removeFromCart(product.id)}>-</button>
              <span>{cart[product.id]}</span>
              <button onClick={() => addToCart(product.id)}>+</button>
            </div>
          ) : (
            <button onClick={() => addToCart(product.id)} className="add-to-cart-button">Add to Cart</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;

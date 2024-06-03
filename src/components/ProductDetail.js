import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import productsData from '../data/products.json';

const ProductDetail = ({ cart, addToCart, removeFromCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = productsData.find((p) => p.id === parseInt(id));
    setProduct(product);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-container">
      <div className="product-image-container">
        <img src={`/assets/${product.image}`} alt={product.name} />
      </div>
      <div className="product-details-container">
        <h2>{product.name}</h2>
        <p className="price">${product.price}</p>
        <div className="cart-controls">
          {cart[product.id] ? (
            <>
              <button onClick={() => removeFromCart(product.id)}>-</button>
              <span>{cart[product.id]}</span>
              <button onClick={() => addToCart(product.id)}>+</button>
            </>
          ) : (
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          )}
        </div>
        <div className="product-description">
          <h3>WHAT IT IS</h3>
          <p>{product.description}</p>
        </div>
        <div className="key-ingredients">
          <h3>KEY INGREDIENTS</h3>
          {product.keyIngredients.map((ingredient, index) => (
            <p key={index}><strong>{ingredient.name}:</strong> {ingredient.description}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

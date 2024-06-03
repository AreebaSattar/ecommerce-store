import React from 'react';
import styled from 'styled-components';
import productsData from '../data/products.json';

const CartContainer = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 2rem auto;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemDetail = styled.div`
  text-align: center;
`;

const RemoveButton = styled.button`
  background-color: #ff4c4c;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }
  
`;

const ShoppingCart = ({ cart, removeFromCart }) => {
  const cartItems = Object.keys(cart).map((productId) => {
    const product = productsData.find((item) => item.id === parseInt(productId));
    if (product) {
      return { ...product, quantity: cart[productId] };
    }
    return null;
  }).filter(item => item !== null);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <CartItem>
            <ItemDetail><strong>Product</strong></ItemDetail>
            <ItemDetail><strong>Quantity</strong></ItemDetail>
            <ItemDetail><strong>Price per Item</strong></ItemDetail>
            <ItemDetail><strong>Total Price</strong></ItemDetail>
            <ItemDetail></ItemDetail>
          </CartItem>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <ItemDetail>{item.name}</ItemDetail>
              <ItemDetail>{item.quantity}</ItemDetail>
              <ItemDetail>${item.price}</ItemDetail>
              <ItemDetail>${(item.price * item.quantity).toFixed(2)}</ItemDetail>
              <ItemDetail>
                <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
              </ItemDetail>
            </CartItem>
          ))}
          <CartItem>
            <ItemDetail></ItemDetail>
            <ItemDetail></ItemDetail>
            <ItemDetail><strong>Total:</strong></ItemDetail>
            <ItemDetail><strong>${calculateTotal()}</strong></ItemDetail>
            <ItemDetail></ItemDetail>
          </CartItem>
        </>
      )}
    </CartContainer>
  );
};

export default ShoppingCart;

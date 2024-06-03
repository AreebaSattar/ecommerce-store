import React from 'react';
import './Home.css';
import skincareImage from '../assets/skincare.jpg';
import makeupMeltImage from '../assets/makeupmelt.jpg';
import lemonSageImage from '../assets/lemonsage.jpg';
import clearGeniusImage from '../assets/cleargenius.jpg';
import fabgirlFirmImage from '../assets/skincarecream.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="mainsection" style={{ backgroundImage: `url(${skincareImage})` }}>
        <div className="maincontent">
          <h1>Welcome to Our Store</h1>
          <p>Discover amazing products and great deals</p>
          <Link to="/products" className="shopnow-button">Shop Now</Link>
        </div>
      </section>
      <section className="collections-section">
        <h2>Shop Our Collections</h2>
        <div className="collections-container">
          <div className="collection-item">
          <Link to={`/product/${2}`}>
            <img src={makeupMeltImage} alt="makeupMeltImage" />
          </Link>
            {/* <img src={makeupMeltImage} alt="Makeup Melt" /> */}
            <h3>Makeup Melt</h3>
            <p>Makeup-removing necessities to kick off your cleansing</p>
          </div>
          <div className="collection-item">
          <Link to={`/product/${3}`}>
            <img src={lemonSageImage} alt= "Lemon & Sage"/>
          </Link>
            
            <h3>Aloevera Cream</h3>
            <p>Hydrating aloe vera cream for glowing skin.</p>
          </div>
          <div className="collection-item">
          <Link to={`/product/${1}`}>
            <img src={clearGeniusImage} alt= "Clear Genius"/>
          </Link>
            {/* <img src={clearGeniusImage} alt="Clear Genius" /> */}
            <h3>Vitamin C Cream</h3>
            <p>Revitalizing Anti-Aging Cream</p>
          </div>
          <div className="collection-item">
          <Link to={`/product/${4}`}>
            <img src={fabgirlFirmImage} alt= "Fabgirl Firm"/>
          </Link>
            {/* <img src={fabgirlFirmImage} alt="Fabgirl Firm" /> */}
            <h3>Skincare Cream</h3>
            <p>Luxurious Hydration Cream</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

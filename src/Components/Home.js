import React from 'react';
import Button from './Button';
import Navbar from './Nav/Navbar';

const Home = () => {
  const value = 'Explore';
  return (
    <div className="Home">
      <Navbar />
      <div className="container">
        <div className="title">
          <span className="welcome">Welcome to </span>
          <span className="name">Michael's!</span>
        </div>
        <div className="subtitle">
          <h3>100% Gluten Free & Delicious</h3>
        </div>
        <div className="btn">
          <Button value={value} />
        </div>
      </div>
    </div>
  );
};

export default Home;

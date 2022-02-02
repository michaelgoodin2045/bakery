import React from 'react';
import Navbar from './Nav/Navbar';
import locations from '../data/locations.json';

const About = () => {
  return (
    <div className="Locations">
      <Navbar />
      <div className="title">
        <h1>Michael's Bakery</h1>
      </div>
      <div className="subtitle">
        <h3>100% Gluten Free & Delicious</h3>
      </div>
      <div className="locations">
        <h2>Locations</h2>
        <div className="container">
          {locations.map((location, index) => {
            return (
              <div className="card" key={index}>
                <div className="location-name">
                  <h3>{location.location}</h3>
                </div>
                <div className="address">
                  <p className="street">{location.street}</p>
                  <div className="locale">
                    <span className="city">{location.city}, </span>
                    <span className="state">{location.state} </span>
                    <span className="zip">{location.zip}</span>
                  </div>
                  <div className="phone">
                    <p>{location.phone}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;

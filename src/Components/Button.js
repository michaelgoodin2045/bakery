import React from 'react';

const Button = ({ value }) => {
  return (
    <>
      <button className="explore-btn">
        <h3>{value}</h3>
      </button>
    </>
  );
};

export default Button;

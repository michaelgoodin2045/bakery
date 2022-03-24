import React from 'react';
import buttons from '../data/storeMenu.json';

const StoreMenu = ({ setFilter }) => {
  return (
    <div className="store-buttons">
      {buttons.map((button, index) => {
        return (
          <div className="store-btn" key={index}>
            <a href={`/store#${button.filter}`}>
              <button
                className="search-btn"
                onClick={() => setFilter(button.filter)}
              >
                <p>{button.name}</p>
              </button>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default StoreMenu;

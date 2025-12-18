import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../Data/Newcollection'; // Your separate Newcollection data file
import './NewCollection.css';

const NewCollection = () => {
  // Show first 6 products
  const newCollectionProducts = Data.slice(0, 6);

  return (
    <div className='newcollection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />

      <div className="collections">
        {newCollectionProducts.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="item-link"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="item">
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>
              <div className="item-prices">
                <span className="item-price-new">₹{product.newPrice}</span>
                <span className="item-price-old">₹{product.oldPrice}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;

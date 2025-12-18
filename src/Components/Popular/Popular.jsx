import React, { useContext } from 'react';
import './popular.css';
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';

const Popular = () => {
  const { allProducts } = useContext(ShopContext);

  // ✅ Only 6 women products
  const popularWomen = allProducts
    .filter(item => item.category === 'Women')
    .slice(0, 6); // ⭐ THIS LINE FIXES IT

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />

      <div className="popular-items">
        {popularWomen.map(item => (
          <Item
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;

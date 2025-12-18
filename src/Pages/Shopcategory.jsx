import React from 'react';
import { Link } from 'react-router-dom';
import { womenProducts } from '../Components/Data/Womenproducts';
import { menProducts } from '../Components/Data/Menproducts';
import { kidsProducts } from '../Components/Data/Kidsproducts';
import './Css/ShopCategory.css'; // your CSS

// Single product item
const Item = (props) => { 
  return (  
    <Link to={`/product/${props.id}`} className="item-link">
      <div className="item">
        <img src={props.img} alt={props.name} />
        <p>{props.name}</p>
        <div className="item-prices">
          <span className="item-price-new">₹{props.newPrice}</span>
          <span className="item-price-old">₹{props.oldPrice}</span>
        </div>
      </div>
    </Link>
  );
};

// Shopcategory main component
const Shopcategory = ({ category }) => {
  let products = [];

  if (category === 'Women') products = womenProducts;
  else if (category === 'Men') products = menProducts;
  else if (category === 'Kids') products = kidsProducts;

  return (
    <div className="shop-category">
      <h1>{category} Collection</h1>
      <div className="shopcategory-products">
        {products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Shopcategory;

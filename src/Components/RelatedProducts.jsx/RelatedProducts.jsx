import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import './RelatedProducts.css';

const RelatedProducts = ({ currentProduct }) => {
  const { allProducts } = useContext(ShopContext);

  if (!currentProduct) return null;

  const related = allProducts
    .filter(
      item =>
        item.category === currentProduct.category &&
        item.id !== currentProduct.id
    )
    .slice(0, 8);

  return (
    <div className="related-products">
      <h2>Related Products</h2>

      <div className="related-grid">
        {related.map(item => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="related-item"
          >
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <span>₹{item.newPrice}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

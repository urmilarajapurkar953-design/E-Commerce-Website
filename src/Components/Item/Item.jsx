import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, img, name, newPrice, oldPrice }) => {
  return (
    <Link
      to={`/product/${id}`}
      className="item"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    >
      <img src={img} alt={name} />
      <p>{name}</p>

      <div className="item-prices">
        <span className="item-price-new">₹{newPrice}</span>
        <span className="item-price-old">₹{oldPrice}</span>
      </div>
    </Link>
  );
};

export default Item;

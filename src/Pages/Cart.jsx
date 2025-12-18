import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './Css/Cart.css';

const Cart = () => {
  const { allProducts, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);

  const cartProducts = allProducts.filter(
    (product) => cartItems[product.id] > 0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cartProducts.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        cartProducts.map((product) => (
          <div className="cart-item" key={product.id}>
            <img src={product.img} alt={product.name} />

            <div className="cart-info">
              <h3>{product.name}</h3>
              <p>₹{product.newPrice}</p>

              <div className="cart-qty">
                {/* DECREASE */}
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="qty-btn"
                >
                  −
                </button>

                <span>{cartItems[product.id]}</span>

                {/* INCREASE */}
                <button
                  onClick={() => addToCart(product.id)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

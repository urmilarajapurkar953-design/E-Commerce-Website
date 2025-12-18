import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import RelatedProducts from '../Components/RelatedProducts.jsx/RelatedProducts';
import Toast from '../Components/Toast/Toast';
import NewCollectionData from '../Components/Data/Newcollection'; 
import './Css/Product.css';

const Product = () => {
  const { id } = useParams();
  const { allProducts, addToCart } = useContext(ShopContext);

  // ✅ Find product in allProducts OR NewCollectionData
  const product =
    allProducts.find(p => p.id === Number(id)) ||
    NewCollectionData.find(p => p.id === Number(id));

  const images = product ? [product.img, product.img, product.img, product.img] : [];

  const [mainImage, setMainImage] = useState('');
  const [selectedSize, setSelectedSize] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (product) {
      setMainImage(product.img);
      setSelectedSize(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id, product]);

  if (!product) return <h2>Product not found</h2>;

  const handleAddToCart = () => {
    addToCart(product.id);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      <div className="product-wrapper">
        <div className="product-page">
          {/* IMAGE */}
          <div className="product-image-section">
            <div className="thumbnail-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumb"
                  className={mainImage === img ? 'active-thumb' : ''}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
            <div className="main-image">
              <img src={mainImage} alt={product.name} />
            </div>
          </div>

          {/* INFO */}
          <div className="product-info">
            <h1>{product.name}</h1>
            <div className="rating">⭐⭐⭐⭐☆ <span>(4.2)</span></div>
            <div className="product-prices">
              <span className="price-new">₹{product.newPrice}</span>
              <span className="price-old">₹{product.oldPrice}</span>
            </div>
            <div className="size-section">
              <h4>Select Size</h4>
              <div className="sizes">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <span
                    key={size}
                    className={selectedSize === size ? 'size active-size' : 'size'}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <p className="product-description">
              Premium quality fabric, comfortable fit, and modern style.
            </p>
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <RelatedProducts currentProduct={product} />

      <Toast show={showToast} message="Added to cart 🛒" />
    </>
  );
};

export default Product;

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Shopcategory from './Pages/Shopcategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Loginsignup from './Pages/Loginsignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/womens" element={<Shopcategory category="Women" />} />
        <Route path="/mens" element={<Shopcategory category="Men" />} />
        <Route path="/kids" element={<Shopcategory category="Kids" />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Loginsignup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

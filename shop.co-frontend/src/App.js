import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/Home/HomePage';
import Shop from './pages/Shop/Shop';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

function App() {
  const location = useLocation();
  const showFooter = !['/Login', '/Signup'].includes(location.pathname);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/ProductDetail/:productid" element={<ProductDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

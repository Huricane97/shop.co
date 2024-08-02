import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

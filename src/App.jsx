import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Style from './pages/Style';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Router>
      <Header />
      <Shop isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/style" element={<Style />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import Layout from './components/Layout/Layout';
import ProductDetail from './components/ProductCard/ProductDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='detail' element={<ProductDetailPage />}>
          <Route path=':id' element={<ProductDetail />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;

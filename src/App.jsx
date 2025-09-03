import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ContactButton from './components/contact/ContactButton';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return <Products />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <ProductProvider>
      <CartProvider>
        <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
          {renderPage()}
          <ContactButton />
        </Layout>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
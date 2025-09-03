import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useProducts } from '../../context/ProductContext';
import Cart from '../cart/Cart';
import CategoryDropdown from '../categories/CategoryDropdown';
import TeamModal from '../team/TeamModal';
import logo from '/src/assets/icon2.png';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  
  const { getCartItemsCount } = useCart();
  const { searchTerm, setSearchTerm } = useProducts();
  
  const cartItemsCount = getCartItemsCount();

  const navItems = [
    { name: 'Inicio', href: 'home', isPage: true },
    { name: 'Ofertas', href: '#offers', isPage: false },
    { name: 'Colaboradores', href: '#team', isPage: false }
  ];

  const handleNavigation = (item) => {
    if (item.isPage) {
      setCurrentPage(item.href);
    } else if (item.href === '#team') {
      // Open team modal
      setIsTeamModalOpen(true);
    } else {
      // Primero navegar a home si estamos en otra página
      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Esperar un poco para que la página se cargue antes de hacer scroll
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                <img src={logo} alt="ProductGallery" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                ProductGallery
              </span>
            </motion.div>

            {/* Navigation Items (Desktop) */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Inicio y Ofertas */}
              {navItems.slice(0, 2).map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`px-4 py-2 font-medium transition-all duration-200 relative group rounded-lg ${
                    (item.isPage && currentPage === item.href) 
                      ? 'text-green-400 bg-gray-800' 
                      : 'text-gray-400 hover:text-green-400 hover:bg-gray-800'
                  }`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                    (item.isPage && currentPage === item.href) 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                </motion.button>
              ))}
              
              {/* Category Dropdown */}
              <CategoryDropdown setCurrentPage={setCurrentPage} />
              
              {/* Contacto (último elemento) */}
              {navItems.slice(2).map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`px-4 py-2 font-medium transition-all duration-200 relative group rounded-lg ${
                    (item.isPage && currentPage === item.href) 
                      ? 'text-green-400 bg-gray-800' 
                      : 'text-gray-400 hover:text-green-400 hover:bg-gray-800'
                  }`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 3) * 0.1 }}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                    (item.isPage && currentPage === item.href) 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                </motion.button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <motion.button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Search size={20} />
              </motion.button>

              {/* Favorites Button */}
              <motion.button
                className="p-2 text-gray-300 hover:text-green-400 transition-colors duration-200 hidden sm:block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart size={20} />
              </motion.button>

              {/* User Button */}
              <motion.button
                className="p-2 text-gray-300 hover:text-green-400 transition-colors duration-200 hidden sm:block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <User size={20} />
              </motion.button>

              {/* Cart Button */}
              <motion.button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-700 bg-gray-900"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-gray-700 bg-gray-900"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      (item.isPage && currentPage === item.href) 
                        ? 'text-green-400 bg-gray-800' 
                        : 'text-gray-400 hover:text-green-400 hover:bg-gray-800'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Mobile Category Access */}
                <div className="pt-4 border-t border-gray-200">
                  <CategoryDropdown setCurrentPage={setCurrentPage} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      {/* Team Modal */}
      <TeamModal isOpen={isTeamModalOpen} onClose={() => setIsTeamModalOpen(false)} />
    </>
  );
};

export default Navbar;

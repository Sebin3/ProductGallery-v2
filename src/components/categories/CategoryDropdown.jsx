import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Grid3X3 } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';

const CategoryDropdown = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { categories, setSelectedCategory } = useProducts();

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage('products');
    setIsOpen(false);
  };

  const handleAllProducts = () => {
    setSelectedCategory('all');
    setCurrentPage('products');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-green-400 hover:bg-gray-800 font-medium transition-all duration-200 relative group rounded-lg"
        whileHover={{ y: -2 }}
      >
        <Grid3X3 size={16} />
        <span>Categorías</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.div>
        <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
          isOpen ? 'w-full' : 'w-0 group-hover:w-full'
        }`}></span>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-30" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown Panel */}
            <motion.div
              className="absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-2xl shadow-2xl border border-gray-600 z-40 overflow-hidden"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="p-4 bg-gradient-to-r from-gray-700 to-gray-600 border-b border-gray-600">
                <h3 className="font-semibold text-white text-sm">Explorar Categorías</h3>
                <p className="text-xs text-gray-300 mt-1">Encuentra productos por categoría</p>
              </div>

              {/* All Products Option */}
              <motion.button
                onClick={handleAllProducts}
                className="w-full p-4 text-left hover:bg-gray-700 transition-colors duration-200 border-b border-gray-600 group"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🛍️</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white group-hover:text-green-400 transition-colors duration-200">
                      Todos los Productos
                    </div>
                    <div className="text-xs text-gray-400">Ver catálogo completo</div>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <ChevronDown className="rotate-[-90deg]" size={16} />
                  </motion.div>
                </div>
              </motion.button>

              {/* Categories List */}
              <div className="max-h-80 overflow-y-auto">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className="w-full p-4 text-left hover:bg-gray-700 transition-colors duration-200 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                        <span className="text-white text-lg">{category.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white group-hover:text-green-400 transition-colors duration-200">
                          {category.name}
                        </div>
                        <div className="text-xs text-gray-400">{category.description}</div>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <ChevronDown className="rotate-[-90deg]" size={16} />
                      </motion.div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">
                  Explora nuestra amplia gama de productos de calidad
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryDropdown;

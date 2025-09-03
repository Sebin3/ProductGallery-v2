import React from 'react';
import { motion } from 'framer-motion';
import { useProducts } from '../../context/ProductContext';

const CategoryFilter = () => {
  const { 
    categories, 
    selectedCategory, 
    setSelectedCategory,
    filteredProducts,
    products
  } = useProducts();

  const allCategories = [
    {
      id: 'all',
      name: 'Todos',
      icon: '🛍️',
      color: 'from-gray-500 to-gray-600'
    },
    ...categories
  ];

  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return products.length;
    return products.filter(product => product.category === categoryId).length;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Explorar por Categorías
        </h2>
        <p className="text-gray-600">
          Encuentra exactamente lo que buscas
        </p>
      </div>

      {/* Mobile Category Selector */}
      <div className="block md:hidden mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          {allCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.icon} {category.name} ({getCategoryCount(category.id)})
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Category Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {allCategories.map((category, index) => {
          const isSelected = selectedCategory === category.id;
          const count = getCategoryCount(category.id);
          
          return (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden ${
                isSelected
                  ? 'bg-gradient-to-r text-white shadow-lg transform scale-105'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md'
              }`}
              style={{
                background: isSelected 
                  ? `linear-gradient(135deg, var(--tw-gradient-stops))` 
                  : undefined
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSelected && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color}`}
                  layoutId="categoryBackground"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{category.icon}</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    isSelected 
                      ? 'bg-white/20 text-white' 
                      : 'bg-primary-100 text-primary-600'
                  }`}>
                    {count}
                  </span>
                </div>
                
                <h3 className="font-semibold mb-1">{category.name}</h3>
                
                {category.description && (
                  <p className={`text-xs ${
                    isSelected ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    {category.description}
                  </p>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Results Summary */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            Mostrando {filteredProducts.length} productos
            {selectedCategory !== 'all' && (
              <span className="ml-1">
                en {allCategories.find(cat => cat.id === selectedCategory)?.name}
              </span>
            )}
          </span>
          
          {selectedCategory !== 'all' && (
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className="text-primary-600 hover:text-primary-700 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver todos
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;

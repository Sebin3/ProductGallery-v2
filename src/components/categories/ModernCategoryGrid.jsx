import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';

const ModernCategoryGrid = ({ setCurrentPage }) => {
  const { categories, setSelectedCategory } = useProducts();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // Navegar a la página de productos
    if (setCurrentPage) {
      setCurrentPage('products');
    }
  };

  const categoryImages = {
    electronics: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop',
    fashion: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    home: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    sports: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    books: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
    beauty: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop'
  };

  const trendingCategories = ['electronics', 'fashion', 'beauty'];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-4 py-2 rounded-full mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={18} />
            <span className="font-medium">Explora por Categorías</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Encuentra Tu
            <motion.span
              className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              Pasión
            </motion.span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Descubre productos increíbles organizados especialmente para ti
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => {
            const isTrending = trendingCategories.includes(category.id);
            const isHovered = hoveredCategory === category.id;
            
            return (
              <motion.div
                key={category.id}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCategory(category.id)}
                onHoverEnd={() => setHoveredCategory(null)}
                onClick={() => handleCategoryClick(category.id)}
              >
                <motion.div
                  className="relative h-80 rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={categoryImages[category.id]}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                  </div>

                  {/* Trending Badge */}
                  {isTrending && (
                    <motion.div
                      className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1"
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <TrendingUp size={14} />
                      <span>TRENDING</span>
                    </motion.div>
                  )}

                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-3xl">{category.icon}</span>
                    </motion.div>

                    {/* Text Content */}
                    <div className="space-y-4">
                      <motion.h3
                        className="text-2xl md:text-3xl font-bold text-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        {category.name}
                      </motion.h3>
                      
                      <motion.p
                        className="text-white/90"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {category.description}
                      </motion.p>

                      {/* Action Button */}
                      <motion.div
                        className="flex items-center space-x-2 text-white group/btn"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <span className="font-semibold">Explorar</span>
                        <ArrowRight 
                          size={20} 
                          className="group-hover/btn:translate-x-2 transition-transform duration-300" 
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <AnimatePresence>
                    {isHovered && (
                      <>
                        <motion.div
                          className="absolute -top-2 -right-2 w-20 h-20 bg-white/10 rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/5 rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        />
                      </>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Floating Card Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: isHovered ? 1 : 0, 
                    scale: isHovered ? 1.05 : 0.9 
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => setCurrentPage && setCurrentPage('products')}
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Ver Todos los Productos</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernCategoryGrid;

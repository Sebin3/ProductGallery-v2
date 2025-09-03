import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid, List, SortAsc } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import ProductCard from './ProductCard';
import AdvancedFilters from '../filters/AdvancedFilters';
import ProductModal from './ProductModal';

const ProductGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  const { 
    filteredProducts, 
    selectedCategory,
    getCategoryById,
    sortBy, 
    setSortBy, 
    sortOrder, 
    setSortOrder 
  } = useProducts();

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const sortOptions = [
    { value: 'name', label: 'Nombre' },
    { value: 'price', label: 'Precio' },
    { value: 'rating', label: 'Calificación' },
    { value: 'stock', label: 'Stock' }
  ];

  return (
    <section id="gallery" className="py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Container unificado para filtros y productos */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-6 md:p-8 relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>

            {/* Category Info Header */}
            {selectedCategory !== 'all' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryById(selectedCategory)?.color || 'from-gray-400 to-gray-500'} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl text-white">{getCategoryById(selectedCategory)?.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {getCategoryById(selectedCategory)?.name}
                    </h2>
                    <p className="text-gray-600">
                      {getCategoryById(selectedCategory)?.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-4 mb-8 border border-gray-200"
            >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Left side - Filters */}
            <div className="flex items-center space-x-4">
              {/* Advanced Filters */}
              <AdvancedFilters />
              
              {/* Quick Sort for mobile */}
              <div className="sm:hidden flex items-center space-x-2">
                <SortAsc size={16} className="text-gray-600" />
                <select
                  value={`${sortBy}-${sortOrder}`}
                  onChange={(e) => {
                    const [newSortBy, newSortOrder] = e.target.value.split('-');
                    setSortBy(newSortBy);
                    setSortOrder(newSortOrder);
                  }}
                  className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="name-asc">A-Z</option>
                  <option value="name-desc">Z-A</option>
                  <option value="price-asc">$ Menor</option>
                  <option value="price-desc">$ Mayor</option>
                  <option value="rating-desc">⭐ Mejor</option>
                </select>
              </div>
            </div>

            {/* Right side - View modes and count */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {filteredProducts.length} productos
              </span>
              
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <motion.button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <Grid size={16} />
                </motion.button>
                <motion.button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors duration-200 ${
                    viewMode === 'list'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <List size={16} />
                </motion.button>
              </div>
            </div>
            </div>
            </motion.div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <motion.div
                className={`grid gap-6 ${
                  viewMode === 'grid'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                    : 'grid-cols-1'
                }`}
                layout
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    layout
                  >
                    <ProductCard
                      product={product}
                      onViewDetails={handleViewDetails}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    No se encontraron productos
                  </h3>
                  <p className="text-gray-600">
                    Intenta ajustar los filtros o buscar con diferentes términos.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Product Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default ProductGallery;

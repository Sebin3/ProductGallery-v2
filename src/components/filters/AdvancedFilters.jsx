import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, 
  X, 
  ChevronDown, 
  ChevronUp,
  DollarSign,
  Calendar,
  Star,
  Grid3X3,
  List,
  RotateCcw
} from 'lucide-react';
import { useProducts } from '../../context/ProductContext';

const AdvancedFilters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    rating: true,
    sort: true
  });

  const {
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    categories,
    filteredProducts
  } = useProducts();

  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedRating, setSelectedRating] = useState(0);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value);
    setPriceRange(newRange);
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 2000]);
    setSelectedRating(0);
    setSortBy('name');
    setSortOrder('asc');
  };

  const sortOptions = [
    { value: 'name-asc', label: 'Nombre A-Z', sortBy: 'name', order: 'asc' },
    { value: 'name-desc', label: 'Nombre Z-A', sortBy: 'name', order: 'desc' },
    { value: 'price-asc', label: 'Precio: Menor a Mayor', sortBy: 'price', order: 'asc' },
    { value: 'price-desc', label: 'Precio: Mayor a Menor', sortBy: 'price', order: 'desc' },
    { value: 'rating-desc', label: 'Mejor Calificación', sortBy: 'rating', order: 'desc' },
    { value: 'stock-desc', label: 'Más Disponibles', sortBy: 'stock', order: 'desc' }
  ];

  const handleSortChange = (option) => {
    setSortBy(option.sortBy);
    setSortOrder(option.order);
  };

  const getCurrentSortLabel = () => {
    const current = sortOptions.find(opt => 
      opt.sortBy === sortBy && opt.order === sortOrder
    );
    return current ? current.label : 'Ordenar por';
  };

  return (
    <>
      {/* Filter Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 bg-white border border-gray-300 hover:border-primary-400 px-4 py-2 rounded-lg transition-colors duration-200"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Filter size={18} />
        <span className="font-medium">Filtros</span>
        {(selectedCategory !== 'all' || selectedRating > 0) && (
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        )}
      </motion.button>

      {/* Filter Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Filter Sidebar */}
            <motion.div
              className="relative ml-auto w-full max-w-md bg-white shadow-2xl flex flex-col h-full"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-secondary-50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Filter size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Filtros</h2>
                    <p className="text-sm text-gray-600">{filteredProducts.length} productos</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/50 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Filter Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Sort Section */}
                <div className="p-6 border-b border-gray-100">
                  <motion.button
                    onClick={() => toggleSection('sort')}
                    className="flex items-center justify-between w-full mb-4"
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                      <Grid3X3 size={18} className="text-primary-600" />
                      <span>Ordenar por</span>
                    </h3>
                    {expandedSections.sort ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </motion.button>

                  <AnimatePresence>
                    {expandedSections.sort && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-2"
                      >
                        {sortOptions.map((option, index) => (
                          <motion.button
                            key={option.value}
                            onClick={() => handleSortChange(option)}
                            className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                              sortBy === option.sortBy && sortOrder === option.order
                                ? 'bg-primary-50 text-primary-700 border border-primary-200'
                                : 'hover:bg-gray-50'
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ x: 4 }}
                          >
                            {option.label}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Price Range Section */}
                <div className="p-6 border-b border-gray-100">
                  <motion.button
                    onClick={() => toggleSection('price')}
                    className="flex items-center justify-between w-full mb-4"
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                      <DollarSign size={18} className="text-green-600" />
                      <span>Rango de Precio</span>
                    </h3>
                    {expandedSections.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </motion.button>

                  <AnimatePresence>
                    {expandedSections.price && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-1">
                            <label className="block text-sm text-gray-600 mb-1">Mínimo</label>
                            <input
                              type="number"
                              value={priceRange[0]}
                              onChange={(e) => handlePriceChange(0, e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              placeholder="$0"
                            />
                          </div>
                          <div className="text-gray-400 mt-6">-</div>
                          <div className="flex-1">
                            <label className="block text-sm text-gray-600 mb-1">Máximo</label>
                            <input
                              type="number"
                              value={priceRange[1]}
                              onChange={(e) => handlePriceChange(1, e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              placeholder="$2000"
                            />
                          </div>
                        </div>
                        <div className="text-center text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                          ${priceRange[0]} - ${priceRange[1]}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Rating Section */}
                <div className="p-6 border-b border-gray-100">
                  <motion.button
                    onClick={() => toggleSection('rating')}
                    className="flex items-center justify-between w-full mb-4"
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                      <Star size={18} className="text-yellow-500" />
                      <span>Calificación</span>
                    </h3>
                    {expandedSections.rating ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </motion.button>

                  <AnimatePresence>
                    {expandedSections.rating && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-2"
                      >
                        {[4, 3, 2, 1].map((rating) => (
                          <motion.button
                            key={rating}
                            onClick={() => setSelectedRating(selectedRating === rating ? 0 : rating)}
                            className={`w-full text-left p-3 rounded-lg transition-colors duration-200 flex items-center space-x-3 ${
                              selectedRating === rating
                                ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                                : 'hover:bg-gray-50'
                            }`}
                            whileHover={{ x: 4 }}
                          >
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className={`${
                                    i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span>y más</span>
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Categories Section */}
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <Grid3X3 size={18} className="text-purple-600" />
                    <span>Categorías</span>
                  </h3>
                  <div className="space-y-2">
                    <motion.button
                      onClick={() => setSelectedCategory('all')}
                      className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                        selectedCategory === 'all'
                          ? 'bg-primary-50 text-primary-700 border border-primary-200'
                          : 'hover:bg-gray-50'
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      Todas las categorías
                    </motion.button>
                    {categories.map((category, index) => (
                      <motion.button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors duration-200 flex items-center space-x-3 ${
                          selectedCategory === category.id
                            ? 'bg-primary-50 text-primary-700 border border-primary-200'
                            : 'hover:bg-gray-50'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 4 }}
                      >
                        <span className="text-lg">{category.icon}</span>
                        <span>{category.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex space-x-3">
                  <motion.button
                    onClick={resetFilters}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <RotateCcw size={18} />
                    <span>Limpiar</span>
                  </motion.button>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Aplicar Filtros
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdvancedFilters;

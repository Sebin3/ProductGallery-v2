import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingCart, Heart, Minus, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useProducts } from '../../context/ProductContext';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();
  const { getCategoryById } = useProducts();

  if (!product) return null;

  const category = getCategoryById(product.category);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    onClose();
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" size={16} className="text-yellow-400" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={16} className="text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
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
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>

            <div className="grid md:grid-cols-2 gap-8 p-6">
              {/* Product Image */}
              <motion.div
                className="relative aspect-square rounded-xl overflow-hidden bg-gray-100"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Category Badge */}
                {category && (
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${category.color}`}>
                    {category.icon} {category.name}
                  </div>
                )}

                {/* Stock Badge */}
                {product.stock < 10 && product.stock > 0 && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium bg-red-500 text-white">
                    ¡Solo {product.stock}!
                  </div>
                )}
              </motion.div>

              {/* Product Details */}
              <motion.div
                className="flex flex-col"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex-1">
                  {/* Title and Rating */}
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h1>

                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-1">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reseñas)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Descripción</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Stock Status */}
                  <div className="mb-6">
                    {product.stock > 0 ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-green-600 font-medium">
                          En stock ({product.stock} disponibles)
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-red-600 font-medium">
                          Agotado
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Quantity Selector */}
                  {product.stock > 0 && (
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cantidad
                      </label>
                      <div className="flex items-center space-x-3">
                        <motion.button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                          whileTap={{ scale: 0.95 }}
                        >
                          <Minus size={16} />
                        </motion.button>
                        
                        <span className="w-12 text-center font-semibold">
                          {quantity}
                        </span>
                        
                        <motion.button
                          onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                          whileTap={{ scale: 0.95 }}
                        >
                          <Plus size={16} />
                        </motion.button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {product.stock > 0 ? (
                    <motion.button
                      onClick={handleAddToCart}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShoppingCart size={20} />
                      <span>Agregar al carrito - ${(product.price * quantity).toFixed(2)}</span>
                    </motion.button>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-500 font-semibold py-4 px-6 rounded-xl cursor-not-allowed"
                    >
                      Producto agotado
                    </button>
                  )}

                  <motion.button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`w-full border-2 font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 ${
                      isLiked
                        ? 'border-red-500 text-red-500 bg-red-50'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Heart size={20} className={isLiked ? 'fill-current' : ''} />
                    <span>{isLiked ? 'Quitar de favoritos' : 'Agregar a favoritos'}</span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;

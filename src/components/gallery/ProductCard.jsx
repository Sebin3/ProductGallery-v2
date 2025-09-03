import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useProducts } from '../../context/ProductContext';

const ProductCard = ({ product, onViewDetails }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();
  const { getCategoryById } = useProducts();

  const category = getCategoryById(product.category);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleViewDetails = (e) => {
    e.stopPropagation();
    onViewDetails(product);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" size={12} className="text-yellow-400" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={12} className="text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <motion.div
      className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer relative"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleViewDetails}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Category Badge */}
        {category && (
          <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${category.color}`}>
            {category.icon} {category.name}
          </div>
        )}

        {/* Stock Badge */}
        {product.stock < 10 && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium bg-red-500 text-white">
            ¡Solo {product.stock}!
          </div>
        )}

        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3">
            <motion.button
              onClick={handleLike}
              className={`p-3 rounded-full backdrop-blur-md transition-colors duration-200 ${
                isLiked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart size={20} className={isLiked ? 'fill-current' : ''} />
            </motion.button>
            
            <motion.button
              onClick={handleViewDetails}
              className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-md transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye size={20} />
            </motion.button>
            
            <motion.button
              onClick={handleAddToCart}
              className="p-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingCart size={20} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex">
            {renderStars(product.rating)}
          </div>
          <span className="text-xs text-gray-500">
            ({product.reviews})
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.stock > 0 ? (
              <span className="text-xs text-green-600">
                En stock ({product.stock})
              </span>
            ) : (
              <span className="text-xs text-red-600">
                Agotado
              </span>
            )}
          </div>
          
          <motion.button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              product.stock > 0
                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            whileHover={product.stock > 0 ? { scale: 1.05 } : {}}
            whileTap={product.stock > 0 ? { scale: 0.95 } : {}}
          >
            {product.stock > 0 ? 'Agregar' : 'Agotado'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

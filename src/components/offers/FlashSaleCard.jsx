import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const FlashSaleCard = ({ product, index }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Crear objeto de producto compatible con el carrito
    const cartProduct = {
      id: product.id,
      name: product.name,
      price: product.salePrice,
      image: product.image,
      stock: product.stock,
      category: 'flash-sale'
    };
    addToCart(cartProduct);
  };

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Flash Sale Badge */}
      <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
        <Zap size={14} className="fill-current" />
        <span>FLASH</span>
      </div>

      {/* Discount Badge */}
      <div className="absolute top-3 right-3 z-10 bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
        -{product.discount}%
      </div>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Timer */}
        <div className="flex items-center justify-center space-x-1 bg-red-50 text-red-600 rounded-lg py-2 px-3">
          <Clock size={16} />
          <span className="font-semibold text-sm">Termina en {product.timeLeft}</span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
          {product.name}
        </h3>

        {/* Prices */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">
              ${product.salePrice}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          </div>
          <div className="text-sm text-green-600 font-medium">
            Ahorras ${(product.originalPrice - product.salePrice).toFixed(2)}
          </div>
        </div>

        {/* Stock */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Stock:</span>
          <span className={`font-semibold ${product.stock <= 3 ? 'text-red-500' : 'text-green-500'}`}>
            {product.stock <= 3 ? `¡Solo ${product.stock}!` : `${product.stock} disponibles`}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min((10 - product.stock) * 10, 90)}%` }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          />
        </div>
        <div className="text-xs text-gray-500 text-center">
          {product.stock <= 3 ? '¡Últimas unidades!' : 'Stock limitado'}
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ShoppingCart size={20} className="group-hover/btn:animate-bounce" />
          <span>Comprar Ahora</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FlashSaleCard;

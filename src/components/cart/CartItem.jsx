import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <motion.div
      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      layout
    >
      {/* Product Image */}
      <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 truncate">
          {item.name}
        </h3>
        <p className="text-sm text-gray-600">
          ${item.price.toFixed(2)} c/u
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2">
        <motion.button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 rounded-md hover:bg-gray-200 transition-colors duration-200"
          whileTap={{ scale: 0.95 }}
        >
          <Minus size={14} />
        </motion.button>
        
        <span className="w-8 text-center text-sm font-medium">
          {item.quantity}
        </span>
        
        <motion.button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 rounded-md hover:bg-gray-200 transition-colors duration-200"
          whileTap={{ scale: 0.95 }}
          disabled={item.quantity >= item.stock}
        >
          <Plus size={14} />
        </motion.button>
      </div>

      {/* Total Price */}
      <div className="text-right">
        <p className="font-semibold text-gray-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Remove Button */}
      <motion.button
        onClick={() => removeFromCart(item.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors duration-200"
        whileTap={{ scale: 0.95 }}
      >
        <Trash2 size={16} />
      </motion.button>
    </motion.div>
  );
};

export default CartItem;

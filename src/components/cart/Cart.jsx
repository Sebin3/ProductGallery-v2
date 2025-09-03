import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, CreditCard, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import CheckoutModal from './CheckoutModal';

const Cart = ({ isOpen, onClose }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { items, getCartTotal, clearCart, getCartItemsCount } = useCart();

  const total = getCartTotal();
  const itemsCount = getCartItemsCount();

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCheckoutClose = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <>
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
              onClick={onClose}
            />

            {/* Cart Sidebar */}
            <motion.div
              className="relative ml-auto w-full max-w-md bg-white shadow-2xl flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <ShoppingBag size={24} className="text-primary-600" />
                  <h2 className="text-xl font-bold text-gray-900">
                    Carrito ({itemsCount})
                  </h2>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length > 0 ? (
                  <div className="space-y-4">
                    <AnimatePresence>
                      {items.map((item) => (
                        <CartItem key={item.id} item={item} />
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    className="flex flex-col items-center justify-center h-full text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="text-6xl mb-4">🛍️</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Tu carrito está vacío
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Agrega algunos productos para comenzar a comprar
                    </p>
                    <motion.button
                      onClick={onClose}
                      className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explorar productos
                    </motion.button>
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-gray-200 p-6 space-y-4">
                  {/* Clear Cart Button */}
                  <motion.button
                    onClick={clearCart}
                    className="w-full flex items-center justify-center space-x-2 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Trash2 size={16} />
                    <span>Vaciar carrito</span>
                  </motion.button>

                  {/* Total */}
                  <div className="flex justify-between items-center py-4 border-t border-gray-200">
                    <span className="text-lg font-semibold text-gray-900">
                      Total:
                    </span>
                    <span className="text-2xl font-bold text-primary-600">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <motion.button
                    onClick={handleCheckout}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CreditCard size={20} />
                    <span>Proceder al pago</span>
                  </motion.button>

                  {/* Continue Shopping */}
                  <motion.button
                    onClick={onClose}
                    className="w-full border-2 border-gray-300 text-gray-700 hover:border-gray-400 font-semibold py-3 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continuar comprando
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCheckoutClose}
        onCartClose={onClose}
      />
    </>
  );
};

export default Cart;

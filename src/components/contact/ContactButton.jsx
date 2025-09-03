import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import ContactModal from './ContactModal';

const ContactButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsExpanded(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-20 right-6 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", bounce: 0.6 }}
      >
        <motion.button
          className="relative bg-gradient-to-r from-primary-900  text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => setIsExpanded(true)}
          onHoverEnd={() => setIsExpanded(false)}
          onClick={handleOpenModal}
        >
          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 "
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Icon */}
          <motion.div
            animate={{ rotate: isExpanded ? 15 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <MessageCircle size={24} className="relative z-10" />
          </motion.div>

          {/* Tooltip */}
          <motion.div
            className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
            initial={{ opacity: 0, x: 10, scale: 0.8 }}
            animate={{ 
              opacity: isExpanded ? 1 : 0, 
              x: isExpanded ? 0 : 10,
              scale: isExpanded ? 1 : 0.8
            }}
            transition={{ duration: 0.2 }}
            style={{ pointerEvents: 'none' }}
          >
            ¡Contáctanos!
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-500" />
          </motion.div>

          {/* Notification Badge */}
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring", bounce: 0.6 }}
          >
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ContactButton;

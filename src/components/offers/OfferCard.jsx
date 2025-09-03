import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Flame } from 'lucide-react';

const OfferCard = ({ offer, index }) => {
  return (
    <motion.div
      className={`relative h-80 rounded-3xl overflow-hidden group cursor-pointer bg-gradient-to-br ${offer.backgroundColor}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col justify-between">
        {/* Discount Badge */}
        <motion.div
          className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          <span className="text-white font-bold text-lg">{offer.discount}</span>
        </motion.div>

        {/* Fire Icon */}
        <motion.div
          className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Flame size={24} className="text-white" />
        </motion.div>

        {/* Text Content */}
        <div className="space-y-4">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-white leading-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            {offer.title}
          </motion.h3>
          
          <motion.p
            className="text-white/90 text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            {offer.description}
          </motion.p>

          {/* Action Button */}
          <motion.button
            className="flex items-center space-x-2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full border border-white/30 transition-all duration-300 group/btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Ver Ofertas</span>
            <ArrowRight 
              size={20} 
              className="group-hover/btn:translate-x-1 transition-transform duration-300" 
            />
          </motion.button>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 
        }}
      />
    </motion.div>
  );
};

export default OfferCard;

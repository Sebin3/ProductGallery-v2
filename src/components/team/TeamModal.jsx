import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Award, Star } from 'lucide-react';

const TeamModal = ({ isOpen, onClose }) => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sebastian Perez',
      role: 'Desarrollador Frontend',
      image: '/src/assets/Sebas.jpg',
    },
    {
      id: 2,
      name: 'Piero Aguillar', 
      role: 'Desarrollador Frontend',
      image: '../src/assets/Piero.png', // Cambiarás esto por la imagen real
    },
    {
      id: 3,
      name: 'Gabriel Tuñoque',
      role: 'Desarrollador Frontend',
      image: '/src/assets/Gabriel.jpg', // Cambiarás esto por la imagen real
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Users size={28} />
                <div>
                  <h2 className="text-2xl font-bold">Nuestro Equipo</h2>
                  <p className="text-green-100 mt-1">Conoce a las personas detrás del proyecto</p>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[70vh]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="bg-gray-800 rounded-xl p-6 text-center border border-gray-600 hover:border-green-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Profile Image */}
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback si no se encuentra la imagen
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1zaXplPSIzNiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmaWxsPSIjRjNGNEY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5cud83CjwvdGV4dD4KPC9zdmc+';
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Star size={12} className="text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-green-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <motion.div 
              className="mt-8 text-center p-6 bg-gray-800 rounded-xl border border-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Award className="text-green-400" size={20} />
                <h4 className="text-lg font-bold text-white">¡Gracias por tu trabajo en equipo!</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Este proyecto fue posible gracias al esfuerzo y dedicación de cada miembro del equipo.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TeamModal;

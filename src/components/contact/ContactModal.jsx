import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MapPin, Phone, Mail, Clock, MessageCircle, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ContactModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('¡Mensaje enviado correctamente! Te responderemos pronto.');
      reset();
      onClose();
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: '123 Calle Principal, Ciudad, País',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+1 (555) 123-4567',
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@productgallery.com',
      color: 'text-red-500'
    },
    {
      icon: Clock,
      title: 'Horario de atención',
      content: 'Lun - Vie: 9:00 AM - 6:00 PM',
      color: 'text-purple-500'
    }
  ];

  const frequentQuestions = [
    {
      question: '¿Cuáles son los métodos de pago disponibles?',
      answer: 'Aceptamos tarjetas de crédito (Visa, MasterCard, American Express), PayPal y transferencias bancarias.'
    },
    {
      question: '¿Cuánto tiempo tarda el envío?',
      answer: 'El envío estándar tarda 5-7 días hábiles, mientras que el envío express tarda 2-3 días hábiles.'
    },
    {
      question: '¿Puedo devolver un producto?',
      answer: 'Sí, ofrecemos devoluciones gratuitas dentro de los 30 días posteriores a la compra.'
    },
    {
      question: '¿Hay envío gratis?',
      answer: 'Ofrecemos envío gratuito en pedidos superiores a $50 dentro del territorio nacional.'
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
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
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-800 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MessageCircle size={24} />
                <h2 className="text-2xl font-bold">Contáctanos</h2>
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>
            
            {/* Subtitle */}
            <p className="mt-2 text-white/90">
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <motion.button
              onClick={() => setActiveTab('contact')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                activeTab === 'contact'
                  ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensaje
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('info')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                activeTab === 'info'
                  ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              Información
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('faq')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                activeTab === 'faq'
                  ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              Preguntas Frecuentes
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            {activeTab === 'contact' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          {...register('name', { required: 'El nombre es requerido' })}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Correo electrónico *
                      </label>
                      <div className="relative">
                        <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          {...register('email', { 
                            required: 'El email es requerido',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Email inválido'
                            }
                          })}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="tu@email.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono (opcional)
                    </label>
                    <div className="relative">
                      <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Asunto */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <select
                      {...register('subject', { required: 'Selecciona un asunto' })}
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="general">Consulta general</option>
                      <option value="product">Pregunta sobre producto</option>
                      <option value="order">Estado de pedido</option>
                      <option value="return">Devolución</option>
                      <option value="technical">Soporte técnico</option>
                      <option value="suggestion">Sugerencia</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      {...register('message', { 
                        required: 'El mensaje es requerido',
                        minLength: {
                          value: 10,
                          message: 'El mensaje debe tener al menos 10 caracteres'
                        }
                      })}
                      rows={4}
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            )}

            {activeTab === 'info' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-xl"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <info.icon size={24} className={info.color} />
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    </div>
                    <p className="text-gray-600">{info.content}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'faq' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {frequentQuestions.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-4 rounded-lg"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;

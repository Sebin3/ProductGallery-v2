import React from 'react';
import image from '/src/assets/icon2.png';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  CreditCard,
  Shield,
  Truck
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  const quickLinks = [
    'Política de Privacidad',
    'Términos y Condiciones',
    'Preguntas Frecuentes',
    'Guía de Tallas',
    'Métodos de Pago',
    'Envíos y Devoluciones'
  ];

  const categories = [
    'Electrónicos',
    'Moda',
    'Hogar',
    'Deportes',
    'Libros',
    'Belleza'
  ];

  const benefits = [
    {
      icon: Truck,
      title: 'Envío Gratis',
      description: 'En compras mayores a $50'
    },
    {
      icon: Shield,
      title: 'Compra Segura',
      description: 'Protección de datos garantizada'
    },
    {
      icon: CreditCard,
      title: 'Pago Flexible',
      description: 'Múltiples métodos de pago'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 text-white"
              >
                <div className="bg-gray-600/60 p-3 rounded-full backdrop-blur-sm border border-gray-500/30">
                  <benefit.icon size={24} className="text-gray-200" />
                </div>
                <div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm opacity-90">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={image} alt="ProductGallery" className="w-full h-full object-cover" />
                </div>
                <span className="text-xl font-bold">ProductGallery</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tu destino número uno para productos de calidad. 
                Descubre una amplia gama de artículos cuidadosamente 
                seleccionados para satisfacer todas tus necesidades.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-200 ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold">Categorías</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={category}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {category}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-primary-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    123 Calle Principal, Ciudad, País
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-primary-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-primary-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    contacto@productgallery.com
                  </span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-6">
                <h4 className="font-medium mb-2">Suscríbete a nuestro boletín</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="bg-gray-800 text-white px-3 py-2 rounded-l-lg flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <motion.button
                    className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-400 text-sm flex items-center"
            >
              © {currentYear} ProductGallery. Todos los derechos reservados.
              <span className="mx-2">•</span>
              Hecho con <Heart size={14} className="text-red-500 mx-1" /> por nuestro equipo
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-400 text-sm">Métodos de pago:</span>
              <div className="flex space-x-2">
                {['VISA', 'MC', 'AMEX', 'PayPal'].map((method) => (
                  <div
                    key={method}
                    className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

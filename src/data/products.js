export const products = [
  // Electrónicos
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    category: 'electronics',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop',
    description: 'El último iPhone con tecnología avanzada y cámara profesional.',
    stock: 15,
    rating: 4.9,
    reviews: 1250
  },
  {
    id: 2,
    name: 'MacBook Air M3',
    category: 'electronics',
    price: 1199.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop',
    description: 'Laptop ultra delgada con chip M3 y rendimiento excepcional.',
    stock: 8,
    rating: 4.8,
    reviews: 892
  },
  {
    id: 3,
    name: 'Samsung Galaxy S24',
    category: 'electronics',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
    description: 'Smartphone Android con IA integrada y cámara de 200MP.',
    stock: 22,
    rating: 4.7,
    reviews: 756
  },
  {
    id: 4,
    name: 'AirPods Pro 2',
    category: 'electronics',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&h=500&fit=crop',
    description: 'Auriculares inalámbricos con cancelación de ruido activa.',
    stock: 30,
    rating: 4.6,
    reviews: 2341
  },

  // Moda
  {
    id: 5,
    name: 'Chaqueta de Cuero Premium',
    category: 'fashion',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
    description: 'Chaqueta de cuero genuino con diseño moderno y elegante.',
    stock: 12,
    rating: 4.5,
    reviews: 324
  },
  {
    id: 6,
    name: 'Vestido Elegante',
    category: 'fashion',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop',
    description: 'Vestido de gala perfecto para ocasiones especiales.',
    stock: 18,
    rating: 4.4,
    reviews: 567
  },
  {
    id: 7,
    name: 'Zapatillas Deportivas',
    category: 'fashion',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
    description: 'Zapatillas cómodas para uso diario y deportivo.',
    stock: 45,
    rating: 4.6,
    reviews: 1834
  },
  {
    id: 8,
    name: 'Reloj Inteligente',
    category: 'fashion',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    description: 'Reloj inteligente con monitoreo de salud y GPS.',
    stock: 25,
    rating: 4.3,
    reviews: 678
  },

  // Hogar
  {
    id: 9,
    name: 'Sofá Moderno 3 Plazas',
    category: 'home',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
    description: 'Sofá cómodo y elegante para la sala de estar.',
    stock: 6,
    rating: 4.7,
    reviews: 234
  },
  {
    id: 10,
    name: 'Lámpara de Mesa LED',
    category: 'home',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    description: 'Lámpara LED ajustable con control táctil.',
    stock: 33,
    rating: 4.2,
    reviews: 445
  },
  {
    id: 11,
    name: 'Espejo Decorativo',
    category: 'home',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&h=500&fit=crop',
    description: 'Espejo con marco dorado para decoración de interiores.',
    stock: 20,
    rating: 4.1,
    reviews: 156
  },
  {
    id: 12,
    name: 'Cojines Decorativos Set',
    category: 'home',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
    description: 'Set de 4 cojines decorativos de diferentes texturas.',
    stock: 40,
    rating: 4.4,
    reviews: 789
  },

  // Deportes
  {
    id: 13,
    name: 'Bicicleta de Montaña',
    category: 'sports',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    description: 'Bicicleta resistente para aventuras en montaña.',
    stock: 10,
    rating: 4.6,
    reviews: 423
  },
  {
    id: 14,
    name: 'Pesas Ajustables',
    category: 'sports',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=500&h=500&fit=crop',
    description: 'Set de pesas ajustables para entrenamiento en casa.',
    stock: 15,
    rating: 4.5,
    reviews: 567
  },
  {
    id: 15,
    name: 'Pelota de Yoga',
    category: 'sports',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
    description: 'Pelota antideslizante para ejercicios de yoga y pilates.',
    stock: 50,
    rating: 4.3,
    reviews: 1234
  },

  // Libros
  {
    id: 16,
    name: 'Programación en React',
    category: 'books',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop',
    description: 'Guía completa para aprender React desde cero.',
    stock: 35,
    rating: 4.8,
    reviews: 892
  },
  {
    id: 17,
    name: 'Cocina Mediterránea',
    category: 'books',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop',
    description: 'Recetas tradicionales de la cocina mediterránea.',
    stock: 28,
    rating: 4.6,
    reviews: 345
  },

  // Belleza
  {
    id: 18,
    name: 'Set de Cuidado Facial',
    category: 'beauty',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
    description: 'Kit completo de productos para el cuidado facial.',
    stock: 25,
    rating: 4.7,
    reviews: 678
  },
  {
    id: 19,
    name: 'Perfume Elegance',
    category: 'beauty',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop',
    description: 'Fragancia sofisticada para mujeres modernas.',
    stock: 42,
    rating: 4.4,
    reviews: 456
  },
  {
    id: 20,
    name: 'Paleta de Maquillaje',
    category: 'beauty',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=500&fit=crop',
    description: 'Paleta profesional con 24 sombras de colores vibrantes.',
    stock: 30,
    rating: 4.5,
    reviews: 789
  }
];

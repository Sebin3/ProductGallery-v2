# 🛍️ ProductGallery

Una galería de productos moderna y responsiva construida con React, Vite y Tailwind CSS. Incluye reconocimiento de categorías, carrito de compras, simulación de pago y un diseño premium con animaciones fluidas.

## ✨ Características

### 🎨 Diseño y UX
- **Diseño responsivo** que se adapta a todos los dispositivos
- **Animaciones fluidas** con Framer Motion
- **UI moderna** con gradientes y efectos glassmorphism
- **Navbar y Footer** con diseño profesional
- **Tema personalizable** con variables CSS

### 🛒 Funcionalidades de E-commerce
- **Galería de productos** con vista grid/lista
- **Filtrado por categorías** dinámico
- **Búsqueda en tiempo real** de productos
- **Carrito de compras** persistente (localStorage)
- **Simulación de pago** paso a paso
- **Cálculo automático** de cantidades, impuestos y envío

### 🔍 Gestión de Productos
- **Reconocimiento de categorías** automático
- **Sistema de rating** con estrellas
- **Control de stock** en tiempo real
- **Modal de detalles** para cada producto
- **Ordenamiento múltiple** (precio, nombre, rating, stock)

### 💬 Comunicación
- **Botón flotante de contacto** con animaciones
- **Modal de contacto** con múltiples tabs
- **Formulario de contacto** con validación
- **Preguntas frecuentes** integradas
- **Información de contacto** completa

### 🚀 Rendimiento y Calidad
- **Carga lazy** de imágenes
- **Optimización de estado** con Context API
- **Notificaciones toast** para feedback del usuario
- **Validación de formularios** con React Hook Form
- **Código limpio** y bien estructurado

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca principal
- **Vite** - Build tool y servidor de desarrollo
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones y transiciones
- **React Hook Form** - Gestión de formularios
- **React Hot Toast** - Notificaciones
- **Lucide React** - Iconos modernos
- **Context API** - Gestión de estado global

## 📁 Estructura del Proyecto

```
ProductGallery/
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── layout/          # Layout components (Navbar, Footer)
│   │   ├── gallery/         # Galería de productos
│   │   ├── cart/           # Carrito y checkout
│   │   └── contact/        # Componentes de contacto
│   ├── context/            # Context providers
│   ├── data/              # Datos mock
│   ├── pages/             # Páginas principales
│   └── styles/            # Estilos globales
├── public/                # Archivos estáticos
└── docs/                 # Documentación
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd ProductGallery
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Previsualizar build**
   ```bash
   npm run preview
   ```

## 🎯 Funcionalidades Principales

### Galería de Productos
- Vista responsive con grid adaptativo
- Filtrado por categorías en tiempo real
- Búsqueda instantánea
- Ordenamiento múltiple
- Modal de detalles con zoom

### Carrito de Compras
- Persistencia en localStorage
- Actualización de cantidades
- Validación de stock
- Cálculo automático de totales
- Proceso de checkout paso a paso

### Sistema de Pago
- Formulario multi-paso
- Validación en tiempo real
- Simulación de procesamiento
- Confirmación de pedido
- Integración con múltiples métodos de pago

### Contacto y Soporte
- Botón flotante animado
- Modal con tabs (Contacto, Info, FAQ)
- Formulario con validación
- Información de contacto completa
- Sistema de notificaciones

## 🎨 Personalización

### Colores y Tema
Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Personaliza los colores primarios
  },
  secondary: {
    // Personaliza los colores secundarios
  }
}
```

### Productos y Categorías
Edita los archivos en `/src/data/`:
- `products.js` - Lista de productos
- `categories.js` - Categorías disponibles

### Animaciones
Las animaciones se pueden ajustar en cada componente usando Framer Motion.

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Desktop** (1280px+)

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Previsualizar build
npm run lint         # Linter ESLint
```

## 🌟 Características Destacadas

- ⚡ **Rendimiento optimizado** con lazy loading
- 🎨 **Diseño moderno** con animaciones fluidas
- 📱 **100% responsive** en todos los dispositivos
- 🛒 **E-commerce completo** con carrito y pago
- 🔍 **Búsqueda avanzada** con filtros múltiples
- 💾 **Persistencia de datos** en localStorage
- 🎭 **UX excepcional** con micro-interacciones
- 🚀 **Fácil de personalizar** y extender

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado con ❤️ para demostrar las mejores prácticas en React y desarrollo frontend moderno.

---

¿Te gusta el proyecto? ¡Dale una ⭐ en GitHub!
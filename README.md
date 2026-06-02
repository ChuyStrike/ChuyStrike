# Portafolio Personal - Documentación

## 📋 Estructura del Proyecto

```
portafolio/
├── index.html           # HTML semántico principal
├── css/
|   ├── reset.css    # reset general
│   ├── variables.css    # Variables CSS globales
│   └── main.css       # Estilos con metodología BEM
├── js/
│   └── main.js          # Funcionalidad modular
├── multimedia/
│   ├── videos/      # videos   
│   └── imagenes/          # imagenes
└── pages/               # (Futuras páginas internas)
```

## 🎨 Metodología BEM (Block Element Modifier)

La nomenclatura BEM ayuda a escribir CSS predecible, modular y escalable.

### Estructura: `block__element--modifier`

```css
/* Block: componente independiente */
.header { }

/* Element: parte del bloque, depende del bloque */
.header__logo { }
.header__menu { }

/* Modifier: variación del bloque o elemento */
.button--primary { }
.button--secondary { }
```

### Ejemplo de uso en el proyecto:

```html
<!-- HTML -->
<section class="projects" id="projects">
    <article class="project-card">
        <div class="project-card__image"></div>
        <div class="project-card__content">
            <h3 class="project-card__title">Título</h3>
            <a href="#" class="link-button link-button--primary">Ver</a>
        </div>
    </article>
</section>
```

```css
/* CSS */
.project-card { /* Block */ }
.project-card__image { /* Element */ }
.project-card__title { /* Element */ }
.project-card__links { /* Element */ }
.link-button--primary { /* Modifier */ }
```

## 🛠️ Buenas Prácticas Implementadas

### 1. **HTML Semántico**
- Uso de etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Estructura jerárquica correcta de headings (h1, h2, h3)
- Atributos ARIA para accesibilidad

### 2. **CSS Modular**
- **Variables CSS globales** (`variables.css`) para colores, espaciados, tipografía
- Fácil mantenimiento: cambiar colores globales desde un lugar
- Breakpoints definidos para responsive design (mobile-first)
- Transiciones y animaciones consistentes

### 3. **Mobile-First**
- Estilos base para móviles
- Media queries para pantallas más grandes
- Navegación responsiva con hamburger menu
- Grid y flexbox adaptativos

### 4. **Accesibilidad (A11y)**
- Atributos `aria-label` y `aria-expanded`
- Navegación por teclado funcional
- Focus visible en enlaces y botones
- Soporte para modo de movimiento reducido (`prefers-reduced-motion`)
- Contraste de colores adecuado

### 5. **Performance**
- Código CSS optimizado y sin redundancias
- JavaScript asincrónico y modular
- Uso de IntersectionObserver para animaciones de scroll
- Smooth scroll nativo del navegador

### 6. **JavaScript Modular**
- Patrón IIFE (Immediately Invoked Function Expression)
- Módulos independientes y reutilizables
- Separación de responsabilidades
- Código limpio y comentado

## 📱 Personalización

### Cambiar Colores Principales

Edita [`css/variables.css`](css/variables.css) en la sección `:root`:

```css
:root {
    --color-primary: #2563eb;      /* Color principal (azul) */
    --color-primary-dark: #1e40af; /* Más oscuro */
    --color-primary-light: #3b82f6; /* Más claro */
    /* ... resto de variables */
}
```

### Cambiar Espaciados

```css
:root {
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    /* ... etc */
}
```

### Agregar Nuevas Secciones

1. Crea un bloque BEM en `styles.css`:
```css
.mi-nueva-seccion { }
.mi-nueva-seccion__elemento { }
.mi-nueva-seccion__elemento--modifier { }
```

2. Agrégala al HTML con estructura semántica:
```html
<section class="mi-nueva-seccion" id="mi-seccion">
    <div class="container">
        <!-- contenido -->
    </div>
</section>
```

## 🔧 Módulos JavaScript

### NavigationModule
Gestiona el menú móvil y la navegación responsiva.

### ScrollAnimationModule
Anima elementos cuando entran en viewport usando IntersectionObserver.

### SmoothScrollModule
Habilita scroll suave a secciones internas.

### UtilsModule
Funciones utilitarias y detección de características del navegador.

## 📋 Mejoras Futuras

- [ ] Agregar dark mode toggle
- [ ] Formulario de contacto con validación
- [ ] Lazy loading de imágenes
- [ ] Animaciones más avanzadas
- [ ] Testing unitario
- [ ] Build process (Webpack/Vite)
- [ ] Integración con CMS

## 🎯 Checklist de Personalización

- [ ] Cambiar nombre en `<title>` y `.header__logo`
- [ ] Actualizar bio en sección "Sobre Mí"
- [ ] Cambiar email y redes sociales en contacto
- [ ] Reemplazar descripciones de proyectos
- [ ] Ajustar colores según tu marca
- [ ] Agregar imágenes reales de proyectos
- [ ] Optimizar para SEO (meta tags)

## 🚀 Próximos Pasos

1. Personaliza los contenidos
2. Agrega imágenes de tus proyectos
3. Actualiza enlaces a tus redes sociales
4. Prueba en diferentes dispositivos
5. Valida accesibilidad con herramientas
6. Haz deploy en GitHub Pages o similar

---

**¿Preguntas sobre la estructura o necesitas más ayuda?**

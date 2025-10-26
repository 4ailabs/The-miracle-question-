# La Pregunta del Milagro 🧠

Una aplicación web interactiva para facilitar la implementación de "La Pregunta del Milagro" de la Terapia Breve Centrada en Soluciones (TFCS) desarrollada por Steve de Shazer e Insoo Kim Berg.

<div align="center">

![La Pregunta del Milagro](https://img.shields.io/badge/Therapy-Solution%20Focused-blue)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)
![React](https://img.shields.io/badge/Framework-React-61dafb)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178c6)

</div>

## ✨ Características

### Para Terapeutas
- **Guía paso a paso** con scripts y preguntas clave
- **Tips terapéuticos** en cada fase
- **Recursos clínicos** adicionales
- **Notas de sesión** integradas
- **Resumen exportable** para registros clínicos

### Para Pacientes/Usuarios
- **Reflexión guiada** personal
- **Visualización del futuro** sin el problema
- **Identificación de fortalezas** y recursos existentes
- **Definición de pasos concretos** y alcanzables
- **Resumen personal** para guardar

## 🚀 Características Técnicas

- ⚡ **Ultra rápido** con Vite
- 📱 **Totalmente responsive** (desktop, tablet, móvil)
- 🎨 **Diseño elegante** con paleta monocromática
- 💾 **Persistencia local** automática
- ♿ **Accesible** y fácil de usar
- 🌐 **Listo para producción**

## 🛠️ Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/4ailabs/The-miracle-question-.git
cd The-miracle-question-

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Build para Producción

```bash
npm run build
npm run preview
```

## 📦 Despliegue

### Vercel (Recomendado)

1. Haz push de tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Vercel detectará automáticamente la configuración de Vite
5. ¡Despliega!

El archivo `vercel.json` ya está configurado para ti.

### Otros Proveedores

Esta aplicación es compatible con:
- Netlify
- GitHub Pages (con GitHub Actions)
- Cualquier servidor estático

## 🏗️ Estructura del Proyecto

```
├── components/
│   ├── common/          # Componentes reutilizables
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── patient/         # Componentes para usuarios
│   └── [Step].tsx       # Componentes de fases
├── public/              # Archivos estáticos
├── App.tsx              # Componente principal
├── types.ts             # Definiciones TypeScript
└── vite.config.ts       # Configuración de Vite
```

## 📝 Fases de la Intervención

1. **Preparación**: Script de introducción
2. **Descubrimiento Personal**: El día milagroso
3. **Descubrimiento Relacional**: Perspectiva de los demás
4. **Excepciones**: Cuándo ya ocurrió (en parte)
5. **Escala**: Medición de progreso
6. **Resumen**: Síntesis de la sesión

## 🎨 Tecnologías Utilizadas

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Framework CSS utility-first
- **LocalStorage API** - Persistencia de datos

## 📄 Licencia

Este proyecto está basado en técnicas de la Terapia Breve Centrada en Soluciones desarrolladas por Steve de Shazer e Insoo Kim Berg.

## 🙏 Créditos

- **Terapia Breve Centrada en Soluciones**: Steve de Shazer & Insoo Kim Berg
- **Desarrollado con**: React + Vite + TypeScript

---

<div align="center">
  
**Esta es una herramienta de apoyo y no reemplaza el juicio clínico profesional.**

[Desplegar en Vercel](#) • [Reportar un bug](#) • [Solicitar funcionalidad](#)

</div>

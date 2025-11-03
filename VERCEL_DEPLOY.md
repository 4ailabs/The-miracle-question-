# Guía de Despliegue en Vercel

Esta guía te ayudará a desplegar la aplicación en Vercel con Supabase configurado.

## Pasos para Desplegar

### 1. Conectar el Repositorio

1. Ve a [Vercel](https://vercel.com) e inicia sesión
2. Haz clic en **Add New Project**
3. Importa tu repositorio de GitHub (`The-miracle-question-`)
4. Vercel detectará automáticamente que es un proyecto Vite

### 2. Configurar Variables de Entorno

**CRÍTICO**: Antes de desplegar, debes configurar las variables de entorno de Supabase:

1. En el paso de configuración del proyecto, o después en **Settings** > **Environment Variables**
2. Agrega estas dos variables:

#### Variable 1:
- **Name**: `VITE_SUPABASE_URL`
- **Value**: Tu Project URL de Supabase
  - Ejemplo: `https://abcdefghijklmnop.supabase.co`
  - Encuéntrala en Supabase: Settings > API > Project URL
- **Environment**: Marca todas (Production, Preview, Development)

#### Variable 2:
- **Name**: `VITE_SUPABASE_ANON_KEY`
- **Value**: Tu anon public key de Supabase
  - Encuéntrala en Supabase: Settings > API > anon public
- **Environment**: Marca todas (Production, Preview, Development)

3. Haz clic en **Save** para cada variable

### 3. Configurar Build Settings (si es necesario)

Vercel debería detectar automáticamente:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

Si no lo detecta automáticamente, configúralo manualmente.

### 4. Desplegar

1. Haz clic en **Deploy**
2. Espera a que termine el build
3. Tu aplicación estará disponible en una URL como: `https://tu-proyecto.vercel.app`

### 5. Verificar que Funciona

1. Abre tu aplicación desplegada
2. Completa una sesión
3. Intenta guardar una sesión en Supabase
4. Verifica que puedes ver las sesiones guardadas

## Checklist Pre-Despliegue

- [ ] Proyecto de Supabase creado
- [ ] Tabla `sessions` creada (ejecutaste `supabase-schema.sql`)
- [ ] Variables de entorno configuradas en Vercel
- [ ] Repositorio conectado a Vercel
- [ ] Build exitoso en Vercel

## Solución de Problemas

### Error: "Supabase credentials not found" en producción

- Verifica que las variables de entorno están configuradas en Vercel
- Asegúrate de que los nombres son exactos: `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`
- Verifica que están marcadas para el ambiente correcto (Production)
- Redespliega la aplicación después de agregar las variables

### La aplicación funciona localmente pero no en Vercel

- Verifica las variables de entorno en Vercel
- Revisa los logs de build en Vercel para ver errores
- Asegúrate de que la tabla `sessions` existe en Supabase
- Verifica las políticas de RLS en Supabase

### No puedo guardar sesiones en producción

- Abre la consola del navegador (F12) en la app desplegada
- Verifica errores de red o de Supabase
- Confirma que las credenciales en Vercel son correctas
- Verifica que las políticas de RLS en Supabase permiten operaciones públicas

## Notas Importantes

- **Seguridad**: Las variables `VITE_*` son expuestas al cliente. Esto es normal y seguro para la `anon key` pública de Supabase.
- **Nunca uses** la `service_role key` en variables `VITE_*` ya que estaría expuesta públicamente.
- Las variables de entorno se aplican después de un nuevo despliegue. Si agregas variables nuevas, debes redesplegar.


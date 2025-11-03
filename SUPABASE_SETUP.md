# Configuración de Supabase

Esta guía te ayudará a configurar Supabase para guardar y recuperar sesiones.

## Pasos de Configuración

### 1. Crear un proyecto en Supabase

1. Ve a [https://supabase.com](https://supabase.com) y crea una cuenta
2. Crea un nuevo proyecto
3. Espera a que se complete la configuración (puede tomar unos minutos)

### 2. Crear la tabla en la base de datos

1. Ve a tu proyecto en Supabase
2. Navega a **SQL Editor** en el menú lateral
3. Abre el archivo `supabase-schema.sql` de este proyecto
4. Copia y pega todo el contenido en el SQL Editor
5. Haz clic en **Run** para ejecutar el SQL

Esto creará la tabla `sessions` con todas las configuraciones necesarias.

### 3. Obtener las credenciales de API

1. En tu proyecto de Supabase, ve a **Settings** > **API**
2. Encontrarás:
   - **Project URL**: Esta es tu `VITE_SUPABASE_URL`
   - **anon/public key**: Esta es tu `VITE_SUPABASE_ANON_KEY`

### 4. Configurar las variables de entorno

1. Crea un archivo `.env` en la raíz del proyecto (junto a `package.json`)
2. Agrega las siguientes variables:

```env
VITE_SUPABASE_URL=https://tu-proyecto-ref.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

**Nota**: Reemplaza los valores con tus credenciales reales de Supabase.

### 5. Reiniciar el servidor de desarrollo

Si el servidor de desarrollo está corriendo, deténlo y vuelve a iniciarlo:

```bash
npm run dev
```

### 6. Configurar variables de entorno en Vercel (para producción)

Cuando despliegues en Vercel, necesitas configurar las mismas variables de entorno:

1. Ve a tu proyecto en [Vercel](https://vercel.com)
2. Navega a **Settings** > **Environment Variables**
3. Agrega las siguientes variables:
   - **Name**: `VITE_SUPABASE_URL`
   - **Value**: Tu Project URL de Supabase (ej: `https://xxxxx.supabase.co`)
   - **Environment**: Selecciona `Production`, `Preview`, y `Development`
   
   - **Name**: `VITE_SUPABASE_ANON_KEY`
   - **Value**: Tu anon public key de Supabase
   - **Environment**: Selecciona `Production`, `Preview`, y `Development`

4. Haz clic en **Save** para cada variable
5. Vuelve a desplegar tu aplicación (Vercel lo hará automáticamente o puedes hacerlo manualmente desde el dashboard)

**Importante**: Las variables que empiezan con `VITE_` son expuestas al cliente (navegador), por lo que es seguro usar la `anon key` pública. Nunca uses la `service_role key` en el cliente.

## Funcionalidades

Una vez configurado, podrás:

- **Guardar sesiones**: En la pantalla de resumen (paso 6), podrás guardar la sesión con un título personalizado
- **Ver sesiones guardadas**: Haz clic en el botón "📚 Sesiones Guardadas" en cualquier momento
- **Cargar sesiones**: Haz clic en una sesión guardada para retomarla desde donde la dejaste
- **Eliminar sesiones**: Haz clic en el icono de basura junto a una sesión para eliminarla

## Seguridad

La configuración por defecto permite acceso público a las sesiones. Si quieres restringir el acceso:

1. Ve a **Authentication** > **Policies** en Supabase
2. Modifica las políticas de RLS según tus necesidades
3. Puedes requerir autenticación de usuarios si lo deseas

## Solución de Problemas

### Error: "Supabase credentials not found"
- Verifica que el archivo `.env` existe en la raíz del proyecto
- Verifica que las variables comienzan con `VITE_`
- Reinicia el servidor de desarrollo después de crear/modificar el `.env`

### Error: "relation 'sessions' does not exist"
- Asegúrate de haber ejecutado el SQL del archivo `supabase-schema.sql`
- Verifica en el SQL Editor que la tabla se creó correctamente

### No puedo guardar sesiones
- Verifica que las credenciales de Supabase son correctas
- Abre la consola del navegador (F12) para ver errores detallados
- Verifica que las políticas de RLS permiten operaciones en la tabla



# Portfolio Ian Rodríguez

## 🚀 Desarrollo Local (VS Code)

### Requisitos
- Node.js 20+
- PostgreSQL (local o remoto)
- VS Code

### Instalación

1. **Clonar el repositorio**
```bash
git clone <tu-repo-url>
cd <nombre-proyecto>
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```

Edita `.env` y configura tu `DATABASE_URL`:
```
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5000`

### Comandos disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run start` - Inicia el servidor de producción
- `npm run check` - Verifica tipos de TypeScript
- `npm run db:push` - Sincroniza el esquema de la base de datos

## 📦 Despliegue en Vercel

### Opción 1: Desde la interfaz de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub/GitLab/Bitbucket
3. Configura las siguientes variables de entorno:
   - `DATABASE_URL`: Tu URL de PostgreSQL
   - `NODE_ENV`: `production`
4. Despliega

### Opción 2: Desde la CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Desplegar
vercel --prod
```

### Variables de entorno en Vercel

Asegúrate de configurar en Vercel:
- `DATABASE_URL` - URL de tu base de datos PostgreSQL
- `NODE_ENV` - `production`

### Base de datos recomendada para Vercel

- [Neon](https://neon.tech) - PostgreSQL serverless (gratuito)
- [Supabase](https://supabase.com) - PostgreSQL con extras
- [Railway](https://railway.app) - PostgreSQL simple

## 🏗️ Estructura del Proyecto

```
├── client/          # Frontend React + Vite
├── server/          # Backend Express
├── api/             # Serverless functions para Vercel
├── dist/            # Build de producción
└── shared/          # Código compartido
```

## 📝 Notas

- El proyecto usa Vite para el frontend y Express para el backend
- En Vercel, las rutas API se manejan como serverless functions
- La base de datos debe ser PostgreSQL compatible

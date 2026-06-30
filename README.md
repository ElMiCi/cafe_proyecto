# Arcanum Coffee

Landing page para cadena de cafeterías de especialidad. Next.js 15 + Supabase.

## Stack
- **Frontend/Backend**: Next.js 15 (App Router)
- **Base de datos**: Supabase (PostgreSQL)
- **Deploy**: Vercel

## Setup local

### 1. Supabase
1. Ir a [supabase.com](https://supabase.com) → New project
2. Copiar **Project URL** y **anon public key** desde Settings → API
3. Abrir el SQL Editor y ejecutar `supabase-schema.sql`

### 2. Variables de entorno
Crear `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
ADMIN_PASSWORD=tu_password_aqui
```

### 3. Correr
```bash
npm install
npm run dev
```

## Deploy en Vercel
1. Subir a GitHub
2. Importar en Vercel
3. Agregar las 3 variables de entorno
4. Deploy

## Rutas
| Ruta | Descripción |
|------|-------------|
| `/` | Landing page |
| `/admin` | Dashboard protegido por contraseña |
| `POST /api/newsletter` | Guarda email |
| `POST /api/contact` | Guarda nombre/email/mensaje |
| `GET /api/admin` | Retorna registros (requiere header `x-admin-password`) |

## Decisiones técnicas
- **Supabase**: PostgreSQL administrado, SDK TypeScript, RLS habilitado
- **RLS**: Las tablas solo permiten INSERT público; las lecturas van server-side
- **Admin password**: Variable de entorno privada, nunca expuesta al cliente
- **Next.js App Router**: API Routes + páginas en un solo proyecto

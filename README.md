# Incredible Pizza — Food and Fun

Sitio web de Incredible Pizza Monterrey (Next.js App Router).

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm start
```

## Variables de entorno

| Variable | Descripción | Ejemplo |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canónica (sitemap, robots, metadata) | `https://incrediblepizza.mx` |

Copia `.env.example` a `.env.local` en local. En Vercel configúrala en **Project Settings → Environment Variables** (Production / Preview).

## Deploy en Vercel

1. Conecta el repo `init-pezruido-bruma/incredible-pizza` en [vercel.com/new](https://vercel.com/new).
2. Framework: **Next.js** (auto-detectado).
3. Build command: `npm run build` · Output: default de Next.
4. Añade `NEXT_PUBLIC_SITE_URL` con el dominio de producción (o el `*.vercel.app` temporal).
5. Deploy. Las rutas son estáticas (`○`); no hace falta servidor Node custom.

Dominio propio: **Project → Settings → Domains**.

## Rutas

- `/` Home  
- `/fiestas` `/juegos` `/eventos` `/menu` `/promociones`  
- `/quienes-somos` `/contacto` `/aviso-de-privacidad`  
- `/tienda` redirige a la tienda en línea externa  

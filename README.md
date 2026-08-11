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

| Variable | Descripción | Ahora | Después |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canónica (sitemap, robots, metadata) | `https://incrediblepizza.init.com.mx` | `https://incrediblepizza.mx` |

Copia `.env.example` a `.env.local` en local. En Vercel configúrala en **Project Settings → Environment Variables** (Production / Preview).

Cuando pases el dominio a `incrediblepizza.mx`, solo cambia esa variable y vuelve a desplegar (o deja que el fallback se actualice en código).

## Deploy en Vercel

1. Conecta el repo `init-pezruido-bruma/incredible-pizza` en [vercel.com/new](https://vercel.com/new).
2. Framework: **Next.js** (auto-detectado).
3. Build command: `npm run build` · Output: default de Next.
4. Añade `NEXT_PUBLIC_SITE_URL=https://incrediblepizza.init.com.mx`.
5. En **Domains**, agrega `incrediblepizza.init.com.mx` (y más adelante `incrediblepizza.mx`).
6. Deploy.
## Rutas

- `/` Home  
- `/fiestas` `/juegos` `/eventos` `/menu` `/promociones`  
- `/quienes-somos` `/contacto` `/aviso-de-privacidad`  
- `/tienda` redirige a la tienda en línea externa  

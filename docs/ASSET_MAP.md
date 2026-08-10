# Mapa de assets → páginas

Export Figma en `assets/` y `svg/` = **548 capas**. La mayoría son texto/UI (no usar como imagen). Solo usamos fotos, logos y mascotas reales.

## Regla
| Tipo | Acción |
|---|---|
| Logos `IFF_*`, `Since 2007` | SVG en UI |
| Fotos reales / cutouts / mascotas | `next/image` desde `public/images/` |
| Capas con copy (“GO KARTS”, precios, párrafos) | HTML + CSS, no `<img>` |
| `Ellipse` 20×20, `Path`/`Rectangle` de color | Ignorar (recrear en CSS) |

## Brand (`public/images/brand/`)
| Archivo | Uso |
|---|---|
| `logo-red.svg` / `logo-blue.svg` | Nav (centrado), footer |
| `wordmark.svg` / `wordmark-horiz.svg` | Variantes header |
| `since-2007.svg` | Footer |
| `riley-raccoon.svg/.jpg` | Fiestas paquetes / CTAs |

## Home
| Archivo | Sección |
|---|---|
| `home/hero-juegos.jpg` | Hero “Juegos Increíbles” |
| `home/fiesta-banner.jpg` | Fiesta Increíble |
| `home/card-buffet.jpg` | Card Buffet |
| `home/card-juegos.jpg` | Card Juegos |
| `home/card-togo.jpg` | Card To-Go |
| `home/rapido-furioso.jpg` | Rápido y Furioso |
| `home/gallery-strip.jpg` | Galería |
| `home/gokart-cutout.jpg` | Detalle / cutout |

## Fiestas
| Archivo | Sección |
|---|---|
| `fiestas/hero-party.jpg` | Hero |
| `fiestas/party-table.jpg` | Add-ons / mesa |
| `fiestas/hosting-circle.jpg` | Círculo hosting |
| `fiestas/reason-*.jpg` | 4 razones |
| `fiestas/mascot-riley.jpg` | Paquete Riley |
| `fiestas/party-room.jpg` | Galería |

## Juegos
| Archivo | Sección |
|---|---|
| `juegos/hero-laser.jpg` | Hero |
| `juegos/gokarts.jpg` | Atracción Go Karts |
| `juegos/laser-tag.jpg` | Laser Tag |
| `juegos/racing-sim.jpg` | Simulador |
| `juegos/trampolines.jpg` | Trampolines |
| `juegos/tiny-town.jpg` | Tiny Town |

## Eventos
| Archivo | Sección |
|---|---|
| `eventos/holiday.jpg` | Hero / galería |
| `eventos/promo-*.jpg` | Carrusel promos |
| `eventos/live-show.jpg` | Galería |
| `eventos/gallery-party.jpg` | Galería |
| `eventos/form-bg-food.jpg` | Fondo form cotización |

## Menú
| Archivo | Sección |
|---|---|
| `menu/pizza-pepperoni.jpg` | Pizzas |
| `menu/nuggets.jpg` / `wings.jpg` | De todo un poco |
| `menu/coca-cola.jpg` | Refrescos |
| `menu/appetizers.jpg` / `spread.jpg` / `buffet.jpg` | Apoyo visual |

## Quiénes somos
| Archivo | Sección |
|---|---|
| `about/monterrey-hero.jpg` | Hero / Monterrey |
| `about/buffet-interior.jpg` | Misión / interior |
| `about/familias.jpg` | Experiencias |

Raw originales siguen en `assets/` y `svg/` por si hace falta más.

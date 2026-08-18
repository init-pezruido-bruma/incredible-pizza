# Checklist pendientes — Incredible Pizza

Qué falta por parte del cliente / marketing / backend para cerrar la revisión de Natalia (17 ago 2026).  
Lo de copy/estructura/front que no dependía de assets ni backend **ya está aplicado** en el código.

---

## 1. Pegar / confirmar textos (bloquean QUI)

| ID | Qué necesitamos de ustedes |
|---|---|
| **QUI-01** | ✅ Texto nuevo del hero aplicado. |
| **QUI-03** | ✅ Bloque institucional con Incredible Food & Fun aplicado. |

Sin esos párrafos no podemos sustituir el copy actual (sigue el texto viejo a propósito).

---

## 2. Links definitivos

| ID | Qué necesitamos |
|---|---|
| **MEN-03** | URLs **directas de tienda** en Uber Eats, Rappi y DiDi Food (hoy hay búsquedas temporales en `src/lib/site.ts` → `delivery`). |
| **HOM-01 / QUI-02** | Confirmar que `storeUrl` (`https://tiendaenlinea.incrediblepizza.mx/app`) es la URL final de “Compra aquí”. |
| **GEN-03** | Redes: ya están las URLs que nos pasaron. Si cambian, avisar. |

---

## 3. Material gráfico / fotos

| ID | Entregar |
|---|---|
| **MEN-01** | Foto distinta y real de: Pizza Pepperoni, Pizza Hawaiana, Spaghetti, Boneless (sin fondo blanco recortado). |
| **MEN-06** | Selección definitiva de fotos boneless / alitas. |
| **GEN-07** | Cualquier foto de producto nueva: apetitosa, sin recorte de estudio en blanco. |
| **JUE-03** | Foto de referencia de los cranes (máquinas de garra) para reducir “Juegos Increíbles” a 1 imagen + copy corto. |
| **EVE-07 / PRO** | Artes nuevas de promociones del mes (reemplazan el carrusel actual). |
| **QUI-07** | Fotos de los 4 comedores: **DINNER**, **STARLITE**, **GYMNASIUM**, **THE FAMILY ROOM**. |
| **FIE-12** | Fotos reales de charolas / extras de fiesta. |
| **FIE-05 / FIE-11** | Decisión: ¿Fiesta Express se sustituye por otro paquete o quedan solo 3 (Riley / Rosie / Tiger)? |

---

## 4. Backend / CMS (cuando toque)

| ID | Qué necesitamos |
|---|---|
| **EVE-08** | CMS o panel interno para que marketing edite promociones sin pasar por la agencia. |
| **EVE-09** | Envío del formulario de cotización a: `f.castillo@hungrypartners.com`, `natalia@hungrypartners.com`, `myafdelaf@incrediblepizza.mx` (hoy el form es front-only). |
| **Legal** | Texto oficial de `/terminos` y `/aviso-de-privacidad` (hoy son placeholders). |
| **Facturación / Empleos** | Proceso real: `/facturacion` ya tiene placeholder de requisitos CFDI; confirmar correo oficial, plazos y texto legal. Empleos sigue en `#empleos` / mailto. |

---

## 5. Ya hecho en front (no hace falta material)

- Precios quitados del menú To Go; catálogo Pepperoni / Hawaiana / Spaghetti / Boneless; 3 CTAs delivery; sin “Ingrediente extra”.
- Fiestas: sin Express; subtítulo cumpleañero gratis; features Riley/Rosie/Tiger (400 créditos); Cotizar → WhatsApp; leyenda legal.
- Eventos: “2,000 personas”; sin Posadas; precios en tarjetas; correo opcional en form; Cotizar ancla; galería → Instagram.
- Home: “Compra aquí” → tienda; galería eliminada.
- Quiénes: “Compra aquí” → tienda (textos QUI-01/03 pendientes).
- Juegos: atracciones rectangulares; Tiny Town con menos velo + edad 0–3 más visible; Compra aquí → tienda.
- Contacto: compactado; mapa con dirección Brisas La Punta 64790; sin “¿Cómo te ayudamos?”; bloque Empleos.
- Footer: dirección completa + link Maps; Términos / Privacidad / Empleos / Facturación separados.
- Promociones: página simplificada (galería + CTA).

---

## Cómo seguimos (orden sugerido)

1. Pegar textos **QUI-01** y **QUI-03**.
2. Pasar URLs finales de **Uber / Rappi / DiDi**.
3. Subir fotos de menú (MEN-01/06) — es lo más visible en conversión.
4. Decidir Express y armar extras de fiesta con fotos.
5. Cuando quieran backend: formulario EVE-09 + CMS de promos EVE-08.

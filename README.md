# Casa Evento — Landing Page

Sitio web de **Casa Evento**, tienda online de detalles personalizados para eventos ubicada en Barquisimeto, Venezuela.

## Estructura del proyecto

```
casa-evento/
├── index.html          ← Página principal (landing page)
├── css/
│   └── style.css       ← Estilos
├── js/
│   └── main.js         ← JavaScript (menú, animaciones, scroll)
├── images/             ← Carpeta para las imágenes (ver instrucciones abajo)
└── README.md
```

## Instrucciones para publicar en GitHub Pages

### 1. Copiar las imágenes

Coloca los siguientes archivos dentro de la carpeta `images/`:

| Archivo esperado | Descripción |
|---|---|
| `logo-casa-evento.webp` | Logo principal |
| `impresiones-fotograficas-alta-calidad-recuerdos-venezuela.webp` | Imagen hero + producto 1 |
| `decoracion-eventos-fiestas-cartulina-casa-evento.webp` | Producto 2 |
| `toppers-torta-cartulina-personalizados-casa-evento-venezuela.webp` | Producto 3 |
| `detalles-personalizados-sublimacion-regalos-venezuela.webp` | Producto 4 + sección "Nosotros" |

> Opcionalmente, añade una imagen `og-cover.jpg` para el preview en redes sociales (puede ser cualquiera de las anteriores convertida a JPG).

### 2. Crear el repositorio

```bash
git init
git add .
git commit -m "🎉 Landing page Casa Evento"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/casaeventovzla.git
git push -u origin main
```

### 3. Activar GitHub Pages

1. Ve a **Settings → Pages** en tu repositorio.
2. En **Source**, selecciona `Deploy from a branch`.
3. Elige la rama `main` y la carpeta `/ (root)`.
4. Guarda. En unos minutos el sitio estará en `https://TU_USUARIO.github.io/casaeventovzla/`.

### 4. Actualizar URL canónica (opcional pero recomendado para SEO)

Reemplaza `https://casaeventovzla.github.io/` en el `<head>` de `index.html` con tu URL real.

---

## Datos de contacto configurados

- **WhatsApp / teléfono:** +58 412-0594044
- **Instagram:** @casaeventovzla
- **Catálogo:** enlace de catálogo de WhatsApp Business (`wa.me/c/584120594044`)
- **Cobertura:** todo Venezuela

## Tecnologías

- HTML5 semántico con Schema.org (SEO estructurado)
- CSS custom properties, Grid y Flexbox — sin frameworks
- JavaScript vanilla (sin dependencias)
- Google Fonts: Playfair Display + DM Sans
- Compatible con lectores de pantalla (ARIA)
- Responsive: mobile-first, menú hamburguesa

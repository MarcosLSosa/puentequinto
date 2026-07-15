# Puente Quinto - Landing de banda

Este repositorio contiene la landing page de **Puente Quinto**, una banda de **Villa Mercedes, San Luis**.

La página está diseñada como una experiencia moderna y oscura, con foco en:

- sección de bienvenida con identidad visual
- navegación fija con logo y menús de anclaje
- música destacada con reproductor de Spotify
- video principal de la banda
- contacto directo para contrataciones via WhatsApp

## Qué incluye

- `app/page.tsx` — estructura principal de la página
- `components/Navbar.tsx` — menú fijo con logo e links internos
- `components/Hero.tsx` — sección de portada con mensaje de la banda
- `components/SpotifySection.tsx` — embed de Spotify y pistas recomendadas
- `components/VideosSection.tsx` — video destacado
- `components/ContactSection.tsx` — datos de contratación y llamada a WhatsApp
- `app/globals.css` — estilo global y tema oscuro

## Cómo usar

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

3. Abrir el sitio en el navegador:

```text
http://localhost:3000
```

## Diseño y contenido

El sitio funciona como una landing de presentación para la banda y busca transmitir:

- energía soul/funk
- clima nocturno y emocional
- fácil acceso a música y contacto
- imagen de banda local de Villa Mercedes

## Personalización

Puedes editar cualquier texto, enlaces o secciones desde los componentes de `components/`.

- Cambiá el logo en `public/images/logo.jpg`
- Modificá el embed de Spotify en `components/SpotifySection.tsx`
- Cambiá el video en `components/VideosSection.tsx`
- Actualizá el contacto en `components/ContactSection.tsx`

## Nota

El proyecto está construido con **Next.js 16** y **Tailwind CSS 4**.

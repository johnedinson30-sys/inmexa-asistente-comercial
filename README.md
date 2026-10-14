# Inmexa

Aplicación comercial de Inmexa con prueba de 5 días, chat web, inventario y prospectos guardados en la nube.

## Probarlo

La aplicación pública está en https://inmexa-asistente-comercial.rea-de-traba-1066.chatgpt.site/.

`index.html` y `app.js` de esta carpeta redirigen a esa aplicación para conservar el enlace anterior de Vercel. El código del servidor y la interfaz actual están en `inmexa-app/`, que tiene su propio repositorio de Sites y su propia `.openai/hosting.json`. No empaquetar esta raíz como el servidor del producto.

Lee `inmexa-app/OPERACION.md` para el recorrido del cliente, cobros y límites reales. `ventas.html` permanece como herramienta local anterior para gestionar ventas del producto.

En producción, la carpeta puede desplegarse como sitio estático en Vercel, Netlify o GitHub Pages. El archivo `vercel.json` deja preparada una publicación básica.

Para verlo en Chrome mediante un servidor local:

```powershell
python -m http.server 8000
```

Después visita `http://127.0.0.1:8000/index.html`.

Páginas disponibles:

- `/index.html`: entrada a la aplicación publicada.
- `/ventas.html`: panel interno para gestionar prospectos comerciales.

# Publicar Inmexa

## Estado actual

Inmexa es un MVP estático. La demo y el panel comercial funcionan en el navegador y guardan datos en `localStorage`. Esto permite validar la idea, pero no reemplaza una base de datos para clientes reales.

## Publicación gratuita de la demo

1. Crear una cuenta en Vercel o Netlify.
2. Subir esta carpeta o conectarla a un repositorio Git.
3. Elegir proyecto estático; no hace falta comando de compilación.
4. Publicar.
5. Verificar estas rutas:
   - `/index.html`
   - `/ventas.html`
6. Compartir el enlace público solo como demo.

## Antes del primer cliente de pago

- Cambiar `localStorage` por una base de datos.
- Crear autenticación y una organización por inmobiliaria.
- Separar propiedades y prospectos por cuenta.
- Añadir copias de seguridad y recuperación de contraseña.
- Definir política de privacidad y términos del servicio.
- Configurar dominio propio y correo de soporte.
- Integrar WhatsApp mediante un proveedor oficial.
- Probar permisos y acceso con una inmobiliaria piloto.

## Checklist de aceptación del piloto

- [ ] La inmobiliaria puede entrar con su cuenta.
- [ ] Puede cargar sus propiedades.
- [ ] Puede ver y editar sus prospectos.
- [ ] Puede identificar prospectos calientes.
- [ ] Puede copiar o enviar el mensaje de seguimiento.
- [ ] Los datos de una inmobiliaria no aparecen en otra.
- [ ] Existe una forma de soporte y contacto.

## Variables que necesitará el backend futuro

```text
DATABASE_URL=
AUTH_SECRET=
WHATSAPP_PROVIDER_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
APP_URL=
```

No se deben guardar claves reales dentro de los archivos del proyecto.

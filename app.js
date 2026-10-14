// Enlace estable para las publicaciones: una sola aplicación funcional.
const destination=new URL('https://inmexa-asistente-comercial.rea-de-traba-1066.chatgpt.site/');
destination.search=window.location.search;
if(window.location.hash==='#contacto'||window.location.hash==='#captacion')destination.hash='#prueba';
window.location.replace(destination.href);

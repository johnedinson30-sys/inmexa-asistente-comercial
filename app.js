// El formulario lleva directamente al demo; no usamos Messenger en este flujo.
const leadsKey='inmexa-prospects';
const classify=lead=>{if(!lead.name||!lead.phone||!lead.city)return{priority:'Pendiente de información',reason:'Faltan datos básicos'};if(lead.urgency==='Urgente'||(lead.budget&&lead.operation))return{priority:'Alta prioridad',reason:'Urgencia o presupuesto informado'};if(lead.operation||lead.property)return{priority:'Media prioridad',reason:'Interés comercial identificado'};return{priority:'Baja prioridad',reason:'Requiere más información'}};
document.querySelector('#prospect-form')?.addEventListener('submit',e=>{e.preventDefault();const g=id=>document.querySelector(id)?.value.trim()||'';const lead={id:crypto.randomUUID?.()||String(Date.now()),type:g('#prospect-type'),name:g('#prospect-name'),phone:g('#prospect-phone'),email:g('#prospect-email'),city:g('#prospect-city'),operation:g('#prospect-operation'),property:g('#prospect-property'),budget:g('#prospect-budget'),urgency:g('#prospect-urgency'),notes:g('#prospect-notes'),status:'Nuevos',createdAt:new Date().toISOString()};Object.assign(lead,classify(lead));const leads=JSON.parse(localStorage.getItem(leadsKey)||'[]');leads.push(lead);localStorage.setItem(leadsKey,JSON.stringify(leads));const msg=document.querySelector('#prospect-message');msg.textContent=`Solicitud recibida. Prioridad inicial: ${lead.priority}. Un asesor revisará tu información.`;msg.hidden=false;e.target.reset()});
document.querySelector('#contact-form')?.addEventListener('submit',e=>{e.preventDefault();const fields=e.target.querySelectorAll('input');const name=fields[0]?.value||'';const agency=fields[1]?.value||'';const msg=document.querySelector('#contact-message');msg.hidden=false;msg.textContent=`Gracias, ${name}. Abriendo el demo de Inmexa para ${agency}…`;e.target.hidden=true;window.location.href='https://inmexa-asistente-comercial-v2-my4cdym00-johnedinson30-5922.vercel.app/'});document.querySelector('#year').textContent=new Date().getFullYear();
const demoUrl='https://inmexa-asistente-comercial-v2-my4cdym00-johnedinson30-5922.vercel.app/';const previewButton=document.querySelector('#vista-previa a.button');if(previewButton){previewButton.href=demoUrl;previewButton.target='_blank';previewButton.rel='noopener';previewButton.textContent='Probar demo gratis'}
if(!document.querySelector('#demo-interactivo')){const anchor=document.querySelector('#como-funciona');if(anchor){const section=document.createElement('section');section.id='demo-interactivo';section.className='section preview-section';section.innerHTML='<p class="eyebrow">VISTA PREVIA DEL DEMO</p><h2>Así funciona Inmexa por dentro</h2><p class="lead">Mira cómo una consulta se convierte en una oportunidad organizada para tu equipo.</p><div class="demo-window"><div class="demo-bar"><strong>Inmexa · Panel comercial</strong><span class="demo-status">● Demo guiada</span></div><div class="demo-flow"><div class="flow-step"><b>1</b><h3>Entra una consulta</h3><p>Un cliente pregunta por una propiedad.</p></div><div class="flow-step"><b>2</b><h3>Inmexa la clasifica</h3><p><span class="priority">Alta prioridad</span> · Compra · Apartamento</p></div><div class="flow-step"><b>3</b><h3>El asesor recibe la ficha</h3><p>Datos claros y próximo seguimiento.</p></div></div></div><a class="button" href="'+demoUrl+'" target="_blank" rel="noopener">Probar demo gratis</a>';anchor.parentNode.insertBefore(section,anchor)}}
document.querySelector('#vista-previa')?.remove();

const capture=document.querySelector('#captacion');
if(capture&&!capture.querySelector('.capture-illustration')){
  const heading=capture.querySelector('h2');
  const intro=capture.querySelector('.muted');
  if(intro) intro.textContent='Completa tus datos y pasa directamente al demo, sin Messenger ni registros.';
  const visual=document.createElement('div');
  visual.className='capture-illustration';
  visual.setAttribute('aria-label','Del formulario al demo de Inmexa');
  visual.innerHTML='<div class="illustration-screen"><span>✓</span><b>Solicitud recibida</b><small>Procesando datos</small></div><div class="illustration-arrow">→</div><div class="illustration-screen accent"><span>▶</span><b>Demo Inmexa</b><small>Listo para probar</small></div>';
  const wrap=document.createElement('div');
  wrap.className='capture-heading';
  const copy=document.createElement('div');
  copy.append(...[capture.querySelector('.eyebrow'),heading,intro]);
  wrap.append(copy,visual);
  capture.insertBefore(wrap,capture.querySelector('form'));
}

const visualStyles=document.createElement('style');
visualStyles.textContent='.capture-heading{display:flex;align-items:center;justify-content:space-between;gap:36px;margin-bottom:25px}.capture-illustration{display:flex;align-items:center;gap:12px;flex-shrink:0}.illustration-screen{width:150px;min-height:108px;padding:15px;border:1px solid var(--line);border-radius:12px;background:#fff;box-shadow:0 8px 0 #e4ebe4;display:flex;flex-direction:column;justify-content:center;gap:5px}.illustration-screen span{font-size:1.4rem;color:var(--accent);font-weight:800}.illustration-screen b{font-size:.84rem}.illustration-screen small{color:var(--muted);font-size:.7rem}.illustration-screen.accent{background:#dfece2;border-color:#c7d9ca}.illustration-arrow{font-size:1.6rem;color:var(--accent);font-weight:800}@media(max-width:760px){.capture-heading{display:block}.capture-illustration{margin-top:25px;justify-content:center}.illustration-screen{width:135px}}';
document.head.appendChild(visualStyles);

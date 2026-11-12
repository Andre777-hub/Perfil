const root=document.documentElement;
try{const t=localStorage.getItem('tema');if(t)root.dataset.theme=t;else if(matchMedia('(prefers-color-scheme: dark)').matches)root.dataset.theme='dark'}catch(e){}
const themeBtn=document.getElementById('tema');
const syncIcon=()=>{if(themeBtn)themeBtn.textContent=root.dataset.theme==='dark'?'☀️':'🌙'};
syncIcon();
themeBtn&&themeBtn.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('tema',root.dataset.theme)}catch(e){}syncIcon()});
const burger=document.getElementById('burger'),links=document.getElementById('links');
burger&&burger.addEventListener('click',()=>{const o=links.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
/* digitação */
const el=document.getElementById('digitando');
if(el){const frases=['estudante de Desenvolvimento de Sistemas','futuro engenheiro de software','apaixonado por lógica e código'];let f=0,c=0,del=false;
(function tick(){const txt=frases[f];el.textContent=txt.slice(0,c);
if(!del&&c===txt.length){del=true;return setTimeout(tick,1600)}
if(del&&c===0){del=false;f=(f+1)%frases.length}
c+=del?-1:1;setTimeout(tick,del?25:60)})()}
/* revelar ao rolar */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
/* mostrar senha */
document.querySelectorAll('.eye').forEach(b=>b.addEventListener('click',()=>{const i=b.previousElementSibling;const s=i.type==='password';i.type=s?'text':'password';b.textContent=s?'🙈':'👁️'}));
/* aviso visual (sem funcionalidade real) */
const toast=document.getElementById('toast');
document.querySelectorAll('form[data-msg]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();toast.textContent=f.dataset.msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3200)}));

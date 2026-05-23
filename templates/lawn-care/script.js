document.querySelectorAll('[data-year]').forEach(function(el){el.textContent=new Date().getFullYear();});
const form=document.querySelector('[data-demo-form]');
const note=document.querySelector('[data-form-note]');
if(form&&note){form.addEventListener('submit',function(e){e.preventDefault();note.textContent='Demo estimate request submitted.';form.reset();});}

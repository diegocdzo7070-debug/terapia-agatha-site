const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
menuToggle?.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",open);
});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const form=document.getElementById("contactForm");
form?.addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(form);
  const tipo=data.get("tipo")||"Online";
  const text=[
    "Olá, Lilian! Gostaria de conhecer seu atendimento.",
    "",
    `Nome: ${data.get("nome")}`,
    `WhatsApp: ${data.get("whatsapp")}`,
    `E-mail: ${data.get("email")||"Não informado"}`,
    `Atendimento: ${tipo}`,
    `O que desejo trabalhar: ${data.get("mensagem")||"Ainda não sei explicar exatamente."}`
  ].join("\n");
  window.open("https://wa.me/message/UJREQB4AQ4E2M1","_blank","noopener");
  navigator.clipboard?.writeText(text).catch(()=>{});
});

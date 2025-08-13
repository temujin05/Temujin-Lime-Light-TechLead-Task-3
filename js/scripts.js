// Small interactive scripts
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
      // collapse navbar on mobile
      const nav = document.querySelector('.navbar-collapse');
      if(nav && nav.classList.contains('show')){ new bootstrap.Collapse(nav).hide(); }
    });
  });

  // Contact form — front-end only
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks! This form is front-end only. Replace with your backend or Formspree/Netlify forms.');
      form.reset();
    });
  }
});
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
      const nav = document.querySelector('.navbar-collapse');
      if(nav && nav.classList.contains('show')){ new bootstrap.Collapse(nav).hide(); }
    });
  });
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks!');
      form.reset();
    });
  }
});

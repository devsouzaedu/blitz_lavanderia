document.addEventListener("DOMContentLoaded", function() {
    // Adiciona a classe 'show' após 2 segundos
    setTimeout(function() {
        document.querySelector('.mashmelo').classList.add('show');
    }, 2000);
});

const button2 = document.querySelector('.button2');
const planSection = document.querySelector('.plan-section');

button2.addEventListener('click', function(event) {
  event.preventDefault();
  planSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
 

const button1 = document.querySelector('.button1');

button1.addEventListener('click', function(event) {
  window.open('https://wa.me/5511989531411', '_blank');
});

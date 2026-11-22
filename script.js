const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

window.addEventListener('scroll', function () {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

burger.addEventListener('click', function () {
  menu.classList.toggle('open');
});

const menuLinks = menu.querySelectorAll('a');
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function () {
    menu.classList.remove('open');
  });
}

const observer = new IntersectionObserver(function (entries) {
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add('show');
      observer.unobserve(entries[i].target);
    }
  }
}, { threshold: 0.15 });

const items = document.querySelectorAll('.reveal');
for (let i = 0; i < items.length; i++) {
  observer.observe(items[i]);
}

document.getElementById('year').textContent = new Date().getFullYear();

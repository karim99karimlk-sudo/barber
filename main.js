const lines = document.querySelectorAll(".line-d");

  let speed = 0.4;

  lines.forEach((line, index) => {
    let x = 0;
    const direction = index % 2 === 0 ? -1 : 1;

    // Duplicate content for seamless loop
    line.innerHTML += line.innerHTML;
    const lineWidth = line.scrollWidth / 2;

    function animate() {
      x += speed * direction;

      if (Math.abs(x) >= lineWidth) {
        x = 0;
      }

      line.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animate);
    }

    animate();

    // Pause on hover
    line.addEventListener("mouseenter", () => speed = 0);
    line.addEventListener("mouseleave", () => speed = 0.4);
  });

const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

/* SCROLL EFFECT */
window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    header.classList.add("scrolled");
    header.classList.remove("transparent");
  } else {
    header.classList.add("transparent");
    header.classList.remove("scrolled");
  }
});

/* MOBILE MENU */
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});



    // Scroll Text Animation
  const line1 = document.querySelector(".line-1");
  const line2 = document.querySelector(".line-2");

  let lastScrollY = window.scrollY;
  let pos = 0;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;

    const speed = delta * 0.3; // adjust smoothness

    pos += speed;

    // line 1 → left on scroll down
    line1.style.transform = `translateX(${-pos}px)`;

    // line 2 → right on scroll down (opposite)
    line2.style.transform = `translateX(${pos}px)`;

    lastScrollY = currentScrollY;
  });






  let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}


  
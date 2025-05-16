const open = document.querySelector('.padre_container');
const close = document.querySelector('.padre_close');
var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
open.addEventListener('click', () => {
  if (tl.reversed()) {
    tl.play();
  } else {
    tl.to('nav', { right: 0 })
      .to('nav', { height: '100vh' }, '-=.1')
      .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
      .to('.padre_close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
      .to('nav h2', { opacity: 1 }, '-=1');
  }
});

close.addEventListener('click', () => {
  tl.reverse();
});
console.log("Script cargado")

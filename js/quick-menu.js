var sticky = document.querySelector('.sticky');
var page = document.querySelector('.page-body');
var header = document.querySelector('.state-header');
var padding = document.querySelector('.interview-section');
var els = document.querySelectorAll('.quick-menu')
var menu = document.querySelector('.quick-menu');
var origOffsetY = sticky.offsetTop;


function onScroll(e) {
  for (var i = 0; i < els.length; i++) {
  if (window.scrollY >= origOffsetY-50) {
    sticky.classList.replace('sticky','fixed');
    els[i].classList.replace('quick-menu','vertical');
  }
  else 
  {
    sticky.classList.replace('fixed','sticky');
    els[i].classList.replace('vertical','quick-menu');

  }
  }
  if (window.scrollY >= origOffsetY-50) {
    page.classList.replace('page-body','page-body-rep');
    padding.classList.add('padding');
 
  }
  else 
  {
    page.classList.replace('page-body-rep','page-body');
    padding.classList.remove('padding');        
  }                      
}
document.addEventListener('scroll', onScroll);
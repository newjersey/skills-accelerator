var sticky = document.querySelector('.sticky');
     var sticky_6 = document.querySelector('.sticky-6');
     var els_6 = document.querySelectorAll('.quick-menu-6');
     var padding = document.querySelector('.interview-section');
     var origOffsetY_6 = sticky.offsetTop;
     const mq = window.matchMedia("screen and (min-width: 320px) and (max-width: 600px)");

     function onScroll(e) {
       if(mq.matches){
      for (var i = 0; i < els_6.length; i++) {
      if (window.scrollY >= (origOffsetY_6)-50) {
        sticky_6.classList.replace('sticky-6','fixed-6');
        sticky.classList.replace('show','hide');
        els_6[i].classList.replace('quick-menu-6','vertical-6');
      }
      else 
      {
        sticky_6.classList.replace('fixed-6','sticky-6');
        sticky.classList.replace('hide','show');
        els_6[i].classList.replace('vertical-6','quick-menu-6');

      }
      }
     
      if (window.scrollY >= (origOffsetY_6)-50) {
        sticky_6.classList.replace('hide','show');
        padding.classList.remove('padding');
        header.classList.replace('hide','show');
      }
      else 
      {
        sticky_6.classList.replace('show','hide');
        padding.classList.remove('padding');
        header.classList.replace('hide','show');
      }  
    }
     }     
  document.addEventListener('scroll', onScroll);   
import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider';

document.addEventListener("DOMContentLoaded",function(){
  const slider = tns({
    container: '.project-slider',
    loop: true,
    items: 1,
    nav: false,    
    autoplay: true,
    speed: 1000,
    autoplayButtonOutput: false,
    controlsContainer: '#customize-controls',
  });
});
import $ from 'jquery';
import whatInput from 'what-input';
import {TweenMax} from 'gsap';

//components
import btnAnimation from './components/btnAnimation'

window.$ = $;

import Foundation from 'foundation-sites';

// button animatio for main nav 'PORTFOLIO Button'
btnAnimation();
// overlay navigation
var overlayNav = document.querySelector('.overlay-nav');
var portfolioBtn = document.querySelector('.portfolio-btn');
var closeMenu = document.querySelector('#close-menu');

portfolioBtn.addEventListener('click', () => {
  TweenMax.to(overlayNav, 1, {
    y: 0,
    ease: Power3.easeOut,
  })
})

closeMenu.addEventListener('click', () => {
  TweenMax.to(overlayNav, 1, {
    y: '-100%',
    ease: Power3.easeOut,
  })
})


$(document).foundation();

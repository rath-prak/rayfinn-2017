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

tl = new TimelineMax({ paused:true, reversed:true })
tl.to(overlayNav, 1, { x: '100%', ease: Power2.easeOut })
// tl.add(TweenMax.to(box2, 1, {x: 400, opacity: 1, delay: 2}));

portfolioBtn.addEventListener('click', () => {
  tl.reversed() ? tl.restart() : tl.reverse();
})

closeMenu.addEventListener('click', () => {
  tl.reversed() ? tl.restart() : tl.reverse();
})


$(document).foundation();

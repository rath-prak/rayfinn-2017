import $ from 'jquery';
import whatInput from 'what-input';
import {TweenMax} from 'gsap';
import waypoints from 'waypoints/lib/noframework.waypoints.min';


import menuBtnAnimation from './components/menuBtnAnimation'
import overlayNav from './components/overlayNav'
import scrollToTop from './components/scrollToTop'

window.$ = $;

import Foundation from 'foundation-sites';

//Navigation animation
menuBtnAnimation();
overlayNav();
scrollToTop();

TweenMax.set('.item-fade', {y: 100, opacity: 0})

const animateTest = () => {
  TweenMax.staggerTo('.item-fade', 0.5, { y:0, opacity: 1 }, 0.2);
}

let wayTest = document.querySelector('#waypoint-test');

const waypoint = new Waypoint({
  element: wayTest,
  handler: function() {
    animateTest();
  }, offset: '50%'
})




$(document).foundation();

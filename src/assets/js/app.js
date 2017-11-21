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

//Footer - scroll to top button
scrollToTop();


let wayTest = document.querySelector('#waypoint-test');

TweenMax.set(wayTest, {
  y: -50,
  opacity: 0,
})


const waypoint = new Waypoint({
  element: wayTest,
  handler: function() {
    TweenMax.to(wayTest, 1, {
      y: 0,
      opacity: 1,
    })
  }, offset: '50%'
})




$(document).foundation();

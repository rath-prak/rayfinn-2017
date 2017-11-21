import $ from 'jquery';
import whatInput from 'what-input';
import {TweenMax} from 'gsap';
import waypoints from 'waypoints/lib/noframework.waypoints.min';

//navigation
import menuBtnAnimation from './components/menuBtnAnimation'
import overlayNav from './components/overlayNav'

window.$ = $;

import Foundation from 'foundation-sites';

//Navigation animation
menuBtnAnimation();
overlayNav();

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

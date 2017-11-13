import $ from 'jquery';
import whatInput from 'what-input';
import {TweenMax} from "gsap";

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

var logo = document.getElementsByClassName('logo');
TweenMax.to(logo, 1, {x:500});


$(document).foundation();

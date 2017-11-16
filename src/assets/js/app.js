import $ from 'jquery';
import whatInput from 'what-input';
import {TweenMax} from 'gsap';

//navigation
import btnAnimation from './components/btnAnimation'
import overlayNav from './components/overlayNav'

window.$ = $;

import Foundation from 'foundation-sites';

// button animatio for main nav 'PORTFOLIO Button'
btnAnimation();
overlayNav();
// overlay navigation



$(document).foundation();

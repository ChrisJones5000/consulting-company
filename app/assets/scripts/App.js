import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.welcome__buttons'), 'slide-left', '80%');
new RevealOnScroll($('.welcome__blurb, .inline-blurb'), 'reveal-item', '80%');
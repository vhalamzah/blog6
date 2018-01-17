
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Slug = require('slug');

window.Vue = require('vue');

Slug.defaults.mode = 'rfc3986';
import Buefy from 'buefy';
 Vue.use(Buefy);


Vue.component('slug-widget', require('./components/slugWidget.vue'));


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/**Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});**/
/*var app= new Vue({
	el: '#app',
	data: {}
});*/
require('./manage');
$(document).ready(function() {
  //  Dropdowns
  $('.dropdown').hover(function(e) {
    $(this).toggleClass('is-open')
  })
})






// var app = new Vue({
//   el: '#app',
//   data: {}
// });



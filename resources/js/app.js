/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import $ from 'jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

import navbarComponent from "./components/NavbarComponent.vue";
import sponsorComponent from "./components/SponsorComponent";

const app = new Vue({
    el: "#app",
    components: {
        navbarComponent,
        sponsorComponent,
    },
});

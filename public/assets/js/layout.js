'use strict';

const $ = require('jquery');
//window.jQuery = $;
global.$ = $;
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('../css/main.css');

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});


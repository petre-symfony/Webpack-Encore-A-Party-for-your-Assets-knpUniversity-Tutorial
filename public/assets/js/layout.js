'use strict';

const $ = require('jquery');
//window.jQuery = $;
global.$ = $;
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('../css/main.css');

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});


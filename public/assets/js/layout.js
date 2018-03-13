'use strict';

const $ = require('jquery');
//window.jQuery = $;
global.$ = $;
require('bootstrap');

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});


import $ from "jquery";
$(function() {
  var str = window.location;
  var results = new RegExp("[?&]embed=([^&#]*)").exec(window.location.hash);
  let var1 = document.getElementsByClassName("filter-bar");
  var embed = results !== null ? results[1] || 0 : false;
  if (embed) {
    document.querySelector("head").innerHTML += '<style>.filter-bar{display:none;}.kibanaWelcomeLogo{background-image: url("logo_claro.png"} </style>';
  }
});

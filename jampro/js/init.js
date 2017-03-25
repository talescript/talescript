$(document).ready(function () {

  $('.button-collapse').sideNav({
    closeOnClick: true
  });

  $('.carousel').carousel({
    indicators: true,
  });

}); // end of document ready


window.onload = function initMap() {
  var uluru = { lat: 8.988971, lng: -79.5243938 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
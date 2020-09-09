//test if data is null to stop roaming using the link
if (localStorage.getItem("name-data") === null || localStorage.getItem("email-data") === null
|| localStorage.getItem("from-data") === null || localStorage.getItem("to-data") === null)
{
  window.location = window.location = ".";
}

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat:47.1567,lng:27.6127}
  });
  directionsDisplay.setMap(map);

  //name, email, origin, destination
  var client_name = window.localStorage.getItem('name-data');
  var client_email = window.localStorage.getItem('email-data');
  var from = window.localStorage.getItem('from-data');
  var to = window.localStorage.getItem('to-data');

  calculateAndDisplayRoute(directionsService, directionsDisplay, from, to);

  //distance and duration as text
  var dist = window.sessionStorage.getItem('distance-data');
  var time = window.sessionStorage.getItem('duration-data');

  //show details
  document.getElementById('details').innerHTML = "<span><b>Your Name:</b></span><br> <span>"+ client_name + "</span><br>"
  + "<span><b>Your Email:</b></span><br> <span>"+ client_email + "</span><br>"
  + "<span><b>Location from:</b></span><br> <span>"+ from+ "</span><br>"
  + "<span><b>Location to:</b></span><br> <span>" + to + "</span><br>"
  + "<span><b>Distance:</b></span><br> <span>" + dist + "</span><br>"
  + "<span><b>Duration:</b></span><br> <span>" + time + "</span><hr>";
}

//the function that shows the route on the map
function calculateAndDisplayRoute(directionsService, directionsDisplay, from, to) {
  directionsService.route({
    origin: from,
    destination: to,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
      var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
      if (!directionsData) {
        window.alert('Directions request failed');
        return;
      }
    } else {
      window.alert('Directions request failed due to ' + status);
      alert("Can't drive there");
    }
  });
}

function booker(name, coef) {
  //distance and duration as text
  var dist = window.sessionStorage.getItem('distance-data');
  var time = window.sessionStorage.getItem('duration-data');

  //distance and duration in meters and seconds
  var distM = window.sessionStorage.getItem('distance-value-data');
  var timeS = window.sessionStorage.getItem('duration-value-data');

  var client = window.localStorage.getItem('name-data');

  var start = window.localStorage.getItem('from-data');
  var stop = window.localStorage.getItem('to-data');

  document.getElementById('car-name').innerHTML = "" + name;
  document.getElementById('client').innerHTML = "<b>Thank you for your order: </b>" + client + "<hr>";
  document.getElementById('info').innerHTML = "<b>Start point: </b>" + start + "<br><b>Destination: </b>" + stop + "<br><b>Distance: </b>" + dist + "<br><b>Duration: </b>" + time + "<hr>";
  document.getElementById('price').innerHTML = "<b>The price is: </b>" + dec2(parseInt(coef) + parseInt(distM) / 1000 * 3, 2) + "&#8364";
}

function dec2(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

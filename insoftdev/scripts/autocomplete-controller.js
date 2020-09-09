google.maps.event.addDomListener(window, 'load', initialize);

var locFrom = 0;
var locTo = 0;
var errStr = "";

function initialize() {
  var autocomplete1 = new google.maps.places.Autocomplete(document.getElementById('txtautocomplete1'));
  google.maps.event.addListener(autocomplete1, 'place_changed', function(){
    var place = autocomplete1.getPlace();

    var from = place.name + ', ' + place.address_components[0].long_name + ', ' + place.address_components[1].long_name
    + ', ' + place.address_components[2].long_name;
    var setFrom = window.localStorage.setItem('from-data', from);
    locFrom = 1;
  });
  var autocomplete2 = new google.maps.places.Autocomplete(document.getElementById('txtautocomplete2'));
  google.maps.event.addListener(autocomplete2, 'place_changed', function(){
    var place = autocomplete2.getPlace();

    var to = place.name + ', ' + place.address_components[0].long_name + ', ' + place.address_components[1].long_name
    + ', ' + place.address_components[2].long_name;
    var setTo = window.localStorage.setItem('to-data', to);
    locTo = 1;
  });
};

function reg() {
  var cn = document.getElementsByTagName("input")[0].value;
  var ce = document.getElementsByTagName("input")[1].value;
  var frominput = document.getElementsByTagName("input")[2].value;
  var toinput = document.getElementsByTagName("input")[3].value;

  //check if name input empty
  if (cn == "")
  {
    if (localStorage.getItem("name-data") === null) {
      errStr += "Input your name please \n";
    }
  }
  else
  {
    var setClientName = window.localStorage.setItem('name-data', cn);
  }

  //check if email input empty
  if (ce == "")
  {
    if (localStorage.getItem("email-data") === null)
    {
      errStr += "Input your email please \n";
    }
  }
  else
  {
    if(validateEmail(ce))
    {
      var setClientEmail = window.localStorage.setItem('email-data', ce);
    }
    else
    {
      errStr += "Input a valid email please \n";
    }
  }

  //check if from input empty
  if (frominput == "")
  {
    if (localStorage.getItem("from-data") === null) {
      errStr += "Input your starting location please \n";
    }
  }
  else
  {
    if (!locFrom)
    {
      errStr += "Pick a SPECIFIC starting location please \n";
    }
  }

  //check if to input empty
  if (toinput == "")
  {
    if (localStorage.getItem("to-data") === null) {
      errStr += "Input your destination please \n";
    }
  }
  else
  {
    if (!locTo)
    {
      errStr += "Pick a SPECIFIC destination please \n";
    }
  }

  if (errStr != "")
  {
    alert(errStr);
    errStr = "";
  }
  else
  {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var from = window.localStorage.getItem('from-data');
    var to = window.localStorage.getItem('to-data');
    calculateAndDisplayRoute(directionsService, directionsDisplay, from, to);
  }
}

function deleteLS() {
  localStorage.removeItem("name-data");
  localStorage.removeItem("email-data");
  localStorage.removeItem("from-data");
  localStorage.removeItem("to-data");
}

// function getLng(str) {
//   stringy = str.split(', ')[1];
//     return stringy.split(')')[0];
// }
//
// function getLat(str) {
//   stringy = str.split('(')[1];
//     return stringy.split(',')[0];
// }

function calculateAndDisplayRoute(directionsService, directionsDisplay, from, to) {
  directionsService.route({
    origin: from,
    destination: to,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
      var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
      window.sessionStorage.setItem('distance-data', directionsData.distance.text);
      window.sessionStorage.setItem('duration-data', directionsData.duration.text);
      window.sessionStorage.setItem('distance-value-data', directionsData.distance.value);
      window.sessionStorage.setItem('duration-value-data', directionsData.duration.value);
      window.location = "route.php";
    } else {
      window.alert('Directions request failed due to ' + status);
      alert("Can't drive there");
    }
  });
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Oober | Route</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="stylesheets/route.css">
  </head>
  <body>

    <div class="row">
      <div class="col-md-6 text-center" id="navbar">
        <h1>INSOFTDEV</h1>
      </div>
      <div class="col-md-6 text-center" id="navbar">
        <h1>RADU T.</h1>
      </div>
      <div class="col-xs-3 text-center">
        <div class="card" style="width: 20rem;">
          <div id="map"></div>
          <div class="card-body">
            <h4 class="card-title">Details</h4>
            <div id="details"></div>
            <br>
            <b><p class="card-text">Something wrong? Press this button:</p></b>
            <a href="." class="btn btn-primary">Go back</a>
          </div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="card">
          <img class="card-img-top" src="resources/car1.png" alt="Car image">
          <div class="card-body">
            <h4 class="card-title">Comfort</h4>
            <p class="card-text">Compact 4-Door Saloon</p>
            <p class="card-text">Price: 3&#8364;/km + 10&#8364;</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mymodal" onclick="booker('Comfort','10')">
              BOOK
            </button>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <img class="card-img-top" src="resources/car2.png" alt="Car image">
          <div class="card-body">
            <h4 class="card-title">Executive</h4>
            <p class="card-text">Long Executive 4-Door</p>
            <p class="card-text">Price: 3&#8364;/km + 20&#8364;</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mymodal" onclick="booker('Executive','20')">
              BOOK
            </button>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <img class="card-img-top" src="resources/car3.png" alt="Car image">
          <div class="card-body">
            <h4 class="card-title">Luxury</h4>
            <p class="card-text">Big Luxurious Saloon</p>
            <p class="card-text">Price: 3&#8364;/km + 30&#8364;</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mymodal" onclick="booker('Luxury','30')">
              BOOK
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL FINAL -->
    <div class="modal fade" id="mymodal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 id="car-name"></h3>
          </div>
          <div class="modal-body">
            <p id="client"></p>
            <p id="info"></p>
            <p id="price"></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

    <script src="scripts/route-controller.js"></script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=KEY&callback=initMap">
    </script>
  </body>
</html>

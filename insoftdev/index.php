<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Oober | Start</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="stylesheets/index.css">
</head>
<body>

<div class="row">
  <div class="col-md-6 text-center" id="navbar">
    <h1>INSOFTDEV</h1>
  </div>
  <div class="col-md-6 text-center" id="navbar">
    <h1>RADU T.</h1>
  </div>
  <div class="col-md">
    <form>
      <div class="form-group">
        <input class="form-control" type="text" id="client-name" placeholder="Your Name">
        <input class="form-control" type="email" id="client-email" placeholder="Your Email">
        <input class="form-control" type="text" id="txtautocomplete1" placeholder="Address from">
        <input class="form-control" type="text" id="txtautocomplete2" placeholder="Address to">
      </div>
      <button type="button" class="btn btn-primary" onclick="reg()">Submit</button>

      <!-- DELETES SAVED VALUES -->
      <!-- <button type="button" class="btn btn-primary" onclick="deleteLS()">Delete</button> -->
    </form>
  </div>
</div>

<script src="https://maps.googleapis.com/maps/api/js?key=KEY&libraries=places"></script>
<script src="scripts/autocomplete-controller.js"></script>

</body>
</html>

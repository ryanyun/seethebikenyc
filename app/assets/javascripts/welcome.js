function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 40.7411, lng: -73.9897}
  });
  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
  });
  heatmap.setMap(map);
}

function getPoints() {
  var arr = [];
  gon.coords.forEach(function(c){
    arr.push(new google.maps.LatLng(c[0], c[1]));
  })
  return arr;
}
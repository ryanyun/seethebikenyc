function initMap() {
  var styling = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#c4ccd6"},{"visibility":"on"}]}]
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 40.7411, lng: -73.9897},
    styles: styling
  });
  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints()
  });
  heatmap.setMap(map);
  heatmap.set('radius', heatmap.get('radius') ? null : 25);
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function getPoints() {
  var arr = [];
  gon.coords.forEach(function(c){
    arr.push(new google.maps.LatLng(c[0], c[1]));
  })
  return arr;
}
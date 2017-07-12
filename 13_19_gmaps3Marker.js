var infowindow = new google.maps.InfoWindow({
  content: 'Hier ein bischen Text'
});
var marker = new google.maps.Marker({ 
  position: new google.maps.LatLng(54, 12), 
  map: map 
});
marker.addListener('click', function() {
  infowindow.open(map, marker);
});
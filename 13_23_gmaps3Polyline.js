var points = [ 
  new google.maps.LatLng(37.7671, -122.4206), 
  new google.maps.LatLng(36.1131, -115.1763), 
  new google.maps.LatLng(34.0485, -118.2568), 
]; 
var polyline = new google.maps.Polyline({ 
  path: points, 
  strokeColor: '#ff0000', 
  strokeWeight: 5       
  strokeOpacity: 0.7, 
  map: map 
});
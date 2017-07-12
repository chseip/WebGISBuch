var points = [ 
  new GLatLng(37.7671, -122.4206), 
  new GLatLng(36.1131, -115.1763), 
  new GLatLng(34.0485, -118.2568) 
]; 
var polyline = new GPolyline(points, '#ff0000', 5, 0.7); 
map.addOverlay(polyline);
var point = new GLatLng(54.21,12.11);
var marker = new GMarker(point);
var text = 'Hier ein bischen Text';
marker.openInfoWindow(text);
map.addOverlay(marker);
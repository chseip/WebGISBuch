var southwest = new GLatLng(11,54);
var northeast = new GLatLng(12,55);
var mapBounds = new GLatLngBounds(southwest,northeast);
map.setCenter(mapBounds.getCenter(),map.getBoundsZoomLevel (mapBounds));
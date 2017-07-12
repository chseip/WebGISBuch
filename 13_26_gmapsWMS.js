var myLayer = new GTileLayer(new GCopyrightCollection(''));
myLayer.getTileUrl = function(tile,zoom) {
  var tileURL="http://www.server.de/gmap/servmylayer.php?x=" + tile.x + "&y=" + tile.y + "&zoom=" + zoom;
  return tileURL;
}
myLayer.isPng = function() {
  return true; // servmylayer.php liefert PNGs
}
myLayer.getOpacity() {
  return 0; // Wert zwischen 0 und 1
}
map.addOverlay(new GTileLayerOverlay(myLayer));
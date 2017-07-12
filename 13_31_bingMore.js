map.setView({center: new Microsoft.Maps.Location(47.6, -122.33), zoom: 10});
var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
map.entities.push(pushpin);
var polyline = new Microsoft.Maps.Polyline(
  [
    new Microsoft.Maps.Location(37.788327,-122.408447),
    new Microsoft.Maps.Location(37.788531,-122.406837),
    new Microsoft.Maps.Location(37.787607,-122.406676),
    new Microsoft.Maps.Location(37.787412,-122.408264),
    new Microsoft.Maps.Location(37.788327,-122.408447)
  ], null);
map.entities.push(polyline);
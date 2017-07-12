var adresse='Wismarsche Strasse 3, 18057 Rostock';
var geocoder = new GClientGeocoder();
geocoder.getLatLng(adresse,
 function(response) {
  if (!response) {
   map.setCenter(response,14);
  }
 });
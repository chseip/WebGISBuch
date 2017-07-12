var adresse='Wismarsche Strasse 3, 18057 Rostock';
var geocoder = new google.maps.Geocoder();
geocoder.geocode( { 'address': adresse},
  function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
	  map.setCenter(results[0].geometry.location);
    }
  });
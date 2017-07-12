var marker = new google.maps.Marker({
  position: new google.maps.LatLng(54, 12),
  map: map,
  icon: 'icon.png',
  shadow: 'shadow.png'
  shape: {
	type: 'poly',
	coord: [4,4, 29,4, 29,29, 22,29, 17,35, 16,35, 10,29, 4,29, 4,4]
  }
});
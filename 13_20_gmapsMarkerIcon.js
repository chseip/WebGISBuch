var myIcon = new GIcon(G_DEFAULT_ICON, 'icon.png');
myIcon.imageMap = [4,4, 29,4, 29,29, 22,29, 17,35, 16,35, 10,29, 4,29, 4,4]
var marker = new GMarker(new GLatLng(54, 12), { 
  icon: myIcon 
}); 
map.addOverlay(marker);
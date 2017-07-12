var polylineCoords = [{lat: 53.2077124150171, lng: 12.8645215992423},
{lat: 53.2078845351841, lng: 12.8653033867688},
{lat: 53.207937943871, lng: 12.8656881199587},
{lat: 53.2082327362106, lng: 12.865699291358}];
var polyline = new google.maps.Polyline({
  path: polylineCoords,
  geodesic: true,
  strokeColor: '#663300',
  strokeOpacity: 1.0,
  strokeWeight: 4
});
polyline.setMap(map);
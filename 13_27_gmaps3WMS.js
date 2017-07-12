var osmMapType = new google.maps.ImageMapType({
  getTileUrl: function (coord, zoom) {
    return "http://tile.openstreetmap.org/" +
  zoom + "/" + coord.x + "/" + coord.y + ".png";
  },
  tileSize: new google.maps.Size(256, 256),
  isPng: true,
  name: "OSM",
  maxZoom: 19
});
map.mapTypes.set('OSM', osmMapType);
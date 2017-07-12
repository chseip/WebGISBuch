function doMouseMove(event) {
  canvas_x = event.pageX;
  canvas_y = event.pageY;
  
  var point = {x: canvas_x, y: canvas_y};
  testWest = inside([ canvas_x, canvas_y ], polyWest);
  if (testWest) {
    drawPoly(polyWest);
  }
}

function drawPoly(poly) {
  var context = document.getElementById("canvas").getContext("2d");

  context.beginPath();
  context.moveTo(poly[0][0], poly[0][1]);
  for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    context.lineTo( poly[i][0] , poly[i][1] )
  }
  context.closePath();
  
  //context.fill(); -- sonst wuerde das Polygon mit einer Farbe gefuellt werden
  context.lineWidth = 7;
  context.strokeStyle = 'black';
  context.stroke();
}
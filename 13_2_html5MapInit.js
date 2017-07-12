function initialize() {
  var canvas = document.getElementById("canvas");
  canvas.addEventListener("mousedown", doMouseDown, false);
  canvas.addEventListener('mousemove', doMouseMove, false);
  
  var context = canvas.getContext('2d');
  var imageObj = new Image();
  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0);
  };
  imageObj.src = 'img/mv.gif';
}
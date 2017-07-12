<script>
  function drawDiagonal() {
    var canvas = document.getElementById('diagonal');
    var context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(70, 140);
    context.lineTo(140, 70);
    context.stroke();
  }
  window.addEventListener("load", drawDiagonal, true);
</script> 
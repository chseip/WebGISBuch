<?php
 ob_end_clean();
 $dateiname=basename("/var/data/maps/world/worldmap.png");
 $dateinamensteil=explode('.',$dateiname);
 header("Content-Type: image/".$dateinamensteil[1]);
 header("Content-Disposition: attachment; filename=".$dateiname);
 readfile($dateiname);
?>
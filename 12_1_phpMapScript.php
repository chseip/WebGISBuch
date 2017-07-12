<?php
 ld(phpmapscript.so);
 $mapObj1 = ms_newMapObj("defaultmapfile.map");
 $mapObj2 = ms_newMapObj("");
 $mapObj2->set("name", "Meine Karte");
 $mapObj2->web->set("imagepath", "/www/htdocs/tmp/");
?>
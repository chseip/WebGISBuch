<?php
  include (PDFCLASSPATH."class.ezpdf.php");
  $pdf=new Cezpdf();
  $pdf->selectFont('fonts/Courier.afm');
  $fontSize=12; $col=25; $row=750;
  $pdf->addText($col,$row,$fontSize,"Bearbeiter: Korduan");
  $pdf->addText($col,$row-=12,$fontSize,"Datum: 16.07.2007");
  $pdf->newPage();
  $pdf->addJpegFromFile("map.jpg",75,140,450);
  $dateiname = time().'.pdf';
  $fp=fopen($dateiname,'wb');
  fwrite($fp,$pdf->ezOutput());
  fclose($fp);
?>
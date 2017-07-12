#!/bin/bash
ogr2ogr -f "GML" seen.gml data/seen.shp seen
echo "Content-type: text/xml; charset=iso-8859-1\n\n"
more seen.gml
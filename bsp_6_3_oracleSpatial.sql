SELECT p1.attribut
FROM polygon p1, polygon p2
WHERE p2.name = 'AAA' and sdo_relate (p1.geom, p2.geom, 'mask=INSIDE+COVEREDBY querytype=WINDOW') = 'TRUE'; 
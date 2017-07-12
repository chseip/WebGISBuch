>>> p1 = Proj(proj='latlong',datum='WGS84')
>>> x1 = -111.5; y1 = 45.25919444444
>>> p2 = Proj(proj="utm",zone=10,datum='NAD27')
>>> x2, y2 = transform(p1, p2, x1, y1)
>>> "%s  %s" % (str(x2)[:9],str(y2)[:9])
'1402285.9  5076292.4'
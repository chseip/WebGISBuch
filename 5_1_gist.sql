CREATE INDEX [indexname] ON [tablename]
 USING GIST ([geometrycolumn]);
VACUUM ANALYZE;
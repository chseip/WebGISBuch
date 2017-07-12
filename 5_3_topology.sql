SELECT topology.CreateTopology('ALK',2398,0.001);

SELECT * FROM topology.ValidateTopology(name);

SELECT topology.AddTopoGeometryColumn(topology_name, schema_name, table_name, column_name,feature_type, [child_layer])

SELECT topology.CreateTopoGeom(topology_name, feature_type, layer_id, TopoElementArray);

SELECT topology.Geometry(TopoGeometry);
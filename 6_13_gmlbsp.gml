<?xml version="1.0" encoding="ISO-8859-1"?>
<xsd:schema xmlns:winter="http://www.gdi-service.de/XML/winterdienst" xmlns:xsd="http://www.w3.org/2001" xmlns:gmlsf="http://www.opengis.net/gmlsf" elementFormDefault="qualified" version="1.0.0">
  <xsd:import namespace="http://www.opengis.net/gml" schemaLocation="http://schemas.opengis.net/gml/3.1.1"/>
  <xsd:import namespace="http://www.opengis.net/gmlsf" schemaLocation="http://schemas.opengis.net/gml/3.1.1"/>
  <xsd:annotation>
    <xsd:appinfo source="http://schemas.opengis.net/gml/3.1.1/.../ gmlsfLevels.xsd">
      <gmlsf:ComplianceLevel>0</gmlsf:ComplianceLevel>
      <gmlsf:GMLProfileSchema>http://schemas.opengis.net/gml/3.1.1/.../gmlsf.xsd</gmlsf:GMLProfileSchema>
    </xsd:appinfo>
  </xsd:annotation>
  <xsd:element name="MesspunktCollection" type="MesspunktCollectionType" substitutiongroup="gml:_GML"/>
  <xsd:complexType name="MesspunktCollectionType">
    <xsd:complexContent>
      <xsd:extension base="gml:AbstractFeatureType">
        <xsd:sequence minOccurs="0" maxOccurs="unbounded">
          <xsd:element name="Messpunkt"/>
        </xsd:sequence>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>
  <xsd:element name="Messpunkt" type="MesspunktType" substitutiongroup="gml:_Feature"/>
  <xsd:complexType name="MesspunktType">
    <xsd:complexContent>
      <xsd:extension base="gml:AbstractFeatureType">
        <xsd:sequence>
          <xsd:element name="fahrzeug_id" type="xsd:integer"/>
          <xsd:element name="zeitpunkt" type="xsd:dateTime"/>
          <xsd:element name="location" type="gml:PointPropertyType"/>
        </xsd:sequence>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>
</xsd:schema>
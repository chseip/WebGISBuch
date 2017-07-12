//Verbindung herstellen, treiberabhaengig (1.)
Connection con = DriverManager.getConnection("jdbc:odbc:springer",  "kay", "schulz"); 

//Erzeugen eines SQL-Statements 
Statement stmt = con.createStatement{); 

//SQL-Statement ausfuehren und Ergebnisse erhalten (2.)
ResultSet rs = stmt.executeQuery("SELECT  a, b, c FROM Table");

//Ergebnisse verarbeiten (3.)
while (rs.next()) { 
	int x = getInt("a"); 
	String s  = getString("b"); 
	float f = getFloat("c");
}
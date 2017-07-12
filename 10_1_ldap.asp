LDAProot = "LDAP://ladpserver.de/dc=ladpserver,dc=de"
 suche = New DirectorySearcher()
 suche.SearchRoot = New DirectoryEntry(LDAProot, Form.UserName & "@ladpserver.de", Form.Password, AuthenticationTypes.Secure)
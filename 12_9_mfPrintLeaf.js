var printProvider = L.print.provider({
   method: "GET",
   url: "http://path/to/mapfish/print",
   autoLoad: true,
   dpi: 90
});

var printControl = L.control.print({
   provider: printProvider
});        
map.addControl(printControl);
navigator.geolocation.getCurrentPosition(
  function(position){ //Erfolgreich
    lat = position.coords.latitude;
    lat = position.coords.longitude;
    alt = position.coords.altitude;
    acc = position.coords.accuracy;
  },
  function(){   //Fehler
  infotxt ='Die Position konnte nicht ermittelt werden'; },
  {  //Parameter
    timeout: 0,
    enableHighAccuracy: true,
    maximumAge: 60000
   }
)
var map = L.map('map').setView([10.14637899130411, -85.45436412011597], 13);

var bingMap = L.tileLayer.mbfiles('Data/Costa-Rica-Nicoya.mbtiles').addTo(map);
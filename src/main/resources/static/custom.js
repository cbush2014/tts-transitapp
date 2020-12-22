var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: parseFloat(busLocations[0].LATITUDE), lng: parseFloat(busLocations[0].LONGITUDE) },
        zoom: 15,
        scrollwheel: false
    });
    const image = {
    		url: "https://maps.google.com/mapfiles/kml/shapes/bus_maps.png", //url
    		scaledSize: new google.maps.Size(32,32), //scaled size
    		origin: new google.maps.Point(0,0), //origin
    		anchor: new google.maps.Point(0,32), //anchor
    	};    
    const contentString = "Im a pop-up";
    
    const infowindow = new google.maps.InfoWindow({
        content: contentString
      });

    for (i=0; i<busLocations.length; i++){
        var marker = new google.maps.Marker({
            position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
            map: map,
            icon: image,
        });
    }
    const marker2 = new google.maps.Marker({
        position: { lat: parseFloat(busLocations[0].LATITUDE), lng: parseFloat(busLocations[0].LONGITUDE) },
        map,
        title: "Uluru (Ayers Rock)",
      });
    
    marker2.addListener("click", () => {
        infowindow.open(map, marker2);
      });    
}
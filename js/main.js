function createMap(elemId, centerLat, centerLng, zoom) {
    var map = new L.Map(elemId);
 
    // Data provider
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
 
    // Layer
    var osmLayer = new L.TileLayer(osmUrl, {
        minZoom: 4,
        maxZoom: 20,
        attribution: osmAttrib
    });
 
    // Map
    map.setView(new L.LatLng(centerLat, centerLng), zoom);
    map.addLayer(osmLayer);
    return map;
}
	
document.addEventListener("DOMContentLoaded", function () {
    // The DOMContentLoaded event fires when the page is ready (like $(document).ready() in jQuery)
    var map = createMap('mapid', 8.9529, -79.4353, 6);
    // map is the id of our div element and the other options are
    // lattitude, longitude and zoom
});

// scroll detection
ScrollOut({
    /* options */
});
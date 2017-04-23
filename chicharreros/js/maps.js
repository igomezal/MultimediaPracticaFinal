/* ==========  START GOOGLE MAP ========== */

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    map1();
    map2();
}

function map1() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

	    var myLatLng = new google.maps.LatLng(28.4665787, -16.2517346);

	    var mapOptions = {
	        zoom: 14,
	        center: myLatLng,
	        disableDefaultUI: false,
	        scrollwheel: true,
	        navigationControl: true,
	        mapTypeControl: true,
	        scaleControl: false,
	        draggable: true,

    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map1');

    if(mapElement != null){

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(28.4667801, -16.2492815),
            map: map
        });
    }
}

function map2() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

	    var myLatLng = new google.maps.LatLng(28.4171376, -16.5512713);

	    var mapOptions = {
	        zoom: 14,
	        center: myLatLng,
	        disableDefaultUI: false,
	        scrollwheel: true,
	        navigationControl: true,
	        mapTypeControl: true,
	        scaleControl: false,
	        draggable: true,

    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map2');

    if(mapElement != null){

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(28.4171376, -16.5512713),
            map: map
        });
    }
}

// ========== END GOOGLE MAP ========== //

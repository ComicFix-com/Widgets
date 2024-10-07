(function() {
    /**
     * Initialize the map widget with user-defined options.
     * @param {Object} options - Custom options for the map (center, zoom).
     */
    window.MapWidget = function(options) {
        // Set default options if not provided
        const defaultOptions = {
            selector: '#map',
            zoom: 10,
            center: { lat: 37.7749, lng: -122.4194 } // Default: San Francisco
        };

        // Merge user options with default options
        const mapOptions = { ...defaultOptions, ...options };

        // Find the map container element
        const mapElement = document.querySelector(mapOptions.selector);
        if (!mapElement) {
            console.error('Map container not found');
            return;
        }

        // Initialize Google Map
        const map = new google.maps.Map(mapElement, {
            center: mapOptions.center,
            zoom: mapOptions.zoom
        });

        // Add a marker at the center location
        new google.maps.Marker({
            position: mapOptions.center,
            map: map
        });
    };
})();

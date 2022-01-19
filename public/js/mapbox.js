/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiaGl0ZW5qYWluMTQiLCJhIjoiY2t5aXE1NngzMWh3YTJ4czhkcnlsMDUyMiJ9.Fk8haX6ULlFASg360zEioA';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/hitenjain14/ckyiqqdbm4eu915pcvrigx3gq',
    scrollZoom: false,
    // center: [-74.5, 40], // starting position [lng, lat]
    // zoom: 9, // starting zoom
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    const popup = new mapboxgl.Popup({
      offset: 30,
    }).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`);
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .setPopup(popup)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
      closeButton: false,
      closeOnClick: true,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};

import { tileLayer, Map } from 'leaflet';

const myMap = new Map('map').setView([51.505, -0.09], 8);

tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 15
}).addTo(myMap);

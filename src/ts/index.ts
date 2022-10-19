import { tileLayer, Map } from 'leaflet';

const myMap = new Map('map').setView([51.505, -0.09], 8);

const mapUrl: string = `https://api.mapbox.com/styles/v1/illiantech/cl9fp0gvz001r14p7jtq6t6vl/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxsaWFudGVjaCIsImEiOiJjbDlmcDZyYjE1NnY1M29teDN2eTh3dnF5In0.NhrvXnduOvE5mMbKFF07UA`;

// const mapUrl: string = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;

tileLayer(mapUrl, {
	maxZoom: 15
}).addTo(myMap);

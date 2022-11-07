import { tileLayer, Map } from 'leaflet';

const myMap = new Map('map').setView([9.006826, -66.481284], 8);

const mapUrl: string = `https://api.mapbox.com/styles/v1/illiantech/cl9hdcu23002314qsr5vfo2dg/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxsaWFudGVjaCIsImEiOiJjbDlmcDZyYjE1NnY1M29teDN2eTh3dnF5In0.NhrvXnduOvE5mMbKFF07UA`;

tileLayer(mapUrl, {
	maxZoom: 15
}).addTo(myMap);

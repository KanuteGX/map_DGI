import { MapContainer, TileLayer } from "react-leaflet";
import { Chip } from "../chip/chip.components";

const mapUrl: string = `https://api.mapbox.com/styles/v1/illiantech/cl9hdcu23002314qsr5vfo2dg/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxsaWFudGVjaCIsImEiOiJjbDlmcDZyYjE1NnY1M29teDN2eTh3dnF5In0.NhrvXnduOvE5mMbKFF07UA`;

export function GobMap() {
  return <div style={{ width: '100vw', height: '100vh' }}>
    <MapContainer
      style={{ width: "100%", height: "100vh" }}
      center={[9.006826, -66.481284]}
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        url={mapUrl}
      />
      {chipData.map(e => (<Chip icon={e.icon}>
        <p>{e.children}</p>
      </Chip>))}
    </MapContainer>
  </div>
}

const chipData = [
  { icon: 'x', children: 'Hospital' },
  { icon: 'x', children: 'Troncales' },
  { icon: 'x', children: 'Estaciones Policiales' }
]
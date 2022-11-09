import { useState } from "react";
import { TileLayer } from "react-leaflet"

export const MapSelector = () => {

  const maps: string[] = [
    `https://api.mapbox.com/styles/v1/illiantech/cl9hdcu23002314qsr5vfo2dg/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxsaWFudGVjaCIsImEiOiJjbDlmcDZyYjE1NnY1M29teDN2eTh3dnF5In0.NhrvXnduOvE5mMbKFF07UA`,
    'https://mt2.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
  ];

  const [tileMap, setTileMap] = useState(0)
  const [openTiles, showTiles] = useState(false)

  const changeTile = (n: number) => {
    setTileMap(n)
    showTiles(false)
  }

  return <>
    {tileMap === 0 && <TileLayer url={maps[0]} />}
    {tileMap === 1 && <TileLayer url={maps[1]} />}
    <div style={{
      display: 'flex', gap: '1ch', flexDirection: 'row', position: 'absolute',
      left: '10px',
      bottom: '10px',
      zIndex: 1000,
    }}>
      <MapBaseTileItem onClick={() => showTiles(!openTiles)} n={-1} />
      {openTiles && maps.map((m, i) => <MapBaseTileItem n={i} onClick={() => changeTile(i)} key={i} />)}
    </div>
  </>
}

const MapBaseTileItem = ({ onClick, n }: { onClick: (mapNumber: number) => void, n: number }) => {
  return <div
    onClick={() => onClick(n)}
    style={{
      cursor: 'pointer',
      height: '10ch',
      background: '#fff',
      padding: '10px 20px',
      borderRadius: '4px'
    }}>x</div>
}
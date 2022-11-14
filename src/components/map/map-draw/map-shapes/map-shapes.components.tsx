import { LatLng } from "leaflet";
import React, { ReactElement, useState } from "react";
import { Circle, useMap, useMapEvents } from "react-leaflet";
import { ShapeType } from "../../../../domain/models/shape.model";
import { MapShapesToolbar } from "../toolbar/map-shapes-toolbar";

export function MapPolygons() {

  const [shape, setShape] = useState<ShapeType>('Line')
  const [shapeList, setShapeList] = useState<ReactElement[]>([])
  const [initPoint, setInitPoint] = useState({ x: 0, y: 0 })
  const [initLatLng, setinitLatLng] = useState<LatLng>(new LatLng(0, 0))
  const [currentRadius, setCurrentRadius] = useState(0)
  const [editingShape, setEditingShape] = useState<ReactElement | undefined>()
  const map = useMap()
  useMapEvents({
    click: (e) => {
      setInitPoint(e.layerPoint)
      setinitLatLng(e.latlng)
      const currentShape = buildShape(shape, e.latlng)
      setEditingShape(currentShape)
      if (editingShape) {
        setShapeList([...shapeList, editingShape])
        setEditingShape(undefined)
      }
      //setShapeList([...shapeList, currentShape])
    },
    mousemove: (e) => {
      const { x, y } = e.layerPoint
      const dx = x - initPoint.x
      const dy = y - initPoint.y
      const result = Math.sqrt((dx ** 2) + (dy ** 2))
      console.log(result.toFixed(2))
      editingShape && setEditingShape(React.cloneElement(editingShape, {
        radius: (result * (map.getZoom() * 100)),
        center: initLatLng
      }))
    }
  })

  return <>
    {editingShape}
    {shapeList}
    <MapShapesToolbar onChange={setShape} selectedShape={shape} />
  </>
}

function buildShape(shape: ShapeType, startPoint: LatLng) {
  switch (shape) {
    case 'Circle':
      return <Circle center={startPoint} radius={0} />
    default:
      return <Circle center={startPoint} radius={0} />
  }
}
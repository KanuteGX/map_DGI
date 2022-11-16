import { LatLng, LatLngTuple } from "leaflet";
import React, { ReactElement, useState } from "react";
import { Circle, Polygon, Polyline, Rectangle, useMap, useMapEvents } from "react-leaflet";
import { ShapeType } from "../../../../domain/models/shape.model";
import { useAppSelector } from "../../../../redux/redux-hooks";
import CircleShapeTool from "../toolbar/circle-shape-tool";
import LineShapeTool from "../toolbar/line-shape-tool";
import { MapShapesToolbar } from "../toolbar/map-shapes-toolbar";
import PolygonShapeTool from "../toolbar/polygon-shape-tool";
import RectangleShapeTool from "../toolbar/rectangle-shape-tool";

export function MapShapes() {
  const [currentTool, setCurrentTool] = useState<ReactElement | undefined>(<PolygonShapeTool />)
  const shapesList = useAppSelector((state) => state.shapesList.list);
  const blackOptions = { color: 'black' }
  return <>
    {currentTool}
    {shapesList}
    <MapShapesToolbar /* onChange={setShape} selectedShape={shape} */ />
  </>
}

export function shapeFactory(shape: ShapeType, startPoint: LatLng ) {
  switch (shape) {
    case 'Rectangle':
      return <Rectangle dashArray={"7"} bounds={startPoint.toBounds(0)} pathOptions={{ color: 'black' }} />
    case 'Circle':
      return <Circle dashArray={"7"} center={startPoint} radius={0} />
    case 'Line':
      return <Polyline dashArray={"7"} positions={[]} />
    case 'Polygon':
      return <Polygon dashArray={"7"} positions={[]} />
    default:
      return <Circle dashArray={"7"} center={startPoint} radius={0} />
  }
}
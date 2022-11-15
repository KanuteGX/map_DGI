import { LatLng } from "leaflet";
import React, { ReactElement, useState } from "react";
import { Circle, Polyline, useMap, useMapEvents } from "react-leaflet";
import { ShapeType } from "../../../../domain/models/shape.model";
import { useAppSelector } from "../../../../redux/redux-hooks";
import CircleShapeTool from "../toolbar/circle-shape-tool";
import LineShapeTool from "../toolbar/line-shape-tool";
import { MapShapesToolbar } from "../toolbar/map-shapes-toolbar";

export function MapShapes() {
  const [currentTool, setCurrentTool] = useState<ReactElement | undefined>(<CircleShapeTool />)
  const shapesList = useAppSelector((state) => state.shapesList.list);

  return <>
    {currentTool}
    {shapesList}
    <MapShapesToolbar /* onChange={setShape} selectedShape={shape} */ />
  </>
}

export function buildShape(shape: ShapeType, startPoint: LatLng) {
  switch (shape) {
    case 'Circle':
      return <Circle dashArray={"7"} center={startPoint} radius={0} />

    case 'Line':
      return <Polyline dashArray={"7"} positions={[]} />
    default:
      return <Circle dashArray={"7"} center={startPoint} radius={0} />
  }
}
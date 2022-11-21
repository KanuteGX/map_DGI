import { LatLng } from "leaflet";
import { ReactElement, useState } from "react";
import { Circle, Polygon, Polyline, Rectangle } from "react-leaflet";
import { ShapeType } from "../../../../domain/models/shape.model";
import { useAppSelector } from "../../../../redux/redux-hooks";
import { MapShapesToolbar } from "../toolbar/map-shapes-toolbar";

export function MapShapes() {
  const [currentTool, setCurrentTool] = useState<ReactElement | undefined>(undefined)
  const shapesList = useAppSelector((state) => state.shapesList.list);
  return <>
    {currentTool}
    {shapesList}
    <MapShapesToolbar onChange={(tool: ReactElement) => setCurrentTool(tool)} />
  </>
}

export function shapeFactory(shape: ShapeType, startPoint: LatLng) {
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
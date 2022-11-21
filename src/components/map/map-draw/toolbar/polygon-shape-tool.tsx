import { LatLng } from 'leaflet';
import { useState, ReactElement, cloneElement } from 'react'
import { Circle, useMap, useMapEvent, useMapEvents } from "react-leaflet";
import { ShapeType } from '../../../../domain/models/shape.model';
import { useAppSelector, useAppDispatch } from '../../../../redux/redux-hooks'
import { setEditingShape } from '../../../../redux/slice/editing-shape-slice';
import { updateShapesList } from '../../../../redux/slice/shapes-list';
import { shapeFactory } from '../map-shapes/map-shapes.components';

export default function PolygonShapeTool() {

    const editingShape = useAppSelector((state) => state.editingShape.editingShape)
    const dispatch = useAppDispatch()
    const [polygonPoints, setPolygonPoints] = useState<LatLng[]>([])
    const map = useMap()

    useMapEvents({
        click: (e) => {
            if (editingShape) {
                setPolygonPoints([...polygonPoints, e.latlng])
                dispatch(setEditingShape(cloneElement(editingShape, {
                    key: new Date().getUTCMilliseconds(), 
                    positions: [...polygonPoints, e.latlng]
                })))
            } else {
                setPolygonPoints([...polygonPoints, e.latlng])
                const currentShape = shapeFactory("Polygon", e.latlng)
                dispatch(setEditingShape(currentShape))

            }
        },
        mousemove: (e) => {
            if (editingShape) {
                dispatch(setEditingShape(cloneElement(editingShape, {
                    key: new Date().getUTCMilliseconds(), 
                    positions: [...polygonPoints, e.latlng]
                })))
            }
        },
        keyup: (e) => {
            if (editingShape && e.originalEvent.keyCode === 13) {
                dispatch(updateShapesList(cloneElement(editingShape, {
                    key: new Date().getUTCMilliseconds(), 
                    positions: [...polygonPoints]
                })))
                dispatch(setEditingShape(undefined))
                setPolygonPoints([])
            } else if (e.originalEvent.keyCode === 27) {
                dispatch(setEditingShape(undefined))
                setPolygonPoints([])
            }
        },

        dblclick: (e) => {
            if (editingShape) {
                dispatch(updateShapesList(editingShape))
                dispatch(setEditingShape(cloneElement(editingShape, {
                    key: new Date().getUTCMilliseconds(), 
                    positions: [...polygonPoints, e.latlng]
                })))
                setPolygonPoints([])
            }
        },
    })



    return <>
        {editingShape}
    </>
}
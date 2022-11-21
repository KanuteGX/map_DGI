import { LatLng } from 'leaflet';
import { useState, ReactElement, cloneElement } from 'react'
import { Circle, useMap, useMapEvent, useMapEvents } from "react-leaflet";
import { ShapeType } from '../../../../domain/models/shape.model';
import { useAppSelector, useAppDispatch } from '../../../../redux/redux-hooks'
import { setEditingShape } from '../../../../redux/slice/editing-shape-slice';
import { updateShapesList } from '../../../../redux/slice/shapes-list';
import { shapeFactory } from '../map-shapes/map-shapes.components';

export default function RectangleShapeTool() {

    const editingShape = useAppSelector((state) => state.editingShape.editingShape)
    const dispatch = useAppDispatch()
    const [rectanglePoints, setRectanglePoints] = useState<LatLng[]>([])

    const map = useMap()

    useMapEvents({
        click: (e) => {
            if (editingShape) {
                dispatch(updateShapesList(cloneElement(editingShape, {
                    key: new Date().getUTCMilliseconds(), 
                    bounds: [...rectanglePoints, e.latlng]
                })))
                dispatch(setEditingShape(undefined))
                setRectanglePoints([])
            } else {
                setRectanglePoints([...rectanglePoints, e.latlng])
                const currentShape = shapeFactory("Rectangle", e.latlng)
                dispatch(setEditingShape(currentShape))

            }
        },
        mousemove: (e) => {
            if (editingShape) {
                dispatch(setEditingShape(cloneElement(editingShape, {
                    key: new Date().getUTCMilliseconds(), 
                    bounds: [...rectanglePoints, e.latlng]
                })))
            }
        },
        keyup: (e) => {
            if (editingShape && e.originalEvent.keyCode === 13) {
                dispatch(updateShapesList(editingShape))
                dispatch(setEditingShape(undefined))
                setRectanglePoints([])
            } else if (e.originalEvent.keyCode === 27) {
                dispatch(setEditingShape(undefined))
                setRectanglePoints([])
            }
        },

        dblclick: (e) => {
            if (editingShape) {
                dispatch(updateShapesList(editingShape))
                dispatch(setEditingShape(cloneElement(editingShape, {
                    key: new Date().getUTCMilliseconds(), 
                    bounds: [...rectanglePoints, e.latlng]
                })))
                setRectanglePoints([])
            }
        },
    })



    return <>
        {editingShape}
    </>
}
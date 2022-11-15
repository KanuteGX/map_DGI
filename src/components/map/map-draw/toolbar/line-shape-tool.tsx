import { LatLng } from 'leaflet';
import { useState, ReactElement, cloneElement } from 'react'
import { Circle, useMap, useMapEvent, useMapEvents } from "react-leaflet";
import { ShapeType } from '../../../../domain/models/shape.model';
import { useAppSelector, useAppDispatch } from '../../../../redux/redux-hooks'
import { setEditingShape } from '../../../../redux/slice/editing-shape-slice';
import { updateShapesList } from '../../../../redux/slice/shapes-list';
import { buildShape } from '../map-shapes/map-shapes.components';

export default function LineShapeTool() {

    const editingShape = useAppSelector((state) => state.editingShape.editingShape)
    const dispatch = useAppDispatch()
    const [linePoints, setLinePoints] = useState<LatLng[]>([])
    const map = useMap()

    useMapEvents({
        click: (e) => {
            if (editingShape) {
                setLinePoints([...linePoints, e.latlng])
                dispatch(setEditingShape(cloneElement(editingShape, {
                    positions: [...linePoints, e.latlng]
                })))
            } else {
                setLinePoints([...linePoints, e.latlng])
                const currentShape = buildShape("Line", e.latlng)
                dispatch(setEditingShape(currentShape))

            }
        },
        mousemove: (e) => {
            if (editingShape) {
                dispatch(setEditingShape(cloneElement(editingShape, {
                    positions: [...linePoints, e.latlng]
                })))
            }
        },
        keyup: (e) => {
            if (editingShape && e.originalEvent.keyCode === 13) {
                dispatch(updateShapesList(editingShape))
                dispatch(setEditingShape(undefined))
                setLinePoints([])
            } else if (e.originalEvent.keyCode === 27) {
                dispatch(setEditingShape(undefined))
                setLinePoints([])
            }
        },

        dblclick: (e) => {
            if (editingShape) {
                dispatch(updateShapesList(editingShape))
                dispatch(setEditingShape(cloneElement(editingShape, {
                    positions: [...linePoints, e.latlng]
                })))
                setLinePoints([])
            }
        },
    })



    return <>
        {editingShape}
    </>
}
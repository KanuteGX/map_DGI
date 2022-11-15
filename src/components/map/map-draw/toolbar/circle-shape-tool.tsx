import { LatLng } from 'leaflet';
import { useState, ReactElement, cloneElement } from 'react'
import { Circle, useMap, useMapEvent, useMapEvents } from "react-leaflet";
import { ShapeType } from '../../../../domain/models/shape.model';
import { useAppSelector, useAppDispatch } from '../../../../redux/redux-hooks'
import { setEditingShape } from '../../../../redux/slice/editing-shape-slice';
import { updateShapesList } from '../../../../redux/slice/shapes-list';
import { buildShape } from '../map-shapes/map-shapes.components';

export default function CircleShapeTool() {

    const editingShape = useAppSelector((state) => state.editingShape.editingShape);
    const dispatch = useAppDispatch();
    const [initLatLng, setinitLatLng] = useState<LatLng>(new LatLng(0, 0))
    const map = useMap()

    useMapEvents({
        click: (e) => {
            setinitLatLng(e.latlng)
            const currentShape = buildShape("Circle", e.latlng)
            dispatch(setEditingShape(currentShape))
            if (editingShape) {
                dispatch(updateShapesList(editingShape))
                dispatch(setEditingShape(undefined))
            }
        },
        mousemove: (e) => {
            editingShape && dispatch(setEditingShape(cloneElement(editingShape, {
                radius: initLatLng.distanceTo(e.latlng),
                center: initLatLng
            })))
        },
    })



    return <>
        {editingShape}
    </>
}
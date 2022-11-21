import { LatLng } from 'leaflet';
import { useState, cloneElement } from 'react'
import { useMap, useMapEvents } from "react-leaflet";
import { useAppSelector, useAppDispatch } from '../../../../redux/redux-hooks'
import { setEditingShape } from '../../../../redux/slice/editing-shape-slice';
import { updateShapesList } from '../../../../redux/slice/shapes-list';
import { shapeFactory } from '../map-shapes/map-shapes.components';

export default function CircleShapeTool() {

    const editingShape = useAppSelector((state) => state.editingShape.editingShape);
    const dispatch = useAppDispatch();
    const [initLatLng, setinitLatLng] = useState<LatLng>(new LatLng(0, 0))
    const map = useMap()

    useMapEvents({
        click: (e) => {
            setinitLatLng(e.latlng)
            const currentShape = shapeFactory("Circle", e.latlng)
            dispatch(setEditingShape(currentShape))
            if (editingShape) {
                dispatch(updateShapesList(editingShape))
                dispatch(setEditingShape(undefined))
            }
        },
        mousemove: (e) => {
            editingShape && dispatch(setEditingShape(cloneElement(editingShape, {
                key: new Date().getUTCMilliseconds(), 
                radius: initLatLng.distanceTo(e.latlng),
                center: initLatLng
            })))
        }, keyup: (e) => {
            if (editingShape && e.originalEvent.keyCode === 13) {
                dispatch(updateShapesList(editingShape))
                dispatch(setEditingShape(undefined))
            } else if (e.originalEvent.keyCode === 27) {
                dispatch(setEditingShape(undefined))
            }
        },
    })



    return <>
        {editingShape}
    </>
}
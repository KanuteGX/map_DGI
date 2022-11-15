import { LatLng } from 'leaflet';
import { useState, ReactElement, cloneElement } from 'react'
import { Circle, useMap, useMapEvents } from "react-leaflet";
import { ShapeType } from '../../../../domain/models/shape.model';
import { useAppSelector, useAppDispatch } from '../../../../redux/redux-hooks'
import { setEditingShape } from '../../../../redux/slice/editing-shape-slice';
import { updateShapesList } from '../../../../redux/slice/shapes-list';

export default function CircleShapeTool() {

    const editingShape = useAppSelector((state) => state.editingShape.editingShape);
    const dispatch = useAppDispatch();

    const [initPoint, setInitPoint] = useState({ x: 0, y: 0 })
    const [initLatLng, setinitLatLng] = useState<LatLng>(new LatLng(0, 0))
    const [currentRadius, setCurrentRadius] = useState(0)
    const [shapeList, setShapeList] = useState<ReactElement[]>([])
    const [shape, setShape] = useState<ShapeType>('Line')
    const map = useMap()

    useMapEvents({
        click: (e) => {
            setInitPoint(e.layerPoint)
            setinitLatLng(e.latlng)
            console.log("firing this")
            const currentShape = buildShape(shape, e.latlng)
            dispatch(setEditingShape(currentShape))
            if (editingShape) {
                dispatch(updateShapesList(editingShape))
                dispatch(setEditingShape(undefined))
            }
            //setShapeList([...shapeList, currentShape])
        },
        mousemove: (e) => {
            const { x, y } = e.layerPoint
            const dx = x - initPoint.x
            const dy = y - initPoint.y
            const result = Math.sqrt((dx ** 2) + (dy ** 2))
            console.log(result.toFixed(2))
            editingShape && dispatch(setEditingShape(cloneElement(editingShape, {
                radius: (result * (map.getZoom() * 100)),
                center: initLatLng
            })))
        }
    })


    return <>
        {editingShape}
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
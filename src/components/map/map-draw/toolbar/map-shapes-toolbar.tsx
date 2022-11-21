import { ReactElement, useState } from 'react';
import { useMap } from 'react-leaflet';
import { ShapeType } from '../../../../domain/models/shape.model';
import { useAppSelector } from '../../../../redux/redux-hooks';
import CircleShapeTool from './circle-shape-tool';
import LineShapeTool from './line-shape-tool';
import PolygonShapeTool from './polygon-shape-tool';
import RectangleShapeTool from './rectangle-shape-tool';

export function MapShapesToolbar({ onChange }: mapShapesToolbarProps) {

    const editingShape = useAppSelector((state) => state.editingShape.editingShape)

	const [currentTool, setCurrentTool] = useState<ShapeType | undefined>()

	const mockData: { name: string; shape: ShapeType; icon: string, tool: ReactElement }[] = [
		{ name: 'Circulo', shape: 'Circle', icon: '/icon/shapes/circule-icon.png', tool: <CircleShapeTool /> },
		{ name: 'Linea', shape: 'Line', icon: '/icon/shapes/line-icon.png', tool: <LineShapeTool /> },
		{ name: 'Poligono', shape: 'Polygon', icon: '/icon/shapes/polygon-icon.png', tool: <PolygonShapeTool /> },
		{ name: 'Rectangulo', shape: 'Rectangle', icon: '/icon/shapes/rectangule-icon.png', tool: <RectangleShapeTool /> }
	];

	const map = useMap()
	return (
		<div className="wrapper-shapes"
			onMouseEnter={() => map.removeEventListener('click')}
		>
			<ul className="shape-list">
				{mockData.map((s) => {
					return (
						<li
							className={`shape-list--item ${currentTool === s.shape ? 'shape-list--item__active' : ''}`}
							onClick={(e) => {
								onChange(s.tool)
								setCurrentTool(s.shape)
							}}
							key={s.shape}>
							<img src={s.icon} alt={s.name} title={s.name} />
						</li>
					)
				})}
			</ul>
		</div>
	);
}

type mapShapesToolbarProps = {
	onChange: (tool: ReactElement) => void;
};

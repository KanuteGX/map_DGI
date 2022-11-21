import { ShapeType } from '../../../../domain/models/shape.model';

export function MapShapesToolbar(/* { selectedShape, onChange }: mapShapesToolbarProps */) {
	const mockData: { name: string; shape: ShapeType; icon: string }[] = [
		{ name: 'Circulo', shape: 'Circle', icon: '/icon/shapes/circule-icon.png' },
		{ name: 'Linea', shape: 'Line', icon: '/icon/shapes/line-icon.png' },
		{ name: 'Poligono', shape: 'Polygon', icon: '/icon/shapes/polygon-icon.png' },
		{ name: 'Rectangulo', shape: 'Rectangle', icon: '/icon/shapes/rectangule-icon.png' }
	];

	return (
		<div className="wrapper-shapes">
			<ul className="shape-list">
				{mockData.map((s) => (
					<li
						className="shape-list--item"
						onClick={() => {
							/* onChange(s.shape) */
						}}
						key={s.shape}>
						<img src={s.icon} alt={s.name} title={s.name} />
					</li>
				))}
			</ul>
		</div>
	);
}

type mapShapesToolbarProps = {
	selectedShape: ShapeType;
	onChange: (shape: ShapeType) => void;
};

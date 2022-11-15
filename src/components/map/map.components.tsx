import { MapContainer } from 'react-leaflet';
import { useAppSelector } from '../../redux/redux-hooks';
import { Categories } from '../categories_map/categories.map';
import { MapShapes } from './map-draw/map-shapes/map-shapes.components';
import { MapSelector } from './map-selector/map-selector.component';

export function GobMap() {

	const editingShape = useAppSelector((state) => state.editingShape.editingShape);

	console.log()

	return (
		<div style={{ width: '100vw', height: '100vh' }}
			className={!!editingShape ? "hide-cursor" : ""}
		>
			<MapContainer
				style={{ width: '100%', height: '100vh' }}
				center={[9.006826, -66.481284]}
				zoom={8}
				doubleClickZoom={false}
				scrollWheelZoom={true}
			>
				<MapShapes />
				<MapSelector />
			</MapContainer>
			<Categories />
		</div>
	);
}
